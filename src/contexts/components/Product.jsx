import React, { useContext, useEffect, useState } from 'react'
import { request } from '../../services/api'
import { ContextRoot } from '../Context'

const Product = () => {
    const [productsData, setProductsData] = useState([])
    const [sort, setSort] = useState()
    const [brand, setBrand] = useState()
    const [model, setModel] = useState()
    const [page, setPage] = useState(0)
    const [sale, setSale] = useState('')
    const [price, setPrice] = useState([0, 10000000])

    const fetchProducts = async () => {
        await request.get('/products', {
            params: {
                page, brand, model, sort, price: price.toString()
            }
        })
            .then((res) => setProductsData(res.data))

    }

    useEffect(() => {
        fetchProducts()
    }, [sort, page, brand, model, sort, sale, price])

    return {
        productsData,
        setProductsData,
        fetchProducts,
        sort, setSort,
        brand, setBrand,
        model, setModel,
        sale, setSale,
        page, setPage,
        price, setPrice,
    }
}

export default Product
