import React, { useContext, useState } from "react";
import { IconButton } from "@material-ui/core";
import { useProductStyles } from "./productStyles";

import { CheckBox, ButtonYellow } from '../../shared'
import { ContextRoot } from "../../../contexts";
import { FavoriteGreyOutline, FavoriteBlack } from '../../../assets/images/icons'
import image1 from "../../../assets/images/products/bagaj.png";
import { Link } from "react-router-dom";
import { Skeleton } from "@material-ui/lab";

export default function Product({ favorite, compare }) {
    const classes = useProductStyles();
    const [showFavorite, setShowFavorite] = useState(false)
    const { trans, sum } = useContext(ContextRoot)

    const handleClick = () => {
        setShowFavorite(!showFavorite)
    }

    return (
        <div className={classes.product_root}>
            <Link to="#" className={classes.product_link}>
                <section className={classes.card}>
                    <img src={image1} alt="" />
                    {/* <img src="https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg" alt="" /> */}
                </section>
                {/* <Skeleton
                    height={220}
                    animation="wave"
                    variant="rect"
                /> */}

                <section className={classes.action_box}>
                    <div className={classes.price}>
                        <h3>{`1,845,600 ${sum}`}</h3>
                        <p>{`2,845,600 ${sum}`}</p>
                    </div>

                    <div className={classes.text}>
                        <p>Автомобильная шина Hankook Tire Ventus Prime</p>
                        {/* <Skeleton
                            width="95%"
                            height={64}
                            animation="wave"
                        /> */}
                    </div>
                </section>
            </Link>

            <section style={{ display: 'flex', alignItems: 'center' }}>
                <div className={classes.button}>
                    <ButtonYellow title="В корзину" />
                </div>
                {/* <Skeleton
                    width={96}
                    height={64}
                    animation="wave"
                /> */}
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
