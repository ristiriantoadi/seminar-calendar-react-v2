
import React from 'react';
//import logo from './bg1.png';
import logo from './gambar1.png';
import './App.css';

function App() {
  return (
    /*
    <div className="App">
      <header className="App-header">
        <div class="content">
          <table border="1px">
            <tr>
              <td class="logo-area"><img src={logo} className="App-logo" alt="logo" /></td>
              <td class="wrapper-area">
                <h1 class="title">Seminar Calendar</h1>
                <h4 class="title2">Welcome, please login to your account</h4>
                <div class="form">
                  <form action="">
                    <input placeholder="form nama"/>
                    <input placeholder="form password"/>
                    <button class="button-login">login</button>  
                  </form>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </header>
    </div>*/
    <div className="App">
      <div class="container" id="content-wrapper">
        <div class="row">
          <div class="col-md-12">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 p-md-3">
                    <ul class="nav justify-content-end">
                      <li class="nav-item">
                        <a class="nav-link active" href="#">Active</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                      </li>
                    </ul>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6"/>
                <div class="col-md-6">
                  <h1 class="d-flex justify-content-center">Seminar Calendar</h1>
                  <p class="d-flex justify-content-center">Welcome, please login to your account</p>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6"/>
                <div class="col-md-6 pl-sm-6 pr-sm-6">
                      <form>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div class="form-group form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                          <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign in</button>
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
export default App;
