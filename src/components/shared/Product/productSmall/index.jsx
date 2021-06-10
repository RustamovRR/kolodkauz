import React, { useState, useEffect, useContext } from 'react'
import { Rating } from '@material-ui/lab';
import { IconButton } from '@material-ui/core';
import { useProductSmallStyles } from './productSmallStyles';

import { ContextRoot } from '../../../../contexts';
import { BASE_URL } from '../../../../services/api'
import { Quantity, ButtonYellow } from '../..'
import { FavoriteBlack, HeartDarkBlue, CompareBlack, CompareBlackOutline } from '../../../../assets/images/icons'

export default function ProductSmall({ data }) {
    const classes = useProductSmallStyles()

    const [showFavorite, setShowFavorite] = useState(false)
    const [showCompare, setShowCompare] = useState(false)
    const [detailProduct, setDetailProduct] = useState([])

    const state = useContext(ContextRoot)
    const { sum, trans } = useContext(ContextRoot)
    const { productsData } = state.product
    const {
        cart, addCart,
        userFavorite, addFavorite, removeFavorite,
        compare, addCompare, removeCompare
    } = state.user

    const productId = data?._id

    // ******************************** Favorite functions ************************************//
    const handleAddCart = () => {
        addCart(detailProduct)
    }

    // ******************************** Favorite functions ************************************//
    const changeFavorite = () => {
        setShowFavorite(!showFavorite)
    }

    const handleFavorite = () => {
        showFavorite
            ? removeFavorite(productId)
            : addFavorite(detailProduct)
    }

    // ******************************** Comparison functions ************************************//
    const changeCompare = () => {
        setShowCompare(!showCompare)
    }

    const handleCompare = () => {
        showCompare
            ? removeCompare(productId)
            : addCompare(detailProduct)
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
        localStorage.setItem('userFavorite', JSON.stringify(userFavorite))
        localStorage.setItem('compare', JSON.stringify(compare))
    }, [cart, userFavorite, compare])

    return (
        <div className={classes.root}>
            <section className={classes.image_box}>
                <img
                    src={`${BASE_URL}/${data?.image}`}
                    alt={data?.uz.description}
                    width={110}
                    height={110}
                    style={{ objectFit: 'contain' }}
                />
            </section>

            <section className={classes.text_box}>
                <h1>{data?.uz.title}</h1>
                <Rating defaultValue={4} size="small" />
                <div className={classes.price_box}>
                    <p>{`${data?.price} ${sum}`}</p>
                    <span>{`${data?.discount} ${sum}`}</span>
                </div>
            </section>

            <section className={classes.right_box} >
                <div className={classes.count_box}>
                    <Quantity />
                </div>

                <div className={classes.action_box}>
                    <div className={classes.fast_order}>
                        <ButtonYellow
                            onClick={handleAddCart}
                            title={trans === 'ru' ? "Быстрый заказ" : "Tezkor buyurtma"}
                        />
                    </div>
                    <div className={classes.buttons}>
                        <IconButton
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

                        <IconButton
                            onClick={() => {
                                changeCompare()
                                handleCompare()
                            }}
                        >
                            {showCompare
                                ? <CompareBlack />
                                : <CompareBlackOutline />
                            }
                        </IconButton>

                    </div>
                </div>
            </section>
        </div>
    )
}