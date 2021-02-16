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
import { TranslateContext } from '../../contexts/TranslateContext'
import Basket from '../basket/Basket'

export default function Header() {
    const classes = useHeaderStyles()
    const { open, setOpen } = useContext(BasketContext)
    const {trans, setTrans} = useContext(TranslateContext)

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className={classes.header_root}>
            <nav className={classes.nav}>
                <Language />
                <Currency />

                <div className={classes.services}>
                    <Link to="/products">
                        {trans ? `Скидки` : `Chegirmalar`}
                    </Link>
                    <Link to="/info">
                    {trans ? `Доставка` : `Yetkazib berish`}
                    </Link>
                    <Link to="/info">
                    {trans ? `Услуга мастера` : `Usta xizmati`}
                    </Link>
                    <Link to="/info">
                    {trans ? `Гарантия` : `Kafolat`}
                    </Link>
                </div>
            </nav>

            <section class={classes.function_box}>
                <Search />
                <div className={classes.functions}>
                    <div className={classes.function_items}>
                        <Link to='/favorite' className={classes.link}>
                            <img src={person} alt="kolodka kirish" />
                            <p>
                                {trans ? `Войти` : `Kirish`}
                            </p>
                        </Link>
                        <Link to='/favorite' className={classes.link}>
                            <Badge badgeContent={4} color="primary" >
                                <img src={like} alt="tanlanganlar" />
                            </Badge>
                            <p>
                                {trans ? `Избранные` : `Sevimlilar`}
                            </p>
                        </Link>
                        <Link to='/compare' className={classes.link}>
                            <img src={rate} alt="Taqqoslash" />
                            <p>
                                {trans ? `Сравнение` : `Taqqoslash`}
                            </p>
                        </Link>
                        <Link
                            to='/basket'
                            className={classes.link}
                            onMouseEnter={() => {
                                setTimeout(() => {
                                    handleOpen()
                                }, 200)
                            }}
                        >
                            <img src={basket} alt="Savat" />
                            <p>
                                {trans ? `Корзина` : `Xaridlar savati`}
                            </p>
                        </Link>
                        <Basket />
                    </div>
                </div>
            </section>
        </div>
    )
}
