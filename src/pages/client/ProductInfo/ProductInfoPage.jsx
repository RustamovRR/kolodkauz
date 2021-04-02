import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button, IconButton } from '@material-ui/core'
import { useProductInfoPageStyles } from './productInfoStyles'

import { clr } from '../../../constants/colors'
import { RatingComp, CheckBox, Description, ButtonComponent, Product } from '../../../components/shared'

import { LeftGreyArrow, FavoriteBlack, CompareBlack } from '../../../assets/images/icons'
import productImg from '../../../assets/images/products/oil.png'
import castrolImg from '../../../assets/images/brands/castrol.png'
import { TranslateContext } from '../../../contexts'

export default function ProductInfoPage() {
    const classes = useProductInfoPageStyles()
    const { trans, sum } = useContext(TranslateContext)

    const sortRu = [
        `Популярности`, `Рейтингу`, `Название (А-Я)`
    ]

    const sortUz = [
        `Ommaboplik`, `Reyting`, `Nom (A-Z)`
    ]

    return (
        <>
            <div className={classes.root}>
                <IconButton className={classes.arrow}>
                    <LeftGreyArrow />
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
                                    <span style={{ color: clr.dark900 }} >123277394</span>
                                </p>

                            </div>
                            <RatingComp value={4} />
                            <div>
                                <p>
                                    <span style={{ color: clr.dark900 }} >2339</span>&nbsp;
                                    отзывов</p>
                            </div>
                            <div><p style={{ color: clr.dark900 }} >Купили более 100 000 раз</p></div>
                        </div>

                        <section style={{ width: 308 }} >
                            <div className={classes.price_box}>
                                <h2>{`7,850,000 ${sum}`}</h2>
                                <p>{`9,876,000 ${sum}`}</p>
                            </div>

                            <div className={classes.checkbox}>
                                <CheckBox label="Обратитесь к мастеру службы" />
                            </div>

                            <div className={classes.action_box}>
                                <ButtonComponent title="Быстрый заказ " />

                                <div className={classes.buttons}>
                                    <div className={classes.order_button}>
                                        <ButtonComponent outlined title="Корзинка" />
                                    </div>
                                    <IconButton>
                                        <FavoriteBlack />
                                    </IconButton>
                                    <IconButton>
                                        <CompareBlack />
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
                    <Product.SimilarProduct />
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
        </>
    )
}
