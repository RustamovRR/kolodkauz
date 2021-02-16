import { Button } from '@material-ui/core'
import { ArrowDownward } from '@material-ui/icons'
import React from 'react'
import { useButtonComponentStyles } from './buttonComponentStyles'

export default function ButtonComponent({ title, outlined, withIcon, slim }) {
    const classes = useButtonComponentStyles()

    return (
        <div className={classes.root}>
            <Button
                disableElevation
                variant="contained"
                className={outlined ? classes.outlined_button : classes.button}
                style={slim ? { height: 36 } : { height: 48 }}
                endIcon={withIcon ? <ArrowDownward /> : ``}
            >
                {title}
            </Button>
        </div>
    )
}
