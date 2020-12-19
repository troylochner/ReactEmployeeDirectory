/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API
//https://randomuser.me ----> TO GET RANDOM USERS

export default {
  getEmployeeList: function () {
    return axios.get("https://randomuser.me/api/?results=10")
  },

};