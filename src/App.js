
import React from 'react';
//import logo from './bg1.png';
import logo from './gambar1.png';
import './App.css';


function App() {
  return (
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
    </div>
  );
export default App;
