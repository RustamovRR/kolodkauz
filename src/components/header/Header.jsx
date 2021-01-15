import React from 'react'
import { Link } from 'react-router-dom'
import Currency from '../currency/Currency'
import Language from '../language/Language'
import Search from '../search/Search'
import { useHeaderStyles } from './headerStyles'
import person from '../../images/icons/person.png'
import like from '../../images/icons/icon.png'
import rate from '../../images/icons/rate.png'
import basket from '../../images/icons/basket.png'

export default function Header() {
    const classes = useHeaderStyles()

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

            <div class={classes.function_box}>
                <Search />
                <div className={classes.functions}>
                    <div className={classes.function_items}>
                        {
                            functions.map(item => (
                                <Link to='#' className={classes.link} key={item.text}>
                                    <img src={item.icon} alt="" />
                                    <p>{item.text}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
