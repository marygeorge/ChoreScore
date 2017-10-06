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
        <div className="col-sm-6 calender">



        </div>
        <div className="col-sm-6 chore-form">
        <input className="form-control" id="choreName" type="name" placeholder="Chore Name" />
             <input className="form-control" id="selectPointAmount" type="name" placeholder="Select Point Amount" />
             <input className="form-control" id="dueDate" type="email" placeholder="Due Date" />
             <input className="form-control" id="timeBox" type="username" placeholder="Time" />
             <input className="form-control" id="schedule" type="password" placeholder="Schedule" />
                                    
             <input type="button" class="submitChores" id="submitChores" value="Submit" />
        </div>
        </div>

        <div className="row">
        <div className="col-sm-10 chore-list">
        Walk your little sister to the bus stop <img src = "assets/redCheck.png" alt="red check" /><br/>
        Do the dishes <img  src = "assets/yellowCheck.png" alt="yellow check" /><br/>
        Take out the trash <img  src = "assets/greenCheck.png" alt="green check" />

        </div>
        <div className="col-sm-2 backMain">       
        <a href="/parent"><img className="backMainBtn" 
        src = "assets/backMainBtn.png" alt="back to main button" />
        <div>Back To Main</div>
        </a>
        </div>
        </div>

        </div>
);
    }
}

export default Parent;