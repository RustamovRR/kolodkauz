import React, { useContext } from 'react'
import { Rating } from '@material-ui/lab';
import { IconButton } from '@material-ui/core';
import { useProductSmallStyles } from './productSmallStyles';

import { ContextRoot } from '../../../../contexts';
import { BASE_URL } from '../../../../services/api'
import { Quantity, ButtonYellow } from '../..'
import { FavoriteBlueOutline, CompareBlueOutline } from '../../../../assets/images/icons'
import karcher from "../../../../assets/images/products/karcher.png";

export default function ProductSmall({ data }) {
    const classes = useProductSmallStyles()
    const { trans, sum } = useContext(ContextRoot)
    return (
        <div className={classes.root}>
            <section className={classes.image_box}>
                <img
                    src={`${BASE_URL}/${data?.image}`}
                    alt={data?.uz.description}
                    width={110}
                    height={110}
                    style={{ objectFit: 'contain' }}
                />
            </section>

            <section className={classes.text_box}>
                <h1>{data?.uz.title}</h1>
                <Rating defaultValue={4} size="small" />
                <div className={classes.price_box}>
                    <p>{`${data?.price} ${sum}`}</p>
                    <span>{`${data?.discount} ${sum}`}</span>
                </div>
            </section>

            <section className={classes.right_box} >
                <div className={classes.count_box}>
                    <Quantity />
                </div>

                <div className={classes.action_box}>
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
                </div>
            </section>
        </div>
    )
}