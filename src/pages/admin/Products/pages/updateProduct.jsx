import React, { useContext, useEffect } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useProductsStyles } from '../useProductsStyles'
import UploadImageForm from '../../../../components/forms/UploadImageForm'
import { ContextRoot } from '../../../../contexts';
import { request } from '../../../../services/api';
import { useFormik } from 'formik';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useProductQuery } from '../../../../hooks/queries';
// import * as yup from 'yup';

export default function UpdateProduct() {
    const classes = useProductsStyles()
    const { imageUrl } = useContext(ContextRoot)
    const { state } = useLocation()
    const productQuery = useProductQuery({ id: state })
    const data = productQuery.isSuccess && productQuery.data?.data ? productQuery.data?.data.data : []
    // console.log(data.uz?.title)


    const formik = useFormik({
        initialValues: {
            uz: {
                title: '',
                description: '',
                characteristics: [
                    { option: `sifati`, value: `a'lo` },
                    { option: `kafolat`, value: `2 yil` }
                ]
            },
            ru: {
                title: '',
                description: '',
                characteristics: [
                    { option: `kachestva`, value: 'xorosho' },
                    { option: `garantiya`, value: '2 goda' }
                ]
            },
            type: '',
            quantity: '',
            price: '',
            discount: '',
            artikul: '',
            buy_count: '',
            rating: {
                data: [
                    {
                        score: '',
                        comment: '',
                    }
                ],
                overall: '',
                count: ''
            },
        },
        onSubmit: (values) => {
            request.patch(`/products/${state}`, values)
            .then((res) => console.log(res.data))
            .then(() => alert('success posted'))
            // console.log(`/products/${state}`)
        }
    })

    useEffect(() => {
        if (productQuery.isSuccess) {
            const {
                uz,
                ru,
                type,
                image,
                quantity,
                price,
                discount,
                artikul,
                buy_count,
                rating
            } = productQuery.data?.data.data

            formik.resetForm({
                values: {
                    uz: {
                        title: uz.title,
                        description: uz.description,
                        characteristics: uz.characteristics
                    },
                    ru: {
                        title: ru.title,
                        description: ru.description,
                        characteristics: ru.characteristics
                    },
                    type: type,
                    image: image,
                    quantity: quantity,
                    price: price,
                    discount: discount,
                    artikul: artikul,
                    buy_count: buy_count,
                    rating: {
                        data: rating.data,
                        overall: rating.overall,
                        count: rating.count
                    },
                }
            })
        }
    }, [productQuery.isFetched])


    return (
        <div>
            <UploadImageForm />
            <h2>{imageUrl}</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className={classes.form_root}>
                    <section className={classes.names}>
                        {/* <TextField
                            name="slug"
                            label="Rasm manzili"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.slug}
                            onChange={formik.handleChange}
                        /> */}
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
