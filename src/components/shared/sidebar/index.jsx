import React, { useContext, useEffect, useState } from 'react'
import { FormControlLabel, Radio, RadioGroup, Slider } from '@material-ui/core'
import { useSidebarStyles } from './sidebarStyles'

import { CheckBox } from '../../shared'
import { ContextRoot } from '../../../contexts'
import { EmptyRatio } from '../../../assets/images/icons'
import { useHistory, useLocation } from 'react-router-dom'

export default function Sidebar() {
    const classes = useSidebarStyles()
    const history = useHistory()
    const { search, pathname } = useLocation()
    const state = useContext(ContextRoot)
    const { trans, sum } = useContext(ContextRoot)
    const {
        sort, setSort,
        brand, setBrand,
        model, setModel,
        sale, setSale,
        page, setPage,
        price, setPrice } = state.product

    const num1 = String(price[0]).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')
    const num2 = String(price[1]).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')

    const brands = [
        `Pirelli Formula`, `Landsail`, `Roadstone`, `VS-Garage`, `Yokohama`, `Viatti`
    ]

    const models = [
        `Viatti`, `Nexia`, `Lacetti`, `Damas`, `Cobalt`
    ]

    const radiosRu = [
        { title: `от 10% и выше`, value: '10' },
        { title: `от 30% и выше`, value: '30' },
        { title: `от 50% и выше`, value: '50' },
        { title: `от 70% и выше`, value: '70' }
    ]

    const radiosUz = [
        { title: `10% va undan yuqori`, value: '10' },
        { title: `30% va undan yuqori`, value: '30' },
        { title: `50% va undan yuqori`, value: '50' },
        { title: `70% va undan yuqori`, value: '70' }
    ]

    console.log(brand)

    return (
        <div className={classes.root}>
            <p className={classes.filter}>
                {trans ? `Филтер` : `Filtr`}
            </p>
            <section className={classes.brands_box}>
                <h4>
                    {trans ? `Бренд` : `Brend`}
                </h4>
                {
                    brands.map(item => (
                        <div key={item}>
                            <CheckBox
                                label={item}
                                onChange={(e) =>
                                    e.target.checked
                                        ? setBrand(item)
                                        : setBrand('')
                                }
                            />
                        </div>
                    ))
                }
            </section>

            <section className={classes.models_box}>
                <h4>
                    {trans ? `Марка / модель машины` : `Marka / mashina modeli`}
                </h4>
                {
                    models.map(item => (
                        <div key={item}>
                            <CheckBox
                                label={item}
                                onChange={(e) =>
                                    e.target.checked
                                        ? setModel(item)
                                        : setModel('')
                                }
                            />
                        </div>
                    ))
                }
            </section>

            <section className={classes.range_box}>
                <h4>
                    {trans ? `Цена` : `Narx`} &nbsp;
                    <span>({sum})</span>
                </h4>
                <Slider
                    value={price}
                    onChange={(event, newValue) => {
                        setPrice(newValue);
                    }}
                    min={0}
                    max={10000000}
                    step={5000}
                    classes={{
                        root: classes.sliderRoot,
                        track: classes.thumb,
                        thumb: classes.thumb,
                        rail: classes.rail
                    }}
                />
                {
                    trans
                        ? (
                            <div className={classes.amount}>
                                <p>от <span>{num1}</span></p>
                                <p>до <span>{num2}</span></p>
                            </div>
                        )
                        : (
                            <div className={classes.amount}>
                                <p><span>{num1}</span> dan</p>
                                <p><span>{num2}</span> gacha</p>
                            </div>
                        )
                }
            </section>

            <section className={classes.discount_box}>
                <h4>
                    {trans ? `Скидка` : `Chegirma`}
                </h4>

                <RadioGroup value={sale} onChange={(e) => setSale(e.target.value)}>
                    {
                        (trans ? radiosRu : radiosUz).map((item) => (
                            <FormControlLabel
                                key={item.title}
                                value={item.value}
                                control={
                                    <Radio
                                        color="primary"
                                        icon={<EmptyRatio />}
                                    />
                                }
                                label={item.title}
                            />
                        ))
                    }
                </RadioGroup>
            </section>
        </div >
    )
}