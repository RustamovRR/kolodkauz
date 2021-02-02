import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { useBasketPageStyles } from './basketPageStyles'
import TabMenu from '../../components/tabmenu/TabMenu'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@material-ui/core'
import BasketList from '../../components/basketList/BasketList'
import BasketPay from '../../components/basketPay/BasketPay'

export default function BasketPage() {
    const classes = useBasketPageStyles()

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

            <section className={classes.footer_box}>
                <Footer />
            </section>

        </div>
    )
}
