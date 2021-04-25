import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useProductsStyles } from './useProductsStyles'
import UploadImageForm from '../../../components/forms/UploadImageForm'
import { ContextRoot } from '../../../contexts';
import { request } from '../../../services/api';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function Products() {
    const classes = useProductsStyles()
    const { imageUrl, productsData, FetchProducts } = useContext(ContextRoot)

    // console.log(productsData)


    const formik = useFormik({
        initialValues: {
            uz: {
                type: {
                    title: 'chevrolet',
                    description: 'description uz',
                    characteristics: {
                        info: 'noinfo'
                    },
                },
            },
            ru: {
                type: {
                    title: 'bmw',
                    description: 'description ru',
                    characteristics: {
                        info: 'ruinfo'
                    },
                },
            },
            type: 'moy',
            // car: 'spark',
            // brand: 'chevrolet',
            image: 'url',
            quantity: 10,
            price: 20,
            discount: 30,
            buy_count: 40,
            rating: {
                data: [
                    {
                        score: 50,
                        comment: 'nocomment'
                    }
                ],
                overall: 40,
                count: 100
            },
        },
        onSubmit: async (values) => {
            // console.log(values)
            await request.post('/products', values).then((res) => console.log(res.data))
        }
    })


    return (
        <div>
            <UploadImageForm />
            <h2>{imageUrl}</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className={classes.form_root}>
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
                            name="car"
                            label="Avtomobil"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.car}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="brand"
                            label="Brend"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.brand}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="quantity"
                            label="Miqdor"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.quantity}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="price"
                            label="Narxi"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="discount"
                            label="Chegirma narxi"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.discount}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="buy_count"
                            label="Sotuvda narxi"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.buy_count}
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
                </div>
            </form>
        </div>
    )
}
