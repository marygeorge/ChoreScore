import React, { Component } from "react";
import './Child.css';
import API from "../../utils/API";
//import {Child} from "../../components/Child/Child.js"
//import { Link } from "react-router-dom";

class Child extends Component {
    state = {
        child:"sorry child page is under Development.it needs Sandra's magic touch ;)"
    };
    render() {
    return (
        <div className="text-center">
            <h3>
            {this.state.child}
            </h3>
        </div>
    );}
}

export default Child;