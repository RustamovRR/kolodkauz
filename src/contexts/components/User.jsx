import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import { request } from '../../services/api'

const User = (token) => {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [userData, setUserData] = useState([])
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
    const [userFavorite, setUserFavorite] = useState(JSON.parse(localStorage.getItem('userFavorite')) || [])
    const [compare, setCompare] = useState(JSON.parse(localStorage.getItem('compare')) || [])
    const [quantity, setQuantity] = useState(1)

    const userId = localStorage.getItem('userId')

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        localStorage.setItem('userFavorite', JSON.stringify(userFavorite))
    }, [userFavorite])

    useEffect(() => {
        localStorage.setItem('compare', JSON.stringify(compare))
    }, [compare])

    useEffect(() => {
        if (token) {
            const getUser = async () => {
                try {
                    const res = await request.get(`/users/${userId}`)

                    setIsLogged(true)
                    res.data?.data['role'] === 'admin' ? setIsAdmin(true) : setIsAdmin(false)
                    setUserData(res.data?.data)

                } catch (err) {
                    alert(err.response.data.msg)
                }
            }

            getUser()

        }
    }, [token, userId])


    //********************************* */ User cart functions**************************************//
    const addCart = async (product) => {
        if (!isLogged) return toast("Iltimos avval ro'yxatdan o'ting")

        const check = cart.every(item => {
            return item._id !== product._id
        })

        if (check) {
            setCart([...cart, product])
            toast.success(`Savatchaga muvaffaqiyatli qo'shildi`)

        } else {
            toast.error(`Mahsulot allaqachon savatga qo'shilgan`)
        }
    }

    const removeCart = async (id) => {
        cart.map((item, index) => {
            if (item._id === id) {
                cart.splice(index, 1)
            }
        })
        setCart([...cart])
    }

    // *************************User userFavorite functions******************************************//
    const addFavorite = async (product) => {
        if (!isLogged) return toast("Iltimos avval ro'yxatdan o'ting")

        const check = userFavorite.every(item => {
            return item._id !== product._id
        })

        if (check) {
            setUserFavorite([...userFavorite, product])
            toast.success(`Tanlanganlarga qo'shildi`)
        }
    }

    const removeFavorite = async (id) => {
        userFavorite.map((item, index) => {
            if (item._id === id) {
                userFavorite.splice(index, 1)
            }
        })
        setUserFavorite([...userFavorite])
    }


    // *************************User Comparison functions******************************************//
    const addCompare = async (product) => {
        if (!isLogged) return toast("Iltimos avval ro'yxatdan o'ting")

        const check = compare.every(item => {
            return item._id !== product._id
        })

        if (check) {
            setCompare([...compare, product])
            toast.success(`Taqqoslash uchun qo'shildi`)
        }
    }

    const removeCompare = async (id) => {
        compare.map((item, index) => {
            if (item._id === id) {
                compare.splice(index, 1)
            }
        })
        setCompare([...compare])
    }

    return {
        isLogged, setIsLogged,
        isAdmin, setIsAdmin,
        userData, setUserData,
        cart, setCart,
        userFavorite, setUserFavorite,
        compare, setCompare,
        addCart, removeCart,
        quantity, setQuantity,
        addFavorite, removeFavorite,
        addCompare, removeCompare
    }
}

export default User
