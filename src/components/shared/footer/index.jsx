import { Divider, Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useFooterStyles } from './footerStyles'
import { Click, Payme } from '../../../assets/images/icons'
import { ContextRoot } from '../../../contexts'

export default function Footer() {
    const classes = useFooterStyles()
    const { trans, setTrans } = useContext(ContextRoot)

    const infoRu = [
        { text: `Как сделать заказ`, href: `/info/how_to_order` },
        { text: `Доставка и оплата`, href: `/info/delivery_to_apartment` },
        { text: `Услуга мастера`, href: `/info/method_of_service` },
        { text: `Возврат и обмен`, href: `/info/return_and_exchange` },
        { text: `Пользовательское соглашение`, href: `/info/terms_of_use` },
        { text: `О компании`, href: `/info/guaranty` },
    ]
    const infoUz = [
        { text: `Qanday buyurtma qilinadi`, href: `/info/how_to_order` },
        { text: `Yetkazish va to'lov`, href: `/info/delivery_to_apartment` },
        { text: `Usta xizmati`, href: `/info/method_of_service` },
        { text: `Qaytarish va almashtirish`, href: `/info/return_and_exchange` },
        { text: `Foydalanish shartlari`, href: `/info/terms_of_use` },
        { text: `Kompaniya haqida`, href: `/info/guaranty` },
    ]

    const partnersRu = [
        `Как стать поставщиком`,
        `Скидки оптовым клиентам`,
        `Реклама на сайте`
    ]

    const partnersUz = [
        `Qanday qilib yetkazib beruvchiga aylanish mumkin`,
        `Ulgurji xaridorlar uchun chegirmalar`,
        `Saytda reklama`
    ]

    const socials = [
        `Telegram`,
        `Facebook`,
        `Instagram`
    ]

    return (
        <div className={classes.footer_root}>
            <Grid className={classes.container}>
                <div className={classes.footer}>

                    {/* Information box///////////////////////////////////////////////// */}
                    <section className={classes.information_box}>
                        <h4>
                            {trans == 'ru' ? `Информация` : `Ma'lumot`}
                        </h4>
                        {
                            (trans == 'ru' ? infoRu : infoUz).map((item) => (
                                <Link
                                    key={item.text}
                                    to={item.href}
                                    className={classes.link}
                                >
                                    {item.text}
                                </Link>
                            ))
                        }
                    </section>

                    <section className={classes.information_box}>
                        <h4>
                            {trans == 'ru' ? `Партнерам` : `Hamkorlar uchun`}
                        </h4>
                        {
                            (trans == 'ru' ? partnersRu : partnersUz).map((item) => (
                                <Link to={item.href}
                                    key={item}
                                    className={classes.link}
                                >
                                    {item}
                                </Link>
                            ))
                        }
                    </section>

                    <section className={classes.information_box}>
                        <h4>
                            {trans == 'ru' ? `Мы в соцсетях` : `Biz ijtimoiy tarmoqlarda`}
                        </h4>
                        {
                            socials.map((item) => (
                                <Link
                                    to={item.href}
                                    key={item}
                                    className={classes.link}
                                >
                                    {item}
                                </Link>
                            ))
                        }
                    </section>

                    <Grid className={classes.left_box}>
                        {/* Domain informations///////////////////////////////////////////// */}
                        <section className={classes.zap_box}>
                            <p>
                                {trans == 'ru' ? `Интернет магазин автозапчастей.` : `Avto ehtiyot qismlarning internet do'koni`}
                            </p>
                            <p>
                                {trans == 'ru' ? `Доставка по всему Узбекистану` : `O'zbekiston bo'ylab yetkazib berish`}
                            </p>
                        </section>

                        {/* Phone box///////////////////////////////////////////////////////// */}
                        <section className={classes.phone_box}>
                            <h4>+998 90 678 65 57</h4>
                            <p>
                                {trans == 'ru' ? `для звонков по всему миру, стоимость` : `butun dunyo bo'ylab qo'ng'iroqlar uchun `}
                            </p>
                            <p>
                                {trans == 'ru' ? `звонка - по тарифам вашего` : `narx - sizning tariflaringiz bo'yicha`}
                            </p>
                        </section>

                        {/* Work box//////////////////////////////////////////////////////// */}
                        <section className={classes.work_box}>
                            <p>
                                {trans == 'ru' ? `Время работа` : `Ish vaqti`}
                            </p>
                            <div>
                                <h4>
                                    {trans == 'ru' ? `Пн-Пт` : `Du-Ju`} &nbsp;&nbsp;
                                    <span>9:00 - 20:00</span>
                                </h4>
                            </div>
                            <div>
                                <h4>
                                    {trans == 'ru' ? `Сб-Вс` : `Sha-Ya`} &nbsp;&nbsp;
                                    <span>9:00 - 15:00</span>
                                </h4>
                            </div>
                        </section>
                    </Grid>
                </div>

                {/* Divider////////////////////////////////////////////// */}
                <Divider className={classes.divider} />

                <section className={classes.license_box}>
                    <p>
                        {trans == 'ru' ? `2016-2020 © ZAP. Все права защищены.` : `2016-2020 © ZAP. Barcha huquqlar himoyalangan.`}
                    </p>
                    <div className={classes.pay_box}>
                        <div>
                            <Click />
                        </div>
                        <div className={classes.payme} >
                            <Payme />
                        </div>
                    </div>
                </section>
            </Grid>
        </div>
    )
}
