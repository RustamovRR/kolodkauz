import { Divider, Grid } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { useFooterStyles } from './footerStyles'
import clickImg from '../../images/icons/click.png'
import paymeImg from '../../images/icons/payme.png'

export default function Footer() {
    const classes = useFooterStyles()

    const informations = [
        `Как сделать заказ`,
        `Доставка и оплата`,
        `Услуга мастера`,
        `Возврат и обмен`,
        `Пользовательское соглашение`,
        `О компании`
    ]

    const partners = [
        `Как стать поставщиком`,
        `Скидки оптовым клиентам`,
        `Реклама на сайте`
    ]

    const socials = [
        `Telegram`,
        `Facebook`,
        `Instagram`
    ]

    return (
        <div className={classes.footer_root}>
            <div className={classes.footer}>
                <Grid className={classes.left_box}>
                    {/* Domain informations///////////////////////////////////////////// */}
                    <div className={classes.zap_box}>
                        <h4>
                            ZAP.UZ - {''}
                            <span className={classes.zap_span}>Интернет магазин автозапчастей.</span>
                        </h4>
                        <p>Доставка по всему Узбекистану</p>
                    </div>

                    {/* Phone box///////////////////////////////////////////////////////// */}
                    <div className={classes.phone_box}>
                        <h4>+998 90 678 65 57</h4>
                        <p>для звонков по всему миру, стоимость звонка - по тарифам вашего</p>
                    </div>

                    {/* Work box//////////////////////////////////////////////////////// */}
                    <div className={classes.work_box}>
                        <p>Время работа</p>
                        <div>
                            <h4>
                                Пн-Пт &nbsp;&nbsp;
                    <span>9:00 - 20:00</span>
                            </h4>
                        </div>
                        <div>
                            <h4>
                                Сб-Вс &nbsp;&nbsp;
                    <span>9:00 - 15:00</span>
                            </h4>
                        </div>
                    </div>
                </Grid>

                {/* Information box///////////////////////////////////////////////// */}
                <div className={classes.information_box}>
                    <h4>Информация</h4>
                    {
                        informations.map((item) => (
                            <Link to={item.href}
                                key={item}
                                className={classes.link}
                            >
                                {item}
                            </Link>
                        ))
                    }
                </div>
                <div className={classes.information_box}>
                    <h4>Партнерам</h4>
                    {
                        partners.map((item) => (
                            <Link to={item.href}
                                key={item}
                                className={classes.link}
                            >
                                {item}
                            </Link>
                        ))
                    }
                </div>
                <div className={classes.information_box}>
                    <h4>Мы в соцсетях</h4>
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
                </div>
            </div>

            {/* Divider////////////////////////////////////////////// */}
            <Divider className={classes.divider} />

            <div className={classes.license_box}>
                <p>2016-2020 © ZAP. Все права защищены.</p>
                <div className={classes.pay_box}>
                    <img src={clickImg} alt="click" className={classes.click} />
                    <img src={paymeImg} alt="payme" />
                </div>
            </div>
        </div>
    )
}
