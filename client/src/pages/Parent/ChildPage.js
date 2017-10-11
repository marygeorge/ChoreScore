import React, { Component } from "react";
import './Parent.css';
import API from "../../utils/API";
import {KidDropDown} from "../../components/KidDropDown/KidDropDown.js";
// import {Child} from "../../components/Child/Child.js"
import {Chore} from "../../components/Chore/Chore.js"
// import {Reward} from "../../components/Reward/Reward.js"
import {Popup} from "../../components/Popup/Popup.js"
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import {AddForm} from "../../components/Chore/AddForm.js";

class ChildPage extends Component {
    state = {
        date: new Date(),
        selectedKidid:0,
        selectedKidName:"",
        addKidName:"",
        addKidUser:"",
        addKidPass:"",
        chores:[],
        kids:[]
    };



    componentDidMount(){
        // not a good idea to pass id in query string. Need to find a better way
        this.setChild();
        this.loadKids();
        this.loadChores();
    };

    setChild=()=>{
        // let str=this.props.location.search
        // let id= parseInt( str.substr(4,str.length));
        // console.log("id= " + id);
        this.setState({selectedKidid:sessionStorage.getItem("selectedChildId")});
        console.log(this.state.selectedKidid);
        API.getChild(sessionStorage.getItem("selectedChildId")).then(res=>{
            console.log(res);
             this.setState({selectedKidName:res.data.ChildName});
        });
        const year = this.state.date.getFullYear();
        const month = this.state.date.getMonth()+1;
        const day = this.state.date.getDate();
        const dateString = `${year}-${month}-${day}`; 
        console.log(dateString);
        API.getChildChores(sessionStorage.getItem("selectedChildId"),dateString).then(res=>{
            this.setState({chores:res.data});
        });
    };

    loadKids=()=>{
        API.allKids(sessionStorage.getItem("parentid")).then(res=>{
            this.setState({kids:res.data});
        });
    };

    loadChores=()=>{
        
    }

    onChange = date => {
        this.setState({ date })
        this.loadChores();
    };

    
    handleChange=event=>{
        switch(event.target.id){
            case "kidName":this.setState({addKidName:event.target.value});break;
            case "kidUser":this.setState({addKidUser:event.target.value});break;
            case "kidPass":this.setState({addKidPass:event.target.value});break;
            case "choreName":this.setState({choreName:event.target.value});break;
            case "choreDesc":this.setState({choreDesc:event.target.value});break;
            case "selectPointAmount":this.setState({chorePoint:event.target.value});break;
            case "startDate":this.setState({startdate:event.target.value});break;
            case "choreType":this.setState({choretype:event.target.value});break;
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
    handleKidChange=(event)=>{
        this.setState({selectedKidid:event.target.id});
        this.setState({selectedKidName:event.target.value});
        sessionStorage.setItem("selectedChildId", event.target.id);
         window.location='/parent/ChildPage';
     };
    // handleChoreStatus=(event)=>{
    //         const status={newstatus:event.target.value}
    //         API.setChoreStatus(status).then(res=>console.log(res));
    // };
    handleSubmit=()=>{
       const chore={
       ParentId:sessionStorage.getItem("parentid"),
       ChildId:this.state.selectedKidid,
       TaskName:this.state.choreName,
       TaskDescription:this.state.choreDesc,
       TaskPoints:this.state.chorePoint,
       StartDate:this.state.startdate,
       TaskType:this.state.choretype,
       Mandatory:0,
       TaskStatus:"not done"
       };
       console.log(chore);
       API.addChore(chore).then((res)=>{
           this.loadChores();
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

           {/*<div className="reward-list">
            {this.state.rewards.map(reward=>
                <Reward title={reward.RewardName} points={reward.RewardPoints} rewardId={reward.id} key={reward.id} handleDeleteReward={this.handleDeleteReward} />
            )}
            <div className="link-btn text-center">
             <Link to="/parent/addreward" >
              Add Reward
             <img src = "/assets/addChoresBtn.png" alt="add chores button" />
             </Link>
             </div>
         </div>*/}
        </div>



        <div className="col-sm-6 kid-chores">
        {this.state.chores.length ? (
            <div>
            {this.state.chores.map(chore=>
            <Chore key={chore.id} roleClick="confirm" handleStatus={this.handleChoreStatus} title={chore.TaskName} status={chore.TaskStatus} />
            )}
            </div>
        ):(
            <div>
            <h3>No Chores for set this day - {this.state.date.toString().substr(4,11)}</h3>
            </div>
        )}

        </div>

        <div className="link-btn text-right">
<br/><br/>
            <div className="col-sm-8 col-sm-offset-2 chore-form">
            <AddForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
      </div>

        </div>

     <Popup handleChange={this.handleChange} handleSubmit={this.handleAddKid} />

        </div>
);
    }
}

export default ChildPage;