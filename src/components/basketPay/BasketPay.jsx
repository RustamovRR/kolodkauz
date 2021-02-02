import React from 'react'
import { Checkbox, Divider, Paper } from '@material-ui/core'
import check from '../../images/icons/check.png'
import { useBasketPayStyles } from './basketPayStyles'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

export default function BasketPay() {
    const classes = useBasketPayStyles()

    return (
        <Paper className={classes.paper} elevation={2}>
            <section className={classes.product}>
                <p>Товары</p>
                <p>7,850,000 сум</p>
            </section>

            <section className={classes.product}>
                <p>Мастер</p>
                <p>68,000 сум</p>
            </section>

            <section className={classes.rule}>
                <Checkbox disableRipple inputProps={{ 'aria-label': 'decorative checkbox' }} />
                <p>Согласен с условиями Правил пользования торговой площадкой и правилами возврата</p>
            </section>

            <Divider className={classes.divider} />

            <section className={classes.total}>
                <p>Итого:</p>
                <h4>8,678,400 сум</h4>
            </section>

            <section className={classes.button}>
                <ButtonComponent />
            </section>
        </Paper>
    )
}
