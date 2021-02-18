import React from 'react'
import { Button } from '@material-ui/core'
import { useButtonYellowStyles } from './buttonYellowStyles'

export default function ButtonYellow({ title }) {
    const classes = useButtonYellowStyles()

    return (
        <Button className={classes.button}>
            {title}
        </Button>
    )
}
