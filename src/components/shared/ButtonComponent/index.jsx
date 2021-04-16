import React from 'react'
import { Button } from '@material-ui/core'
import { ArrowDownward } from '@material-ui/icons'
import { useButtonComponentStyles } from './buttonComponentStyles'

export default function ButtonComponent({ title, outlined, endIcon, startIcon, componentIcon, slim }) {
    const classes = useButtonComponentStyles()

    return (
        <Button
            disableElevation
            variant="contained"
            className={outlined ? classes.outlined_button : classes.button}
            style={slim ? { height: 36 } : { height: 48 }}
            endIcon={endIcon ? componentIcon : ``}
            startIcon={startIcon ? componentIcon : ``}
        >
            {title}
        </Button>
    )
}
