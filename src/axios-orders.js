import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-k09-default-rtdb.firebaseio.com/",
});

export default instance;
