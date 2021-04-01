import React, { useContext } from 'react'
import { Rating } from '@material-ui/lab';
import Quantity from '../../quantity/Quantity'
import {  IconButton } from '@material-ui/core';
import { TranslateContext } from '../../../contexts/TranslateContext';
import ButtonYellow from '../../buttonYellow/ButtonYellow';

import { useProductSmallStyles } from './productSmallStyles';
import karcher from "../../../assets/images/products/karcher.png";
import favoriteImg from '../../../assets/images/icons/heart_blue.svg'
import rateImg from '../../../assets/images/icons/rate_blue.svg'

export default function ProductSmall() {
    const classes = useProductSmallStyles()
    const { trans, sum } = useContext(TranslateContext)

    return (
        <>
            <div className={classes.root}>

                <section className={classes.image_box}>
                    <img src={karcher} alt="" width={110} height={110} />
                </section>

                <section className={classes.text_box}>
                    <h1>Мойка высокого давления K5 Compact</h1>
                    <Rating defaultValue={4} size="small" />
                    <div className={classes.price_box}>
                        <p>{`7,850,000 ${sum}`}</p>
                        <span>{`9,876,000 ${sum}`}</span>
                    </div>
                </section>

                <section className={classes.count_box}>
                    <Quantity />
                </section>

                <section className={classes.action_box}>
                    <div className={classes.fast_order}>
                        <ButtonYellow title="Быстрый заказ" />
                    </div>
                    <div className={classes.buttons}>
                        <IconButton>
                            <img src={favoriteImg} alt="" />
                        </IconButton>
                        <IconButton>
                            <img src={rateImg} alt="" />
                        </IconButton>
                        <IconButton>
                            <img src={rateImg} alt="" />
                        </IconButton>
                    </div>
                </section>
            </div>
        </>
    )
}