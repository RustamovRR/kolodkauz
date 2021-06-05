import React, { useContext } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useAdsStyles } from './useAdsStyles'
import { request } from '../../../services/api';
import UploadImageForm from '../../../components/forms/UploadImageForm';
import { ContextRoot } from '../../../contexts'
import { useFormik } from 'formik';
import axios from 'axios';
// import * as yup from 'yup';

export default function Ads() {
    const classes = useAdsStyles()
    
    const state = useContext(ContextRoot)
    const { imageUrl, setImageUrl } = state.variables

    const formik = useFormik({
        initialValues: {
            type: 'moy',
            image: 'url'
        },
        onSubmit: (values) => {
            request.post('/ads', values)
                .then((res) => console.log(res.data.data))
        }
    })

    return (
        <>
            <div className={classes.form_root}>
                <UploadImageForm />
                <form onSubmit={formik.handleSubmit}>
                    <h1>{imageUrl}</h1>
                    <section className={classes.names}>
                        <TextField
                            name="image"
                            label="Rasm Url sini kiriting"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.image}
                            onChange={formik.handleChange}
                        />
                    </section>
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