import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {BACKEND_SERVER_BASE_URL} from "./constants";

// axios.defaults.withCredentials = true

const config: AxiosRequestConfig = {
    baseURL: BACKEND_SERVER_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
};

const axiosInstance: AxiosInstance = axios.create(config);

export default axiosInstance