import React, { useContext, useEffect, useState } from 'react'
import { request } from '../../services/api'
import { ContextRoot } from '../Context'

const Product = () => {
    const [productsData, setProductsData] = useState([])
    const [allProduct, setAllProduct] = useState([])
    const [productCount, setProductCount] = useState(1)
    const [sort, setSort] = useState()
    const [brand, setBrand] = useState()
    const [model, setModel] = useState()
    const [page, setPage] = useState(0)
    const [sale, setSale] = useState()
    const [productId, setProductId] = useState()
    const [price, setPrice] = useState([0, 10000000])

    const fetchProducts = async () => {
        await request.get('/products', {
            params: {
                page,
                sort,
                price: price.toString(),
                sale,
                brand,
                car_model: model,
            }
        })
            .then((res) => setProductsData(res.data))
    }

    const getAllProducts = async () => {
        await request.get('/products/all')
            .then(res => setAllProduct(res.data))
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    useEffect(() => {
        fetchProducts()
    }, [sort, page, brand, model, sort, sale, price])

    return {
        productsData,
        setProductsData,
        fetchProducts,
        allProduct,
        productCount, setProductCount,
        sort, setSort,
        brand, setBrand,
        model, setModel,
        sale, setSale,
        page, setPage,
        productId, setProductId,
        price, setPrice,
    }
}

export default Product
