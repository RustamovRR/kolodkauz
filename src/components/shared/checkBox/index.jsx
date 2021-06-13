import React from 'react'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import { clr } from '../../../constants/colors'
import { useCheckboxStyles } from './checkboxStyles'
import cn from 'classnames'
import { CheckedCheckbox, EmptyCheckbox } from '../../../assets/images/icons'

export default function CheckboxComp({ label, onChange, checked, name }) {
    const classes = useCheckboxStyles()

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
                        // icon={<EmptyCheckbox />}
                        className={classes.root}
                        icon={<span className={classes.icon} />}
                        checkedIcon={<span className={cn(classes.icon, classes.checkedIcon)} />}
                        onChange={onChange}
                    // checkedIcon={<CheckedCheckbox />}
                    />
                }
            />
        </div>
    )
}
