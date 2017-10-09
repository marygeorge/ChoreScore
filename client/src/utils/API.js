import axios from "axios";

export default {
    // Gets the book with the given id
    login: function(userid,password,type) {
      return axios.get("/api/login/"+userid+"/"+password+"/"+type);
    },
    //addChores
    addChores: function(parentid,childid,name,desc,date,type,points) {
      return axios.post("/api/addreward"+parentid+"/"+childid+"/"+type);
    },
    // Deletes the book with the given id
   /* deleteBook: function(id) {
      return axios.delete("/api/books/" + id);
    },*/
    // Saves a book to the database
    signUp: function(userData) {
      return axios.post("/api/signUp", userData);
    }
  };