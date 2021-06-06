import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import { Button, IconButton } from '@material-ui/core'
import { useProductInfoPageStyles } from './productInfoStyles'

import { clr } from '../../../constants/colors'
import { Layout, RatingComp, CheckBox, Description, ButtonComponent, SimilarProduct } from '../../../components/shared'

import { LeftGreyArrow, FavoriteBlack, CompareBlack, CompareBlackOutline, HeartOutlineBlack } from '../../../assets/images/icons'
import castrolImg from '../../../assets/images/brands/castrol.png'
import { ContextRoot } from '../../../contexts'
// import { request } from '../../../services/api'
import { useProductQuery } from '../../../hooks/queries'
import { BASE_URL, request } from '../../../services/api'

export default function ProductInfoPage() {
    const classes = useProductInfoPageStyles()
    const [showFavorite, setShowFavorite] = useState(false)
    const [showCompare, setShowCompare] = useState(false)
    const [detailProduct, setDetailProduct] = useState([])
    const { goBack } = useHistory()
    const { state } = useLocation()

    const context = useContext(ContextRoot)
    const { trans, sum } = useContext(ContextRoot)
    const { userData, addCart, cart } = context.user
    const { productsData } = context.product

    const productQuery = useProductQuery({ id: state })
    const data = productQuery.isSuccess && productQuery.data?.data ? productQuery.data?.data : []

    const productPrice = data.data?.price
    const productBuyCount = data.data?.buy_count
    const productDiscount = data.data?.discount
    const productQuantity = data.data?.quantity
    const productArtikul = data.data?.artikul
    const productId = data.data?._id

    const productUz = data.data?.uz
    const productRu = data.data?.ru

    const productRating = data.data?.rating
    // const productCount = productRating?.count ? productRating?.count : 10
    const productOverall = productRating?.overall ? productRating?.overall : 10

    console.log(cart)

    const handleFavorite = () => {
        setShowFavorite(!showFavorite)
    }
    const handleCompare = () => {
        setShowCompare(!showCompare)
    }

    const handleAddCart = () => {
        addCart(detailProduct)
    }

    useEffect(() => {
        if (productId) {

            productsData.data?.forEach(product => {
                if (product._id === productId) setDetailProduct(product)
            })
        }
        handleAddCart()
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [productId, productsData])

    const sortRu = [
        `Популярности`, `Рейтингу`, `Название (А-Я)`
    ]

    const sortUz = [
        `Ommaboplik`, `Reyting`, `Nom (A-Z)`
    ]

    const changeLike = async () => {
        await request.patch('/users/changeCart', {})
    }

    return (
        <Layout>
            <div className={classes.root}>
                <IconButton className={classes.arrow} onClick={() => goBack()} >
                    <LeftGreyArrow />
                </IconButton>

                <section className={classes.product_box}>
                    <section className={classes.product_image}>
                        <img
                            src={`${BASE_URL}/${data.data?.image}`}
                            alt={productUz?.description}
                        />
                    </section>

                    <section className={classes.info_box}>
                        <h1>{trans ? productRu?.title : productUz?.title}</h1>
                        <div className={classes.secondary}>
                            <div>
                                <p>Артикул:&nbsp;
                                    <span style={{ color: clr.dark900 }} >{productArtikul}</span>
                                </p>

                            </div>
                            <RatingComp value={4} />
                            <div>
                                <p>
                                    <span style={{ color: clr.dark900 }} >{productOverall}</span>&nbsp;
                                    отзывов</p>
                            </div>
                            <div><p style={{ color: clr.dark900 }} >
                                {trans ? `Купили более ${productBuyCount} раз` : `${productBuyCount} martadan ortiq sotilgan`}
                            </p></div>
                        </div>

                        <section >
                            <div className={classes.price_box}>
                                <h2>{`${productPrice} ${sum}`}</h2>
                                <p>{`${productDiscount} ${sum}`}</p>
                            </div>

                            <section className={classes.inputs} >
                                <div className={classes.checkbox}>
                                    <CheckBox label="Обратитесь к мастеру службы" />
                                </div>

                                <div className={classes.action_box}>
                                    <ButtonComponent title="Быстрый заказ " />

                                    <div className={classes.buttons}>
                                        <div className={classes.order_button}>
                                            <ButtonComponent
                                                outlined
                                                title="Корзинка"
                                                onClick={handleAddCart}
                                            />
                                        </div>
                                        <IconButton onClick={handleFavorite}>
                                            {showFavorite
                                                ? <FavoriteBlack />
                                                : <HeartOutlineBlack />
                                            }
                                        </IconButton>
                                        <IconButton onClick={handleCompare}>
                                            {showCompare
                                                ? <CompareBlack />
                                                : <CompareBlackOutline />
                                            }
                                        </IconButton>
                                    </div>
                                </div>
                            </section>
                        </section>

                        <p className={classes.text}>Обратитесь к мастеру службы</p>
                        <img src={castrolImg} alt="" className={classes.photo} />
                    </section>
                </section>

                <section className={classes.description_box}>
                    <h1>
                        {trans ? `Описание` : `Tavsif`}
                    </h1>
                    <Description data={trans ? productRu?.characteristics : productUz?.characteristics} />
                </section>

                <section className={classes.similar_box}>
                    <h1>
                        {trans ? `Похожие товары` : `O'xshash mahsulotlar`}
                    </h1>
                    <SimilarProduct />
                </section>

                <section className={classes.comment_box}>
                    <h1>
                        {trans ? `Комментарий` : `Izoh`}
                    </h1>
                    <div className={classes.sign_button}>
                        <ButtonComponent title={trans ? `Войти` : `Kirish`} />
                    </div>

                    <div className={classes.navigation}>
                        <p>
                            {trans ? `Сортировать по:` : `Saralash turi:`}
                        </p>
                        {
                            trans ? sortRu : sortUz.map((item, index) => (
                                <Link className={classes.links} key={item} >
                                    <Button>
                                        {item}
                                    </Button>
                                </Link>
                            ))
                        }
                    </div>

                    <div className={classes.comments}>
                        {
                            [1, 2, 3, 4, 5].map((item, index) => (
                                <div className={classes.users} key={item} >
                                    <p className={classes.comment_name}>Абдусаттор</p>
                                    <RatingComp value={4} />
                                    <p className={classes.comment_text}>
                                        Добрый день! Благодарим Вас за отзыв. Приятного пользования и удачных покупок в дальнейшем. С уважением, Служба поддержки Black+Decker
                                    </p>
                                    <p className={classes.comment_date}>4 Дек, 2020</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className={classes.expand}>
                        <Link>
                            {trans ? `Развернуть` : `Kengaytirish`}
                        </Link>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
