import React, { useContext, useState } from "react";
import { TranslateContext } from "../../contexts/TranslateContext";
import ButtonYellow from "../buttonYellow/ButtonYellow";

import image1 from "../../images/products/bagaj.png";
import { useProductStyles } from "./productStyles";

export default function Product({ favorite, compare }) {
    const classes = useProductStyles();
    const [showIcon, setShowIcon] = useState(true)
    const { trans, sum } = useContext(TranslateContext)

    return (
        <div className={classes.product_root}>
            <section className={classes.card}>
                <img src={image1} alt="" />
            </section>

            <section className={classes.action_box}>
                <div className={classes.price}>
                    <h3>{`1,845,600 ${sum}`}</h3>
                    <p>{`2,845,600 ${sum}`}</p>
                </div>

                <div className={classes.text}>
                    <p>Автомобильная шина Hankook Tire Ventus Prime</p>
                </div>

                <div className={classes.button}>
                    <ButtonYellow title="В корзину" />
                </div>
            </section>
        </div>
    );
}
