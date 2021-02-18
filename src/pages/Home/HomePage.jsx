import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import TabMenu from '../../components/tabmenu/TabMenu'
import Carousel from '../../components/carousel/Carousel'
import { useHomePageStyles } from './homePageStyles.js'
import CarBrand from '../../components/carBrand/CarBrand'
import Product from '../../components/product/Product'
import ProductBrand from '../../components/productBrand/ProductBrand'
import Footer from '../../components/footer/Footer'
import Ads from '../../components/ads/Ads'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

import downArrow from '../../images/icons/down-arrow.png'
import { TranslateContext } from '../../contexts/TranslateContext'
import './homePageStyles.js'
import { Grid } from '@material-ui/core'

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const array2 = [...array, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function HomePage() {
    const classes = useHomePageStyles()
    const { trans, setTrans } = useContext(TranslateContext)


    return (
        <div className={classes.home_root}>
            <section className={classes.header_box}>
                <Header />
            </section>

            <Grid className={classes.container}>
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

                <section className={classes.seeAll_box}>
                    <ButtonComponent
                        outlined
                        withIcon
                        title={trans ? `Смотреть все` : `Barchasini ko'rish`}
                    />
                </section>

                <h1 className={classes.bestSeller_title}>
                    {trans ? `Популярные бренды` : `Mashhur brendlar`}
                </h1>
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

            <section className={classes.footer_box}>
                <Footer />
            </section>
        </div >
    )
}
