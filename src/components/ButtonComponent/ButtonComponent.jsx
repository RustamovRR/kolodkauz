import { Button } from '@material-ui/core'
import React from 'react'
import { useButtonComponentStyles } from './buttonComponentStyles'

export default function ButtonComponent() {
    const classes = useButtonComponentStyles()

    return (
        <div className={classes.root}>
            <Button
                disableElevation
                variant="contained"
                className={classes.button}
            >
                Войти
                </Button>
        </div>
    )
}
