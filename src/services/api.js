import axios from 'axios'
import { QueryClient } from 'react-query'

export const BASE_URL = `http://zap.uz`

export const API_BASE_URL = `http://zap.uz/api`

const token = localStorage.getItem('token')

export const request = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "x-token": token,
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
})

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})