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

const fakeAuth = {
  nama: "",
  nim: "",
  isAuthenticated: false,
  authenticateAdmin(successCb,failCb,username,password) {
    
    axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
      // Login...
      axios.post('http://localhost:8000/admin/login',{
        username,
        password
      })
      .then(res=>{
        console.log(res.status)
        this.isAuthenticated=true
        successCb()
      })
      .catch(err=>{
        console.log(err)
        failCb()
      })
    })
  },
  authenticate(successCb,failCb,username,password) {
    axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
      // Login...
      axios.post('http://localhost:8000/login',{
        nim:username,
        password
      })
      .then(res=>{
        console.log(res.data)
        this.nama = res.data.name
        this.nim = res.data.nim
        this.isAuthenticated=true
        successCb()
      })
      .catch(err=>{
        console.log(err)
        failCb()
      })
    });
  },
  signout(cb) {
    axios.post('http://localhost:8000/logout')
    .then(function (response) {
        // handle success
        console.log(response);
        fakeAuth.isAuthenticated = false;
        cb()
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    // fakeAuth.isAuthenticated = false;
    // setTimeout(cb, 100);
  }
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return fakeAuth.isAuthenticated ? children : <Redirect to="/login" />;
}

export default function App() {
  axios.defaults.withCredentials = true
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login fakeAuth={fakeAuth} />
        </Route>
        <Route path="/admin/login">
          <LoginAdmin fakeAuth={fakeAuth} />
        </Route>
        <PrivateRoute path="/user">
          <Route
            path="/user"
            render={props => <UserLayout {...props} fakeAuth={fakeAuth} />}
          />
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <Route
            path="/admin"
            render={props => <AdminLayout {...props} fakeAuth={fakeAuth} />}
          />
        </PrivateRoute>
        <Redirect to="/login"></Redirect>
      </Switch>
    </Router>
  );
}

// export default App;
