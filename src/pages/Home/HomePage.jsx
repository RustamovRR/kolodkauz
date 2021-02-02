import React from 'react'
import Header from '../../components/header/Header'
import TabMenu from '../../components/tabmenu/TabMenu'
import Carousel from '../../components/carousel/Carousel'
import { useHomePageStyles } from './homePageStyles.js'
import CarBrand from '../../components/carBrand/CarBrand'
import Product from '../../components/product/Product'
import ProductBrand from '../../components/productBrand/ProductBrand'
import Footer from '../../components/footer/Footer'
import Ads from '../../components/ads/Ads'
import downArrow from '../../images/icons/down-arrow.png'
import './homePageStyles.js'

export default function HomePage() {
    const classes = useHomePageStyles()

    return (
        <div className={classes.home_root}>
            <section className={classes.header_box}>
                <Header />
            </section>

            <section className={classes.tabs_box}>
                <TabMenu />
            </section>

            <section className={classes.carousel_box}>
                <Carousel />
            </section>

            <section className={classes.carBrand_box}>
                <CarBrand />
                <CarBrand />
                <CarBrand />
                <CarBrand />
                <CarBrand />
            </section>

            <h1 className={classes.bestSeller_title}>Хиты продаж</h1>
            <section className={classes.bestSeller_box}>
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
            </section>

            <section className={classes.ads_box}>
                <Ads />
            </section>

            <section className={classes.product_box}>
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
            </section>

            <section className={classes.seeAll_box}>
                <div className={classes.button}>
                    <span>Смотреть все</span>
                    <img src={downArrow} alt="" />
                </div>
            </section>

            <h1 className={classes.bestSeller_title}>Популярные бренды</h1>
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

            <section className={classes.footer_box}>
                <Footer />
            </section>
        </div >
    )
}
