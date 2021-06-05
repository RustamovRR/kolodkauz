import React, { useState } from 'react'
import { request } from '../../services/api'

const Favorite = () => {
    const [favoriteCart, setFavoriteCart] = useState([])

    const addToFavoriteCart = async (product) => {
        await request.post('/users/changeliked', product).then((res) => console.log(res))
        // setFavoriteCart([...favoriteCart, product])
        // localStorage.setItem('favoriteCart', JSON.stringify(favoriteCart))
    }

    const removeFromFavoriteCart = (remove) => {
        setFavoriteCart(favoriteCart.filter((product) => product === remove))
    }

    return {
        addToFavoriteCart,
        removeFromFavoriteCart
    }
}

export default Favorite
