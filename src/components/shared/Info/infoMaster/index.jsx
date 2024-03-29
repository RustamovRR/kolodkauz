import React from 'react'
import { useInfoMasterStyles } from './infoMasterStyles'

export default function InfoMaster() {
    const classes = useInfoMasterStyles()

    return (
        <div className={classes.delivery_root}>
            <h1 className={classes.header}>Услуга мастера</h1>

            <section className={classes.text_box}>
                <h4 className={classes.title}>
                    Доставка до квартиры
                </h4>
                <p>
                    1. Доставка по городу Ташкент составляет - 15 000 сум на малогабаритные товары и 25 000 сум на крупногабаритную технику
                </p>
                <p>
                    2. Доставка в ближайшие к Ташкенту районы Ташкентской области (Кибрай, Зангиота, Янгиюль) платная – 10 000 сум (телефоны, мелкая техника и аксессуары), заказе на крупногабаритную технику доставка считается так: 1500 сум за каждый км от поста ГАИ.
                </p>
                <p>
                    3. Доставка осуществляется ежедневно с 11.00 до 21.00, кроме понедельника.
                </p>
                <p>
                    4. Заказ на доставку товара к 11.00 оговаривается предварительно и не позднее 17.00 предыдущего дня.
                </p>
                <p>
                    5. Срок доставки – от 8 до 48 часов (время доставки зависит от товара), по областям - в течении 3-10 дней.
                </p>
                <p>
                    6. При оформлении заказа Покупатель сам выбирает удобное для него время доставки, но не менее 8 часов с момента заказа.
                </p>
                <p>
                    7. Если заказ оформлен после 17.00, доставка может быть осуществлена на следующий день.
                </p>
            </section>

            <section className={classes.text_box}>
                <h4>Доставка до квартиры</h4>
                <p>
                    Подъём на этаж и занос в квартиру: малогабаритной техники – бесплатно.
                </p>
                <p>
                    крупногабаритной техники (холодильник, стиральная машина, газовая плита и т.д.) – 15 тысяч сум каждый этаж.
                </p>
            </section>

            <section className={classes.text_box}>
                <h4>Приём/передача товара</h4>
                <p>
                    1. При получении товара Покупатель обязан внимательно проверить его в присутствии курьера и только после этого произвести оплату наличными или по терминалу.
                </p>
                <p>
                    2. Покупатель при приёме товара обязан проверить наличие гарантийного талона на товар.
                </p>
            </section>

            <section className={classes.text_box}>
                <h4>Приём/передача товара</h4>
                <p>
                    1. При получении товара Покупатель обязан внимательно проверить его в присутствии курьера и только после этого произвести оплату наличными или по терминалу.
                </p>
                <p>
                    2. Покупатель при приёме товара обязан проверить наличие гарантийного талона на товар.
                </p>
            </section>
        </div>
    )
}
