import React from 'react'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import { clr } from '../../../constants/colors'

export default function CheckboxComp({ label }) {
    return (
        <div>
            <FormControlLabel
                style={{ width: '100%', color: clr.dark900 }}
                label={label}
                control={
                    <Checkbox name="checked" disableTouchRipple color="primary" />
                }
            />
        </div>
    )
}
