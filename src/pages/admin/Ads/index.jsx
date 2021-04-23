import React, { useState, useEffect, useMemo, useContext } from 'react'
import { TextField, Button, IconButton } from '@material-ui/core'
import { useAdsStyles } from './useAdsStyles'
import { request } from '../../../services/api';
import UploadImageForm from '../../../components/forms/UploadImageForm';
import { ContextRoot } from '../../../contexts'
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function Ads() {
    const classes = useAdsStyles()
    const { imageUrl } = useContext(ContextRoot)

    // const onSubmit = handleSubmit(async (data) => {
    //     await request.post('/ads', data)
    //         .then((res) => console.log(res.data))
    // })

    const validationSchema = yup.object({
        uz: {
            title: yup.string(),
            description: yup.string()
        },
        ru: {
            title: yup.string(),
            description: yup.string()
        },
        type: yup.string(),
        image: yup.string()
    });

    const formik = useFormik({
        initialValues: {
            uz: {
                title: 'Tire Ventus Prime',
                description: 'asjdfl alsdj f'
            },
            ru: {
                title: 'Автомобильная шина Hankook',
                description: 'фдывадлфывалдо'
            },
            type: 'moy',
            image: 'url'
        },
        // validationSchema,
        onSubmit: async (values) => {
            await request.post('/ads', values).then((res) => console.log(res.data.data))
        }
    })

    return (
        <>
            <div className={classes.form_root}>
                <UploadImageForm />
                <form onSubmit={formik.handleSubmit}>
                    <section className={classes.names}>
                        <TextField
                            name="uz[title]"
                            label="Sarlavha (uz)"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.uz.title}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="ru[title]"
                            label="Sarlavha (ru)"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.ru.title}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="uz[description]"
                            label="Izoh (uz)"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.uz.description}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="ru[description]"
                            label="Izoh (ru)"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.ru.description}
                            onChange={formik.handleChange}
                        />
                    </section>
                    <h1>{imageUrl}</h1>
                    <section className={classes.products}>
                        <TextField
                            name="type"
                            label="Turi"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.type}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="image"
                            label="Rasm"
                            value={formik.values.image}
                            onChange={formik.handleChange}
                        />
                    </section>

                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.button}
                    >
                        Post qilish
                </Button>
                </form>
            </div>
        </>
    )
}