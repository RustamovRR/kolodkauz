import React from 'react'
import { Checkbox, Divider, Paper } from '@material-ui/core'
import check from '../../images/icons/check.png'
import { useBasketPayStyles } from './basketPayStyles'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

export default function BasketPay() {
    const classes = useBasketPayStyles()

    return (
        <Paper className={classes.paper} elevation={2}>
            <div className={classes.product}>
                <p>Товары</p>
                <p>7,850,000 сум</p>
            </div>

            <div className={classes.product}>
                <p>Мастер</p>
                <p>68,000 сум</p>
            </div>

            <div className={classes.rule}>
                <Checkbox
                    disableRipple
                    inputProps={{ 'aria-label': 'decorative checkbox' }}
                />
                <p>Согласен с условиями Правил пользования торговой площадкой и правилами возврата</p>
            </div>

            <Divider className={classes.divider} />

            <div className={classes.total}>
                <p>Итого:</p>
                <h4>8,678,400 сум</h4>
            </div>

            <div className={classes.button}>
                <ButtonComponent />
            </div>
        </Paper>
    )
}
