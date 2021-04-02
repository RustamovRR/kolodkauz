import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Grid, IconButton } from '@material-ui/core'
import { useTabListStyles } from './tabListStyles'

import balonImg from '../../../assets/images/products/balon.png'
import { Close } from '../../../assets/images/icons'
import { TabListContext, TranslateContext } from '../../../contexts'


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
        `Тормозные колодки дисковые`,
        `Рабочий тормозной цилиндр`,
        `Пользовательское соглашение`,
        `Тормозные дики`,
        `Тормозные шланги`
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
        <div className={classes.container} >
            <div className={open ? classes.tabPanel : classes.hidden}>
                <header className={classes.header}>Ходовая часть</header>

                <Grid className={classes.content_box}>
                    {
                        [1, 2, 3, 4, 5, 6].map((data) => (
                            <section className={classes.content}>
                                <h3 className={classes.title}>Тормозная система</h3>
                                <div>
                                    {
                                        tabsPrimaryRu.map((item) => (
                                            <div className={classes.link}>
                                                <Link key={item}>{item}</Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </section>
                        ))
                    }
                </Grid>
            </div>
        </div>
    )
}
