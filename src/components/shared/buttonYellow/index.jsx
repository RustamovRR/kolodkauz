import React from 'react'
import { Button } from '@material-ui/core'
import { useButtonYellowStyles } from './buttonYellowStyles'

export default function ButtonYellow({ title, favorite, onClick }) {
    const classes = useButtonYellowStyles()

    return (
        <Button
            className={favorite ? classes.favorite_button : classes.button}
            onClick={onClick}
        >
            {title}
        </Button>
    )
}
