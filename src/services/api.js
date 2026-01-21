import axios from "axios";

const API = axios.create({
  baseURL: "https://hrms-lite-backend-5fd5.onrender.com/api", // change to deployed URL later
});

export default API;
