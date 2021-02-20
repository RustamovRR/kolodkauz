import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import { TranslateContext } from '../../contexts/TranslateContext'
import Header from '../../components/header/Header'
import RatingComp from '../../components/rating/RatingComp'
import Checkbox from '../../components/checkBox/Checkbox'
import ProductBrand from '../../components/productBrand/ProductBrand'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

import { useFastDeliveryStyles } from './fastDeliveryStyles'
import oilImg from '../../images/products/oil.png'
import closeImg from '../../images/icons/close.png'
import favoriteIcon from '../../images/icons/heart_outline.png'

export default function FastDeliveryPage() {
    const classes = useFastDeliveryStyles()
    const { trans, sum } = useContext(TranslateContext)

    return (
        <div className={classes.root}>
            <header className={classes.header_box}>
                <Header />
            </header>

            <main className={classes.card_box}>
                <section className={classes.text_box}>
                    <div>
                        <h1>Castrol/Автомобильная масло</h1>
                        <div className={classes.secondary_box}>
                            <p className={classes.artikul}>Артикул: 123277394</p>
                            <RatingComp value={5} />
                            <p className={classes.review}> 2339 отзывов</p>
                            <IconButton size="small" className={classes.icon}>
                                <img src={favoriteIcon} alt="" />
                            </IconButton>
                            <p className={classes.favorite}>В избранное</p>
                        </div>
                    </div>
                    
                    <IconButton className={classes.close}>
                        <img src={closeImg} alt="" />
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
                            <Checkbox label="Обратитесь к мастеру службы" />
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
    )
}
