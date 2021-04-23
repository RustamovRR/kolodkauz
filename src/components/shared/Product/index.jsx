import React, { useContext, useState } from "react";
import { IconButton } from "@material-ui/core";
import { useProductStyles } from "./productStyles";

import { CheckBox, ButtonYellow } from '../../shared'
import { ContextRoot } from "../../../contexts";
import { FavoriteGreyOutline, FavoriteBlack } from '../../../assets/images/icons'
import image1 from "../../../assets/images/products/bagaj.png";
import { Link } from "react-router-dom";
import { Skeleton } from "@material-ui/lab";

export default function Product({
    favorite, compare,
    id,
    data,
    image,
    uz,
    buy_count,
    discount,
    price,
    quantity,
    type
}) {
    const classes = useProductStyles();
    const [showFavorite, setShowFavorite] = useState(false)
    const { trans, sum } = useContext(ContextRoot)

    const handleClick = () => {
        setShowFavorite(!showFavorite)
    }

    const url = `http://zap.uz`

    return (
        <div className={classes.product_root}>
            <Link to={{ pathname: `/product/${id}`, state: data }} className={classes.product_link}>
                <section className={classes.card}>
                    <img
                        src={`${url}/${image}`}
                        alt={uz?.type.description}
                    />
                </section>
                {/* <Skeleton
                    height={220}
                    animation="wave"
                    variant="rect"
                /> */}

                <section className={classes.action_box}>
                    <div className={classes.price}>
                        <h3>{`${price} ${sum}`}</h3>
                        <p>{`${discount} ${sum}`}</p>
                    </div>

                    <div className={classes.text}>
                        <p>{uz?.type.title}</p>
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
