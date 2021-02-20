import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Button, Divider, IconButton } from '@material-ui/core'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { TranslateContext } from '../../contexts/TranslateContext';
import RatingComp from '../../components/rating/RatingComp'

import { useProductMediumStyles } from './productMediumStyles'
import image1 from "../../images/products/Rectangle 14.png";
import favoriteImg from '../../images/icons/heart_outline.png'
import rateCard from '../../images/icons/rate_grey.png'
import ButtonYellow from '../buttonYellow/ButtonYellow';

export default function ProductMedium() {
    const classes = useProductMediumStyles()
    const { trans, sum } = useContext(TranslateContext)

    return (
        <div className={classes.root}>
            <section className={classes.card}>
                <img src={image1} alt="kolodka rasm" />
            </section>

            <section className={classes.text_box}>
                <h4>Мойка высокого давления K5 Compact </h4>
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

            <section className={classes.price_box}>
                <div className={classes.price}>
                    <h1>{`7,980,000 ${sum}`}</h1>
                    <p>{`9,876,000 ${sum}`}</p>
                </div>
                <div className={classes.button}>
                    <ButtonYellow
                        title={trans ? `Быстрый заказ` : `Tezkor buyurtma`}
                    />
                </div>
            </section>
            
            <section className={classes.action_box}>
                <IconButton size="small">
                    <img src={favoriteImg} alt="" />
                </IconButton>
                <IconButton size="small">
                    <img src={rateCard} alt="" />
                </IconButton>
            </section>

        </div>
    )
}