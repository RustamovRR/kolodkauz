import React from 'react'
import { BASE_URL } from '../../../../services/api'
import { useProductBrandStyles } from './productBrandStyles'

export default function ProductBrand({ data }) {
    const classes = useProductBrandStyles()

    return (
        <div className={classes.brand_root}>
            <img
                src={`${BASE_URL}/${data?.image}`}
                alt='brand'
            />
        </div>
    )
}
