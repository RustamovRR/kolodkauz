import React from 'react'
import { MenuItem, TextField } from '@material-ui/core'

import { useInputBasketStyles } from './inputBasketStyles'

export default function InputBasket({ id, index, name, value, onChange }) {
    const classes = useInputBasketStyles()
    const menu = [
        `Контактный телефон`, `Ф.И.О`, `Область`, `Город / Район`, `Адрес`, `Индекс`
    ]

    return (
        <TextField
            id={id}
            select={(index == 2 || index == 3) ? true : false}
            variant="outlined"
            name={name}
            value={value}
            onChange={onChange}
            className={classes.textfield}
        >
            {
                (index == 2 || index == 3)
                    ? menu.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))
                    : ""
            }
        </TextField>
    )
}
