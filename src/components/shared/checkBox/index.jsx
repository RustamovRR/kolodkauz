import React from 'react'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import { clr } from '../../../constants/colors'
import { CheckedCheckbox, EmptyCheckbox } from '../../../assets/images/icons'

export default function CheckboxComp({ label, onChange, checked, name }) {
    return (
        <div>
            <FormControlLabel
                style={{ width: '100%', color: clr.dark900 }}
                label={label}
                control={
                    <Checkbox
                        name={name}
                        color="primary"
                        checked={checked}
                        disableTouchRipple
                        icon={<EmptyCheckbox />}
                        onChange={onChange}
                        checkedIcon={<CheckedCheckbox />}
                    />
                }
            />
        </div>
    )
}
