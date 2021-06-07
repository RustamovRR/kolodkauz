import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Badge, Grid, Hidden } from '@material-ui/core'
import { useHeaderStyles } from './headerStyles'

import { Currency, Language, BasketModal, Search } from '../index'
import { ContextRoot } from "../../../contexts"
import { LoginBlack, FavoriteBlack, CompareBlack, BasketBlack } from '../../../assets/images/icons'
import CabinetModal from '../cabinetModal'
import cn from 'classnames'

export default function Header() {

    const classes = useHeaderStyles()
    const state = useContext(ContextRoot)
    const [anchorEl, setAnchorEl] = useState(false)

    const { trans, setTrans } = useContext(ContextRoot)
    const { openBasket, setOpenBasket } = state.variables
    const { cart, userFavorite, compare } = state.user

    const handleCabinet = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleOpen = () => {
        setOpenBasket(true);
    };
    const token = localStorage.getItem('token')

    return (
        <div className={classes.header_root}>
            <nav className={classes.nav}>
                <Language />
                <Currency />

                <Hidden xsDown>
                    <div className={classes.services}>
                        <Link to="/categories">
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

                    <Hidden xsDown >
                        <div className={classes.function_items}>
                            {
                                token
                                    ? (
                                        <>
                                            <div
                                                className={cn(classes.link, classes.cabinet)}
                                                onClick={handleCabinet}
                                            >
                                                <LoginBlack />
                                                <p>
                                                    {trans ? `Кабинет` : `Kabinet`}
                                                </p>
                                            </div>
                                            <CabinetModal anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
                                        </>
                                    ) : (
                                        <Link to='/login' className={classes.link}>
                                            <LoginBlack />
                                            <p>
                                                {trans ? `Войти` : `Kirish`}
                                            </p>
                                        </Link>
                                    )
                            }

                            <Link to='/favorite' className={classes.link}>
                                <Badge
                                    color="primary"
                                    badgeContent={userFavorite.length}
                                    invisible={userFavorite.length == 0}
                                >
                                    <FavoriteBlack />
                                </Badge>
                                <p>
                                    {trans ? `Избранные` : `Sevimlilar`}
                                </p>
                            </Link>

                            <Link to='/compare' className={classes.link}>
                                <Badge
                                    color="primary"
                                    badgeContent={compare.length}
                                    invisible={compare.length == 0}
                                >
                                    <CompareBlack />
                                </Badge>
                                <p>
                                    {trans ? `Сравнение` : `Taqqoslash`}
                                </p>
                            </Link>

                            <Link
                                to='/basket'
                                className={classes.link}
                            >
                                <Badge
                                    color="primary"
                                    badgeContent={cart.length}
                                    invisible={cart.length == 0}
                                >
                                    <BasketBlack />
                                </Badge>
                                <p>
                                    {trans ? `Корзина` : `Xaridlar savati`}
                                </p>
                            </Link>
                            {/* <BasketModal /> */}
                        </div>
                    </Hidden>

                </section>
            </Grid>
        </div>
    )
}
