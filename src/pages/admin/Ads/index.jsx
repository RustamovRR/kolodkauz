import React, { useState, useEffect } from 'react'
import { TextField, Button, IconButton } from '@material-ui/core'
import { useForm, Controller, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { useAdsStyles } from './useAdsStyles'
import { useMemo } from 'react';
import useAdsMutation from '../../../hooks/mutations/useAdsMutation';
import { apiRequest } from '../../../services/api';
import axios from 'axios';

export default function Ads() {
    const classes = useAdsStyles()
    const { register, control, handleSubmit } = useForm()
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDcwNmM0ODMyZmNlMDgwNDc2Njg4NjciLCJmdWxsbmFtZSI6ImFkbWluIiwicGhvbmUiOiIrOTk4OTkxMjM0NTY3Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjE3OTgwNDg4fQ.dio-htO_Hx6PnLvAyQOliifGFe4Q-rD2YrTMhkWO2gI'

    const onsubmit = handleSubmit(async (data) => {
        const formData = new FormData()
        formData.append('image', data.image[0])

        console.log(formData)
        const response = await axios('http://zap.uz/api/ads', {
            method: 'POST',
            mode: 'no-cors',
            data: formData,
            headers: {
                'Content-type': "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'x-token': token
            }
        })
        console.log(response)
    })

    // const handleSubmitted = (e) => {
    //     e.preventDefault()
    //     let data = new FormData()
    //     console.log(image)

    //     data.append('image', image)

    //     axios.post('http://zap.uz/api/ads', data, {
    //         headers: {
    //             'Content-type': "application/json",
    //             'x-token': token
    //         }
    //     })
    //         .then(res => {
    //             alert('sucess post')
    //             // console.log(res);
    //         })
    //         .catch((err) => alert('Error'))
    // }

    return (
        <form onSubmit={onsubmit} >
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
                    <input
                        name="image"
                        type="file"
                        // onChange={(e) => setImage(e.target.files[0])}
                        ref={register}
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
    )
}
