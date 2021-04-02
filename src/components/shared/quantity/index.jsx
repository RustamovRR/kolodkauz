import React, { useContext, useState } from 'react'
import { useQuantityStyles } from './quantityStyles'

import { CountContext } from '../../../contexts'
import { Minus, Plus } from '../../../assets/images/icons'

export default function Quantity() {
    const [quantity, setQuantity] = useState(1)
    const { countState, countDispatch } = useContext(CountContext)

    const classes = useQuantityStyles()

    const handleIncrement = () => {
        countDispatch('increment')
    }
    const handleDecrement = () => {
        countDispatch('decrement')
    }

    return (
        <div className={classes.count}>
            <div
                className={classes.add}
                onClick={() => {
                    setQuantity(Math.max(quantity - 1, 0));
                    handleDecrement()
                }}
            >
                {/* <img src={minusImg} alt="" /> */}
                <Minus />
            </div>

            <p className={classes.count_text}>{quantity}</p>

            <div
                className={classes.add}
                onClick={() => {
                    setQuantity(quantity + 1)
                    handleIncrement()
                }}
            >
                <Plus />
            </div>
        </div >
    )
}
