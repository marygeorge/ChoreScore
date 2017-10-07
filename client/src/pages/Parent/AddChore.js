import React, { Component } from "react";
import './Parent.css';
import API from "../../utils/API";
import {KidDropDown} from "../../components/KidDropDown/KidDropDown.js";
import {Chore} from "../../components/Chore/Chore.js"
import {AddForm} from "../../components/Chore/AddForm.js"
import { Link } from "react-router-dom";

class Parent extends Component {
    state = {
        choreName:"",chorePoint:"",choreDue:"",choreTimeBox:"",choreSchedule:"",
        chores:[{taskName:"Do the dishes",RedeemStatus:"undone"},{taskName:"Take out the trash",RedeemStatus:"done"}]
      
    };
    handleChange=event=>{
        switch(event.target.id){
            case "choreName":this.setState({choreName:event.target.value});break;
            case "selectPointAmount":this.setState({chorePoint:event.target.value});break;
            case "dueDate":this.setState({choreDue:"parent"});break;
            case "timeBox":this.setState({choreTimeBox:"child"});break;
            case "schedule":this.setState({choreSchedule:"child"});break;
        }
    };
    handleSubmit=()=>{
       console.log(this.state.choreName);
       const chore={
       parentid:"seccion Id",
       childId:"will be provide from dropdown ",
       taskname:this.state.choreName,
       taskdescription:"",
       taskpoints:this.state.chorePoint,
       startdate:this.state.choreTimeBox,
       tasktype:this.state.choreSchedule,
       mandatory:"not available"
       };
       API.addChore(chore).then((res)=>{})
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
        <AddForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
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