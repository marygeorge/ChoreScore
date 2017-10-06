import React, { Component } from "react";
import './Parent.css';
import API from "../../utils/API";
import {KidDropDown} from "../../components/KidDropDown/KidDropDown.js"
//import { Link } from "react-router-dom";

class Parent extends Component {
    render() {
    return (
        <div>
        <div className="navbar">
        <div className="row">
        <div className="col-sm-6">
        <img className="logo" src = "assets/logo.png" alt= "logo" />
        <span className="chore">ChoreScore</span>  
        </div>
        <div className="col-sm-6">
         <KidDropDown  />
       </div>
        </div>
        </div>

        <div className="row">
        <div className="col-sm-6">
        <div className="calender">
            <h1>Ctober 14th</h1>
        </div>         
        <div className="reward-list">
        Soccer Ball <span className="badge">500</span><br/>
        Iphone X <span className="badge">1000</span>
        </div>
        </div>

        <div className="col-sm-6 kid-chores">
        Walk your little sister to the bus stop<img src = "assets/redCheck.png" alt="red check" /><br/>
        Do the dishes <img src = "assets/yellowCheck.png" alt="yellow check" />
                      <img src = "assets/redX.png" alt="red X" /><br/>
        Take out the trash<img  src = "assets/greenCheck.png" alt="green check" /><br/>
        </div>
        </div>


        </div>
);
    }
}

export default Parent;