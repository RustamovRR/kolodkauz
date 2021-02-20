import React, { useContext, useState } from 'react'
import { Button, IconButton } from '@material-ui/core'
import { NavLink, useLocation } from 'react-router-dom'
import { TranslateContext } from '../../contexts/TranslateContext'

import { useSortNavigationStyles } from './sortNavigationStyles'
import sortIcon1 from '../../images/icons/sort_icon1.png'
import sortIcon2 from '../../images/icons/sort_icon2.png'
import sortIcon3 from '../../images/icons/sort_icon3.png'
import sortIconActive1 from '../../images/icons/sort_icon1_actve.png'
import sortIconActive2 from '../../images/icons/sort_icon2_active.png'
import sortIconActive3 from '../../images/icons/sort_icon3_active.png'

export default function SortNavigation() {
    const classes = useSortNavigationStyles()
    const { trans, setTrans } = useContext(TranslateContext)
    const [active, setActive] = useState(false)
    const { pathname } = useLocation()
    if (active) console.log('asdjfkadjsf')

    const buttonsRu = [
        `Популярности`, `Рейтингу`, `Скидке`, `Обновлению`, `Название (А-Я)`
    ]

    const buttonsUz = [
        `Ommaboplik`, `Reyting`, `Chegirma`, `So'nggi`, `Nom (А-Z)`
    ]

    const icons = [
        { icon: sortIcon1, activeIcon: sortIconActive1, link: '/products' },
        { icon: sortIcon2, activeIcon: sortIconActive2, link: '/products/medium' },
        { icon: sortIcon3, activeIcon: sortIconActive3, link: '/products/small' }
    ]

    return (
        <div className={classes.root}>
            <section className={classes.navigation}>
                <p>
                    {trans ? `Сортировать по:` : `Saralash:`}
                </p>
                <div className={classes.buttons}>
                    {
                        (trans ? buttonsRu : buttonsUz).map((item, index) => (
                            <NavLink
                                key={item}
                                to={`/products/${index}`}
                                className={classes.navlink}
                                activeClassName={classes.active_navlink}
                            >
                                <Button >{item}</Button>
                            </NavLink>
                        ))
                    }

                </div>
            </section>

            <section className={classes.icon_box}>
                {
                    icons.map((item, index) => (
                        <NavLink
                            key={index}
                            to={{ pathname: item.link }}
                            isActive={(match, location) => {
                                if (pathname === location.pathname) {
                                    setActive(true)
                                }
                            }}
                            activeStyle={{ backgroundColor: 'red ' }}
                        >
                            <IconButton >
                                <img src={item.icon} alt="" />
                            </IconButton>
                        </NavLink>
                    ))
                }
            </section>
        </div >
    )
}
