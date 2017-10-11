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
        chores:[],
        // rewards:[{id:1,RewardName:"soccer ball",RewardPoints:"500"},{id:2,RewardName:"iphone",RewardPoints:"1000"}],
        rewards:[],
        kids:[] 
    };

    

    componentDidMount(){
        this.loadKids();
       
        this.loadRewards();
    };

    onChange = date => {
        this.setState({ date });
         this.loadPendingChores();
    };


    loadKids=()=>{
        API.allKids(sessionStorage.getItem("parentid")).then(res=>{
            console.log(res.data);
            console.log(res.data.length);
            this.setState({kids:res.data});
        })
        .catch(err => console.log(err));
    };

    loadPendingChores=()=>{
        API.pendingChores(sessionStorage.getItem("parentid"),this.state.date).then(res=>{
            console.log(res.data);
            console.log("this.setState({this.state.chores:res});")
        });
    };

    loadRewards=()=>{
        API.allReward(sessionStorage.getItem("parentid")).then(res=>{
            console.log(res.data);
            this.setState({rewards:res.data});
        });
    }

    handleKidChange=(event)=>{
        this.setState({selectedKidid:event.target.id});
        this.setState({selectedKidName:event.target.value});
        sessionStorage.setItem("selectedChildId", event.target.id);
         window.location='/parent/ChildPage';
         ///parent/ChildPage
        //render Child/Child.js page
        // API.allChildChores(event.target.id).then(res=>console.log("this.setState({this.state.chores:res})"));
      };
    handleChange=event=>{
        switch(event.target.id){
            case "kidName":this.setState({addKidName:event.target.value});break;
            case "kidUser":this.setState({addKidUser:event.target.value});break;
            case "kidPass":this.setState({addKidPass:event.target.value});break;
        }          
    };
    handleAddKid=()=>{ 
          console.log("Add kid");
        const kid={
            childName:this.state.addKidName,
            childUsername:this.state.addKidUser,
            childPassword:this.state.addKidPass,
            parentid:sessionStorage.getItem("parentid")
        }
        console.log(kid);
        API.addKid(kid).then(res=>{
            this.loadKids();
            console.log("kid added")
        });
        
    };
    handleChoreStatus=(event)=>{ 
            const status={newstatus:event.target.value}
            API.setChoreStatus(status).then(res=>{
                this.loadPendingChores();
                console.log(res)
            });
    };

    handleDeleteReward=event=>{
         console.log(event.target.id);
         API.deleteReward(event.target.id).then((res)=>{
             this.loadRewards();
             console.log("done")
            });
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
         <KidDropDown addKid="true" kids={this.state.kids} key={this.state.kids.id} handleKidChange={this.handleKidChange}  />
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
                <Reward title={reward.RewardName} points={reward.RewardPoints} rewardId={reward.id} key={reward.id} handleDeleteReward={this.handleDeleteReward} />
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
        {this.state.chores.length ? (
            <div>
            {this.state.chores.map(chore=>
            <Chore key={chore.taskName} roleClick="confirm" handleStatus={this.handleChoreStatus} title={chore.taskName} status={chore.RedeemStatus} />
            )}
            </div>
        ):(
            <div>
            <h3>No Chores to Approve - {this.state.date.toString().substr(4,11)}</h3>
            </div>
        )}
            
        </div>

        {/*<div className="link-btn text-right">  
            <Link to="/parent/addchore" >
            Add Chores
            <img src = "/assets/addChoresBtn.png" alt="add chores button" />
            </Link>        
            </div>*/}

        </div>
        
     <Popup handleChange={this.handleChange} handleSubmit={this.handleAddKid} />

        </div>
);
    }
}

export default Parent;