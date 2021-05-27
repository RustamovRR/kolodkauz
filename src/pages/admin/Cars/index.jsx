import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { useCarsStyles } from './useCarsStyles'
import { request } from '../../../services/api';
// import UploadImageForm from '../../../components/forms/UploadImageForm';
// import { ContextRoot } from '../../../contexts'
import { useFormik } from 'formik';
// import * as yup from 'yup';

export default function Cars() {
    const classes = useCarsStyles()
    // const { imageUrl } = useContext(ContextRoot)

    // const onSubmit = handleSubmit(async (data) => {
    //     await request.post('/ads', data)
    //         .then((res) => console.log(res.data))
    // })

    // const validationSchema = yup.object({
    //     uz: {
    //         name: yup.string()
    //     },
    //     ru: {
    //         name: yup.string()
    //     },
    // });

    const formik = useFormik({
        initialValues: {
            uz: {
                name: 'Cobalt'
            },
            ru: {
                name: 'Captiva',
            },
        },
        // validationSchema,
        onSubmit: async (values) => {
            await request.post('/cars', values).then((res) => console.log(res.data.data))
        }
    })

    return (
        <>
            <div className={classes.form_root}>
                <form onSubmit={formik.handleSubmit}>
                    <section className={classes.names}>
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