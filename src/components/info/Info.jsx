import { Divider } from '@material-ui/core'
import React, { useContext } from 'react'
import { TranslateContext } from '../../contexts/TranslateContext'
import BreadCrumbs from '../breadCrumbs/BreadCrumbs'

import { useInfoStyles } from './infoStyles'

export default function Info() {
    const classes = useInfoStyles()
    const { trans, setTrans } = useContext(TranslateContext)

    return (
        <div className={classes.info_root}>
            <BreadCrumbs
                items={[
                    {
                        link: `/`,
                        titleRu: `Главная`,
                        titleUz: `Asosiy`
                    },
                    {
                        link: `/info`,
                        titleRu: `Автотовары`,
                        titleUz: `Avtotovarlar`
                    },
                    {
                        link: `/`,
                        titleRu: `Шины и Диски`,
                        titleUz: `Shina va disklar`
                    },
                ]}
            />
            <h1 className={classes.header}>Автосервис - Услуги</h1>
        </div>
    )
}
