import React, { useContext } from 'react'
import { Divider, Paper } from '@material-ui/core'
import { ContextRoot } from '../../../../contexts'

import { CheckBox, ButtonComponent } from '../../../shared'
import { useBasketPayStyles } from './basketPayStyles'

export default function BasketPay() {
    const classes = useBasketPayStyles()
    const { trans, sum } = useContext(ContextRoot)

    return (
        <Paper className={classes.paper} elevation={2} >
            <section className={classes.product}>
                <p>
                    {trans === 'ru' ? `Товары` : `Tovarlar`}
                </p>
                <p>{`7,850,000 ${sum}`}</p>
            </section>

            <section className={classes.product}>
                <p>
                    {trans === 'ru' ? `Мастер` : `Usta`}
                </p>
                <p>{`68,000 ${sum}`}</p>
            </section>

            <section className={classes.rule}>
                <CheckBox
                    label={
                        trans
                            ? `Согласен с условиями Правил пользования торговой площадкой и правилами возврата`
                            : `Savdo maydonchasidan foydalanish shartlari va qaytish qoidalari bilan roziman`
                    }
                />
            </section>

            <Divider className={classes.divider} />

            <section className={classes.total}>
                <p>
                    {trans === 'ru' ? `Итого:` : `Jami:`}
                </p>
                <h4>{`8,678,400 ${sum}`}</h4>
            </section>

            <section className={classes.button}>
                <ButtonComponent
                    title={trans === 'ru' ? `Войти` : `Kirish`}
                />
            </section>
        </Paper>
    )
}
