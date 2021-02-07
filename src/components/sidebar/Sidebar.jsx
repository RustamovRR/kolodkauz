import React, { useState } from 'react'
import { FormControl, FormControlLabel, Radio, RadioGroup, Slider } from '@material-ui/core'
import CheckboxComp from '../checkBox/Checkbox'
import radioImg from '../../images/icons/radio.png'
import { useSidebarStyles } from './sidebarStyles'

export default function Sidebar() {
    const classes = useSidebarStyles()

    const [value, setValue] = useState([1000, 10000]);
    const [radio, setRadio] = React.useState('female');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const radioChange = (event) => {
        setRadio(event.target.value);
    };

    const num1 = String(value[0]).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')
    const num2 = String(value[1]).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')

    const brands = [
        `Pirelli Formula`, `Landsail`, `Roadstone`, `VS-Garage`, `Yokohama`, `Viatti`
    ]

    const models = [
        `Viatti`, `Nexia`, `Lacetti`, `Damas`, `Cobalt`
    ]

    const radios = [
        { title: `от 10% и выше`, value: 10 },
        { title: `от 30% и выше`, value: 30 },
        { title: `от 50% и выше`, value: 50 },
        { title: `от 70% и выше`, value: 70 }
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
                    classes={{
                        track: classes.thumb,
                        thumb: classes.thumb
                    }}
                />
                <div className={classes.amount}>
                    <p>от <span>{num1}</span></p>
                    <p>до <span>{num2}</span></p>
                </div>
            </section>

            <section className={classes.discount_box}>
                <h4>Скидка</h4>
                <FormControl component="fieldset">
                    <RadioGroup value={radio} onChange={radioChange}>
                        {
                            radios.map((item) => (
                                <FormControlLabel
                                    value={item.title}
                                    control={
                                        <Radio icon={<RadioFunc />} />
                                    }
                                    label={item.title}
                                />
                            ))
                        }
                    </RadioGroup>
                </FormControl>
            </section>
        </div >
    )
}

const RadioFunc = () => {
    return (
        <img src={radioImg} />
    )
}