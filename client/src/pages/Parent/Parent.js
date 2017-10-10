import React, { Component } from "react";
import './Parent.css';
import API from "../../utils/API";
import {KidDropDown} from "../../components/KidDropDown/KidDropDown.js";
import {Chore} from "../../components/Chore/Chore.js"
import {Reward} from "../../components/Reward/Reward.js"
import {Popup} from "../../components/Popup/Popup.js"
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';

class Parent extends Component {
    state = {
        date: new Date(),
        selectedKidid:"",selectedKidName:"",
        addKidName:"",addKidUser:"",addKidPass:"",
        chores:[{taskName:"Do the dishes",RedeemStatus:"undone"},{taskName:"Take out the trash",RedeemStatus:"done"}],
        rewards:[{RewardName:"soccer ball",RewardPoints:"500"},{RewardName:"iphone",RewardPoints:"1000"}],
        kids:[{childName:"Alex",childid:"1"},{childName:"Mary",childid:"2"},{childName:"Lauren",childid:"3"}] 
    };

    onChange = date => this.setState({ date });

    componentDidMount(){
        API.allKids("sessionid").then(res=>console.log("this.setState({kids:res});"));
        API.allChildChores(this.state.selectedKidid).then(res=>console.log("this.setState({this.state.chores:res});"));
        API.allReward(this.state.selectedKidid).then(res=>console.log("this.setState({this.state.rewards:res});"));
    };
    handleKidChange=(event)=>{
        this.setState({selectedKidid:event.target.id});
        this.setState({selectedKidName:event.target.value});
        API.allChildChores(event.target.id).then(res=>console.log("this.setState({this.state.chores:res})"));
      };
      handleChange=event=>{
        switch(event.target.id){
            case "kidName":this.setState({addKidName:event.target.value});break;
            case "kidUser":this.setState({addKidUser:event.target.value});break;
            case "kidPass":this.setState({addKidPass:event.target.value});break;
        }          
    };
      handleAddKid=()=>{ 
        const kid={
            childName:this.state.addKidName,
            childUsername:this.state.addKidUser,
            childPassword:this.state.addKidPass
        }
        API.addKid(kid).then(res=>console.log(res));
      };
       handleChoreStatus=(event)=>{ 
           const status={newstatus:event.target.value}
        API.setChoreStatus(status).then(res=>console.log(res));
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
         <KidDropDown addKid="true" kids={this.state.kids} handleKidChange={this.handleKidChange}  />
       </div>
        </div>

        </div>
       
        <div className="text-center"> <h2> {this.state.selectedKidName} </h2></div>

        
        <div className="row">
        <div className="col-sm-6">
           <div className="calendar">
               <div className="calbox">
                  <h2> {this.state.date.toString().substr(0,16)}</h2>
                   <Calendar  onChange={this.onChange}/>
               </div>
           </div> 

           <div className="reward-list">
           {this.state.rewards.map(reward=>
            <Reward title={reward.RewardName} points={reward.RewardPoints} />
            )}
            <div className="link-btn text-center"> 
             <Link to="/parent/addreward" >
              Add Reward
             <img src = "/assets/addChoresBtn.png" alt="add chores button" />
             </Link> 
             </div>  
         </div>
        </div>



        <div className="col-sm-6 kid-chores">
            {this.state.chores.map(chore=>
          <Chore key={chore.taskName} roleClick="confirm" handleStatus={this.handleChoreStatus} title={chore.taskName} status={chore.RedeemStatus} />
            )}
            <div className="link-btn text-right">  
            <Link to="/parent/addchore" >
            Add Chores
            <img src = "/assets/addChoresBtn.png" alt="add chores button" />
            </Link>        
            </div>
        </div>
        </div>
        
     <Popup handleChange={this.handleChange} handleSubmit={this.handleAddKid} />

        </div>
);
    }
}

export default Parent;