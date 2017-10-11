import React, { Component } from "react";
import './Child.css';
import API from "../../utils/API";
// import {KidDropDown} from "../../components/KidDropDown/KidDropDown.js";
import {Chore} from "../../components/Chore/Chore.js"
import {Reward} from "../../components/Reward/Reward.js"
// import {Link} from "react-router-dom";


class Child extends Component {
    state = {
        chores:[{taskName:"Do the dishes",RedeemStatus:"undone"},{taskName:"Take out the trash",RedeemStatus:"done"}],
        rewards:[{RewardName:"soccer ball",RewardPoints:"500"},{RewardName:"iphone",RewardPoints:"1000"}],
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
            </div>
            </div>
          

            <div className="row">
            <div className="col-sm-6">
            <b>October 14, 2017</b>
            </div>
            </div>
        
           
           
            <div className="row">
            <div className="col-sm-6">
            
           

                  <div className="reward-list">
               {this.state.rewards.map(reward=>
                <Reward title={reward.RewardName} points={reward.RewardPoints} />
                )}
                <div className="link-btn text-center"> 
                 
                 Request Rewards
                 <img src = "/assets/addChoresBtn.png" alt="add chores button" />
                
               </div>
             
             


           
                </div>
                </div>
             

                <div className="col-sm-6 kid-chores">
            {this.state.chores.map(chore=>
          <Chore type="child" title={chore.taskName} status={chore.RedeemStatus} />
            )}  
                </div> 

                </div> 


        </div>

        



        )};
 }




export default Child;