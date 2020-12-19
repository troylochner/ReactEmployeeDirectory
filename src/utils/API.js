/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API
//https://randomuser.me ----> TO GET RANDOM USERS

export default {
  getEmployee: function () {
    return axios.get("https://randomuser.me/api/")
  },
  getEmployeeList: function () {
    return axios.get("https://randomuser.me/api/?results=10")
  },
  getRandomDog: function () {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function (breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function () {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};