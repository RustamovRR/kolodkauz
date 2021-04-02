import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import { useFastDeliveryStyles } from './fastDeliveryStyles'

import { TranslateContext } from '../../../contexts'
import { Header, RatingComp, CheckBox, ProductBrand, ButtonComponent, Layout } from '../../../components/shared'
import { Close, FavoriteBlack } from '../../../assets/images/icons'
import oilImg from '../../../assets/images/products/oil.png'


export default function FastDeliveryPage() {
    const classes = useFastDeliveryStyles()
    const { trans, sum } = useContext(TranslateContext)

    return (
        <Layout>
            <div className={classes.root}>

                <main className={classes.card_box}>
                    <section className={classes.text_box}>
                        <div>
                            <h1>Castrol/Автомобильная масло</h1>
                            <div className={classes.secondary_box}>
                                <p className={classes.artikul}>Артикул: 123277394</p>
                                <RatingComp value={5} />
                                <p className={classes.review}> 2339 отзывов</p>
                                <IconButton size="small" className={classes.icon}>
                                    <FavoriteBlack />
                                </IconButton>
                                <p className={classes.favorite}>В избранное</p>
                            </div>
                        </div>

                        <IconButton className={classes.close}>
                            <Close />
                        </IconButton>
                    </section>

                    <section className={classes.content_box}>
                        <section className={classes.image_box}>
                            <img src={oilImg} alt="" />
                        </section>

                        <section className={classes.right_box}>
                            <div className={classes.price}>
                                <h2>{`7,850,000 ${sum}`}</h2>
                                <p>{`9,876,000 ${sum}`}</p>
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
                        <Link> Больше информации о товаре</Link>
                    </section>
                </main>

            </div>
        </Layout>
    )
}
