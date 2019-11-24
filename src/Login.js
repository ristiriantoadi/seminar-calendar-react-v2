import React from "react";
// import logo from "./gambar1.png";
import "./App.css";
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

function Login(props) {
  let history = useHistory();
  let location = useLocation();

  // let { from } = location.state || { from: { pathname: "/" } };
  let login = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    var email = data.get("email");
    var password = data.get("password");
    if (email === "user@gmail.com") {
      props.fakeAuth.authenticate(() => {
        history.replace("/user/seminar");
      });
    } else if (email === "admin@gmail.com") {
      props.fakeAuth.authenticate(() => {
        history.replace("/admin/seminar");
      });
    }
  };
  return (
    <div className="App">
      <div class="container" id="content-wrapper">
        <div class="row">
          <div class="col-md-12">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 p-md-3">
                  <ul class="nav justify-content-end">
                    <li class="nav-item">
                      <a class="nav-link active" href="#">
                  
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6" />
                <div class="col-md-6">
                  <h1 class="d-flex justify-content-center">
                    Seminar Calendar
                  </h1>
                  <p class="d-flex justify-content-center">
                    Welcome, please login to your account
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6" />
                <div class="col-md-6 pl-sm-6 pr-sm-6">
                  {/* <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        Remember me
                      </label>
                    </div>
                    <button onClick={login} class="btn btn-primary">
                      Sign in
                    </button>
                  </form> */}
                  <form onSubmit={login}>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        name="email"
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        name="password"
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        Remember me
                      </label>
                    </div>
                    <button class="btn btn-primary">Sign in</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// class Login extends React.Component {
//   constructor(props) {
//     super();
//     this.login = this.login.bind(this);
//     // let history = useHistory();
//     // let location = useLocation();

//     // let { from } = location.state || { from: { pathname: "/" } };
//   }

//   login() {
//     // console.log("click");
//     let history = useHistory();
//     let location = useLocation();

//     let { from } = location.state || { from: { pathname: "/" } };
//     this.props.fakeAuth.authenticate(() => {
//       history.replace(from);
//     });
//   }

//   render() {
//     return (
//       <table border="1px">
//         <tr>
//           <td class="logo-area">
//             <img src={logo} className="App-logo" alt="logo" />
//           </td>
//           <td class="wrapper-area">
//             <h1 class="title">Seminar Calendar</h1>
//             <h4 class="title2">Welcome, please login to your account</h4>
//             <div class="form">
//               <input placeholder="form nama" />
//               <input placeholder="form password" />
//               <button onClick={this.login} class="button-login">
//                 login
//               </button>
//             </div>
//           </td>
//         </tr>
//       </table>
//     );
//   }
// }

export default Login;
