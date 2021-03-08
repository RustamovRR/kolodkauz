import React, { useContext } from 'react'
import TabMenu from '../../components/tabmenu/TabMenu'
import Product from '../../components/Product/Product'
import { TranslateContext } from '../../contexts/TranslateContext'

import { useFavoriteStyles } from './FavoriteStyles'
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs'
import { Grid } from '@material-ui/core'

export default function FavoritePage() {
    const classes = useFavoriteStyles()
    const { trans, setTrans } = useContext(TranslateContext)

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    return (
        <div className={classes.root}>

            <section className={classes.tabs_box}>
                <TabMenu />
            </section>

            <Grid className={classes.container}>
                <section className={classes.favorite_box}>
                    <BreadCrumbs
                        items={[
                            {
                                link: `/`,
                                titleRu: `Главная`,
                                titleUz: `Asosiy`
                            },
                            {
                                link: `/`,
                                titleRu: `Избранные`,
                                titleUz: `Sevimlilar`
                            },
                        ]}
                    />

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
            </Grid>
        </div>
    )
}
