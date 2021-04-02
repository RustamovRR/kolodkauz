import React from 'react'
import { Rating } from '@material-ui/lab'

export default function RatingComp({ value }) {
    return (
        <div>
            <Rating value={value} size="small" />
        </div>
    )
}
