import React from 'react'
import { TextField, Button, IconButton } from '@material-ui/core'
import { useForm, Controller, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { useProductsStyles } from './useProductsStyles'
import { useMemo } from 'react';
import useAdsMutation from '../../../hooks/mutations/useAdsMutation';
import { useState } from 'react';
import { apiRequest } from '../../../services/api';
import axios from 'axios';
import { PhotoCamera } from '@material-ui/icons';
import { useEffect } from 'react';

export default function Products() {
    const classes = useProductsStyles()
    const { register, control, handleSubmit } = useForm()
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDcwNmM0ODMyZmNlMDgwNDc2Njg4NjciLCJmdWxsbmFtZSI6ImFkbWluIiwicGhvbmUiOiIrOTk4OTkxMjM0NTY3Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjE3OTgwNDg4fQ.dio-htO_Hx6PnLvAyQOliifGFe4Q-rD2YrTMhkWO2gI'


    const handleClick = handleSubmit(async (data) => {
        console.log(data)
        const response = await axios('http://zap.uz/api/products', {
            method: 'POST',
            headers: {
                'Content-type': "application/json",
                'x-token': token
            },
            data: data
        })
        console.log(response)
    })

    return (
        <FormProvider>
            <form onSubmit={handleClick} >
                <div className={classes.form_root}>
                    <section className={classes.names}>
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
                            as={<TextField />}
                        />
                        <Controller
                            name="price"
                            control={control}
                            label="Narxi"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            as={<TextField />}
                        />
                        <Controller
                            name="discount"
                            control={control}
                            label="Chegirma narxi"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            as={<TextField />}
                        />
                        <Controller
                            name="buy_count"
                            control={control}
                            label="Sotuvda narxi"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            as={<TextField />}
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
        </FormProvider>
    )
}
