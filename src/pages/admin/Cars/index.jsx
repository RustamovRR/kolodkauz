import React, { useContext } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useCarsStyles } from './useCarsStyles'
import { request } from '../../../services/api';
import { ContextRoot } from '../../../contexts'
import { useFormik } from 'formik';
import UploadImageForm from '../../../components/forms/UploadImageForm';

export default function Cars() {
    const classes = useCarsStyles()
    const { imageUrl } = useContext(ContextRoot)


    const formik = useFormik({
        initialValues: {
            uz: {
                name: 'Cobalt'
            },
            ru: {
                name: 'Captiva',
            },
            image: 'url'
        },
        // validationSchema,
        onSubmit: async (values) => {
            await request.post('/cars', values)
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
                            value={formik.values.uz.name}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="ru[name]"
                            label="Nomi (ru)"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.ru.name}
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