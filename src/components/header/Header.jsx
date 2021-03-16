import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Badge, Grid, Hidden } from '@material-ui/core'
import Currency from '../currency/Currency'
import Language from '../language/Language'
import Basket from '../Basket/basketModal/BasketModal'
import Search from '../search/Search'
import { BasketContext } from '../../contexts/BasketContext'
import { TranslateContext } from '../../contexts/TranslateContext'
import { CountContext } from '../../contexts/CountContext'

import { useHeaderStyles } from './headerStyles'
import person from '../../images/icons/person.svg'
import like from '../../images/icons/favorite.svg'
import rate from '../../images/icons/rate.svg'
import basket from '../../images/icons/basket.svg'

export default function Header() {
    const classes = useHeaderStyles()
    const { open, setOpen } = useContext(BasketContext)
    const { trans, setTrans } = useContext(TranslateContext)
    const { countState, countDispatch } = useContext(CountContext)

    const handleOpen = () => {
        setOpen(true);
    };
    console.log(countState)

    return (
        <div className={classes.header_root}>
            <nav className={classes.nav}>
                <Language />
                <Currency />

                <Hidden mdDown>
                    <div className={classes.services}>
                        <Link to="/products">
                            {trans ? `Скидки` : `Chegirmalar`}
                        </Link>
                        <Link to="/fast_delivery">
                            {trans ? `Доставка` : `Yetkazib berish`}
                        </Link>
                        <Link to="/product_info">
                            {trans ? `Услуга мастера` : `Usta xizmati`}
                        </Link>
                        <Link to="/info">
                            {trans ? `Гарантия` : `Kafolat`}
                        </Link>
                    </div>
                </Hidden>
            </nav>

            <Grid className={classes.secondary_box}>
                <section class={classes.function_box}>
                    <Search />
                    <div className={classes.functions}>
                        <div className={classes.function_items}>
                            <Link to='/login' className={classes.link}>
                                <img src={person} alt="kolodka kirish" />
                                <p>
                                    {trans ? `Войти` : `Kirish`}
                                </p>
                            </Link>
                            <Link to='/favorite' className={classes.link}>
                                <Badge color="primary" badgeContent={countState} invisible={countState < 1 ? true : false}>
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
            </Grid>
        </div>
    )
}
