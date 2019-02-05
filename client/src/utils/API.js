import axios from "axios";


export default {

    // Gets the user with the given email
  getUser: function (email) {
    return axios.get("/api/user/" + email);
  },
  
  
  updateUser: function (email, tasks) {
    
    return axios.put( "api/user/" + email, tasks)
     .then(res => console.log(res.data));
  },
  
  createUser: function () {
    return axios.post("/api/user/");
  }
  
}

