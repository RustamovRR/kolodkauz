import React, { useContext, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { useFavoriteStyles } from './FavoriteStyles'

import { TabMenu, Product, BreadCrumbs, Layout } from '../../../components/shared'
import { ContextRoot } from '../../../contexts'

export default function FavoritePage() {
    const classes = useFavoriteStyles()

    const state = useContext(ContextRoot)
    const { trans } = useContext(ContextRoot)
    const { userFavorite } = state.user

    return (
        <Layout>
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
                            {trans === 'ru' ? `Избранные` : `Sevimlilar`}
                        </h1>

                        {
                            userFavorite.length !== 0
                                ? <div className={classes.product_box}>
                                    {
                                        userFavorite?.map((item) => (
                                            <Product
                                                key={item._id}
                                                id={item._id}
                                                data={item}
                                                favorite
                                                favoritePage
                                            />
                                        ))
                                    }
                                </div>
                                : <p>Sevimli mahsulotlar mavjud emas</p>
                        }

                    </section>
                </Grid>
            </div>
        </Layout>
    )
}
