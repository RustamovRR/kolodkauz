import React, { useContext } from 'react'
import { Divider, Paper } from '@material-ui/core'
import { ContextRoot } from '../../../../contexts'

import { CheckBox, ButtonComponent } from '../../../shared'
import { useBasketPayStyles } from './basketPayStyles'
import { useHistory } from 'react-router'

export default function BasketPay({ total, totalDiscount, renderSum, type }) {
    const classes = useBasketPayStyles()
    const history = useHistory()

    const state = useContext(ContextRoot)
    const { trans, sum } = useContext(ContextRoot)
    const { cart, isLogged } = state.user

    const handleOrder = () => {
        console.log('zakaz')
    }

    const handleLogin = () => {
        history.push(`/login`)
    }

    return (
        <Paper className={classes.paper} elevation={2} >
            <section className={classes.product}>
                <p>
                    {trans === 'ru' ? `Товары, ${cart.length} шт.` : `Tovarlar, ${cart.length} dona`}
                </p>
                <p>{`${renderSum(totalDiscount)} ${sum}`}</p>
            </section>

            <section className={classes.product}>
                <p>
                    {trans === 'ru' ? `Скидка` : `Chegirma`}
                </p>
                <p>{`-${renderSum(total)} ${sum}`}</p>
            </section>

            <section className={classes.rule}>
                <CheckBox
                    label={
                        trans
                            ? `Согласен с условиями`
                            : `Shartlarga roziman`
                    }
                />
            </section>

            <Divider className={classes.divider} />

            <section className={classes.total}>
                <p>
                    {trans === 'ru' ? `Итого:` : `Jami:`}
                </p>
                <h4>{`${renderSum(totalDiscount)} ${sum}`}</h4>
            </section>

            <section className={classes.button}>
                <ButtonComponent
                    type={type}
                    onClick={isLogged ? handleOrder : handleLogin}
                    title={
                        isLogged
                            ? trans === 'ru' ? `Заказать` : `Buyurtma berish`
                            : trans === 'ru' ? `Войти` : `Kirish`
                    }
                />
            </section>
        </Paper>
    )
}
