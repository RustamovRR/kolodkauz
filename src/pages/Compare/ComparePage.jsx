import React, { useContext } from 'react'
import TabMenu from '../../components/tabmenu/TabMenu'
import ProductCompare from '../../components/Product/productCompare/ProductCompare'
import { Swiper, SwiperSlide } from 'swiper/react';
import { TranslateContext } from '../../contexts/TranslateContext'
import 'swiper/swiper.min.css';

import { useComparePageStyles } from './comparePageStyles'
import leftArrow from '../../images/icons/compare_left.svg'
import rightArrow from '../../images/icons/compare_right.svg'
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs'
import { Grid } from '@material-ui/core';

export default function ComparePage() {
    const classes = useComparePageStyles()
    const { trans, setTrans } = useContext(TranslateContext)
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (
        <div>

            <section className={classes.tabs_box}>
                <TabMenu />
            </section>

            <Grid className={classes.container}>
                <section className={classes.compare_box}>
                    <BreadCrumbs
                        items={[
                            {
                                link: `/`,
                                titleRu: `Главная`,
                                titleUz: `Asosiy`
                            },
                            {
                                link: `/`,
                                titleRu: `Автотовары`,
                                titleUz: `Avtovarlar`
                            },
                            {
                                link: `/`,
                                titleRu: `Шины и Диски`,
                                titleUz: `Shinalar va disklar`
                            }
                        ]}
                    />

                    <h1>
                        {trans ? `Сравнение` : `Taqqoslash`}
                    </h1>

                    <div className={classes.product_box}>
                        <Swiper
                            slidesPerView={5}
                            className={classes.swiper}
                        >
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                                    <SwiperSlide >
                                        <ProductCompare primary={index === 0 ? true : false} />
                                    </SwiperSlide>
                                ))
                            }
                            <div className="prev" />
                            <div className="next" />
                            <div className={classes.arrows} >
                                <img src={leftArrow} alt="" />
                                <img src={rightArrow} alt="" />
                            </div>
                        </Swiper>
                    </div>
                </section>
            </Grid>

        </div >
    )
}
