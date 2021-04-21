import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { TextField, Button, IconButton } from '@material-ui/core'
import { useForm, Controller, FormProvider } from "react-hook-form";
import { useProductsStyles } from './useProductsStyles'
import { PhotoCamera } from '@material-ui/icons';

export default function Products() {
    const classes = useProductsStyles()
    const { register, control, handleSubmit } = useForm()

    return (
        <FormProvider>
            <form >
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
