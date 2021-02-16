import { Divider } from '@material-ui/core'
import React, { useContext } from 'react'
import { TranslateContext } from '../../contexts/TranslateContext'
import InfoDelivery from '../infoDelivery/InfoDelivery'
import InfoService from '../infoService/InfoService'
import { useInfoStyles } from './infoStyles'

export default function Info() {
    const classes = useInfoStyles()
    const { trans, setTrans } = useContext(TranslateContext)

    const navsRu = [
        `Как сделать заказ`,
        `Информация о доставке`,
        `Доставка до квартиры`,
        `Услуга мастера`,
        `Гарантия`,
        `Возврат и обмен`,
        `Пользовательское соглашение`
    ]

    const navsUz = [
        `Qanday buyurtma qilinadi`,
        `Yetkazish va to'lov`,
        `Uygacha yetkazib berish`,
        `Usta xizmati`,
        `Kafolat`,
        `Qaytarish va almashtirish`,
        `Foydalanish shartlari`
    ]

    return (
        <div className={classes.info_root}>
            <section className={classes.left_panel}>
                {
                    trans ? navsRu : navsUz.map(item => (
                        <p key={item}>{item}</p>
                    ))
                }
            </section>

            <div className={classes.divider} />

            <section className={classes.info_panel}>
                {/* <InfoDelivery /> */}
                <InfoService />
            </section>
        </div>
    )
}
