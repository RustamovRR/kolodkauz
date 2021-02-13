import React from 'react'
import { Rating } from '@material-ui/lab';
import Quantity from '../quantity/Quantity'
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { Button, Divider, IconButton } from '@material-ui/core';

import { useProductSmallStyles } from './productSmallStyles';
import karcher from "../../images/products/karcher.png";
import favoriteImg from '../../images/icons/heart_blue.png'
import rateImg from '../../images/icons/rate_blue.png'

export default function ProductSmall() {
    const classes = useProductSmallStyles()

    return (
        <>
            <div className={classes.root}>

                <section className={classes.image_box}>
                    <img src={karcher} alt="" width={110} height={110} />
                </section>

                <section className={classes.text_box}>
                    <h1>Мойка высокого давления K5 Compact</h1>
                    <Rating defaultValue={4} />
                    <div className={classes.price_box}>
                        <p>7,850,000 сум</p>
                        <span>9,876,000 uzs</span>
                    </div>
                </section>

                <section className={classes.count_box}>
                    <Quantity />
                </section>

                <section className={classes.action_box}>
                    <ButtonComponent title="Быстрый заказ" />
                    <div className={classes.buttons}>
                        <Button className={classes.basket}>Корзинка</Button>
                        <IconButton>
                            <img src={favoriteImg} alt="" />
                        </IconButton>
                        <IconButton>
                            <img src={rateImg} alt="" />
                        </IconButton>
                    </div>
                </section>
            </div>
            <Divider />
        </>
    )
}