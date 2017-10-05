import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import Parent from "./pages/Parent/Parent.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
       <div className="navbar">
              <img className="logo" src = "assets/logo.png" alt= "logo" />
              <span className="chore">ChoreScore</span>           
       </div>
        <Route exact path="/" component={Login} />
        <Route exact path="/parent" component={Parent} />
        </div>
      </Router>
    );
  }
}

export default App;
