import axios from "axios";

// Base URL of the API using Axios
const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export { API };
