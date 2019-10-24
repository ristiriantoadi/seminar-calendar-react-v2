import React from "react";
import logo from "./gambar1.png";
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

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    props.fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return (
    <table border="1px">
      <tr>
        <td class="logo-area">
          <img src={logo} className="App-logo" alt="logo" />
        </td>
        <td class="wrapper-area">
          <h1 class="title">Seminar Calendar</h1>
          <h4 class="title2">Welcome, please login to your account</h4>
          <div class="form">
            <input placeholder="form nama" />
            <input placeholder="form password" />
            <button onClick={login} class="button-login">
              login
            </button>
          </div>
        </td>
      </tr>
    </table>
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
