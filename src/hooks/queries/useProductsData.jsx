import React from 'react'
import { useQuery } from 'react-query'
import { request } from '../../services/api'

const useProductsData = () => {
    const query = useQuery(['products'], async () => {
        const res = await request.get('/products')
        return res.data
    })
    return query
}

export default useProductsData