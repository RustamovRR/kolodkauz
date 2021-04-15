import React, { useContext, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Button, IconButton } from '@material-ui/core'
import { useSortNavigationStyles } from './sortNavigationStyles'

import { TranslateContext } from '../../../contexts'
import { ProductSort1, ProductSort2, ProductSort3 } from '../../..//assets/images/icons'

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
        { icon: <ProductSort1 />, link: '/products' },
        { icon: <ProductSort2 />, link: '/products/medium' },
        { icon: <ProductSort3 />, link: '/products/small' }
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
                                to={`/products/medium/${index}`}
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
                        >
                            <IconButton >
                                {item.icon}
                            </IconButton>
                        </NavLink>
                    ))
                }
            </section>
        </div >
    )
}
