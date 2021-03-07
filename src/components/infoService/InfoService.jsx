import React from 'react'
import CardService from '../cardService/CardService'
import { useInfoServiceStyles } from './infoServiceStyles'

export default function InfoService() {
    const classes = useInfoServiceStyles()
    return (
        <div className={classes.service_root}>
            <h1 className={classes.header}>Автосервис - Услуги</h1>

            <section className={classes.card_box}>
                <CardService />
                <CardService />
                <CardService />
                <CardService />
            </section>
        </div>
    )
}
