import React from "react";
import axios from 'axios';
// import cookie from 'react-cookies';
// import swal from 'sweetalert';
// import firebase from 'firebase';

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

function api(){
  axios.get('https://sia.unram.ac.id/index.php/api/Mahasiswa/Profil?nim=f1d016086'
  , 
  {
    params : {
      authorization: "Basic RjFEMDE2MDg2OjEyMzQ1Njc4"
      
    }
  }
  )
            .then(response => {
                this.setState({
                    company: response.data.company,
                    blog: response.data.blog,
                    avatar: response.data.avatar_url,
                    loading: false
                });
            }) 
            .catch(error => {
                console.log(error);
            });
}
api();



function Login(props) {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    // var email = data.get("email");
    var email;
    var password = data.get("password");

    // if (email === "user@gmail.com") {
    //   props.fakeAuth.authenticate(() => {
    //     history.replace("/user/seminar");
    //   });
    axios.post('https://sia.unram.ac.id/index.php/api/Mahasiswa/Profil?nim=' + this.state.email)
                        .then(function (response) {
                            if (response.data !== 'kosong') {
                                console.log(response.data);
                                props.fakeAuth.authenticate(() => {
                                  history.replace("/user/seminar");
                                });
                                // cookie.save('user_id', response.data.NIM, {
                                //     path: '/'
                                // })
                                // cookie.save('access', response.data.NIM, {
                                //     path: '/'
                                // })
                                // cookie.save('role', 1, {
                                //     path: '/'
                                // })
                                setTimeout(() => {
                                    // todosRef.set({
                                    //     //foto: response.data.foto,
                                    //     kode_prodi: response.data.kode_prodi,
                                    //     password: response.data.NIM,
                                    //     nama: response.data.nama,
                                    //    // tgl_lahir: response.data.tgl_lahir,
                                    //     jns_kelamin: response.data.jns_kelamin,
                                    //   //  email: response.data.email,
                                    //   //  no_hp: response.data.no_hp,
                                    //     //kode_agama: response.data.kode_agama,

                                    // });
                                }
                                , 0);
                                window.location = "/user/seminar";
                            } else {
                                this.setState({
                                    loading: false
                                })
                                // swal("Oops!", "Username atau Password salah!", "error");
                            }
                        })
                        .catch(function (error) {
                            this.setState({
                                loading: false,
                                nip: '',
                                password: ''
                            })
                            console.log(error);
                        });

    // } else if (email === "admin@gmail.com") {
    //   props.fakeAuth.authenticate(() => {
    //     history.replace("/admin/seminar");
    //   });
    // }
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
                        Active
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Contact Us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        About
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
                        type="text"
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
