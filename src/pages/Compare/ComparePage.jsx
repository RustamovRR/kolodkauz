import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Rating } from '@material-ui/lab'
import { Breadcrumbs, TableContainer } from '@material-ui/core'
import { productCompare } from '../../Globals/productCompare'
import { TranslateContext } from '../../contexts/TranslateContext'
import Header from '../../components/header/Header'
import TabMenu from '../../components/tabmenu/TabMenu'
import Product from '../../components/product/Product'
import Footer from '../../components/footer/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import { clr } from '../../Globals/colors'
import { useComparePageStyles } from './comparePageStyles'
import leftArrow from '../../images/icons/compare_left.svg'
import rightArrow from '../../images/icons/compare_right.svg'
import ProductCompare from '../../components/productCompare/ProductCompare'

export default function ComparePage() {
    const classes = useComparePageStyles()
    const { trans, setTrans } = useContext(TranslateContext)

    return (
        <div>
            <section className={classes.header_box}>
                <Header />
            </section>

            <section className={classes.tabs_box}>
                <TabMenu />
            </section>

            <section className={classes.compare_box}>
                <Breadcrumbs className={classes.navigation}>
                    <Link to="/" className={classes.link}>
                        {trans ? `Главная` : `Asosiy`}
                    </Link>
                    <Link to="/" className={classes.link}>
                        {trans ? `Автотовары` : `Avtotovarlar`}
                    </Link>
                    <p >
                        {trans ? `Шины и Диски` : `Shina va disklar`}
                    </p>
                </Breadcrumbs>

                <h1>
                    {trans ? `Сравнение` : `Taqqoslash`}
                </h1>

                <Swiper slidesPerView={6} >
                    <div className={classes.product_box}>
                        <SwiperSlide >
                            <ProductCompare />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCompare />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCompare />
                        </SwiperSlide>
                        <SwiperSlide >
                            <ProductCompare />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCompare />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCompare />
                        </SwiperSlide>
                        <div className={classes.arrows} >
                            <img src={leftArrow} alt="" />
                            <img src={rightArrow} alt="" />
                        </div>
                    </div>
                </Swiper>
            </section>


            <section className={classes.compare_info_box}>
            </section>

            <section className={classes.footer_box}>
                <Footer />
            </section>
        </div >
    )
}
