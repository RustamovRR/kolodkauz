import React from 'react'
import { useCardServiceStyles } from './cardServiceStyles'

export default function CardService() {
    const classes = useCardServiceStyles()
    const data = [
        { title: `Компьютерная диагностика`, price: `15,000 сум` },
        { title: `Диагностика ходовой части`, price: `800,000 сум` },
        { title: `Полная диагностика автомобиля`, price: `15,000 сум` },
        { title: `Регулировка ручного тормоза`, price: `15,000 сум` },
        { title: `Предпокупочная диагностика автомобиля`, price: `15,000 сум` }
    ]


    return (
        <div className={classes.root}>
            <header>Диагностика ходовой части</header>

            <section style={{ marginTop: 12 }}>
                {
                    data.map(({ title, price }) => (
                        <div className={classes.text_box} key={title}>
                            <p>{title}</p>
                            <span>{price}</span>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}
