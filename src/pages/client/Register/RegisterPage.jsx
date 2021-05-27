import React from 'react'
import { Link } from 'react-router-dom'
import { useRegisterStyles } from './registerPageStyles'

import { InputLogin, CheckBox, ButtonComponent } from '../../../components/shared'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { request } from '../../../services/api';

export default function RegisterPage() {
    const classes = useRegisterStyles()
    // const [phone, setPhone] = useState('')
    // const [name, setName] = useState('')
    // const [password, setPassword] = useState('')
    // const [repeatPassword, setRepeatPassword] = useState('')

    const validationSchema = yup.object({
        fullname: yup.string().required('majburiy'),
        phone: yup.number().required('majburiy maydon nomer'),
        password: yup.string().required('majburiy')
    })

    const formik = useFormik({
        initialValues: {
            phone: '',
            fullname: '',
            password: ''
        },
        validationSchema,
        onSubmit: async (values) => {
            await request.post('/users/register', values)
                .then((res) => {
                    console.log(res)
                    // localStorage.setItem('x-token', res.config.headers['x-token'])
                })
        }
    })

    return (
        <>
            <div className={classes.root}>
                <div className={classes.card_box}>
                    <form onSubmit={formik.handleSubmit} >
                        <h1>Создать профиль</h1>
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
                            <label htmlFor='fullname'>Имя</label>
                            <InputLogin
                                id='fullname'
                                value={formik.values.fullname}
                                helperText={formik.touched.fullname && formik.errors.fullname}
                                error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                                handleChange={formik.handleChange}
                            />
                        </div>
                        <div className={classes.input_box}>
                            <label htmlFor='password'>Придумайте пароль</label>
                            <InputLogin
                                id='password'
                                type="password"
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
                        <Link to="#">
                            Зарегистрация
                        </Link>
                    </section>
                </div>
            </div>
        </>
    )
}
