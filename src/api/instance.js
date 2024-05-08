import axios from "axios";
import { BACKEND_BASE_URI } from "../utils";

const instance = axios.create({
  baseURL: BACKEND_BASE_URI, // Base URL for all requests
  timeout: 5000, // Request timeout in milliseconds
});

export default instance;
