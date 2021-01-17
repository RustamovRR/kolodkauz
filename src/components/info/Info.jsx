import { Divider } from '@material-ui/core'
import React from 'react'
import InfoDelivery from '../infoDelivery/InfoDelivery'
import InfoService from '../infoService/InfoService'
import { useInfoStyles } from './infoStyles'

export default function Info() {
    const classes = useInfoStyles()
    const navs = [
        `Как сделать заказ`,
        `Информация о доставке`,
        `Доставка до квартиры`,
        `Услуга мастера`,
        `Гарантия`,
        `Возврат и обмен`,
        `Пользовательское соглашение`,
        `Возврат и обмен`
    ]

    return (
        <div className={classes.info_root}>
            <div className={classes.left_panel}>
                {
                    navs.map(item => (
                        <p key={item} >{item}</p>
                    ))
                }
            </div>

            <div className={classes.divider} />

            <div className={classes.info_panel}>
                {/* <InfoDelivery /> */}
                <InfoService />
            </div>
        </div>
    )
}