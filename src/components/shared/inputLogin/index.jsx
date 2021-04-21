import React from 'react'
import NumberFormat from "react-number-format"
import { MenuItem, TextField } from '@material-ui/core'

import { useInputLoginStyles } from './inputLoginStyles'

export default function InputLogin({ id, numberFormat }) {
    const classes = useInputLoginStyles()

    return (
        // numberFormat
        //     ? (
        // <NumberFormat
        //     customInput={
        //         <TextField
        //             id={id}
        //             variant="outlined"
        //             className={classes.textfield}
        //         />
        //     }
        //     // prefix={'$'}
        //     // onValueChange={({ value: v }) => onChange({ target: { name, value: v } })}
        //     format='+998 (##) ###-##-##'
        //     allowEmptyFormatting
        //     mask='_'
        // />
        // ) : (
        <TextField
            id={id}
            variant="outlined"
            className={classes.textfield}
        >
        </TextField>
        // )
    )
}