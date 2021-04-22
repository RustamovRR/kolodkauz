import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import { TextField, Button, IconButton, Input } from '@material-ui/core'
import { useForm, Controller, FormProvider } from "react-hook-form";
import { useProductsStyles } from './useProductsStyles'
import UploadImageForm from '../../../components/forms/UploadImageForm'
import { PhotoCamera } from '@material-ui/icons';
import { ContextRoot } from '../../../contexts';
import { request } from '../../../services/api';

export default function Products() {
    const classes = useProductsStyles()
    const { imageUrl } = useContext(ContextRoot)
    const { register, control, handleSubmit } = useForm()

    const onSubmit = handleSubmit(async (data) => {
        // await request.post('/products', data)
        //     .then((res) => console.log(res.data))
        //     .catch((err) => console.log(err))
        console.log(data)
    })

    return (
        <div>
            <UploadImageForm />
            <h2>{imageUrl}</h2>
            <form onSubmit={onSubmit}>
                <div className={classes.form_root}>
                    <section className={classes.names}>
                        <Controller
                            name="image"
                            control={control}
                            label="Rasm manzili"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            as={<TextField />}
                        />
                        <Controller
                            name="uz[title]"
                            control={control}
                            label="Sarlavha (uz)"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            as={<TextField />}
                        />
                        <Controller
                            name="ru[title]"
                            control={control}
                            label="Sarlavha (ru)"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            as={<TextField />}
                        />
                        <Controller
                            name="uz[description]"
                            control={control}
                            label="Izoh (uz)"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            as={<TextField />}
                        />
                        <Controller
                            name="ru[description]"
                            control={control}
                            label="Izoh (ru)"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            as={<TextField />}
                        />
                    </section>

                    <section className={classes.products}>
                        <Controller
                            name="type"
                            control={control}
                            label="Turi"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            as={<TextField />}
                        />
                        <Controller
                            name="car"
                            control={control}
                            label="Avtomobil"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            as={<TextField />}
                        />
                        <Controller
                            name="brand"
                            control={control}
                            label="Brend"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            as={<TextField />}
                        />
                        <Controller
                            name="quantity"
                            control={control}
                            label="Miqdor"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            as={<Input type="number" />}
                        />
                        <Controller
                            name="price"
                            control={control}
                            label="Narxi"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            as={<Input type="number" />}
                        />
                        <Controller
                            name="discount"
                            control={control}
                            label="Chegirma narxi"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            as={<Input type="number" />}
                        />
                        <Controller
                            name="buy_count"
                            control={control}
                            label="Sotuvda narxi"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            as={<Input type="number" />}
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
