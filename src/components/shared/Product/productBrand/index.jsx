import React from 'react'
import image from '../../../../assets/images/brands/castrol.png'
import { useProductBrandStyles } from './productBrandStyles'

export default function ProductBrand() {
    const classes = useProductBrandStyles()

    return (
        <div className={classes.brand_root}>
            <img src={image} alt="" />
        </div>
    )
}
