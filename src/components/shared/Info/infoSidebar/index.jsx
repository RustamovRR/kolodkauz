import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ContextRoot } from '../../../../contexts'

import { useInfoSidebarStyles } from './infoSidebarStyles'

export default function InfoSidebar() {
    const classes = useInfoSidebarStyles()
    const { trans, setTrans } = useContext(ContextRoot)

    const links = [
        { titleRu: `Как сделать заказ`, titleUz: `Qanday buyurtma qilinadi`, path: `/info/how_to_order` },
        { titleRu: `Информация о доставке`, titleUz: `Yetkazish va to'lov`, path: `/info/delivery` },
        { titleRu: `Доставка до квартиры`, titleUz: `Uygacha yetkazib berish`, path: `/info/delivery_to_apartment` },
        { titleRu: `Услуга мастера`, titleUz: `Usta xizmati`, path: `/info/method_of_service` },
        { titleRu: `Гарантия`, titleUz: `Kafolat`, path: `/info/guaranty` },
        { titleRu: `Возврат и обмен`, titleUz: `Qaytarish va almashtirish`, path: `/info/return_and_exchange` },
        { titleRu: `Пользовательское соглашение`, titleUz: `Foydalanish shartlari`, path: `/info/terms_of_use` },
    ]

    return (
        <div>
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
        </div>
    )
}
