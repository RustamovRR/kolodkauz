import React from 'react'
import { useAdStyles } from './adStyles'
import adsImg from '../../../assets/images/products/ads.png'

export default function Ads() {
    const classes = useAdStyles()

    return (
        <div className={classes.ads_root}>
            <div><img src={adsImg} alt="" /></div>
            <div><img src={adsImg} alt="" /></div>
        </div>
    )
}
