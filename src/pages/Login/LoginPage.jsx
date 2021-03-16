import React from 'react'
import { Link } from 'react-router-dom'
import InputLogin from '../../components/inputLogin/InputLogin'
import CheckboxComp from '../../components/checkBox/Checkbox'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

import { useLoginStyles } from './loginPageStyles'

export default function LoginPage() {
    const classes = useLoginStyles()
    const labels = [`Контактный телефон`, `Имя`]

    return (
        <div className={classes.root}>
            <div className={classes.card_box}>
                <h1>Войти профиль</h1>
                {
                    labels.map((item) => (
                        <div className={classes.input_box}>
                            <label htmlFor={item}>{item}</label>
                            <InputLogin id={item} />
                        </div>
                    ))
                }

                <section style={{ marginTop: 58 }}>
                    <CheckboxComp
                        label="Согласен с условиями Правил пользования торговой площадкой и правилами возврата"
                    />
                </section>

                <section style={{ marginTop: 32 }} >
                    <ButtonComponent title="Войти" />
                </section>

                <section className={classes.link}>
                    <Link to="#">
                        Зарегистрация
                    </Link>
                </section>
            </div>
        </div>
    )
}
