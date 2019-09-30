import React from 'react';
import logo from './bkg.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
        id="myP"> Kalendar Seminar
        <script>
          document.getElementById("myP").style.fontFamily = "Courier New";
        </script>
        </p>
        
        
      </header>
    </div>
  );
}



export default App;
