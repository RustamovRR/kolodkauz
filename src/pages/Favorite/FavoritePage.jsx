import { Breadcrumbs, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import TabMenu from '../../components/tabmenu/TabMenu'
import Product from '../../components/product/Product'
import { useFavoriteStyles } from './FavoriteStyles'

export default function FavoritePage() {
    const classes = useFavoriteStyles()
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    return (
        <div className={classes.root}>
            <div className={classes.header_box}>
                <Header />
            </div>

            <div className={classes.tabs_box}>
                <TabMenu />
            </div>


            <div className={classes.favorite_box}>
                <Breadcrumbs className={classes.navigation}>
                    <Link to="#" className={classes.link}>
                        Главная
                    </Link>
                    <p >
                        Избранные
                    </p>
                </Breadcrumbs>

                <h1>Избранные</h1>

                <div className={classes.product_box}>
                    <Product favorite={true} />
                    <Product favorite={true} />
                    <Product favorite={true} />
                    <Product favorite={true} />
                    <Product favorite={true} />
                </div>
            </div>

        </div>
    )
}
