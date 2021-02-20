import React from 'react'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import checkIcon from '../../images/icons/check.png'

export default function CheckboxComp({ label }) {
    return (
        <div>
            <FormControlLabel
                style={{ width: '120%' }}
                label={label}
                control={
                    <Checkbox name="checked" color="primary" />
                }
            />
        </div>
    )
}

const CheckIcon = () => {
    return (
        <img src={checkIcon} />
    )
}
