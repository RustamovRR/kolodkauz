import React, { useContext, useEffect } from 'react'
import { IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { Rating } from '@material-ui/lab'
import { Quantity } from '../../../shared'

import { useBasketListStyles } from './basketListStyles'
import sidina from '../../../../assets/images/products/Rectangle 14.png'
import { ContextRoot } from '../../../../contexts'
import { BASE_URL } from '../../../../services/api'

export default function BasketList({ data, decrement, increment }) {

    const classes = useBasketListStyles()
    const state = useContext(ContextRoot)
    const { sum, trans } = useContext(ContextRoot)
    const { cart, removeCart, quantity, setQuantity } = state.user

    const handleIncrement = () => {
        increment(data?._id)
    }

    const handleDecrement = () => {
        decrement(data?._id)
    }

    return (
        <div className={classes.root}>
            <div className={classes.left_box} >
                <section className={classes.image_box}>
                    <img
                        src={`${BASE_URL}/${data?.image}`}
                        alt=""
                        width={110}
                        height={110}
                    />
                </section>

                <section className={classes.text_box}>
                    <p>
                        {trans === 'ru' ? data?.ru?.title : data?.uz?.title}
                    </p>
                    <Rating defaultValue={4} size="small" />
                </section>
            </div>

            <div className={classes.right_box} >
                <section className={classes.count_box}>
                    <Quantity
                        quantity={data?.cart_quantity}
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                    />
                </section>

                <section className={classes.price_box}>
                    <p>{`${data?.cart_quantity * data?.discount} ${sum}`}</p>
                    <span>{`${data?.cart_quantity * data?.price} ${sum}`}</span>
                </section>

                <section className={classes.action_box}>
                    <IconButton className={classes.icon} onClick={() => removeCart(data?._id)}>
                        <Close fontSize="small" />
                    </IconButton>
                </section>
            </div>
        </div>
    )
}
