import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
// import useAPIQuery from '../../../hooks/queries/useAPIQuery'
import { useHomePageStyles } from './homePageStyles.js'
import './homePageStyles.js'

import { TabMenu, Carousel, CarBrand, Product, ProductBrand, Ads, Layout } from '../../../components/shared'
import { ContextRoot } from '../../../contexts'
import { Skeleton } from '@material-ui/lab'


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const array2 = [...array, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function HomePage() {
    const classes = useHomePageStyles()
    const { trans, setTrans, productsData } = useContext(ContextRoot)

    console.log(productsData)

    return (
        <Layout>
            <div className={classes.home_root}>

                <section className={classes.tabs_box}>
                    <TabMenu />
                </section>

                <Grid className={classes.container}>
                    <section className={classes.carousel_box}>
                        <Carousel />
                    </section>

                    <Grid className={classes.carBrand_box}>
                        <CarBrand />
                        <CarBrand />
                        <CarBrand />
                        <CarBrand />
                        <CarBrand />
                        <CarBrand />
                    </Grid>

                    <div className={classes.bestSeller}>
                        <h1 className={classes.bestSeller_title}>
                            {trans ? `Хиты продаж` : `Eng ko'p sotilgan mahsulotlar`}
                        </h1>
                    </div>

                    <Grid className={classes.bestSeller_box}>
                        {
                            productsData.data?.map((item) => (
                                <Product
                                    key={item._id}
                                    id={item._id}
                                    data={item}
                                    image={item.image}
                                    uz={item.uz}
                                    buy_count={item.buy_count}
                                    discount={item.discount}
                                    price={item.price}
                                    quantity={item.quantity}
                                    type={item.type}
                                />
                            ))
                        }
                    </Grid>

                    <section className={classes.ads_box}>
                        <Ads />
                    </section>

                    <div className={classes.bestSeller}>
                        <h1 className={classes.bestSeller_title}>
                            {trans ? `Хиты продаж` : `Eng ko'p sotilgan mahsulotlar`}
                        </h1>
                    </div>
                    <section className={classes.bestSeller_box}>
                        {
                            array2.map((item) => (
                                <Product key={item} />
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
            </div >
        </Layout>
    )
}
