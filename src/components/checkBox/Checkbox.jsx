import React from 'react'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import checkIcon from '../../images/icons/check.png'

export default function CheckboxComp({ label }) {
    return (
        <div>
            <FormControlLabel
                label={label}
                control={
                    <Checkbox name="checkedC" icon={<CheckIcon />} />
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
