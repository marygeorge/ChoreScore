import axios from "axios";

export default {
    // Gets the book with the given id
    login: function(userid,password,type) {
      return axios.get("/api/login/"+userid+"/"+password+"/"+type);
    },
    //addChores
    addChores: function(chore) {
      return axios.post("/api/addtask");
    },
    allKids: function(parentid) {
      return axios.get("/api/childlist/"+parentid);
    },
    allReward: function(parentid) {
      return axios.get("/api/getAllRewards/"+parentid);
    },
    allChildChores: function(childid) {
      return axios.get("/api/gettasks/"+childid);
    },
    deleteReward:function(rewardid){
      return axios.post(" /api/delreward/"+rewardid);
    },

    signUp: function(userData) {
      return axios.post("/api/signUp", userData);
    },
    addChore: function(userData) {
      return axios.post("/api/addtask", userData);
    },
    addReward: function(userData) {
      return axios.post("/api/addreward", userData);
    },
    addKid: function(userData) {
      return axios.post("/api/childsignup", userData);
    },
    setChoreStatus:function(newStatus){
      return axios.put("api/chorestatus",newStatus);
    }
    
  };