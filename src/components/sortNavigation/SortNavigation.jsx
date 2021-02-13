import React from 'react'
import { Button, IconButton } from '@material-ui/core'
import { useSortNavigationStyles } from './sortNavigationStyles'
import sortIcon1 from '../../images/icons/sort_icon1.png'
import sortIcon2 from '../../images/icons/sort_icon2.png'
import sortIcon3 from '../../images/icons/sort_icon3.png'
import { Link } from 'react-router-dom'

export default function SortNavigation() {
    const classes = useSortNavigationStyles()

    const buttons = [
        `Популярности`, `Рейтингу`, `Скидке`, `Обновлению`, `Название (А-Я)`
    ]

    const icons = [
        { icon: sortIcon1, link: '/products' },
        { icon: sortIcon2, link: '/products/medium' },
        { icon: sortIcon3, link: '/products/small' }
    ]

    return (
        <div className={classes.root}>
            <section className={classes.navigation}>
                <p>Сортировать по:</p>
                <div className={classes.buttons}>
                    {
                        buttons.map((item) => (
                            <Button key={item}>{item}</Button>
                        ))
                    }
                </div>
            </section>

            <section className={classes.icon_box}>
                {
                    icons.map(icon => (
                        <Link to={{ pathname: icon.link }}>
                            <IconButton>
                                <img src={icon.icon} alt="" />
                            </IconButton>
                        </Link>
                    ))
                }
            </section>
        </div>
    )
}
