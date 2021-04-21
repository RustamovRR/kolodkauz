import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { TextField, Button, IconButton } from '@material-ui/core'
import { useForm, Controller, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { adsAction } from '../../../redux/actions';
import { useAdsStyles } from './useAdsStyles'
import { request } from '../../../services/api';

export default function Ads() {
    const classes = useAdsStyles()
    const { register, control, handleSubmit } = useForm()
    const [image, setImage] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(adsAction())
    }, [])

    const ads = useSelector((state) => state.ads)
    // console.log(ads)


    return (
        <form encType="multipart/form-data">
            <div className={classes.form_root}>
                <section className={classes.names}>
                    {/* <Controller
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
                    /> */}
                </section>

                <section className={classes.products}>
                    {/* <Controller
                        name="type"
                        control={control}
                        label="Turi"
                        variant="outlined"
                        margin="normal"
                        color="primary"
                        as={<TextField />}
                    /> */}
                    <input
                        name="image"
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                    // ref={register}
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
