import React, { useContext, useState } from "react";
import { Button, IconButton } from "@material-ui/core";
import { useProductStyles } from "./productStyles";

import { CheckBox, ButtonYellow } from '../../shared'
import { ContextRoot } from "../../../contexts";
import { FavoriteGreyOutline, FavoriteBlack } from '../../../assets/images/icons'
import image1 from "../../../assets/images/products/bagaj.png";
import { Link } from "react-router-dom";
import { Skeleton } from "@material-ui/lab";
import useProductsData from "../../../hooks/queries/useProductsData";
import ButtonComponent from "../ButtonComponent";

export default function Product({
    favorite, compare, homePage,
    data
}) {
    const classes = useProductStyles();
    const [showFavorite, setShowFavorite] = useState(false)
    const { trans, sum, productsData, addToFavoriteCart, removeFromFavoriteCart } = useContext(ContextRoot)

    const handleClick = () => {
        setShowFavorite(!showFavorite)
    }
    const { success } = productsData

    const url = `http://zap.uz`
    return (
        <div className={classes.product_root}>
            <Link to={{ pathname: `/product/${data?._id}`, state: data }} className={classes.product_link}>

                <section className={classes.card}>
                    <img
                        src={`${url}/${data?.image}`}
                        alt={data?.uz.type.description}
                    />
                </section>

                <section className={classes.action_box}>
                    <div className={classes.price}>
                        <h3>{`${data?.price} ${sum}`}</h3>
                        <p>{`${data?.discount} ${sum}`}</p>
                    </div>

                    <div className={classes.text}>
                        <p>{data?.uz.type.title}</p>
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
                    <ButtonYellow
                        favorite={favorite}
                        title={favorite ? `Sevimlidan o'chirish` : `В корзину`}
                        onClick={() => !favorite && removeFromFavoriteCart(data)}
                    />
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

            {/* <ButtonComponent title="Ko'rish" /> */}

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
