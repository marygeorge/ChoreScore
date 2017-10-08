import axios from "axios";

export default {
    // Gets the book with the given id
    login: function(userid,password,type) {
      return axios.get("/api/login/"+userid+"/"+password+"/"+type);
    },
    allKids: function(parentid) {
      return axios.get("/api/childlist/"+parentid);
    },
    allReward: function(childid) {
      return axios.get("/api/getreward/"+childid);
    },
    allChildChores: function(childid) {
      return axios.get("/api/gettasks/"+childid);
    },
    // Deletes the book with the given id
   /* deleteBook: function(id) {
      return axios.delete("/api/books/" + id);
    },*/
    // Saves a book to the database
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
      return axios.post("/api/addkid", userData);
    },
    setChoreStatus:function(newStatus){
      return axios.put("api/chorestatus",newStatus);
    }
    
  };