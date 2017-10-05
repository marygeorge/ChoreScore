import React, { Component } from 'react';
import Login from "./pages/Login/Login.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="navbar">
              <img className="logo" src = "assets/logo.png" alt= "logo" />
              <span className="chore">ChoreScore</span>           
      </div>
       <Login />
       </div>
    );
  }
}

export default App;
