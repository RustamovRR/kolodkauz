import React from 'react'
import { Link } from 'react-router-dom'
import { useLoginStyles } from './loginPageStyles'

import { InputLogin, CheckBox, ButtonComponent } from '../../../components/shared'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { request } from '../../../services/api';


export default function LoginPage() {
    const classes = useLoginStyles()

    const validationSchema = yup.object({
        phone: yup.string().required('majburiy maydon nomer'),
        password: yup.string().required('majburiy')
    })

    const formik = useFormik({
        initialValues: {
            phone: '',
            password: ''
        },
        validationSchema,
        onSubmit: async (values) => {
            await request.post('/users/login', values)
                .then((res) => {
                    console.log(res)
                    localStorage.setItem('token', res.data?.data['x-token'])
                })
        }
    })

    return (
        <div className={classes.root}>
            <div className={classes.card_box}>
                <form onSubmit={formik.handleSubmit} >
                    <h1>Войти профиль</h1>
                    <div className={classes.input_box}>
                        <label htmlFor='phone'>Контактный телефон</label>
                        <InputLogin
                            id='phone'
                            value={formik.values.phone}
                            handleChange={formik.handleChange}
                            helperText={formik.touched.phone && formik.errors.phone}
                            error={formik.errors.phone}
                            numberFormat
                        />
                    </div>
                    <div className={classes.input_box}>
                        <label htmlFor='password'>Parol</label>
                        <InputLogin
                            id='password'
                            value={formik.values.password}
                            helperText={formik.touched.password && formik.errors.password}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            handleChange={formik.handleChange}
                        />
                    </div>

                    <section style={{ marginTop: 32 }}>
                        <CheckBox
                            label="Согласен с условиями Правил пользования торговой площадкой и правилами возврата"
                        />
                    </section>

                    <section style={{ marginTop: 32 }} >
                        <ButtonComponent title="Войти" type="submit" />
                    </section>

                </form>

                <section className={classes.link}>
                    <Link to="/register">
                        Зарегистрация
                    </Link>
                </section>
            </div>
        </div>
    )
}
