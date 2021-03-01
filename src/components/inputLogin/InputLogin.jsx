import React from 'react'
import { MenuItem, TextField } from '@material-ui/core'

import { useInputLoginStyles } from './inputLoginStyles'

export default function InputLogin({ id, selected, index }) {
    const classes = useInputLoginStyles()
    const menu = [
        `Контактный телефон`, `Ф.И.О`, `Область`, `Город / Район`, `Адрес`, `Индекс`
    ]

    return (
        <TextField
            id={id}
            select={(index == 2 || index == 3) ? true : false}
            variant="outlined"
            className={classes.textfield}
        >
        </TextField>
    )
}
