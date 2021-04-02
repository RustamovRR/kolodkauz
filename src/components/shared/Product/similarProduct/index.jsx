import React, { useState } from 'react'
import Product from '../Product'
import { useSimilarProductStyles } from './similarProductStyles';

export default function SImilarProduct() {
    const classes = useSimilarProductStyles()

    return (
        <div className={classes.root}>
            <section className={classes.product_box}>
                {
                    [1, 2, 3, 4, 5].map(item => (
                        <Product />
                    ))
                }
            </section>
            <div className={classes.divider} />
        </div>
    )
}
