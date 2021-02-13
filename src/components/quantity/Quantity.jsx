import React, { useState } from 'react'

import { useQuantityStyles } from './quantityStyles'
import minusImg from '../../images/icons/minus.png'
import plusImg from '../../images/icons/plus.png'

export default function Quantity() {
    const [quantity, setQuantity] = useState(1)
    const classes = useQuantityStyles()

    return (
        <div className={classes.count}>
            <div
                className={classes.add}
                onClick={() => {
                    if (quantity >= 2)
                        setQuantity(quantity - 1)
                }}
            >
                <img src={minusImg} alt="" />
            </div>

            <p className={classes.count_text}>{quantity}</p>

            <div
                className={classes.add}
                onClick={() => setQuantity(quantity + 1)}
            >
                <img src={plusImg} alt="" />
            </div>
        </div>
    )
}
