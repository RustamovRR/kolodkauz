import React, { useContext, useState } from 'react'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { Button, Hidden, IconButton } from '@material-ui/core'
import { useSortNavigationStyles } from './sortNavigationStyles'

import { ContextRoot } from '../../../contexts'
import { ProductSort1, ProductSort2, ProductSort3 } from '../../../assets/images/icons'
import Select from '../select'
import { useWindowSize } from 'react-use'

export default function SortNavigation() {
    const classes = useSortNavigationStyles()
    const { trans, setTrans } = useContext(ContextRoot)
    const { width } = useWindowSize()
    const history = useLocation()
    const { pathname } = useLocation()

    const buttonsRu = [
        `Популярности`, `Рейтингу`, `Скидке`, `Обновлению`, `Название (А-Я)`
    ]

    const buttonsUz = [
        `Ommaboplik`, `Reyting`, `Chegirma`, `So'nggi`, `Nom (А-Z)`
    ]

    const icons = [
        { icon: <ProductSort1 />, link: '/categories' },
        { icon: <ProductSort2 />, link: '/categories/medium' },
        { icon: <ProductSort3 />, link: '/categories/small' }
    ]

    return (
        <div className={classes.root}>
            <Hidden xsDown >
                <section className={classes.navigation}>
                    <p>
                        {trans ? `Сортировать по:` : `Saralash:`}
                    </p>
                    <div className={classes.buttons}>
                        {
                            (trans ? buttonsRu : buttonsUz).map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={{ search: `sort=${item}` }}
                                    className={classes.navlink}
                                    activeClassName={classes.active_navlink}
                                >
                                    <Button>{item}</Button>
                                </NavLink>
                            ))
                        }

                    </div>
                </section>
            </Hidden>
            <Hidden smUp >
                <div className={classes.select}>
                    <Select
                        items={trans ? buttonsRu : buttonsUz}
                    />
                </div>
            </Hidden>

            <section className={classes.icon_box}>
                {
                    icons.map((item, index) => (
                        <NavLink
                            key={index}
                            to={{ pathname: item.link }}
                        >
                            <IconButton size={width <= 600 && "small"}>
                                {item.icon}
                            </IconButton>
                        </NavLink>
                    ))
                }
            </section>
        </div >
    )
}
