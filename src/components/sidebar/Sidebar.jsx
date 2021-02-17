import React, { useContext, useState } from 'react'
import { FormControl, FormControlLabel, Radio, RadioGroup, Slider } from '@material-ui/core'
import CheckboxComp from '../checkBox/Checkbox'
import radioImg from '../../images/icons/radio.png'
import { useSidebarStyles } from './sidebarStyles'
import { TranslateContext } from '../../contexts/TranslateContext'

export default function Sidebar() {
    const classes = useSidebarStyles()
    const { trans, sum } = useContext(TranslateContext)

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

    const radiosRu = [
        { title: `от 10% и выше`, value: 10 },
        { title: `от 30% и выше`, value: 30 },
        { title: `от 50% и выше`, value: 50 },
        { title: `от 70% и выше`, value: 70 }
    ]

    const radiosUz = [
        { title: `10% va undan yuqori`, value: 10 },
        { title: `30% va undan yuqori`, value: 30 },
        { title: `50% va undan yuqori`, value: 50 },
        { title: `70% va undan yuqori`, value: 70 }
    ]

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
                    brands.map(brand => (
                        <div>
                            <CheckboxComp label={brand} />
                        </div>
                    ))
                }
            </section>

            <section className={classes.models_box}>
                <h4>
                    {trans ? `Марка / модель машины` : `Marka / mashina modeli`}
                </h4>
                {
                    models.map(brand => (
                        <div>
                            <CheckboxComp label={brand} />
                        </div>
                    ))
                }
            </section>

            <section className={classes.range_box}>
                <h4>
                    {trans ? `Цена` : `Narx`} &nbsp;
                    <span>{sum}</span>
                </h4>
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
                {/* <FormControl component="fieldset"> */}
                <RadioGroup value={radio} onChange={radioChange}>
                    {
                        (trans ? radiosRu : radiosUz).map((item) => (
                            <FormControlLabel
                                value={item.title}
                                control={
                                    <Radio />
                                }
                                label={item.title}
                            />
                        ))
                    }
                </RadioGroup>
                {/* </FormControl> */}
            </section>
        </div >
    )
}

const RadioFunc = () => {
    return (
        <img src={radioImg} />
    )
}