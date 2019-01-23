import axios from "axios";

export default {
  
  getSchedule: function() {
    return axios.get("/api/user");
  },
 
};
