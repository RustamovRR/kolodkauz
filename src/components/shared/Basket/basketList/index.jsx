import React, { useContext, useEffect } from 'react'
import { IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { Rating } from '@material-ui/lab'
import { Quantity } from '../../../shared'

import { useBasketListStyles } from './basketListStyles'
import sidina from '../../../../assets/images/products/Rectangle 14.png'
import { ContextRoot } from '../../../../contexts'
import { BASE_URL } from '../../../../services/api'

export default function BasketList({ data }) {

    const classes = useBasketListStyles()
    const state = useContext(ContextRoot)
    const { sum, trans } = useContext(ContextRoot)
    const { cart, removeCart } = state.user

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
                        {trans == 'ru' ? data?.ru?.title : data?.uz?.title}
                    </p>
                    <Rating defaultValue={4} size="small" />
                </section>
            </div>

            <div className={classes.right_box} >
                <section className={classes.count_box}>
                    <Quantity />
                </section>

                <section className={classes.price_box}>
                    <p>{`${data?.price} ${sum}`}</p>
                    <span>{`${data?.discount} ${sum}`}</span>
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
