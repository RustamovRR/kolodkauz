import React, { useState, useEffect, useMemo, useContext } from 'react'
import axios from 'axios';
import { TextField, Button, IconButton } from '@material-ui/core'
import { useForm, Controller, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { adsAction } from '../../../redux/actions';
import { useAdsStyles } from './useAdsStyles'
import { request } from '../../../services/api';
import loadAds from '../../../redux/actions/adsAction';
import UploadImageForm from '../../../components/forms/UploadImageForm';
import { joiResolver } from "@hookform/resolvers/joi";
import * as yup from "yup";
import Joi from "joi";

export default function Ads() {
    const classes = useAdsStyles()

    const validationSchema = useMemo(
        () =>
            Joi.object({
                uz: {
                    title: Joi.string(),
                    description: Joi.string(),
                },
                ru: {
                    title: Joi.string(),
                    description: Joi.string(),
                },
                type: Joi.string(),
                image: Joi.string()
            })
    );

    let form = useForm({
        resolver: joiResolver(validationSchema)
    })

    const onSubmit = form.handleSubmit(async (data) => {
        // const response = await request.post('/ads', data)

        // console.log(response)
        console.log(data)
    })

    return (
        <div className={classes.form_root}>
            <FormProvider {...form}>
                <form onSubmit={onSubmit}>
                    <section className={classes.names}>
                        <UploadImageForm name="image" />
                        {/* <Controller
                            name="uz[title]"
                            control={form.control}
                            label="Sarlavha (uz)"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            as={<TextField />}
                        />
                        <Controller
                            name="ru[title]"
                            control={form.control}
                            label="Sarlavha (ru)"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            as={<TextField />}
                        />
                        <Controller
                            name="uz[description]"
                            control={form.control}
                            label="Izoh (uz)"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            as={<TextField />}
                        /> */}
                        <Controller
                            name="ru[description]"
                            control={form.control}
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
                            control={form.control}
                            label="Turi"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            as={<TextField />}
                        />
                        {/* <input
                            name="image"
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                        /> */}
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
            </FormProvider>
        </div>
    )
}