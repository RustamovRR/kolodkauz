import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { useHomePageStyles } from './homePageStyles.js'
import './homePageStyles.js'

import { TabMenu, Carousel, CarBrand, Product, ProductBrand, Ads, Layout, FastBuyModal } from '../../../components/shared'
import { ContextRoot } from '../../../contexts'
import { useAdsQuery, useBrandsQuery, useCarsQuery, useProductsQuery } from '../../../hooks/queries'

export default function HomePage() {
    const classes = useHomePageStyles()
    const state = useContext(ContextRoot)
    const { trans, token } = useContext(ContextRoot)
    const { userData, isAdmin, isLogged, cart } = state.user
    const { productsData } = state.product

    const products = useProductsQuery({ page: 0 })
    const brands = useBrandsQuery()
    const ads = useAdsQuery()
    const cars = useCarsQuery()

    const productsQuery = products.isSuccess ? products.data?.data : []
    const brandsQuery = brands.isSuccess ? brands.data?.data : []
    const adsQuery = ads.isSuccess ? ads.data?.data : []
    const carsQuery = cars.isSuccess ? cars.data?.data : []
    console.log(productsQuery)


    return (
        <Layout>
            <div className={classes.home_root}>

                <section className={classes.tabs_box}>
                    <TabMenu />
                </section>

                <Grid className={classes.container}>
                    <section className={classes.carousel_box}>
                        <Carousel data={adsQuery} />
                    </section>

                    <Grid className={classes.carBrand_box}>
                        {
                            carsQuery.data?.map((item) => (
                                <CarBrand
                                    key={item._id}
                                    data={item}
                                />
                            ))
                        }
                    </Grid>

                    <div className={classes.bestSeller}>
                        <h1 className={classes.bestSeller_title}>
                            {trans ? `Хиты продаж` : `Eng ko'p sotilgan mahsulotlar`}
                        </h1>
                    </div>

                    <FastBuyModal />

                    <Grid className={classes.bestSeller_box}>
                        {
                            productsQuery.data?.map((item) => (
                                <Product
                                    key={item._id}
                                    id={item._id}
                                    data={item}
                                    homePage={true}
                                />
                            ))
                        }
                    </Grid>

                    <section className={classes.ads_box}>
                        <Ads data={adsQuery} />
                    </section>

                    <div className={classes.bestSeller}>
                        <h1 className={classes.bestSeller_title}>
                            {trans ? `Хиты продаж` : `Eng ko'p sotilgan mahsulotlar`}
                        </h1>
                    </div>
                    <section className={classes.bestSeller_box}>
                        {
                            productsQuery.data?.slice(12, 36).map((item) => (
                                <Product
                                    key={item._id}
                                    id={item._id}
                                    data={item}
                                    homePage={true}
                                />
                            ))
                        }
                    </section>

                    <div className={classes.brands_box}>
                        <h1 className={classes.bestSeller_title}>
                            {trans ? `Популярные бренды` : `Mashhur brendlar`}
                        </h1>
                        <Link>
                            {trans ? `Все бренды` : `Barcha brendlar`}
                        </Link>
                    </div>
                    <section className={classes.productBrand_box}>
                        {
                            brandsQuery.data?.map((item) => (
                                <ProductBrand
                                    key={item._id}
                                    data={item}
                                />
                            ))
                        }
                        <ProductBrand />
                    </section>
                </Grid>
            </div>
        </Layout>
    )
}
