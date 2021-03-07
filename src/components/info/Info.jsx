import React, { useContext } from 'react'
import BreadCrumbs from '../breadCrumbs/BreadCrumbs'
import { TranslateContext } from '../../contexts/TranslateContext'

import { useInfoStyles } from './infoStyles'
import InfoMaster from './infoMaster/infoMaster'
import InfoService from './infoService/InfoService'
import InfoDelivery from './infoDelivery/InfoDelivery'

export default function Info({
    howToOrder,
    delivery,
    deliveryToApartment,
    methodOfService,
    guaranty,
    returnAndExchange,
    termsOfUse,
}) {
    const classes = useInfoStyles()
    const { trans, setTrans } = useContext(TranslateContext)
    let component
    if (howToOrder) {
        component = <InfoDelivery />
    }
    else if (delivery) {
        component = <InfoMaster />
    }
    else if (deliveryToApartment) {
        component = <InfoService />
    }
    else if (methodOfService) {
        component = <InfoMaster />
    }
    else if (guaranty) {
        component = <InfoService />
    }
    else if (returnAndExchange) {
        component = <InfoMaster />
    }
    else if (termsOfUse) {
        component = <InfoService />
    }
    else {
        component = <InfoMaster />
    }

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
                {component}
            </div>
        </div>
    )
}
