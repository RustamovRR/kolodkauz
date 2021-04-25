import React, { useContext } from 'react'
import { IconButton } from '@material-ui/core'
import { useProductMediumStyles } from './productMediumStyles'

import { ButtonYellow, RatingComp } from '../..';
import { ContextRoot } from '../../../../contexts';
import { FavoriteGreyOutline, CompareDisableOutline } from '../../../../assets/images/icons'
import image1 from "../../../../assets/images/products/Rectangle 14.png";

export default function ProductMedium({ data }) {
    const classes = useProductMediumStyles()
    const { trans, sum } = useContext(ContextRoot)

    const url = `http://zap.uz`
    return (
        <div className={classes.root}>
            <section className={classes.card}>
                <img
                    src={`${url}/${data?.image}`}
                    alt={data?.uz.type.description}
                />
            </section>

            <section className={classes.text_box}>
                <h4>{data?.uz.type.title}</h4>
                <RatingComp value={4} />
                <section className={classes.info}>
                    <div className={classes.left_text}>
                        <p>Материал поршней:&nbsp;
                            <span>нержавеющая сталь</span>
                        </p>
                        <p>Материал корпуса насоса:&nbsp;
                            <span>алюминий; пластик</span>
                        </p>
                        <p>Система привода мойки:&nbsp;
                            <span>аксиальный</span>
                        </p>
                        <p>Вес с упаковкой (кг):&nbsp;
                            <span>15.08 кг</span>
                        </p>
                        <p>Давление максимальное:&nbsp;
                            <span>145 бар</span>
                        </p>
                    </div>
                </section>
            </section>

            <section className={classes.right_box}>
                <div className={classes.price_box}>
                    <div className={classes.price}>
                        <h1>{`${data?.price} ${sum}`}</h1>
                        <p>{`${data?.discount} ${sum}`}</p>
                    </div>
                    <div className={classes.button}>
                        <ButtonYellow
                            title={trans ? `Быстрый заказ` : `Tezkor buyurtma`}
                        />
                    </div>
                </div>

                <div className={classes.action_box}>
                    <IconButton size="small">
                        <FavoriteGreyOutline />
                    </IconButton>
                    <IconButton size="small">
                        <CompareDisableOutline />
                    </IconButton>
                </div>
            </section>

        </div>
    )
}