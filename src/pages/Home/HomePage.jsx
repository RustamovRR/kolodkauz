import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import TabMenu from '../../components/tabmenu/TabMenu'
import Carousel from '../../components/carousel/Carousel'
import { TranslateContext } from '../../contexts/TranslateContext'
import CarBrand from '../../components/carBrand/CarBrand'
import Product from '../../components/product/Product'
import ProductBrand from '../../components/productBrand/ProductBrand'
import Footer from '../../components/footer/Footer'
import Ads from '../../components/ads/Ads'

import downArrow from '../../images/icons/down-arrow.png'
import { useHomePageStyles } from './homePageStyles.js'
import './homePageStyles.js'

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const array2 = [...array, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function HomePage() {
    const classes = useHomePageStyles()
    const { trans, setTrans } = useContext(TranslateContext)


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
                <section className={classes.bestSeller_box}>
                    {
                        array.map(() => (
                            <Product />
                        ))
                    }
                </section>

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

                <div className={classes.bestSeller}>
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
    )
}
