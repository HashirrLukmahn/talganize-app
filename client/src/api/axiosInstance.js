import axios from "axios";
import { BASE_URL } from '../app-routes/Constants'
// Create Axios instance with base configuration
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Attach authentication token to every request if available
// axiosInstance.interceptors.request.use((config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

export default axiosInstance;
