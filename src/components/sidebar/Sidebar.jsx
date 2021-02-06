import React, { useState } from 'react'
import { Checkbox, FormControlLabel, Slider } from '@material-ui/core'
import checkIcon from '../../images/icons/check.png'
import CheckboxComp from '../checkBox/Checkbox'
import { useSidebarStyles } from './sidebarStyles'

export default function Sidebar() {
    const classes = useSidebarStyles()

    const [value, setValue] = useState([1000, 10000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const num1 = String(value[0]).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')
    const num2 = String(value[1]).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')

    const brands = [
        `Pirelli Formula`, `Landsail`, `Roadstone`, `VS-Garage`, `Yokohama`, `Viatti`
    ]

    const models = [
        `Viatti`, `Nexia`, `Lacetti`, `Damas`, `Cobalt`
    ]

    return (
        <div className={classes.root}>
            <p className={classes.filter}>Филтер</p>
            <section className={classes.brands_box}>
                <h4>Бренд</h4>
                {
                    brands.map(brand => (
                        <div>
                            <CheckboxComp label={brand} />
                        </div>
                    ))
                }
            </section>

            <section className={classes.models_box}>
                <h4>Марка / модель машины</h4>
                {
                    models.map(brand => (
                        <div>
                            <CheckboxComp label={brand} />
                        </div>
                    ))
                }
            </section>

            <section className={classes.range_box}>
                <h4>Цена <span>(сум)</span></h4>
                <Slider
                    value={value}
                    onChange={handleChange}
                    min={100000}
                    max={10000000}
                    step={10000}
                />
                <div className={classes.amount}>
                    <p>от <span>{num1}</span></p>
                    <p>до <span>{num2}</span></p>
                </div>
            </section>
        </div >
    )
}
