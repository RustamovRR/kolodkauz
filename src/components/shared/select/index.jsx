import React from 'react'
import { MenuItem, TextField } from '@material-ui/core'
import { useSelectStyles } from './selectStyles'


export default function Select({ id, items, index }) {
    const classes = useSelectStyles()

    return (
        <TextField
            id={id}
            select={(index == 2 || index == 3) ? true : false}
            variant="outlined"
            select
            fullWidth
            className={classes.textfield}
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
