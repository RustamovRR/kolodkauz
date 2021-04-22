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
        `Как сделать заказ`,
        `Доставка и оплата`,
        `Услуга мастера`,
        `Возврат и обмен`,
        `Пользовательское соглашение`,
        `О компании`
    ]

    const infoUz = [
        `Qanday buyurtma qilinadi`,
        `Yetkazish va to'lov`,
        `Usta xizmati`,
        `Qaytarish va almashtirish`,
        `Foydalanish shartlari`,
        `Kompaniya haqida`
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
                            {trans ? `Информация` : `Ma'lumot`}
                        </h4>
                        {
                            (trans ? infoRu : infoUz).map((item) => (
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
                            {trans ? `Партнерам` : `Hamkorlar uchun`}
                        </h4>
                        {
                            (trans ? partnersRu : partnersUz).map((item) => (
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
                            {trans ? `Мы в соцсетях` : `Biz ijtimoiy tarmoqlarda`}
                        </h4>
                        {
                            socials.map((item) => (
                                <Link to={item.href}
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
                                {trans ? `Интернет магазин автозапчастей.` : `Avto ehtiyot qismlarning internet do'koni`}
                            </p>
                            <p>
                                {trans ? `Доставка по всему Узбекистану` : `O'zbekiston bo'ylab yetkazib berish`}
                            </p>
                        </section>

                        {/* Phone box///////////////////////////////////////////////////////// */}
                        <section className={classes.phone_box}>
                            <h4>+998 90 678 65 57</h4>
                            <p>
                                {trans ? `для звонков по всему миру, стоимость` : `butun dunyo bo'ylab qo'ng'iroqlar uchun `}
                            </p>
                            <p>
                                {trans ? `звонка - по тарифам вашего` : `narx - sizning tariflaringiz bo'yicha`}
                            </p>
                        </section>

                        {/* Work box//////////////////////////////////////////////////////// */}
                        <section className={classes.work_box}>
                            <p>
                                {trans ? `Время работа` : `Ish vaqti`}
                            </p>
                            <div>
                                <h4>
                                    {trans ? `Пн-Пт` : `Du-Ju`} &nbsp;&nbsp;
                                    <span>9:00 - 20:00</span>
                                </h4>
                            </div>
                            <div>
                                <h4>
                                    {trans ? `Сб-Вс` : `Sha-Ya`} &nbsp;&nbsp;
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
                        {trans ? `2016-2020 © ZAP. Все права защищены.` : `2016-2020 © ZAP. Barcha huquqlar himoyalangan.`}
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
