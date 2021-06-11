import React, { useState } from 'react'
import { Product } from '../../../shared'
import { useSimilarProductStyles } from './similarProductStyles';

export default function SimilarProduct({ data }) {
    const classes = useSimilarProductStyles()
    console.log(data)
    return (
        <div className={classes.root}>
            <section className={classes.product_box}>
                {
                    data?.map(item => (
                        <Product
                            key={item}
                            data={item}
                            id={item._id}
                        />
                    ))
                }
            </section>
            <div className={classes.divider} />
        </div>
    )
}
