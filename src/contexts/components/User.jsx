import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import { request } from '../../services/api'

const User = (token) => {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [userData, setUserData] = useState([])
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

    const userId = localStorage.getItem('userId')

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        if (token) {
            const getUser = async () => {
                try {
                    const res = await request.get(`/users/${userId}`)
                    console.log(res)

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



    const addCart = async (product) => {
        if (!isLogged) return alert("Please login to continue buying")

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

    return {
        isLogged, setIsLogged,
        isAdmin, setIsAdmin,
        userData, setUserData,
        cart, setCart,
        addCart
    }
}

export default User
