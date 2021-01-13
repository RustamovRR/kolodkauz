import React from 'react'
import { useAdStyles } from './adStyles'

export default function Ads() {
    const classes = useAdStyles()

    return (
        <div className={classes.ads_root}>
            <div></div>
            <div></div>
        </div>
    )
}
