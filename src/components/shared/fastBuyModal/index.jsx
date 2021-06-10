import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@material-ui/core'

import { ContextRoot } from '../../../contexts'
import { RatingComp, CheckBox, ProductBrand, ButtonComponent } from '../../../components/shared'
import { Close, FavoriteBlack, HeartDarkBlue } from '../../../assets/images/icons'
import oilImg from '../../../assets/images/products/oil.png'
import { useFastBuyModalStyles } from './fastBuyModalStyles'
import { BASE_URL } from '../../../services/api'
import { useProductQuery } from '../../../hooks/queries'

export default function FastBuyModal({ data }) {
    const classes = useFastBuyModalStyles()
    const [detailProduct, setDetailProduct] = useState([])
    const [showFavorite, setShowFavorite] = useState(false)

    const state = useContext(ContextRoot)
    const { trans, sum } = useContext(ContextRoot)
    const { openFastBuyModal, setOpenFastBuyModal } = state.variables
    const { productsData, productId } = state.product
    const { userFavorite, addFavorite, removeFavorite } = state.user

    const productQuery = useProductQuery({ id: productId })
    // console.log(productQuery?.data?.data)

    const handleClickCloseModal = () => {
        setOpenFastBuyModal(false)
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

    useEffect(() => {
        if (productId) {

            productsData.data?.forEach(product => {
                if (product._id === productId) setDetailProduct(product)
            })
        }
    }, [productId, productsData])

    useEffect(() => {
        localStorage.setItem('userFavorite', JSON.stringify(userFavorite))
    }, [userFavorite])

    return (
        <Dialog
            className={classes.root}
            onClose={handleClickCloseModal}
            open={openFastBuyModal}
            scroll="body"
            maxWidth="xl"
        >
            <main className={classes.card_box}>
                <section className={classes.text_box}>
                    <div>
                        <h1>{trans === 'ru' ? data?.ru.title : data?.uz.title}</h1>

                        <div className={classes.secondary_box}>
                            <p className={classes.artikul}>Артикул: {data?.artikul}</p>
                            <RatingComp value={5} />
                            <p className={classes.review}> {data?.rating.overall} отзывов</p>
                            <IconButton
                                className={classes.icon}
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
                        </div>
                    </div>

                    <IconButton className={classes.close} onClick={handleClickCloseModal} >
                        <Close />
                    </IconButton>
                </section>

                <section className={classes.content_box}>
                    <section className={classes.image_box}>
                        <img
                            src={`${BASE_URL}/${data?.image}`}
                            alt={data?.uz.description}
                        />
                    </section>

                    <section className={classes.right_box}>
                        <div className={classes.price}>
                            <h2>{`${data?.price} ${sum}`}</h2>
                            <p>{`${data?.discount} ${sum}`}</p>
                        </div>

                        <div className={classes.checkbox}>
                            <CheckBox label="Обратитесь к мастеру службы" />
                        </div>

                        <div className={classes.buttons}>
                            <ButtonComponent title="Войти" />
                            <ButtonComponent outlined title="Добавить в корзину" />
                        </div>

                        <div className={classes.brand}>
                            <ProductBrand />
                        </div>

                        <p className={classes.shipping}>Бесплатная доставка</p>

                    </section>
                </section>

                <section className={classes.link}>
                    <Link to={{ pathname: `/product/${data?.slug}`, state: data?._id }}> Больше информации о товаре</Link>
                </section>
            </main>

        </Dialog>
    )
}
