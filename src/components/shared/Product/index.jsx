import React, { useContext, useState } from "react";
import { IconButton } from "@material-ui/core";
import { useProductStyles } from "./productStyles";

import { CheckBox, ButtonYellow } from '../../shared'
import { TranslateContext } from "../../../contexts";
import { FavoriteGreyOutline, FavoriteBlack } from '../../../assets/images/icons'
import image1 from "../../../assets/images/products/bagaj.png";
import { Link } from "react-router-dom";

export default function Product({ favorite, compare }) {
    const classes = useProductStyles();
    const [showFavorite, setShowFavorite] = useState(false)
    const { trans, sum } = useContext(TranslateContext)

    const handleClick = () => {
        setShowFavorite(!showFavorite)
    }

    return (
        <div className={classes.product_root}>
            <Link to="#" className={classes.product_link}>
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
                </section>
            </Link>

            <section style={{ display: 'flex', alignItems: 'center' }}>
                <div className={classes.button}>
                    <ButtonYellow title="В корзину" />
                </div>
                <div>
                    {
                        compare && <div className={classes.checkbox}>
                            <CheckBox />
                        </div>
                    }
                </div>
            </section>

            {
                favorite && <section className={classes.icon_box} >
                    <IconButton size="small" onClick={handleClick}>
                        {showFavorite
                            ? <FavoriteBlack />
                            : <FavoriteGreyOutline />
                        }
                    </IconButton>
                </section>
            }

        </div>
    );
}
