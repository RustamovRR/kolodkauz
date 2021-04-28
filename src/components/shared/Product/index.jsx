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
    const { sum, addToFavoriteCart, openFastBuyModal, setOpenFastBuyModal } = useContext(ContextRoot)
    const productsQuery = useProductsQuery({ page: 0 })

    const handleClick = () => {
        setShowFavorite(!showFavorite)
    }

    const handleClickOpenModal = () => {
        setOpenFastBuyModal(true)
    }

    return (
        <div className={classes.product_root}>
            <Link
                to={{ pathname: `#`, state: data?._id }}
                className={classes.product_link}
            // onMouseEnter={() => setShowFastBuyModal(true)}
            // onMouseLeave={() => setShowFastBuyModal(false)}
            >

                <section className={classes.card}>
                    {/* {
                        productsQuery.isFetching ? (
                            <Skeleton
                                width={220}
                                height={220}
                                animation="wave"
                                variant="rect"
                            />
                        ) : ( */}
                    <img
                        src={image1}
                        // src={`${BASE_URL}/${data?.image}`}
                        alt=''
                    />
                    {/* )
                    } */}
                </section>

                <section className={classes.action_box}>
                    {/* {
                        productsQuery.isFetching ? ( */}
                    <Skeleton
                        width="70%"
                        height={28}
                        animation="wave"
                    />
                    {/* ) : (
                            <div className={classes.price}>
                                <h3>{`${data?.price} ${sum}`}</h3>
                                <p>{`${data?.discount} ${sum}`}</p>
                            </div>
                        ) */}
                    {/* } */}

                    {/* {
                        productsQuery.isFetching ? ( */}
                    <Skeleton
                        width="95%"
                        height={54}
                        animation="wave"
                    />
                    {/* ) : (
                            <div className={classes.text}>
                                <p>{data?.uz.title}</p>
                            </div>
                        )
                    } */}
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
            {/* {
                showFastBuyModal && ( */}
            {/* )
            } */}
            {/* {
                productsQuery.isFetching ? ( */}
            <Skeleton
                width={96}
                height={64}
                animation="wave"
            />
            {/* ) : (
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
                )
            } */}

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
