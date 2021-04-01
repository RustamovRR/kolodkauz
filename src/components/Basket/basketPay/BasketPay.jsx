import React, { useContext } from 'react'
import { Checkbox, Divider, Paper } from '@material-ui/core'
import check from '../../../assets/images/icons/check.png'
import { useBasketPayStyles } from './basketPayStyles'
import ButtonComponent from '../../ButtonComponent/ButtonComponent'
import { TranslateContext } from '../../../contexts/TranslateContext'
import CheckboxComp from '../../checkBox/Checkbox'

export default function BasketPay() {
    const classes = useBasketPayStyles()
    const { trans, sum } = useContext(TranslateContext)

    return (
        <Paper className={classes.paper} elevation={2} >
            <section className={classes.product}>
                <p>
                    {trans ? `Товары` : `Tovarlar`}
                </p>
                <p>{`7,850,000 ${sum}`}</p>
            </section>

            <section className={classes.product}>
                <p>
                    {trans ? `Мастер` : `Usta`}
                </p>
                <p>{`68,000 ${sum}`}</p>
            </section>

            <section className={classes.rule}>
                <CheckboxComp
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
                    {trans ? `Итого:` : `Jami:`}
                </p>
                <h4>{`8,678,400 ${sum}`}</h4>
            </section>

            <section className={classes.button}>
                <ButtonComponent
                    title={trans ? `Войти` : `Kirish`}
                />
            </section>
        </Paper>
    )
}
