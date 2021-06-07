import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import { useFavoriteStyles } from './FavoriteStyles'

import { TabMenu, Product, BreadCrumbs, Layout } from '../../../components/shared'
import { ContextRoot } from '../../../contexts'

export default function FavoritePage() {
    const classes = useFavoriteStyles()

    const state = useContext(ContextRoot)
    const { trans } = useContext(ContextRoot)
    const { userFavorite, removeFavorite } = state.user

    const favoriteProducts = JSON.parse(localStorage.getItem('userFavorite'))
    console.log(removeFavorite)

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
                            {trans ? `Избранные` : `Sevimlilar`}
                        </h1>

                        <div className={classes.product_box}>
                            {
                                favoriteProducts?.map((item) => (
                                    <Product
                                        key={item._id}
                                        id={item._id}
                                        data={item}
                                        favorite
                                    />
                                ))
                            }
                        </div>
                    </section>
                </Grid>
            </div>
        </Layout>
    )
}
