import { Divider } from '@material-ui/core'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { TranslateContext } from '../../contexts/TranslateContext'
import InfoDelivery from '../infoDelivery/InfoDelivery'
import InfoService from '../infoService/InfoService'
import { useInfoStyles } from './infoStyles'

export default function Info() {
    const classes = useInfoStyles()
    const { trans, setTrans } = useContext(TranslateContext)

    const links = [
        { titleRu: `Как сделать заказ`, titleUz: `Qanday buyurtma qilinadi`, path: `/info/how_to_order`, component: <InfoService /> },
        { titleRu: `Информация о доставке`, titleUz: `Yetkazish va to'lov`, path: `/info/delivery`, component: <InfoDelivery /> },
        { titleRu: `Доставка до квартиры`, titleUz: `Uygacha yetkazib berish`, path: `/info/delivery_to_apartment`, component: <InfoService /> },
        { titleRu: `Услуга мастера`, titleUz: `Usta xizmati`, path: `/info/method_of_service`, component: <InfoDelivery /> },
        { titleRu: `Гарантия`, titleUz: `Kafolat`, path: `/info/guaranty`, component: <InfoService /> },
        { titleRu: `Возврат и обмен`, titleUz: `Qaytarish va almashtirish`, path: `/info/return_and_exchange`, component: <InfoDelivery /> },
        { titleRu: `Пользовательское соглашение`, titleUz: `Foydalanish shartlari`, path: `/info/terms_of_use`, component: <InfoService /> },
    ]

    return (
        <div className={classes.info_root}>
            <section className={classes.left_panel}>
                {
                    links.map(({ titleRu, titleUz, path }) => (
                        <NavLink
                            key={path}
                            className={classes.link}
                            activeClassName={classes.active}
                            to={path}
                        >
                            {trans ? titleRu : titleUz}
                        </NavLink>
                    ))
                }
            </section>

            <div className={classes.divider} />

            <section className={classes.info_panel}>
                {
                    links.map(({ path, component }, index) => (

                        index === 0
                            ? <InfoDelivery />
                            : <Info />
                    ))
                }
            </section>
        </div>
    )
}
