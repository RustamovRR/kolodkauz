import React from 'react'

import { OneRound, TwoRound, ThreeRound, FourRound, FiveRound, SixRound } from '../../../../assets/images/icons'
import { useInfoDeliveryStyles } from './infoDeliveryStyles'

export default function InfoDelivery() {
    const classes = useInfoDeliveryStyles()
    const data = [
        { icon: <OneRound />, title: `Войти или зарегистрироваться`, body: `Подъём на этаж и занос в квартиру: малогабаритной техники – бесплатно.`, },
        { icon: <TwoRound />, title: `Добавить товар в «Корзину»`, body: `Подъём на этаж и занос в квартиру: малогабаритной техники – бесплатно.`, },
        { icon: <ThreeRound />, title: `Перейти в корзину`, body: `Для продолжения оформления заказа перейдите в «Корзину».`, },
        { icon: <FourRound />, title: `Проверить заказ`, body: `Проверьте состав заказа. Измените количество, отложите или удалите товар, если ошиблись с выбором:`, },
        { icon: <FiveRound />, title: `Завершить заказат`, body: `Проверьте состав заказа. Измените количество, отложите или удалите товар, если ошиблись с выбором:`, },
        { icon: <SixRound />, title: `Завершить оформление заказа`, body: `Проверьте состав заказа. Измените количество, отложите или удалите товар, если ошиблись с выбором:`, },
        { body: `Нажмите кнопку «Заказат». ` },
    ]

    return (
        <div>
            <h1 className={classes.header}>Как сделать заказ</h1>
            {
                data.map(({ icon, title, body }) => (
                    <div key={title} className={classes.text_box}>
                        {icon}
                        <h4>{title}</h4>
                        <p>{body}</p>
                        <div></div>
                    </div>
                ))
            }
        </div>
    )
}
