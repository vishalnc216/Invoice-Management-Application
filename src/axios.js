import axios from "axios";

const instance = axios.create({
  baseURL: "https://billbackend.herokuapp.com/",
});

export default instance;
