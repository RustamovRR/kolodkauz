import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { useHomePageStyles } from './homePageStyles.js'
import './homePageStyles.js'

import { TabMenu, Carousel, CarBrand, Product, ProductBrand, Ads, Layout } from '../../../components/shared'
import { ContextRoot } from '../../../contexts'
import { Skeleton } from '@material-ui/lab'
import { useAdsQuery, useBrandsQuery, useProductsQuery } from '../../../hooks/queries'


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const array2 = [...array, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function HomePage() {
    const classes = useHomePageStyles()
    const { trans, setTrans, favoriteCart } = useContext(ContextRoot)

    const products = useProductsQuery({ page: 0 })
    const brands = useBrandsQuery()
    const ads = useAdsQuery()

    const productsQuery = products.isSuccess ? products.data?.data : []
    const brandsQuery = brands.isSuccess ? brands.data?.data : []
    const adsQuery = ads.isSuccess ? ads.data?.data : []
    console.log(adsQuery)

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
                            brandsQuery.data?.map((item) => (
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

                    <Grid className={classes.bestSeller_box}>
                        {
                            productsQuery.data?.slice(0, 12).map((item) => (
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
                        <ProductBrand />
                        <ProductBrand />
                        <ProductBrand />
                        <ProductBrand />
                        <ProductBrand />
                        <ProductBrand />
                        <ProductBrand />
                        <ProductBrand />
                        <ProductBrand />
                        <ProductBrand />
                        <ProductBrand />
                        <ProductBrand />
                        <ProductBrand />
                        <ProductBrand />
                        <ProductBrand />
                        <ProductBrand />
                        <ProductBrand />
                        <ProductBrand />
                    </section>
                </Grid>
            </div>
        </Layout>
    )
}
