import React, { useState } from 'react'
import { IconButton } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { useCarouselStyles } from './carouselStyles'
import { autoPlay } from 'react-swipeable-views-utils';

import back1 from '../../../assets/images/brands/background.png'
import back2 from '../../../assets/images/brands/back2.jpg'
import back3 from '../../../assets/images/brands/back3.jpg'
import back4 from '../../../assets/images/brands/back4.jpg'
import back5 from '../../../assets/images/brands/back5.jpg'

import { LeftGreyCircle, LeftGreyArrow, RightGreyCircle } from '../../../assets/images/icons'


export default function Carousel() {
    const classes = useCarouselStyles()
    const [activeStep, setActiveStep] = useState(0)
    const backgrounds = [back1, back2, back3, back4, back5]

    const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (
            activeStep === 4
                ? prevActiveStep = 0
                : prevActiveStep + 1
        ));
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (
            activeStep === 0
                ? prevActiveStep = 4
                : prevActiveStep - 1
        ));
    }

    return (
        <div className={classes.carousel_root}>

            <SwipeableViews
                index={activeStep}
            >
                {
                    backgrounds.map(item => (
                        <div
                            className={classes.carousel}
                            style={{
                                backgroundImage: `url(${item})`,
                            }}
                            key={item}
                        />
                    ))
                }
            </SwipeableViews>

            <section className={classes.arrows}>
                <IconButton className={classes.left_arrow} onClick={handleBack}>
                    <LeftGreyCircle style={{ width: 48, height: 48 }} />
                </IconButton>
                <IconButton className={classes.right_arrow} onClick={handleNext}>
                    <RightGreyCircle />
                </IconButton>
            </section>

            <section className={classes.content}>
            </section>
        </div>
    )
}
