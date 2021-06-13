import React from 'react'
import { useAdStyles } from './adStyles'
import adsImg from '../../../assets/images/products/ads.png'
import { BASE_URL } from '../../../services/api'

export default function Ads({ data }) {
    const classes = useAdStyles()

    return (
        <div className={classes.ads_root}>
            {
                data.data?.slice(2,4).map((item) => (
                    <div key={item._id} >
                        <img
                            src={`${BASE_URL}/${item.image}`}
                            alt=""
                        />
                    </div>
                ))
            }
        </div>
    )
}
