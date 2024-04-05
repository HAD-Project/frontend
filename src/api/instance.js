import axios from "axios";
import { BACKEND_BASE_URI } from "../utils";

const instance = axios.create({
  baseURL: BACKEND_BASE_URI, // Base URL for all requests
  timeout: 5000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json", // Default Content-Type header
    Authorization: `Bearer ${localStorage.getItem("accesstoken")}`, // Example of setting an Authorization header
  },
});

export default instance;
