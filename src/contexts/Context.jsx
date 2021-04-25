import React, { createContext, useEffect, useReducer, useState } from 'react'
import { request } from '../services/api'

export const ContextRoot = createContext()

export default function Provider({ children }) {

    const [productsData, setProductsData] = useState([])
    const [favoriteCart, setFavoriteCart] = useState([])

    const [openBasket, setOpenBasket] = useState(false)
    const [openTabList, setOpenTabList] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const [trans, setTrans] = useState(false)
    const sum = trans ? `сум` : `so'm`

    const fetchProducts = async () => {
        const res = await request.get('/products')
            .then((res) => setProductsData(res.data))

        return res
    }

    const addToFavoriteCart = (product) => {
        setFavoriteCart([...favoriteCart, product])
    }

    const removeFromFavoriteCart = (remove) => {
        setFavoriteCart(favoriteCart.filter((product) => product == remove))
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    const initialValue = 1
    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1

            case 'decrement':
                return state - 1

            case 'reset':
                return initialValue

            default:
                return state
        }
    }
    const [count, dispatch] = useReducer(reducer, initialValue)
    const state = {
        productsData, setProductsData, fetchProducts,
        favoriteCart, setFavoriteCart, addToFavoriteCart, removeFromFavoriteCart,

        sum,
        openBasket, setOpenBasket,
        openTabList, setOpenTabList,
        imageUrl, setImageUrl,
        trans, setTrans,
        countState: count, countDispatch: dispatch,
    }

    return (
        <ContextRoot.Provider value={state}>
            {children}
        </ContextRoot.Provider>
    )
}
