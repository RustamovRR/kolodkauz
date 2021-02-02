import React from 'react'
import { useInfoServiceStyles } from './infoServiceStyles'

export default function InfoService() {
    const classes = useInfoServiceStyles()

    return (
        <div className={classes.service_root}>
            <h1>Автосервис - Услуги</h1>

            <section className={classes.text_box}>
                <h4 className={classes.title}>
                    Диагностика ходовой части
                </h4>
                <div className={classes.content_box}>
                    <p>Компьютерная диагностика</p>
                    <span>15,000 сум</span>
                </div>
                <div className={classes.content_box}>
                    <p>Диагностика ходовой части</p>
                    <span>15,000 сум</span>
                </div>
                <div className={classes.content_box}>
                    <p>Полная диагностика автомобиля</p>
                    <span>15,000 сум</span>
                </div>
                <div className={classes.content_box}>
                    <p>Регулировка ручного тормоза</p>
                    <span>15,000 сум</span>
                </div>
                <div className={classes.content_box}>
                    <p>
                        Предпокупочная диагностика автомобиля
                    </p>
                    <span>15,000 сум</span>
                </div>
            </section>

            <section className={classes.text_box}>
                <h4 className={classes.title}>
                    Диагностика ходовой части
                </h4>
                <div className={classes.content_box}>
                    <p>Компьютерная диагностика</p>
                    <span>15,000 сум</span>
                </div>
                <div className={classes.content_box}>
                    <p>Диагностика ходовой части</p>
                    <span>15,000 сум</span>
                </div>
                <div className={classes.content_box}>
                    <p>Полная диагностика автомобиля</p>
                    <span>15,000 сум</span>
                </div>
                <div className={classes.content_box}>
                    <p>Регулировка ручного тормоза</p>
                    <span>15,000 сум</span>
                </div>
                <div className={classes.content_box}>
                    <p>Предпокупочная диагностика автомобиля</p>
                    <span>15,000 сум</span>
                </div>
            </section>

            <section className={classes.text_box}>
                <h4 className={classes.title}>
                    Замена техжидкости и фильтров
                </h4>
                <div className={classes.content_box}>
                    <p>Замена тормозного барабана с подшипником</p>
                    <span>15,000 сум</span>
                </div>
                <div className={classes.content_box}>
                    <p>Замена тормозных колодок барабанных (комплект)</p>
                    <span>15,000 сум</span>
                </div>
                <div className={classes.content_box}>
                    <p>Замена ремкомплекта тормозного суппорта 1 поршень</p>
                    <span>15,000 сум</span>
                </div>
                <div className={classes.content_box}>
                    <p>Замена тормозных дисков с колодками (пара)</p>
                    <span>15,000 сум</span>
                </div>
                <div className={classes.content_box}>
                    <p>Замена тормозного цилиндра рабочего</p>
                    <span>15,000 сум</span>
                </div>
                <div className={classes.content_box}>
                    <p>Замена тормозных дисков с колодками (пара) спортивная тормозная система</p>
                    <span>15,000 сум</span>
                </div>
            </section>

            <section className={classes.text_box}>
                <h4 className={classes.title}>
                    Замена техжидкости и фильтров
                </h4>
                <div className={classes.content_box}>
                    <p>Замена тормозного барабана с подшипником</p>
                    <span>15,000 сум</span>
                </div>
                <div className={classes.content_box}>
                    <p>Замена тормозных колодок барабанных (комплект)</p>
                    <span>15,000 сум</span>
                </div>
                <div className={classes.content_box}>
                    <p>Замена ремкомплекта тормозного суппорта 1 поршень</p>
                    <span>15,000 сум</span>
                </div>
                <div className={classes.content_box}>
                    <p>Замена тормозных дисков с колодками (пара)</p>
                    <span>15,000 сум</span>
                </div>
                <div className={classes.content_box}>
                    <p>Замена тормозного цилиндра рабочего</p>
                    <span>15,000 сум</span>
                </div>
                <div className={classes.content_box}>
                    <p>Замена тормозных дисков с колодками (пара) спортивная тормозная система</p>
                    <span>15,000 сум</span>
                </div>
            </section>

        </div>
    )
}
