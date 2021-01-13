import React from 'react'
import { useTabMenuStyles } from './tabMenuStyles'
import balonImg from '../../images/products/balon.png'
import close from '../../images/icons/close.png'
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function TabMenu() {
    const classes = useTabMenuStyles()
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const links = [
        `Марки автомобилей`,
        `Ходовая часть`,
        `Моторная часть`,
        `Запчасти ТО`,
        `Кузов и оптика`,
        `Аккумуляторы`,
        `Шины`,
        `Масла и автохимия`,
        `Автотовары`,
    ]

    const tabsPrimary = [
        `Тормозная система`,
        `Система сцепления`,
        `Шрусы (Гранаты)`,
        `Топливная система`,
        `Рулевые тяги и наконечники`,
        `Пружины`
    ]

    const tabsCenter = [
        `Тормозные колодки дисковые`,
        `Тормозные колодки барабанные`,
        `Бачок тормозной жидкости`,
        `Главный тормозной цилиндр`,
        `Рабочий тормозной цилиндр`,
        `Тормозной барабан`,
        `Тормозные дики`,
        `Тормозные шланги`
    ]

    return (
        <div className={classes.root}>
            <div className={classes.tabs}>
                {
                    links.map(item => (
                        <p key={item}>{item}</p>
                    ))
                }
            </div>

            {/* <div className={classes.tabPanel}>
                <div className={classes.left_panel}>
                    {
                        tabsPrimary.map(item => (
                            <Link key={item}>{item}</Link>
                        ))
                    }
                </div>

                <div className={classes.center_panel}>
                    {
                        tabsCenter.map(item => (
                            <Link to="#" key={item}>{item}</Link>
                        ))
                    }
                </div>

                <div className={classes.image_panel}>
                    <img src={balonImg} alt="" />
                </div>

                <div className={classes.close_panel}>
                    <IconButton>
                        <img src={close} alt="" />
                    </IconButton>
                </div>
            </div> */}
        </div >
    )
}
