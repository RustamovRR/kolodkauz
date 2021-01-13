import React from 'react'
import Header from '../components/header/Header'
import TabMenu from '../components/tabmenu/TabMenu'
import Carousel from '../components/carousel/Carousel'
import './homePageStyles.js'
import { useHomePageStyles } from './homePageStyles.js'
import CarBrand from '../components/carBrand/CarBrand'
import Product from '../components/product/Product'
import ProductBrand from '../components/productBrand/ProductBrand'
import Footer from '../components/footer/Footer'
import Ads from '../components/ads/Ads'
import downArrow from '../images/icons/down-arrow.png'

export default function HomePage() {
    const classes = useHomePageStyles()

    return (
        <div className={classes.home_root}>
            <div className={classes.header_box}>
                <Header />
            </div>

            <div className={classes.tabs_box}>
                <TabMenu />
            </div>

            <div className={classes.carousel_box}>
                <Carousel />
            </div>

            <div className={classes.carBrand_box}>
                <CarBrand />
                <CarBrand />
                <CarBrand />
                <CarBrand />
                <CarBrand />
            </div>

            <h1 className={classes.bestSeller_title}>Хиты продаж</h1>
            <div className={classes.bestSeller_box}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>

            <div className={classes.ads_box}>
                <Ads />
            </div>

            <div className={classes.product_box}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />

                <Product />
                <Product />
                <Product />
                <Product />
                <Product />

                <Product />
                <Product />
                <Product />
                <Product />
                <Product />

                <Product />
                <Product />
                <Product />
                <Product />
            </div>

            <div className={classes.seeAll_box}>
                <div className={classes.button}>
                    <span>Смотреть все</span>
                    <img src={downArrow} alt="" />
                </div>
            </div>

            <h1 className={classes.bestSeller_title}>Популярные бренды</h1>
            <div className={classes.productBrand_box}>
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
            </div>

            <div className={classes.footer_box}>
                <Footer />
            </div>
        </div >
    )
}
