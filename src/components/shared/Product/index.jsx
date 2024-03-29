import React, { useContext, useEffect, useState } from "react";
import { Button, IconButton } from "@material-ui/core";
import toast from 'react-hot-toast';
import { useProductStyles } from "./productStyles";

import { CheckBox, ButtonYellow } from '../../shared'
import { ContextRoot } from "../../../contexts";
import { FavoriteGreyOutline, FavoriteBlack, HeartDarkBlue } from '../../../assets/images/icons'
import { Link, useParams } from "react-router-dom";
import ButtonComponent from "../ButtonComponent";
import { BASE_URL } from "../../../services/api";
import { useProductQuery } from "../../../hooks/queries";

export default function Product({
    id,
    data,
    favorite,
    favoritePage,
    compare,
    homePage
}) {
    const classes = useProductStyles();
    const [showFavorite, setShowFavorite] = useState(false)
    const [detailProduct, setDetailProduct] = useState([])
    const params = useParams()

    const context = useContext(ContextRoot)
    const { sum, trans } = useContext(ContextRoot)
    const { userData, addCart, cart, addFavorite, removeFavorite, userFavorite } = context.user
    const { productsData, productId, setProductId } = context.product
    const { addToFavoriteCart, openFastBuyModal, setOpenFastBuyModal } = context.variables

    // const data = useProductQuery({ id: id })

    const productDataId = data?._id

    const handleClickOpenModal = () => {
        setProductId(productDataId)
        setOpenFastBuyModal(true)
    }

    const changeFavorite = () => {
        setShowFavorite(!showFavorite)
    }

    const handleAddCart = () => {
        addCart(detailProduct)
    }

    const handleFavorite = () => {
        showFavorite
            ? removeFavorite(data?._id)
            : addFavorite(detailProduct)
    }

    useEffect(() => {
        if (productDataId) {

            productsData.data?.forEach(product => {
                if (product._id === productDataId) setDetailProduct(product)
            })
        }
    }, [productDataId, productsData])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
        localStorage.setItem('userFavorite', JSON.stringify(userFavorite))
    }, [cart, userFavorite])

    return (
        <div className={classes.product_root}>
            <Link
                to={{ pathname: `/product/${data?.slug}`, state: data?._id }}
                className={classes.product_link}
                onClick={() => window.scrollTo(0, 0)}
            >

                <section className={classes.card}>
                    <img
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
                        title={trans === 'ru' ? `В корзину` : `Savatga qo'shish`}
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
                favorite &&
                <section className={classes.icon_box} >
                    <IconButton
                        size="small"
                        onClick={() => {
                            changeFavorite()
                            handleFavorite()
                        }}
                    >
                        {showFavorite
                            ? <FavoriteBlack />
                            : <HeartDarkBlue />
                        }
                    </IconButton>
                </section>
            }
            {
                favoritePage && <section className={classes.icon_box} >
                    <IconButton
                        size="small"
                        onClick={() => removeFavorite(data?._id)}
                    >
                        <FavoriteBlack />
                    </IconButton>
                </section>
            }

        </div>
    );
}
