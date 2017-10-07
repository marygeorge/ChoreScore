import React, { Component } from "react";
import './Parent.css';
import API from "../../utils/API";
import {KidDropDown} from "../../components/KidDropDown/KidDropDown.js";
import {Chore} from "../../components/Chore/Chore.js"
import {AddForm} from "../../components/Chore/AddForm.js"
import { Link } from "react-router-dom";

class Parent extends Component {
    state = {
        chores:[{taskName:"Do the dishes",RedeemStatus:"undone"},{taskName:"Take out the trash",RedeemStatus:"done"}]
      
    };
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
        <AddForm />
        </div>
        </div>

        <div className="row">
        <div className="col-sm-10 chore-list">
             {this.state.chores.map(chore=>
             <Chore title={chore.taskName} status={chore.RedeemStatus} />
              )}
            </div>
        <div className="col-sm-2">
            <div className="link-btn text-center">  
                <Link to="/parent" >
                <img className="backMainBtn" 
                src = "/assets/backMainBtn.png" alt="back to main button" /><br/>
                Back To Main
                </Link>
            </div>
        </div>


        </div>

        </div>
);
    }
}

export default Parent;