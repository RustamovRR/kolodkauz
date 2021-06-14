import React, { useState } from 'react'
import NumberFormat from "react-number-format"
import { IconButton, InputAdornment, MenuItem, TextField } from '@material-ui/core'

import { useInputLoginStyles } from './inputLoginStyles'
import { Visibility, VisibilityOff } from '@material-ui/icons'

export const NumberFormatCustom = (props) => {
    const { inputRef, onChange, value, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            value={value}
            onChange={onChange}
            format='+998 ## ### ## ##'
            allowEmptyFormatting
            mask="_"
        />
    )
}


export default function InputLogin({ id, numberFormat, value, handleChange, type, error, helperText }) {
    const classes = useInputLoginStyles()


    return (
        <>
            <TextField
                id={id}
                variant="outlined"
                value={value}
                type={type}
                error={error}
                helperText={helperText}
                className={classes.textfield}
                onChange={handleChange}
                InputProps={numberFormat && {
                    inputComponent: NumberFormatCustom
                }}
                FormHelperTextProps={{
                    className: classes.helperText
                }}
            >
            </TextField>
        </>
    )
}