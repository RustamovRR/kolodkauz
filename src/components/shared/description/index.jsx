import React from 'react'
import { useDescriptionStyles } from './descriptionStyles'

export default function Description({ data }) {
    const classes = useDescriptionStyles()
    const infos = [
        { title: `Класс вязкости`, value: `5W-30` },
        { title: `Плотность при 15 °С, г/см3`, value: 0.857 },
        { title: `Вязкость кинематическая при 100 °С, мм2/с`, value: 12.2 },
        { title: `Вязкость кинематическая при 40 °С, мм2/с`, value: 71.2 },
        { title: `Индекс вязкости`, value: 169 },
        { title: `Щелочное число, мг КОН/г`, value: 8.6 },
        { title: `Испаряемость по NOACK, %`, value: 8.9 }
    ]

    return (
        <div className={classes.root}>
            <p>Быстрое и легкое подключение к бортовой сети автомобиля через розетку прикуривателя 12V. </p>
            <h2>Общие характеристики</h2>
            <section className={classes.info_box}>
                {
                    data?.map(info => (
                        <div className={classes.text} key={info.value}>
                            <p>{info.option}</p>
                            <span>{info.value}</span>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}
