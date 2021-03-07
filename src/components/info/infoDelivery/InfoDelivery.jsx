import React from 'react'

import one from '../../../images/icons/one.svg'
import two from '../../../images/icons/two.svg'
import three from '../../../images/icons/three.svg'
import four from '../../../images/icons/four.svg'
import five from '../../../images/icons/five.svg'
import six from '../../../images/icons/six.svg'
import { useInfoDeliveryStyles } from './infoDeliveryStyles'

export default function InfoDelivery() {
    const classes = useInfoDeliveryStyles()
    const data = [
        { icon: one, title: `Войти или зарегистрироваться`, body: `Подъём на этаж и занос в квартиру: малогабаритной техники – бесплатно.`, },
        { icon: two, title: `Добавить товар в «Корзину»`, body: `Подъём на этаж и занос в квартиру: малогабаритной техники – бесплатно.`, },
        { icon: three, title: `Перейти в корзину`, body: `Для продолжения оформления заказа перейдите в «Корзину».`, },
        { icon: four, title: `Проверить заказ`, body: `Проверьте состав заказа. Измените количество, отложите или удалите товар, если ошиблись с выбором:`, },
        { icon: five, title: `Завершить заказат`, body: `Проверьте состав заказа. Измените количество, отложите или удалите товар, если ошиблись с выбором:`, },
        { icon: six, title: `Завершить оформление заказа`, body: `Проверьте состав заказа. Измените количество, отложите или удалите товар, если ошиблись с выбором:`, },
        { body: `Нажмите кнопку «Заказат». ` },
    ]

    return (
        <div>
            <h1 className={classes.header}>Как сделать заказ</h1>
            {
                data.map(({ icon, title, body }) => (
                    <div key={title} className={classes.text_box}>
                        <img src={icon} alt="" />
                        <h4>{title}</h4>
                        <p>{body}</p>
                        <div></div>
                    </div>
                ))
            }
        </div>
    )
}
