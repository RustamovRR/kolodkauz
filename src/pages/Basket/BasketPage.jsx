import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { useBasketPageStyles } from './basketPageStyles'
import TabMenu from '../../components/tabmenu/TabMenu'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@material-ui/core'
import BasketList from '../../components/basketList/BasketList'
import BasketPay from '../../components/basketPay/BasketPay'
import InputBasket from '../../components/input/InputBasket'

export default function BasketPage() {
    const classes = useBasketPageStyles()

    const labels = [
        `Контактный телефон`, `Ф.И.О`, `Область`, `Город / Район`, `Адрес`, `Индекс`
    ]

    return (
        <div className={classes.root}>
            <section className={classes.header_box}>
                <Header />
            </section>

            <section className={classes.tabs_box}>
                <TabMenu />
            </section>

            <section className={classes.basket_box}>
                <div className={classes.left_box}>
                    <Breadcrumbs className={classes.navigation}>
                        <Link to="/" className={classes.link}>
                            Главная
                    </Link>
                        <p >
                            Корзина
                    </p>
                    </Breadcrumbs>

                    <h1>Корзина</h1>
                    <BasketList />
                    <BasketList />
                    <BasketList />
                </div>

                <div className={classes.modal_box}>
                    <BasketPay />
                </div>
            </section>

            <section className={classes.billing_box}>
                <h1>Информация биллинга</h1>
                <p>
                    Для заказа товаров требуется регистрация.Если вы уже зарегистрированы, войдите в свою учетную запись
                </p>
                <section className={classes.input_box}>
                    {
                        labels.map((label, index) => (
                            <div className={classes.input_label} key={label}>
                                <label htmlFor={label}>{label}</label>
                                <div className={classes.input}>
                                    <InputBasket id={label} index={index} />
                                </div>
                            </div>
                        ))
                    }
                </section>
            </section>

            <section className={classes.footer_box}>
                <Footer />
            </section>

        </div>
    )
}
