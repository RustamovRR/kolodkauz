import React from 'react'
import Header from '../../components/header/Header'
import InputBasket from '../../components/input/InputBasket'

import { useLoginStyles } from './loginPageStyles'

export default function LoginPage() {
    const classes = useLoginStyles()

    return (
        <div className={classes.root}>
            <section>
                <Header />
            </section>

            <section className={classes.card_box}>
                <h1>Войти профиль</h1>
                <InputBasket index="Контактный телефон" />
            </section>
        </div>
    )
}
