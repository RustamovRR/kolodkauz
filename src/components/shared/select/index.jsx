import React from 'react'
import { MenuItem, TextField } from '@material-ui/core'
import { useSelectStyles } from './selectStyles'


export default function Select({ id, items, index, label, placeholder }) {
    const classes = useSelectStyles()

    return (
        <TextField
            id={id}
            select
            fullWidth
            label={label}
            variant="outlined"
            placeholder={placeholder}
            className={classes.textfield}
            select={(index == 2 || index == 3) ? true : false}
        >
            {
                items.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))
            }
        </TextField>
    )
}
