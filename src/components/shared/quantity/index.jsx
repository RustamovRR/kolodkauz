import React, { useContext, useState, useEffect } from 'react'
import { useQuantityStyles } from './quantityStyles'

import { ContextRoot } from '../../../contexts'
import { Minus, Plus } from '../../../assets/images/icons'

export default function Quantity({ handleIncrement, handleDecrement, quantity }) {
    const state = useContext(ContextRoot)
    const { cart, setCart } = state.product

    const classes = useQuantityStyles()


    return (
        <div className={classes.count}>
            <div
                className={classes.add}
                onClick={handleDecrement}
            >
                <Minus />
            </div>

            <p className={classes.count_text}>{quantity}</p>

            <div
                className={classes.add}
                onClick={handleIncrement}
            >
                <Plus />
            </div>
        </div>
    )
}
