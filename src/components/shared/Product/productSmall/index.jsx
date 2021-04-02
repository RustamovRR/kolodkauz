import React, { useContext } from 'react'
import { Rating } from '@material-ui/lab';
import { IconButton } from '@material-ui/core';
import { useProductSmallStyles } from './productSmallStyles';

import { TranslateContext } from '../../../../contexts';
import { Quantity, ButtonYellow } from '../..'
import { FavoriteBlueOutline, CompareBlueOutline } from '../../../../assets/images/icons'
import karcher from "../../../../assets/images/products/karcher.png";

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
                            <FavoriteBlueOutline />
                        </IconButton>
                        <IconButton>
                            <CompareBlueOutline />
                        </IconButton>
                        <IconButton>
                            <CompareBlueOutline />
                        </IconButton>
                    </div>
                </section>
            </div>
        </>
    )
}