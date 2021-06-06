import React, { useContext, useEffect, useState } from "react";
import { Button, IconButton } from "@material-ui/core";
import { useProductStyles } from "./productStyles";

import { CheckBox, ButtonYellow } from '../../shared'
import { ContextRoot } from "../../../contexts";
import { FavoriteGreyOutline, FavoriteBlack, HeartDarkBlue } from '../../../assets/images/icons'
import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent";
import { BASE_URL } from "../../../services/api";

export default function Product({
    data,
    favorite,
    compare,
    homePage,
}) {
    const classes = useProductStyles();
    const [showFavorite, setShowFavorite] = useState(false)
    const [detailProduct, setDetailProduct] = useState([])

    const state = useContext(ContextRoot)
    const { sum, trans } = useContext(ContextRoot)
    const { userData, addCart, cart } = state.user
    const { productsData } = state.product
    const { addToFavoriteCart, openFastBuyModal, setOpenFastBuyModal } = state.variables
    const productId = data?._id

    // const productsQuery = useProductsQuery({ page: 0 })

    const handleClick = () => {
        setShowFavorite(!showFavorite)
    }

    const handleClickOpenModal = () => {
        setOpenFastBuyModal(true)
    }

    useEffect(() => {
        if (productId) {

            productsData.data?.forEach(product => {
                if (product._id === productId) setDetailProduct(product)
            })
        }
    }, [productId, productsData])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const handleAddCart = () => {
        addCart(detailProduct)
    }

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
                        title={trans ? `В корзину` : `Savatga qo'shish`}
                        onClick={handleAddCart}
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
                            : <HeartDarkBlue />
                        }
                    </IconButton>
                </section>
            }

        </div>
    );
}
