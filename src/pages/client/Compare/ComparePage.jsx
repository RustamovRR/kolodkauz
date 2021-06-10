import React, { useContext, useState } from 'react'
import { Grid } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useComparePageStyles } from './comparePageStyles'
import 'swiper/swiper.min.css';

import { ContextRoot } from '../../../contexts'
import { TabMenu, ProductCompare, BreadCrumbs, Layout } from '../../../components/shared'
import { LeftWhiteCircle, RightWhiteCircle } from '../../../assets/images/icons'
import { AntTabs, AntTab } from '../../../components/shared/tabmenu/tabMenuStyles';


export default function ComparePage() {
    const classes = useComparePageStyles()
    const [controlSlide, setControlSlide] = useState()
    const [value, setValue] = useState(0)

    const state = useContext(ContextRoot)
    const { trans } = useContext(ContextRoot)
    const { compare } = state.user

    const onNext = () => {
        controlSlide?.slideNext();
    };
    const onPrev = () => {
        controlSlide?.slidePrev();
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabs = [
        'Автомобильные шины', 'Ходовая часть', 'Моторная часть', 'Запчасти ТО', 'Аккумуляторы'
    ]

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
                        {trans === 'ru' ? `Сравнение` : `Taqqoslash`}
                    </h1>

                    <div className={classes.compareTabContainer} >
                        <div className={classes.compareTabMenu} >
                            <AntTabs onChange={handleChange} value={value}>
                                {
                                    tabs.map((item) => (
                                        <AntTab
                                            label={item}
                                        />
                                    ))
                                }
                            </AntTabs>
                        </div>
                    </div>

                    <div className={classes.product_box}>
                        <Swiper
                            slidesPerView={5}
                            className={classes.swiper}
                            onSwiper={setControlSlide}
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
                               compare?.map((item, index) => (
                                    <SwiperSlide className={classes.swiper_slide} key={item} >
                                        <ProductCompare primary={index === 0 ? true : false} />
                                    </SwiperSlide>
                                ))
                            }
                            <div className="prev" />
                            <div className="next" />
                            <div className={classes.arrows} >
                                <div onClick={onPrev} >
                                    <LeftWhiteCircle />
                                </div>
                                <div onClick={onNext} >
                                    <RightWhiteCircle />
                                </div>
                            </div>
                        </Swiper>
                    </div>
                </section>
            </Grid>

        </Layout >
    )
}
