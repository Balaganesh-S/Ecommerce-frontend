import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:7094/api",
  headers: {
    "content-type": "application/json",
  },
});
