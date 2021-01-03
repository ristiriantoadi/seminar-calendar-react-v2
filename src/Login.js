import React from "react";
import axios from "axios";
import cookie from "react-cookies";
import swal from "sweetalert";
import firebase from "firebase";

// import logo from "./gambar1.png";
import "./App.css";
import config from "config";

import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Header from "components/Navbars/DemoNavbar";

// function componentWillMount() {
//   axios.get("https://sia.unram.ac.id/index.php/api/Mahasiswa?NIM=F1D016038","Basic RjFEMDE2MDg2OjEyMzQ1Njc4")
//       .then(response => {
//           this.setState({
//               company: response.data.company,
//               blog: response.data.blog,
//               avatar: response.data.avatar_url,
//               loading: false
//           });
//       })
//       .catch(error => {
//           console.log(error);
//       });
// }
// componentWillMount();

// function componentDidMount(){
//   const urlFetch = fetch('https://sia.unram.ac.id/index.php/api/Mahasiswa?NIM=f1d016086',"Basic RjFEMDE2MDg2OjEyMzQ1Njc4")
//   urlFetch.then( res => {
//      if(res.status === 200)
//         return res.json()
//   }).then( resJson => {
//      this.setState({
//          data: resJson
//      })
//   })
// }
// componentDidMount();

// function api() {
//   axios
//     .get(
//       "https://sia.unram.ac.id/index.php/api/Mahasiswa/Profil?nim=f1d016086",
//       {
//         params: {
//           authorization: "Basic RjFEMDE2MDg2OjEyMzQ1Njc4"
//         }
//       }
//     )
//     .then(response => {
//       this.setState({
//         company: response.data.company,
//         blog: response.data.blog,
//         avatar: response.data.avatar_url,
//         loading: false
//       });
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }
// api();

function Login(props) {
  let history = useHistory();
  let location = useLocation();

  let login = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    var username = data.get("username");
    var password = data.get("password");

    // axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
    //   // Login...
    //   axios.post('http://localhost:8000/login',{
    //     email:username,
    //     password
    //   })
    //   .then(res=>{
    //     console.log(res)
    //   })
    //   .catch(err=>{
    //     console.log(err)
    //   })
    // });
    var successCb = ()=>{
      console.log("authenticated");
      history.replace("/user/seminar");
    }
    var failCb = ()=>{
      console.log("Username atau password salah")
      swal("Oops!", "Anda Tidak Terdafar!", "error");
    }

    props.fakeAuth.authenticate(successCb,failCb,username,password)
  }
  //   if (username === "admin" || username === "admin@gmail.com") {
  //     props.fakeAuth.authenticate(() => {
  //       history.replace("/admin/seminar");
  //     });
  //     return;
  //   } else if (username.slice(0, 3) === "F1D") {
  //     // axios
  //     //   .post(
  //     //     "https://sia.unram.ac.id/index.php/api/Mahasiswa/Profil?nim=" +
  //     //       username
  //     //   )
  //     //   .then(function(response) {
  //     //     console.log(response.data);
  //     //   });
  //     let app;
  //     if (!firebase.apps.length) {
  //       // firebase.initializeApp({});
  //       app = firebase.initializeApp(config);
  //     } else {
  //       app = firebase.apps[0];
  //     }
  //     app
  //       .database()
  //       .ref("mahasiswa/" + username)
  //       .once("value")
  //       .then(snapshot => {
  //         var nim = snapshot.val().nim;
  //         var nama = snapshot.val().nama;
  //         // props.setNim(nim);
  //         // props.setNama(nama);
  //         console.log(nim);
  //         console.log(nama);
  //         if(nim == password)
  //           props.fakeAuth.authenticate(() => {
  //             props.fakeAuth.nama = nama;
  //             props.fakeAuth.nim = nim;
  //             history.replace("user/seminar");
  //           });
  //         else{
  //           swal("Oops!", "Password salah!", "error");
                
  //         }
  //       });
  //   }else{
  //     props.fakeAuth.authenticate(() => {
  //       swal("Oops!", "Anda Tidak Terdafar!", "error");
  //     });return;
  //   }
  // };

  // let { from } = location.state || { from: { pathname: "/" } };
  // let login = event => {
  //   event.preventDefault();
  //   const data = new FormData(event.target);
  //   var email = data.get("email");
  //   var user_id;
  //   var password = data.get("password");

  //   // if (email === "user@gmail.com") {
  //   //   props.fakeAuth.authenticate(() => {
  //   //     history.replace("/user/seminar");
  //   //   });
  //   if (email === "admin@gmail.com") {
  //       props.fakeAuth.authenticate(() => {
  //         history.replace("/admin/seminar");
  //       });
  //       return;
  //   }
  //   else if (email.slice(0,3) !== 'F1D') {
      // props.fakeAuth.authenticate(() => {
      //   swal("Oops!", "Password salah!", "error");
      // });
  //     return;
  // }else{

  //   axios.post('https://sia.unram.ac.id/index.php/api/Mahasiswa/Profil?nim=' + email)

  //                       .then(function (response) {
  //                         console.log(response.data);
  //                         cookie.save('user_id', response.data.NIM, {
  //                         path: '/'
  //                         })

  //                           if (user_id !== null) {
  //                               console.log(response.data);
  //                               props.fakeAuth.authenticate(() => {
  //                                 history.replace("/user/seminar");
  //                               });

  //                               setTimeout(() => {

  //                               }
  //                               , 0);
  //                               // history.replace("/user/seminar");
  //                           } else {
  //                               // this.setState({
  //                               //     loading: false
  //                               // })
  //                               swal("Oops!", "Username atau Password salah!", "error");
  //                               history.replace("/login");
  //                           }
  //                       })
  //                       .catch(function (error) {
  //                           this.setState({
  //                               loading: false,
  //                               nip: '',
  //                               password: ''
  //                           })
  //                           console.log(error);
  //                       });

  //   // } else if (email === "admin@gmail.com") {
  //   //   props.fakeAuth.authenticate(() => {
  //   //     history.replace("/admin/seminar");
  //   //   });
  //   // }
  // }
  // };
  return (
    <div className="App">
      <div className="container" id="content-wrapper">
        <div className="row">
          <div className="col-md-12">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 p-md-3">
                  <ul className="nav justify-content-end">
                    <li className="nav-item">
                      {/* <a class="nav-link active" href="#">
                        Active
                      </a> */}
                    </li>
                    <li className="nav-item">
                      {/* <a class="nav-link" href="#">
                        Contact Us
                      </a> */}
                    </li>
                    <li className="nav-item">
                      {/* <a class="nav-link" href="#">
                        About
                      </a> */}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6" />
                <div className="col-md-6">
                  <h1 className="d-flex justify-content-center">
                    Seminar Calendar
                  </h1>
                  <p className="d-flex justify-content-center">
                    Welcome, please login to your account
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6" />
                <div className="col-md-6 pl-sm-6 pr-sm-6">
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
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        name="username"
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label" htmlFor="exampleCheck1">
                        Remember me
                      </label>
                    </div>
                    <button className="btn btn-primary">Sign in</button>
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
