import axios from 'axios'
import { QueryClient } from "react-query";

const apiRequest = axios.create({
    baseURL: process.env.API_BASE_URL
});

apiRequest.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    config.headers["Authorization"] = `Bearer ${token}`;

    return config;
});

apiRequest.interceptors.response.use(
    (config) => config,
    (error) => {
        if (error.response?.status === 401 && process.env.NODE_ENV === "production") {
            window.location.replace(process.env.NEXT_PUBLIC_AUTH_URL);
        }

        throw error;
    }
);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

export { queryClient, apiRequest };