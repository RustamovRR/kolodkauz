import React, { useState, useContext, useEffect } from 'react'
import { IconButton } from '@material-ui/core'
import { useProductMediumStyles } from './productMediumStyles'

import { ButtonYellow, RatingComp } from '../..';
import { ContextRoot } from '../../../../contexts';
import { FavoriteBlack, HeartDarkBlue, CompareBlack, CompareBlackOutline } from '../../../../assets/images/icons'

import { BASE_URL } from '../../../../services/api';

export default function ProductMedium({ data }) {
    const classes = useProductMediumStyles()

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
            <section className={classes.card}>
                <img
                    src={`${BASE_URL}/${data?.image}`}
                    alt={data?.uz?.description}
                />
            </section>

            <section className={classes.text_box}>
                <h4>{data?.uz.title}</h4>
                <RatingComp value={4} />
                <section className={classes.info}>
                    <div className={classes.left_text}>
                        {
                            (trans == 'ru'
                                ? data?.ru?.characteristics
                                : data?.uz?.characteristics
                            ).map((item) => (
                                <p key={item.value}>{item.option}:&nbsp;
                                    <span>{item.value}</span>
                                </p>
                            ))
                        }
                    </div>
                </section>
            </section>

            <section className={classes.right_box}>
                <div className={classes.price_box}>
                    <div className={classes.price}>
                        <h1>{`${data?.price} ${sum}`}</h1>
                        <p>{`${data?.discount} ${sum}`}</p>
                    </div>
                    <div className={classes.button}>
                        <ButtonYellow
                            title={trans == 'ru' ? `Быстрый заказ` : `Tezkor buyurtma`}
                            onClick={handleAddCart}
                        />
                    </div>
                </div>

                <div className={classes.action_box}>
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
            </section>

        </div >
    )
}