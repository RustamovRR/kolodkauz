import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { useBasketPageStyles } from './basketPageStyles'
import TabMenu from '../../components/tabmenu/TabMenu'
import BasketList from '../../components/basketList/BasketList'
import BasketPay from '../../components/basketPay/BasketPay'
import InputBasket from '../../components/input/InputBasket'
import { TranslateContext } from '../../contexts/TranslateContext'
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs'

export default function BasketPage() {
    const classes = useBasketPageStyles()
    const { trans } = useContext(TranslateContext)

    const labelsRu = [
        `Контактный телефон`, `Ф.И.О`, `Область`, `Город / Район`, `Адрес`, `Индекс`
    ]

    const labelsUz = [
        `Telefon raqami`, `F.I.Sh`, `Mamlakat`, `Shahar / Tuman`, `Manzil`, `Indeks`
    ]

    return (
        <div className={classes.root}>

            <section className={classes.tabs_box}>
                <TabMenu />
            </section>

            <section className={classes.basket_box}>
                <div className={classes.left_box}>
                    <BreadCrumbs
                        items={[
                            {
                                link: `/`,
                                titleRu: `Главная`,
                                titleUz: `Asosiy`
                            },
                            {
                                link: `/`,
                                titleRu: `Корзина`,
                                titleUz: `Xaridlar savati`
                            },
                        ]}
                    />

                    <h1>
                        {trans ? `Корзина` : `Xaridlar savati`}
                    </h1>
                    <BasketList />
                    <BasketList />
                    <BasketList />
                </div>

                <div className={classes.modal_box}>
                    <BasketPay />
                </div>
            </section>

            <section className={classes.billing_box}>
                <h1>
                    {trans ? `Информация биллинга` : `To'lov ma'lumotlari`}
                </h1>
                <p>
                    {
                        trans
                            ? ` Для заказа товаров требуется регистрация.Если вы уже зарегистрированы, войдите в свою учетную запись`
                            : `Mahsulotlarga buyurtma berish uchun ro'yxatdan o'tish kerak. Agar siz allaqachon ro'yxatdan o'tgan bo'lsangiz, iltimos, o'z hisobingizga kiring`
                    }
                </p>
                <section className={classes.input_box}>
                    {
                        trans ? labelsRu : labelsUz.map((label, index) => (
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
        </div>
    )
}
