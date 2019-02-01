import axios from "axios";

export default {

    // Gets the user with the given email
  getUser: function (email) {
    return axios.get("/api/user/" + email);
  },
  updateUser: function () {
    return axios.post("/api/user/");
  },
  
  
}

