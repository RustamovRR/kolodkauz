import React, { useState } from 'react'
import NumberFormat from "react-number-format"
import { MenuItem, TextField } from '@material-ui/core'

import { useInputLoginStyles } from './inputLoginStyles'

const NumberFormatCustom = (props) => {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
            format='+998 ## ### ## ##'
            allowEmptyFormatting
            mask="_"
        />
    )
}


export default function InputLogin({ id, numberFormat, value, handleChange }) {
    const classes = useInputLoginStyles()

    return (
        <TextField
            id={id}
            variant="outlined"
            value={value}
            className={classes.textfield}
            onChange={handleChange}
            InputProps={numberFormat && {
                inputComponent: NumberFormatCustom
            }}
        >
        </TextField>
    )
}