import React, { useState } from 'react'
import NumberFormat from "react-number-format"
import { IconButton, InputAdornment, MenuItem, TextField } from '@material-ui/core'

import { useInputLoginStyles } from './inputLoginStyles'
import { Visibility, VisibilityOff } from '@material-ui/icons'

const NumberFormatCustom = (props) => {
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

            {/* <InputMask
                mask="999-999-9999"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.billing_phone}
                error={errors.billing_phone && touched.billing_phone}
                helperText={(errors.billing_phone && touched.billing_phone) && errors.billing_phone}>
                {(inputProps) =>
                    <TextField
                        {...inputProps}
                        className={classes.MuiInputBase}
                        id="billing_phone"
                        variant="outlined"
                        name="billing_phone"
                        placeholder={addressObj.phone}

                    />}
            </InputMask> */}
        </>
    )
}