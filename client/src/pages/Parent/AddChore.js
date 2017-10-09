import React, { Component } from "react";
import './Parent.css';
import API from "../../utils/API";
import {KidDropDown} from "../../components/KidDropDown/KidDropDown.js";
import {Chore} from "../../components/Chore/Chore.js"
import {AddForm} from "../../components/Chore/AddForm.js"
import { Link } from "react-router-dom";

let taskname='';
let points=0;
class Parent extends Component {
    state = {
        chores:[{}]
        
    };

    // set chores: didMount...

    handleChoreChange=(event)=>{
        switch(event.target.id){
              case "choreName": taskname=event.target.value;break;
              case "selectPointAmount": points=event.taget.value;break;
            //   case "choreName": this.setState({newchore.taskname:event.target.value});break;
            //   case "parentLastName":this.setState({supLastName:event.target.value});break;
            //   case "parentEmail":this.setState({supEmail:event.target.value});break;
            //   case "parentUserName":this.setState({supUsername:event.target.value});break;
            //   case "parentPassword":this.setState({supPassword:event.target.value});break;
          }
    }

 handleAddChore=()=>{
        API.addChores(taskname)
        .then(res => {
            console.log(res.data);
            // sessionStorage.setItem
            window.location='./Parent/'+res.data.username;
        })
        .catch(err => console.log(err));
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
        <AddForm handleChange={this.handleChoreChange}  handleSubmit={this.handleAddChore} />
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