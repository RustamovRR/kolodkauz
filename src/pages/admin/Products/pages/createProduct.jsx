import React, { useContext, useEffect, useState } from 'react'
import { TextField, Button, MenuItem } from '@material-ui/core'
import { useProductsStyles } from '../useProductsStyles'
import UploadImageForm from '../../../../components/forms/UploadImageForm'
import { ContextRoot } from '../../../../contexts';
import { request } from '../../../../services/api';
import { useCarsQuery } from '../../../../hooks/queries';
import { useFormik } from 'formik';
import NestedMenuItem from "material-ui-nested-menu-item";

export default function CreateProduct() {
    const classes = useProductsStyles()
    const [carsName, setCarsName] = useState([])
    const cars = useCarsQuery()

    const state = useContext(ContextRoot)
    const { imageUrl, setImageUrl } = state.variables
    
    const carsQuery = cars.isSuccess ? cars.data?.data.data : []

    const types = [
        `marka`, `xodovoy`, `motor`, `zapchast`, `kuzov`, `akkumulyator`, `shina`, `moy`, `avtotovar`
    ]

    const carsModelsName = [
        `matiz`, `spark`, `nexia`, `nexia 3`, `damas`, `cobalt`, `lacetti`, `epica`, `captiva`, `malibu`,
        `trailblazer`, `tracker`, `equinox`, `orlando`
    ]

    useEffect(() => {
        setCarsName(() => (
            carsQuery.map((item) => item?.uz.name)
        ))
    }, [cars.isFetched])

    const formik = useFormik({
        initialValues: {
            uz: {
                title: 'Castrol Edge Supercar TURBOMAX',
                description: 'description uz',
                characteristics: [
                    { option: `sifati`, value: `a'lo` },
                    { option: `kafolat`, value: `2 yil` }
                ]
            },
            ru: {
                title: 'Автомобильная шина Hankook Tire Ventus Prime',
                description: 'description ru',
                characteristics: [
                    { option: `kachestva`, value: 'xorosho' },
                    { option: `garantiya`, value: '2 goda' }
                ]
            },
            type: 'marka',
            image: 'url',
            car: '',
            carModel: '',
            brand: '',
            quantity: 10,
            price: 20000,
            discount: 30000,
            artikul: '123',
            buy_count: 50,
            rating: {
                data: [
                    {
                        score: 4,
                        comment: 'nocomment'
                    }
                ],
                overall: 4,
                count: 10
            },
        },
        onSubmit: (values) => {
            request.post('/products', values)
                .then((res) => console.log(res.data))
                .then((res) => alert('success post'))
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
                            value={formik.values.image ?? ''}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="uz[title]"
                            label="Sarlavha (uz)"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.uz.title ?? ''}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="ru[title]"
                            label="Sarlavha (ru)"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.ru.title ?? ''}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="uz[description]"
                            label="Izoh (uz)"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.uz.description ?? ''}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="ru[description]"
                            label="Izoh (ru)"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.ru.description ?? ''}
                            onChange={formik.handleChange}
                        />
                    </section>

                    <section className={classes.products}>
                        <TextField
                            select
                            name="type"
                            label="Turi"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            style={{ width: '37vw' }}
                            value={formik.values.type ?? ''}
                            onChange={formik.handleChange}
                        >
                            {
                                types.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                        <TextField
                            select
                            name="car"
                            label="Avtomobil turini tanlang"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            style={{ width: '37vw' }}
                            items={carsName}
                            value={formik.values.car ?? ''}
                            onChange={formik.handleChange}
                        >
                            {
                                carsName.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                        <TextField
                            select
                            name="carModel"
                            label="Avtomobil markasini tanlang"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            style={{ width: '37vw' }}
                            items={carsName}
                            value={formik.values.carModel ?? ''}
                            onChange={formik.handleChange}
                        >
                            {
                                carsModelsName.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                        <TextField
                            name="brand"
                            label="Brend"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.brand ?? ''}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="quantity"
                            label="Miqdor"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.quantity ?? ''}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="price"
                            label="Narxi"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.price ?? ''}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="discount"
                            label="Chegirma narxi"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.discount ?? ''}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="buy_count"
                            label="Sotuvda narxi"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={formik.values.buy_count ?? ''}
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
        </div >
    )
}
