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
        <Route exact path="/" component={Login} />
        <Route exact path="/parent" component={Parent} />
        </div>
      </Router>
    );
  }
}

export default App;
