import React, { useState } from 'react'

const Sort = () => {
    const [sort, setSort] = useState('')
    const [brand, setBrand] = useState([])
    const [model, setModel] = useState([])
    const [page, setPage] = useState(0)
    const [sale, setSale] = useState('')
    const [price, setPrice] = useState([0, 10000000])

    return {
        sort, setSort,
        brand, setBrand,
        model, setModel,
        sale, setSale,
        page, setPage,
        price, setPrice,
    }
}

export default Sort
