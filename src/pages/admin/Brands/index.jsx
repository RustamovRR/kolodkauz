import React, { useContext } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useBrandsStyles } from './useBrandsStyles'
import { request } from '../../../services/api';
import UploadImageForm from '../../../components/forms/UploadImageForm';
import { ContextRoot } from '../../../contexts'
import { useFormik } from 'formik';
// import * as yup from 'yup';

export default function Brands() {
    const classes = useBrandsStyles()
    
    const state = useContext(ContextRoot)
    const { imageUrl, setImageUrl } = state.variables

    // const onSubmit = handleSubmit(async (data) => {
    //     await request.post('/ads', data)
    //         .then((res) => console.log(res.data))
    // })

    // const validationSchema = yup.object({
    //     uz: {
    //         title: yup.string(),
    //         description: yup.string()
    //     },
    //     ru: {
    //         title: yup.string(),
    //         description: yup.string()
    //     },
    //     type: yup.string(),
    //     image: yup.string()
    // });

    const formik = useFormik({
        initialValues: {
            uz: {
                name: 'Chevrolet'
            },
            ru: {
                name: 'Toyota',
            },
            image: 'url'
        },
        // validationSchema,
        onSubmit: async (values) => {
            await request.post('/brands', values)
                .then((res) => console.log(res.data.data))
                .then((res) => alert('success'))
        }
    })

    return (
        <>
            <div className={classes.form_root}>
                <UploadImageForm />
                <h2>{imageUrl}</h2>
                <form onSubmit={formik.handleSubmit}>
                    <section className={classes.names}>
                        <TextField
                            name="image"
                            label="Rasm manzili"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.image}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="uz[name]"
                            label="Nomi (uz)"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.uz.title}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="ru[name]"
                            label="Nomi (ru)"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.ru.title}
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