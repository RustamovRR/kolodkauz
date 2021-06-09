import React, { useState } from 'react'
import { Product } from '../../../shared'
import { useSimilarProductStyles } from './similarProductStyles';

export default function SImilarProduct({ similarProduct }) {
    const classes = useSimilarProductStyles()

    return (
        <div className={classes.root}>
            <section className={classes.product_box}>
                {
                    [1, 2, 3, 4, 5].map(item => (
                        <Product key={item} />
                    ))
                }
            </section>
            <div className={classes.divider} />
        </div>
    )
}
