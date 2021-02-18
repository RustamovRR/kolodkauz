import React, { useState } from 'react'
import { useCarouselStyles } from './carouselStyles'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import back1 from '../../images/brands/background.png'
import back2 from '../../images/brands/back2.jpg'
import back3 from '../../images/brands/back3.jpg'
import back4 from '../../images/brands/back4.jpg'
import back5 from '../../images/brands/back5.jpg'
import leftArrow from '../../images/icons/left-arrow.png'
import rightArrow from '../../images/icons/right-arrow.png'
import { IconButton } from '@material-ui/core';


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
                        />
                    ))
                }
            </SwipeableViews>

            <section className={classes.arrows}>
                <IconButton className={classes.left_arrow} onClick={handleBack}>
                    <img src={leftArrow} alt="" />
                </IconButton>
                <IconButton className={classes.right_arrow} onClick={handleNext}>
                    <img src={rightArrow} alt="" />
                </IconButton>
            </section>

            <section className={classes.content}>
                <h1>ГОНКА БЕЗ ФИНИША</h1>
            </section>
        </div>
    )
}
