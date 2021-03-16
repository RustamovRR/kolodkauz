import React, { useContext, useState } from 'react'
import { CountContext } from '../../contexts/CountContext'

import { useQuantityStyles } from './quantityStyles'
import minusImg from '../../images/icons/minus.svg'
import plusImg from '../../images/icons/plus.svg'
import { Add, Remove } from '@material-ui/icons'

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
                <Remove />
            </div>

            <p className={classes.count_text}>{quantity}</p>

            <div
                className={classes.add}
                onClick={() => {
                    setQuantity(quantity + 1)
                    handleIncrement()
                }}
            >
                {/* <img src={plusImg} alt="" /> */}
                <Add />
            </div>
        </div >
    )
}
