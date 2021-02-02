import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Currency from '../currency/Currency'
import Language from '../language/Language'
import Search from '../search/Search'
import { useHeaderStyles } from './headerStyles'
import person from '../../images/icons/person.png'
import like from '../../images/icons/icon.png'
import rate from '../../images/icons/rate.png'
import basket from '../../images/icons/basket.png'
import { Badge } from '@material-ui/core'
import { BasketContext } from '../../contexts/BasketContext'
import Basket from '../basket/Basket'

export default function Header() {
    const classes = useHeaderStyles()
    const { open, setOpen } = useContext(BasketContext)

    const handleOpen = () => {
        setOpen(true);
    };


    const functions = [
        { icon: person, text: `Войти` },
        { icon: like, text: `Избранные` },
        { icon: rate, text: `Сравнение` },
        { icon: basket, text: `Корзина` },
    ]

    return (
        <div className={classes.header_root}>
            <nav className={classes.nav}>
                <Language />
                <Currency />

                <div className={classes.services}>
                    <Link to="/info">
                        Скидки
                    </Link>
                    <Link to="/info">
                        Доставка
                    </Link>
                    <Link to="/info">
                        Услуга мастера
                    </Link>
                    <Link to="/info">
                        Гарантия
                    </Link>
                </div>
            </nav>

            <section class={classes.function_box}>
                <Search />
                <div className={classes.functions}>
                    <div className={classes.function_items}>
                        <Link to='/favorite' className={classes.link}>
                            <img src={person} alt="kolodka kirish" />
                            <p>Войти</p>
                        </Link>
                        <Link to='/favorite' className={classes.link}>
                            <Badge badgeContent={4} color="primary" >
                                <img src={like} alt="tanlanganlar" />
                            </Badge>
                            <p>Избранные</p>
                        </Link>
                        <Link to='/compare' className={classes.link}>
                            <img src={rate} alt="Taqqoslash" />
                            <p>Сравнение</p>
                        </Link>
                        <Link
                            to='/'
                            className={classes.link}
                            onMouseEnter={() => {
                                setTimeout(() => {
                                    handleOpen()
                                }, 200)
                            }}
                        >
                            <img src={basket} alt="Savat" />
                            <p>Корзина</p>
                        </Link>
                        <Basket />
                    </div>
                </div>
            </section>
        </div>
    )
}
