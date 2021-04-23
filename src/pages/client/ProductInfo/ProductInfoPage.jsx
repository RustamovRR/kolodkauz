import React, { useContext, useEffect } from 'react'
import { Link, NavLink, useHistory, useParams } from 'react-router-dom'
import { Button, IconButton } from '@material-ui/core'
import { useProductInfoPageStyles } from './productInfoStyles'

import { clr } from '../../../constants/colors'
import { Layout, RatingComp, CheckBox, Description, ButtonComponent, SimilarProduct } from '../../../components/shared'

import { LeftGreyArrow, FavoriteBlack, CompareBlack } from '../../../assets/images/icons'
import productImg from '../../../assets/images/products/oil.png'
import castrolImg from '../../../assets/images/brands/castrol.png'
import { ContextRoot } from '../../../contexts'
import { request } from '../../../services/api'
import { useLocation } from 'react-use'

export default function ProductInfoPage() {
    const classes = useProductInfoPageStyles()
    const { trans, sum } = useContext(ContextRoot)
    const { state } = useLocation()
    const { goBack } = useHistory()
    const data = state.state

    const sortRu = [
        `Популярности`, `Рейтингу`, `Название (А-Я)`
    ]

    const sortUz = [
        `Ommaboplik`, `Reyting`, `Nom (A-Z)`
    ]

    const url = `http://zap.uz`

    return (
        <Layout>
            <div className={classes.root}>
                <IconButton className={classes.arrow} onClick={() => goBack()} >
                    <LeftGreyArrow />
                </IconButton>

                <section className={classes.product_box}>
                    <section className={classes.product_image}>
                        <img
                            src={`${url}/${data?.image}`}
                            alt={data?.uz?.type.description}
                        />
                    </section>

                    <section className={classes.info_box}>
                        <h1>{data?.uz?.type.title}</h1>
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

                        <section >
                            <div className={classes.price_box}>
                                <h2>{`${data?.price} ${sum}`}</h2>
                                <p>{`${data?.discount} ${sum}`}</p>
                            </div>

                            <section className={classes.inputs} >
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
