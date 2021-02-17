import { Button, Divider, IconButton } from '@material-ui/core'
import React, { useContext } from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import image1 from "../../images/products/Rectangle 14.png";
import { useProductMediumStyles } from './productMediumStyles'
import { Rating } from '@material-ui/lab';

import favoriteImg from '../../images/icons/heart_outline.png'
import rateCard from '../../images/icons/rate_grey.png'
import { Link } from 'react-router-dom';
import { TranslateContext } from '../../contexts/TranslateContext';

export default function ProductMedium() {
    const classes = useProductMediumStyles()
    const { trans, sum } = useContext(TranslateContext)

    return (
        <div className={classes.root}>
            <section className={classes.card}>
                <img src={image1} alt="kolodka rasm" />
            </section>

            <section className={classes.text_box}>
                <h4>Мойка высокого давления </h4>
                <Rating defaultValue={4} />
                <section className={classes.info}>
                    <div className={classes.left_text}>
                        <p>Материал поршней</p>
                        <p>Материал корпуса насоса</p>
                        <p>Система привода мойки</p>
                        <p>Вес с упаковкой (кг)</p>
                        <p>Давление максимальное</p>
                    </div>
                    <div className={classes.right_text}>
                        <p>нержавеющая сталь</p>
                        <p>алюминий; пластик</p>
                        <p>аксиальный</p>
                        <p>15.08 кг</p>
                        <p>145 бар</p>
                    </div>
                </section>
                <div className={classes.expand}>
                    <Link to="#" >Развернуть</Link>
                </div>
            </section>

            <section className={classes.action_box}>
                <Divider orientation="vertical" className={classes.divider} />
                <div className={classes.price_box}>
                    <div className={classes.price}>
                        <h1></h1>
                        <h6>{`9,876,000 ${sum}`}</h6>
                    </div>
                    <div className={classes.action}>
                        <IconButton size="small">
                            <img src={favoriteImg} alt="" />
                        </IconButton>
                        <IconButton size="small">
                            <img src={rateCard} alt="" />
                        </IconButton>
                    </div>
                </div>

                <div className={classes.button}>
                    <ButtonComponent text="Быстрый заказ" />

                    <Button className={classes.basket_button}>
                        Корзинка
                    </Button>
                </div>
            </section>

        </div>
    )
}