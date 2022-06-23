import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "2ed913f9b6624d9efefa9393d858a701",
  },
});

export default axiosInstance;
