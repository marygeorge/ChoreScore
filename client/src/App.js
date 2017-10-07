import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import Parent from "./pages/Parent/Parent.js";
import AddChore from "./pages/Parent/AddChore.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        
        <Route exact path="/" component={Login} />
        <Route exact path="/parent" component={Parent} />
        <Route exact path="/parent/addchore" component={AddChore} />

        </div>
      </Router>
    );
  }
}

export default App;
