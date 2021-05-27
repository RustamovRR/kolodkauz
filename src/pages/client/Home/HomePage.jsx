import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { useHomePageStyles } from './homePageStyles.js'
import './homePageStyles.js'

import { TabMenu, Carousel, CarBrand, Product, ProductBrand, Ads, Layout, FastBuyModal } from '../../../components/shared'
import { ContextRoot } from '../../../contexts'
import { useAdsQuery, useBrandsQuery, useProductsQuery } from '../../../hooks/queries'

export default function HomePage() {
    const classes = useHomePageStyles()
    const { trans } = useContext(ContextRoot)

    const products = useProductsQuery({ page: 0 })
    const brands = useBrandsQuery()
    const ads = useAdsQuery()

    const productsQuery = products.isSuccess ? products.data?.data : []
    const brandsQuery = brands.isSuccess ? brands.data?.data : []
    const adsQuery = ads.isSuccess ? ads.data?.data : []
    // let productArray = new Array(20).fill('asd')
    // console.log(productsQuery)

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
