import React, { useContext } from 'react'
import BreadCrumbs from '../breadCrumbs/BreadCrumbs'
import { TranslateContext } from '../../contexts/TranslateContext'

import { useInfoStyles } from './infoStyles'
import InfoDelivery from '../infoDelivery/InfoDelivery'
import InfoService from '../infoService/InfoService'
import InfoSidebar from '../infoSidebar/InfoSidebar'

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
        component = <InfoService />
    }
    else if (delivery) {
        component = <InfoDelivery />
    }
    else if (deliveryToApartment) {
        component = <InfoService />
    }
    else if (methodOfService) {
        component = <InfoDelivery />
    }
    else if (guaranty) {
        component = <InfoService />
    }
    else if (returnAndExchange) {
        component = <InfoDelivery />
    }
    else if (termsOfUse) {
        component = <InfoService />
    }
    else {
        component = <InfoDelivery />
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
