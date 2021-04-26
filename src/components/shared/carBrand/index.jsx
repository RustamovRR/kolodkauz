import React from 'react'
import { BASE_URL } from '../../../services/api'
import { useCarBrandStyles } from './carBrandStyles'

export default function CarBrand({ data }) {
    const classes = useCarBrandStyles()

    return (
        <div className={classes.carBrand_root}>
            <img
                src={`${BASE_URL}/${data?.image}`}
                alt='brand'
            />
        </div>
    )
}