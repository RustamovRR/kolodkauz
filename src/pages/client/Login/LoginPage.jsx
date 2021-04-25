import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLoginStyles } from './loginPageStyles'

import { InputLogin, CheckBox, ButtonComponent, Layout, PhoneNumberFormat } from '../../../components/shared'


export default function LoginPage() {
    const classes = useLoginStyles()
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')

    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    console.log(phone)
    console.log(name)

    return (
        <>
            <div className={classes.root}>
                <div className={classes.card_box}>
                    <h1>Войти профиль</h1>
                    <div className={classes.input_box}>
                        <label htmlFor='phone'>Контактный телефон</label>
                        <InputLogin
                            id='phone'
                            value={phone}
                            handleChange={handlePhoneChange}
                            numberFormat
                        />
                    </div>
                    <div className={classes.input_box}>
                        <label htmlFor='name'>Имя</label>
                        <InputLogin
                            id='name'
                            value={name}
                            handleChange={handleNameChange}
                        />
                    </div>

                    <section style={{ marginTop: 58 }}>
                        <CheckBox
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
        </>
    )
}
