import React, { useContext } from 'react'
import { Button, IconButton } from '@material-ui/core'
import Header from '../../components/header/Header'
import RatingComp from '../../components/rating/RatingComp'
import CheckboxComp from '../../components/checkBox/Checkbox'
import Footer from '../../components/footer/Footer'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { useProductInfoPageStyles } from './productInfoStyles'

import { clr, text } from '../../Globals/colors'
import productImg from '../../images/products/oil.png'
import leftArrow from '../../images/icons/left-arrow.png'
import heartImg from '../../images/icons/heart_black.png'
import rateImg from '../../images/icons/rate_black.png'
import castrolImg from '../../images/icons/castrol.png'
import Description from '../../components/description/Description'
import SImilarProduct from '../../components/similarProduct/SImilarProduct'
import { Link } from 'react-router-dom'
import { TranslateContext } from '../../contexts/TranslateContext'

export default function ProductInfoPage() {
    const classes = useProductInfoPageStyles()
    const { trans, setTrans } = useContext(TranslateContext)

    const sortRu = [
        `Популярности`, `Рейтингу`, `Название (А-Я)`
    ]

    const sortUz = [
        `Ommaboplik`, `Reyting`, `Nom (A-Z)`
    ]

    return (
        <>
            <Header />
            <div className={classes.root}>
                <IconButton className={classes.arrow}>
                    <img src={leftArrow} alt="" />
                </IconButton>

                <section className={classes.product_box}>
                    <section className={classes.product_image}>
                        <img src={productImg} alt="" />
                    </section>

                    <section className={classes.info_box}>
                        <h1>Castrol Edge Supercar TURBOMAX</h1>
                        <div className={classes.secondary}>
                            <div>
                                <p>Артикул:&nbsp;
                                     <span style={{ color: text.productSecondary }} >123277394</span>
                                </p>

                            </div>
                            <RatingComp value={4} />
                            <div>
                                <p>
                                    <span style={{ color: text.productSecondary }} >2339</span>&nbsp;
                                     отзывов</p>
                            </div>
                            <div><p>Купили более 100 000 раз</p></div>
                        </div>

                        <section style={{ width: 308 }} >
                            <div className={classes.price_box}>
                                <h2>7,850,000 сум </h2>
                                <p>9,876,000 сум</p>
                            </div>

                            <div className={classes.checkbox}>
                                <CheckboxComp label="Обратитесь к мастеру службы" />
                            </div>

                            <div className={classes.action_box}>
                                <ButtonComponent title="Быстрый заказ " />

                                <div className={classes.buttons}>
                                    <div className={classes.order_button}>
                                        <ButtonComponent outlined title="Корзинка" />
                                    </div>
                                    <IconButton>
                                        <img src={heartImg} alt="" />
                                    </IconButton>
                                    <IconButton>
                                        <img src={rateImg} alt="" />
                                    </IconButton>
                                </div>
                            </div>
                        </section>
                        <p className={classes.text}>Обратитесь к мастеру службы</p>
                        <img src={castrolImg} alt="" className={classes.photo} />
                    </section>
                </section>

                <section className={classes.description_box}>
                    <h1>
                        {trans ? `Описание` : `Tavsif`}
                    </h1>
                    <Description />
                </section>

                <section className={classes.similar_box}>
                    <h1>
                        {trans ? `Похожие товары` : `O'xshash mahsulotlar`}
                    </h1>
                    <SImilarProduct />
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
                            trans ? sortRu : sortUz.map(item => (
                                <Link className={classes.links}>
                                    <Button>
                                        {item}
                                    </Button>
                                </Link>
                            ))
                        }
                    </div>

                    <div className={classes.comments}>
                        {
                            [1, 2, 3, 4, 5].map(item => (
                                <div className={classes.users}>
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

            <section className={classes.footer_box}>
                <Footer />
            </section>
        </>
    )
}
