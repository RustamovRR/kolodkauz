import React, { useContext } from 'react'
import { Grid } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useComparePageStyles } from './comparePageStyles'
import 'swiper/swiper.min.css';

import { ContextRoot } from '../../../contexts'
import { TabMenu, ProductCompare, BreadCrumbs, Layout } from '../../../components/shared'
import { LeftGreyCircle, LeftWhiteCircle, RightGreyCircle, RightWhiteCircle } from '../../../assets/images/icons'


export default function ComparePage() {
    const classes = useComparePageStyles()
    const { trans, setTrans } = useContext(ContextRoot)
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (
        <Layout>

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
                            breakpoints={{
                                1100: {
                                    slidesPerView: 5,
                                },
                                900: {
                                    slidesPerView: 4,
                                },
                                700: {
                                    slidesPerView: 3,
                                },
                                500: {
                                    slidesPerView: 2,
                                },
                                279: {
                                    slidesPerView: 1,
                                },
                            }}
                        >
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                                    <SwiperSlide className={classes.swiper_slide} key={item} >
                                        <ProductCompare primary={index === 0 ? true : false} />
                                    </SwiperSlide>
                                ))
                            }
                            <div className="prev" />
                            <div className="next" />
                            <div className={classes.arrows} >
                                <LeftWhiteCircle />
                                <RightWhiteCircle />
                            </div>
                        </Swiper>
                    </div>
                </section>
            </Grid>

        </Layout >
    )
}
