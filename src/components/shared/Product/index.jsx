import React, { useContext, useState } from "react";
import { Button, IconButton } from "@material-ui/core";
import { useProductStyles } from "./productStyles";

import { CheckBox, ButtonYellow } from '../../shared'
import { ContextRoot } from "../../../contexts";
import { FavoriteGreyOutline, FavoriteBlack } from '../../../assets/images/icons'
import image1 from "../../../assets/images/products/bagaj.png";
import { Link } from "react-router-dom";
import { Skeleton } from "@material-ui/lab";
import ButtonComponent from "../ButtonComponent";
import { useProductsQuery } from "../../../hooks/queries";
import { BASE_URL } from "../../../services/api";

export default function Product({
    data,
    favorite,
    compare,
    homePage,
}) {
    const classes = useProductStyles();
    const [showFavorite, setShowFavorite] = useState(false)

    const state = useContext(ContextRoot)
    const { sum } = useContext(ContextRoot)
    const { addToFavoriteCart, openFastBuyModal, setOpenFastBuyModal } = state.variables

    const productsQuery = useProductsQuery({ page: 0 })

    const handleClick = () => {
        setShowFavorite(!showFavorite)
    }

    const handleClickOpenModal = () => {
        setOpenFastBuyModal(true)
    }

    // console.log(data)
    return (
        <div className={classes.product_root}>
            <Link
                to={{ pathname: `product/${data?.slug}`, state: data?._id }}
                className={classes.product_link}
            // onMouseEnter={() => setShowFastBuyModal(true)}
            // onMouseLeave={() => setShowFastBuyModal(false)}
            >

                <section className={classes.card}>
                    <img
                        // src={image1}
                        src={`${BASE_URL}/${data?.image}`}
                        alt={data?.uz?.description}
                    />
                </section>

                <section className={classes.action_box}>
                    <div className={classes.price}>
                        <h3>{`${data?.price} ${sum}`}</h3>
                        <p>{`${data?.discount} ${sum}`}</p>
                    </div>
                    <div className={classes.text}>
                        <p>{data?.uz?.title}</p>
                    </div>
                </section>
                {
                    homePage && (
                        <div className={classes.showModalButton}>
                            <ButtonComponent
                                title="show"
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleClickOpenModal()
                                }}
                                slim
                                outlined
                            />
                        </div>
                    )
                }
            </Link>

            <section style={{ display: 'flex', alignItems: 'center' }}>
                <div className={classes.button}>
                    <ButtonYellow
                        title={`В корзину`}
                        onClick={() => addToFavoriteCart(data)}
                    />
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
