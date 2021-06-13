import React, { useState } from 'react'
import { IconButton } from '@material-ui/core';
import { useCarouselStyles } from './carouselStyles'
import cn from 'classnames'

import { LeftGreyCircle, RightGreyCircle } from '../../../assets/images/icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade } from 'swiper';
import 'swiper/swiper.min.css';
import { BASE_URL } from '../../../services/api';
import back1 from '../../../assets/images/brands/background.png'
import back2 from '../../../assets/images/brands/back2.jpg'
import back3 from '../../../assets/images/brands/back3.jpg'
import back4 from '../../../assets/images/brands/back4.jpg'
import back5 from '../../../assets/images/brands/back5.jpg'

const images = [back1, back2, back3, back4, back5]


export default function Carousel({ data }) {
    const classes = useCarouselStyles()
    const [activeStep, setActiveStep] = useState(0)
    const [controlSlide, setControlSlide] = useState()
    SwiperCore.use([EffectFade]);


    const onNext = () => {
        controlSlide?.slideNext();
    };
    const onPrev = () => {
        controlSlide?.slidePrev();
    };

    return (
        <div className={classes.carousel_root}>
            <Swiper
                className={classes.swiper}
                onSwiper={setControlSlide}
                // effect="fade"
                loop
            // swiper
            >
                {
                    data?.map(item => (
                        <SwiperSlide className={classes.swiper_slide} key={item._id}>
                            <div className={classes.carousel} >
                                <img
                                    src={`${BASE_URL}/${item.image}`}
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                    ))
                }
                <section className={classes.arrows}>
                    <IconButton className={cn(classes.left_arrow)} onClick={onPrev}>
                        <LeftGreyCircle style={{ width: 48, height: 48 }} />
                    </IconButton>
                    <IconButton className={cn(classes.right_arrow)} onClick={onNext}>
                        <RightGreyCircle />
                    </IconButton>
                </section>
            </Swiper>

        </div>
    )
}
