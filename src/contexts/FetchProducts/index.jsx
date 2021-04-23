import React, { useContext } from 'react'
import { request } from '../../services/api'
import { ContextRoot } from '../Context'

const FetchProducts = async () => {
    // const { productsData, setProductsData } = useContext(ContextRoot)

    const res = await request.get('/products')
        .then((res) => console.log(res.data))

    return res
}

export default FetchProducts