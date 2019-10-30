import React from "react";
//import logo from './bg1.png';
// import logo from "./gambar1.png";
// import "./App.css";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
// import Dashboard from "./Dashboard";
import AdminLayout from "layouts/Admin.jsx";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login fakeAuth={fakeAuth} />
        </Route>
        <PrivateRoute>
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
        </PrivateRoute>
        {/* <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute> */}
        {/* <PrivateRoute path="/protected">
            <ProtectedPage />
          </PrivateRoute> */}
      </Switch>
    </Router>
  );
}

// export default App;
