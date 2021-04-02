import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
// import useAPIQuery from '../../../hooks/queries/useAPIQuery'
import { useHomePageStyles } from './homePageStyles.js'
import './homePageStyles.js'

import { TabMenu, Carousel, CarBrand, Product, Ads } from '../../../components/shared'
import { TranslateContext } from '../../../contexts'


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const array2 = [...array, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function HomePage() {
    const classes = useHomePageStyles()
    const { trans, setTrans } = useContext(TranslateContext)

    // const query = useAPIQuery(`/api/products`)
    // console.log(query)

    return (
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

                <h1 className={classes.bestSeller_title}>
                    {trans ? `Хиты продаж` : `Eng ko'p sotilgan mahsulotlar`}
                </h1>
                {/* <section className={classes.bestSeller_box}>
                    {
                        array.map(() => (
                            <Product />
                        ))
                    }
                </section> */}

                <section className={classes.ads_box}>
                    <Ads />
                </section>

                <h1 className={classes.product_box_title}>
                    {trans ? `Хиты продаж` : `Eng ko'p sotilgan mahsulotlar`}
                </h1>
                <section className={classes.product_box}>
                    {
                        array2.map(() => (
                            <Product />
                        ))
                    }
                </section>

                {/* <div className={classes.bestSeller}>
                    <h1 className={classes.bestSeller_title}>
                        {trans ? `Популярные бренды` : `Mashhur brendlar`}
                    </h1>
                    <Link>
                        {trans ? `Все бренды` : `Barcha brendlar`}
                    </Link>
                </div>
                <section className={classes.productBrand_box}>
                    <Product.ProductBrand />
                    <Product.ProductBrand />
                    <Product.ProductBrand />
                    <Product.ProductBrand />
                    <Product.ProductBrand />
                    <Product.ProductBrand />
                    <Product.ProductBrand />
                    <Product.ProductBrand />
                    <Product.ProductBrand />
                    <Product.ProductBrand />
                    <Product.ProductBrand />
                    <Product.ProductBrand />
                    <Product.ProductBrand />
                    <Product.ProductBrand />
                    <Product.ProductBrand />
                    <Product.ProductBrand />
                    <Product.ProductBrand />
                    <Product.ProductBrand />
                </section> */}
            </Grid>
        </div >
    )
}
