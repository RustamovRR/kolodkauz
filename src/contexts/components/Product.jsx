import React, { useState } from 'react'
import { request } from '../../services/api'

const Product = () => {
    const [productsData, setProductsData] = useState([])

    const fetchProducts = async () => {
        const res = await request.get('/products', { params: { page: 0 } })
            .then((res) => setProductsData(res.data))

        return res
    }

    return {
        productsData,
        setProductsData,
        fetchProducts
    }
}

export default Product
