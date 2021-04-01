import React, { useContext, useState } from "react";
import { TranslateContext } from "../../contexts/TranslateContext";
import { IconButton } from "@material-ui/core";
import ButtonYellow from "../buttonYellow/ButtonYellow";
import CheckBoxComp from '../checkBox/Checkbox'

import { useProductStyles } from "./productStyles";
import image1 from "../../assets/images/products/bagaj.png";
import favoriteImg from '../../assets/images/icons/favorite_product.svg'
import favoriteIcon from '../../assets/images/icons/favorite.svg'

export default function Product({ favorite, compare }) {
    const classes = useProductStyles();
    const [showFavorite, setShowFavorite] = useState(false)
    const { trans, sum } = useContext(TranslateContext)

    const handleClick = () => {
        setShowFavorite(!showFavorite)
    }

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

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className={classes.button}>
                        <ButtonYellow title="В корзину" />
                    </div>
                    <div>
                        {
                            compare && <div className={classes.checkbox}>
                                <CheckBoxComp />
                            </div>
                        }
                    </div>
                </div>
            </section>

            {
                favorite && <section className={classes.icon_box} >
                    <IconButton size="small" onClick={handleClick}>
                        {showFavorite
                            ? <img src={favoriteIcon} alt="" />
                            : <img src={favoriteImg} alt="" />
                        }
                    </IconButton>
                </section>
            }

        </div>
    );
}
