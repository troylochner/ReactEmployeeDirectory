/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

//https://randomuser.me ----> TO GET RANDOM USERS

export default {
  getEmployeeList: function () {
    return axios.get("https://randomuser.me/api/?results=150")
  }
};