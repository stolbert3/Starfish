import axios from "axios";

export default {

    // Gets the user with the given email
  getBook: function(email) {
    return axios.get("/api/user/" + email);
  },
}
