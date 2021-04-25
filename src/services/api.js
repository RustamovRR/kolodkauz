import axios from 'axios'
import { QueryClient } from 'react-query'

const base_url = `http://zap.uz/api`

const token = localStorage.getItem('token')

export const request = axios.create({
    baseURL: base_url,
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