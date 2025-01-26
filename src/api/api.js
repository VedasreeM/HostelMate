import axios from "axios";

const axiosapi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  timeout: 5000, // Timeout after 5 seconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// You can add interceptors if needed (optional)
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Add any custom behavior before request is sent (e.g., adding auth tokens)
//     const token = localStorage.getItem("access_token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => {
//     // Handle successful responses
//     return response;
//   },
//   (error) => {
//     // Handle errors (e.g., expired tokens, server errors)
//     if (error.response && error.response.status === 401) {
//       // Handle unauthorized errors (e.g., redirect to login)
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosapi;
