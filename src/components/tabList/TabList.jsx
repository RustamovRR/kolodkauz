import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useTabListStyles } from './tabListStyles'
import { IconButton } from '@material-ui/core'

import balonImg from '../../images/products/balon.png'
import close from '../../images/icons/close.png'
import { TabListContext } from '../../contexts/TabListContext'
import { TranslateContext } from '../../contexts/TranslateContext'


export default function TabList() {
    const classes = useTabListStyles()
    const { open, setOpen } = useContext(TabListContext)
    const { trans, setTrans } = useContext(TranslateContext)

    const handleClose = () => {
        setOpen(false)
    }

    window.addEventListener('keydown', (e) => {
        if (e.which === 27) {
            handleClose()
        }
    })

    const tabsPrimaryRu = [
        `Тормозная система`,
        `Система сцепления`,
        `Шрусы (Гранаты)`,
        `Топливная система`,
        `Рулевые тяги и наконечники`,
        `Пружины`
    ]

    const tabsPrimaryUz = [
        `Tormoz tizimi`,
        `Debriyaj tizimi`,
        `Shruslar`,
        `Yoqilg'i tizimi`,
        `Rul tayog'i va uchlari`,
        `Prujinalar`
    ]

    const tabsCenterRu = [
        `Тормозные колодки дисковые`,
        `Тормозные колодки барабанные`,
        `Бачок тормозной жидкости`,
        `Главный тормозной цилиндр`,
        `Рабочий тормозной цилиндр`,
        `Тормозной барабан`,
        `Тормозные дики`,
        `Тормозные шланги`
    ]

    const tabsCenterUz = [
        `Diskli tormoz kolodkasi`,
        `Barabanli tormoz kolodkasi`,
        `Tormoz suyuqligi ombori`,
        `Tormozning asosiy silindri`,
        `Ishlaydigan tormoz silindri`,
        `Tormoz barabani`,
        `Tormoz qistirmalari`,
        `Tormoz shlanglari`
    ]

    return (
        <div className={open ? classes.tabPanel : classes.hidden}>
            <div className={classes.left_panel}>
                {
                    trans ? tabsPrimaryRu : tabsPrimaryUz.map(item => (
                        <Link key={item}>{item}</Link>
                    ))
                }
            </div>

            <div className={classes.center_panel}>
                {
                    trans ? tabsCenterRu : tabsCenterUz.map(item => (
                        <Link to="#" key={item}>{item}</Link>
                    ))
                }
            </div>

            <div className={classes.image_panel}>
                <img src={balonImg} alt="" />
            </div>

            <div className={classes.close_panel}>
                <IconButton onClick={handleClose}>
                    <img src={close} alt="" />
                </IconButton>
            </div>
        </div>
    )
}
