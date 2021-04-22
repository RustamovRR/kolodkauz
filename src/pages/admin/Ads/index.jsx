import React, { useState, useEffect, useMemo, useContext } from 'react'
import axios from 'axios';
import { TextField, Button, IconButton } from '@material-ui/core'
import { useForm, Controller, useWatch } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { adsAction } from '../../../redux/actions';
import { useAdsStyles } from './useAdsStyles'
import { request } from '../../../services/api';
import loadAds from '../../../redux/actions/adsAction';
import UploadImageForm from '../../../components/forms/UploadImageForm';
import { ContextRoot } from '../../../contexts'

function IsolateReRender({ control }) {
    const firstName = useWatch({
        control,
        name: 'firstName', // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
        defaultValue: 'default' // default value before the render
    });

    return <div>{firstName}</div>; // only re-render at the component level, when firstName changes
}
export default function Ads() {
    const classes = useAdsStyles()
    const { imageUrl } = useContext(ContextRoot)
    const { handleSubmit, control, register } = useForm()

    const onSubmit = handleSubmit(async (data) => {
        console.log(data)
    })
    console.log(imageUrl)


    return (
        < >
            <div className={classes.form_root}>
                <UploadImageForm name="image" />
                <form onSubmit={onSubmit}>
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
                    <h1>{imageUrl}</h1>
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
                            name="image"
                            control={control}
                            defaultValue={imageUrl}
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