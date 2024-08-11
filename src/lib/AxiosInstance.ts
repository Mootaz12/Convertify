import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:3000/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
export default axiosInstance;
