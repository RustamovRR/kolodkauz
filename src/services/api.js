import axios from 'axios'
import { QueryClient } from 'react-query'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDcwNmM0ODMyZmNlMDgwNDc2Njg4NjciLCJmdWxsbmFtZSI6ImFkbWluIiwicGhvbmUiOiIrOTk4OTkxMjM0NTY3Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjE3OTgwNDg4fQ.dio-htO_Hx6PnLvAyQOliifGFe4Q-rD2YrTMhkWO2gI'

const base_url = `http://zap.uz/api`

export const request = axios.create({
    baseURL: base_url,
    headers: {
        "Content-Type": "application/json",
        "x-token": `${token}`,
        "Access-Control-Allow-Origin": "*",
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