import React, { useContext } from 'react'
import BreadCrumbs from '../breadCrumbs/BreadCrumbs'
import { TranslateContext } from '../../contexts/TranslateContext'

import { useInfoStyles } from './infoStyles'
import InfoDelivery from '../infoDelivery/InfoDelivery'
import InfoService from '../infoService/InfoService'

export default function Info() {
    const classes = useInfoStyles()
    const { trans, setTrans } = useContext(TranslateContext)
    const title = ""
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
            <div className={classes.container}>
                {/* <InfoDelivery /> */}
                {/* <CardService /> */}
                <InfoService />
            </div>
        </div>
    )
}
