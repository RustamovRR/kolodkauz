import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Grid, IconButton } from '@material-ui/core'
import { useTabListStyles } from './tabListStyles'

import { Close } from '../../../assets/images/icons'
import { ContextRoot } from '../../../contexts'
import { marka, xodovoy, motor, zapchast, kuzov, akkumlator, shina, maslo, avtotovar, tabLinksUz, tabLinksRu } from '../../../constants/tabListData/index.jsx'


export default function TabList({ data }) {
    const classes = useTabListStyles()
    const { trans, activeTab, openTabList, setOpenTabList } = useContext(ContextRoot)

    const handleClose = () => {
        setOpenTabList(false)
    }

    window.addEventListener('keydown', (e) => {
        if (e.which === 27) {
            handleClose()
        }
    })

    const renderList = () => {
        switch (activeTab) {
            case 0:
                return marka
            case 1:
                return xodovoy
            case 2:
                return motor
            case 3:
                return zapchast
            case 4:
                return kuzov
            case 5:
                return akkumlator
            case 6:
                return shina
            case 7:
                return maslo
            case 8:
                return avtotovar
            default:
                return marka
        }
    }

    const renderHeader = () => {
        switch (activeTab) {
            case 0:
                return trans ? `Марки автомобилей` : `Avtomobil markalari`
            case 1:
                return trans ? `Ходовая часть` : `Shassi qismi`
            case 2:
                return trans ? `Моторная часть` : `Motor qismi`
            case 3:
                return trans ? `Запчасти ТО` : `Ehtiyot qismlar`
            case 4:
                return trans ? `Кузов и оптика` : `Kuzov va optika`
            case 5:
                return trans ? `Аккумуляторы` : `Akkumulyatorlar`
            case 6:
                return trans ? `Шины` : `Shinalar`
            case 7:
                return trans ? `Масла и автохимия` : `Moy va avtokimyo`
            case 8:
                return trans ? `Автотовары` : `Avtomahsulotlar`
        }
    }


    return (
        <div className={classes.container} >
            <div className={openTabList ? classes.tabPanel : classes.hidden}>
                <header className={classes.header}>{renderHeader()}</header>

                <Grid className={classes.content_box}>
                    {
                        renderList().map(({ field, titleUz, titleRu }, index) => (
                            <section className={classes.content} key={index} >
                                <h3 className={classes.title}>{trans ? titleRu : titleUz}</h3>
                                <div>
                                    {
                                        field.map(({ valueUz, valueRu, link }, index) => (
                                            <div className={classes.link} key={index + 100} >
                                                <Link to={{ pathname: link }}>{trans ? valueRu : valueUz}</Link>
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
