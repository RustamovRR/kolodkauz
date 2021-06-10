import React, { useContext, useState, useEffect } from 'react'
import { useQuantityStyles } from './quantityStyles'

import { ContextRoot } from '../../../contexts'
import { Minus, Plus } from '../../../assets/images/icons'

export default function Quantity() {
    const [quantity, setQuantity] = useState(1)
    const [total, setTotal] = useState(1)

    const state = useContext(ContextRoot)
    const { cart, setCart } = state.product

    const classes = useQuantityStyles()

    // useEffect(() => {
    //     const getTotal = () => {
    //         const total = cart.reduce((prev, item) => {
    //             return prev + (item.price * item.quantity)
    //         }, 0)

    //         setTotal(total)
    //     }

    //     getTotal()

    // }, [cart])

    const increment = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity += 1
            }
        })

        setCart([...cart])
    }

    const decrement = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
    }


    return (
        <div className={classes.count}>
            <div
                className={classes.add}
                onClick={() => {
                    setQuantity(Math.max(quantity - 1, 0));
                    decrement()
                }}
            >
                <Minus />
            </div>

            <p className={classes.count_text}>{quantity}</p>

            <div
                className={classes.add}
                onClick={() => {
                    setQuantity(quantity + 1)
                    increment()
                }}
            >
                <Plus />
            </div>
        </div >
    )
}
