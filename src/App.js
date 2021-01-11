import React from "react";
import Login from "./Login";
import LoginAdmin from "./LoginAdmin";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import AdminLayout from "layouts/Admin.jsx";
import UserLayout from "layouts/User.jsx";

const auth = {
  authenticateAdmin(successCb,failCb,username,password) {
    
    axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
      // Login...
      axios.post('http://localhost:8000/admin/login',{
        username,
        password
      })
      .then(res=>{
        localStorage.setItem("isAuthenticatedAdmin", true);
        successCb()
      })
      .catch(err=>{
        console.log(err)
        failCb()
      })
    })
  },
  authenticate(successCb,failCb,username,password) {
    axios.get('http://localhost:8000/sanctum/csrf-cookie')
    .then(response => {
      // Login...
      return axios.post('http://localhost:8000/login',{
        nim:username,
        password
      })
    })
    .then(res=>{
      localStorage.setItem("isAuthenticatedUser", true);
      localStorage.setItem("nama", res.data.name);
      localStorage.setItem("nim",res.data.nim);
      successCb()
    })
    .catch(err=>{
      failCb()
    })
  },
  signout(cb) {
    axios.post('http://localhost:8000/logout')
    .then(function (response) {
        // handle success
        console.log(response);
        localStorage.removeItem("isAuthenticatedUser");
        localStorage.removeItem("isAuthenticatedAdmin");
        cb()
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
  }
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  // return auth.isAuthenticated ? children : <Redirect to="/login" />;
  return localStorage.getItem("isAuthenticatedUser") ? children : <Redirect to="/login" />;
}

function PrivateRouteAdmin({ children, ...rest }) {
  // return auth.isAuthenticated ? children : <Redirect to="/login" />;
  return localStorage.getItem("isAuthenticatedAdmin") ? children : <Redirect to="/admin/login" />;
}

export default function App() {
  axios.defaults.withCredentials = true
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login auth={auth} />
        </Route>
        <Route path="/admin/login">
          <LoginAdmin auth={auth} />
        </Route>
        <PrivateRoute path="/user">
          <Route
            path="/user"
            key={window.location.href}
            render={props => <UserLayout {...props} key={window.location.href} auth={auth} />}
          />
        </PrivateRoute>
        <PrivateRouteAdmin path="/admin">
          <Route
            path="/admin"
            render={props => <AdminLayout key={window.location.href} {...props} auth={auth} />}
          />
        </PrivateRouteAdmin>
        <Redirect to="/login"></Redirect>
      </Switch>
    </Router>
  );
}

// export default App;
