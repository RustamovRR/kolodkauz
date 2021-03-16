import React from 'react'
import { MenuItem, TextField } from '@material-ui/core'

import { useInputLoginStyles } from './inputLoginStyles'

export default function InputLogin({ id }) {
    const classes = useInputLoginStyles()
    const menu = [
        `Контактный телефон`, `Ф.И.О`, `Область`, `Город / Район`, `Адрес`, `Индекс`
    ]

    return (
        <TextField
            id={id}
            variant="outlined"
            className={classes.textfield}
        >
        </TextField>
    )
}
