import React, { useContext, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { useBasketPageStyles } from './basketPageStyles'

import { ContextRoot } from '../../../contexts'
import { TabMenu, BasketList, BasketPay, InputBasket, BreadCrumbs, Layout } from '../../../components/shared'


export default function BasketPage() {
    const classes = useBasketPageStyles()

    const state = useContext(ContextRoot)
    const { trans } = useContext(ContextRoot)
    const { cart } = state.user

    const labelsRu = [
        `Контактный телефон`, `Ф.И.О`, `Область`, `Город / Район`, `Адрес`, `Индекс`
    ]

    const labelsUz = [
        `Telefon raqami`, `F.I.Sh`, `Mamlakat`, `Shahar / Tuman`, `Manzil`, `Indeks`
    ]

    return (
        <Layout>
            <div className={classes.root}>

                <section className={classes.tabs_box}>
                    <TabMenu />
                </section>

                <Grid className={classes.container}>
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
                                {trans === 'ru' ? `Корзина` : `Xaridlar savati`}
                            </h1>
                            <div className={classes.basket_list}>
                                {cart.length == 0 ? (
                                    <div>Savatda hech narsa yo'q</div>
                                ) : (
                                    cart?.map((item) => (
                                        <BasketList key={item} data={item} />
                                    ))
                                )}
                            </div>
                        </div>

                        <div className={classes.modal_box}>
                            <BasketPay />
                        </div>
                    </section>

                    <section className={classes.billing_box}>
                        <h1>
                            {trans === 'ru' ? `Информация биллинга` : `To'lov ma'lumotlari`}
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
                                (trans == 'ru' ? labelsRu : labelsUz).map((label, index) => (
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
                </Grid>
            </div>
        </Layout>
    )
}
