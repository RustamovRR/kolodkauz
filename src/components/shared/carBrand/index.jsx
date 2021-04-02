import React from 'react'
import image from '../../../assets/images/brands/chevrolet.png'
import { useCarBrandStyles } from './carBrandStyles'

export default function CarBrand() {
    const classes = useCarBrandStyles()

    return (
        <div className={classes.carBrand_root}>
            <img src={image} alt="" />
        </div>
    )
}
