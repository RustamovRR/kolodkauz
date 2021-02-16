import { Breadcrumbs, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import TabMenu from '../../components/tabmenu/TabMenu'
import Product from '../../components/product/Product'
import { useFavoriteStyles } from './FavoriteStyles'
import { TranslateContext } from '../../contexts/TranslateContext'

export default function FavoritePage() {
    const classes = useFavoriteStyles()
    const { trans, setTrans } = useContext(TranslateContext)

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    return (
        <div className={classes.root}>
            <section className={classes.header_box}>
                <Header />
            </section>

            <section className={classes.tabs_box}>
                <TabMenu />
            </section>


            <section className={classes.favorite_box}>
                <Breadcrumbs className={classes.navigation}>
                    <Link to="/" className={classes.link}>
                        {trans ? `Главная` : `Asosiy`}
                    </Link>
                    <p >
                        {trans ? `Избранные` : `Sevimlilar`}
                    </p>
                </Breadcrumbs>

                <h1>
                    {trans ? `Избранные` : `Sevimlilar`}
                </h1>

                <div className={classes.product_box}>
                    <Product favorite={true} />
                    <Product favorite={true} />
                    <Product favorite={true} />
                    <Product favorite={true} />
                    <Product favorite={true} />
                </div>
            </section>

        </div>
    )
}
