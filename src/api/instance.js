import axios from "axios";

const instance = axios.create({
  baseURL: "http://172.16.145.96:8998", // Base URL for all requests
  timeout: 5000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json", // Default Content-Type header
    Authorization: `Bearer ${localStorage.getItem("accesstoken")}`, // Example of setting an Authorization header
  },
});

export default instance;
