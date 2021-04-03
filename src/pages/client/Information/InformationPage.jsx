import React from 'react'
import { useInformationStyles } from './informationPageStyles'

import { TabMenu, Info, InfoSidebar, Layout } from '../../../components/shared'

export default function InformationPage({
    howToOrder,
    delivery,
    deliveryToApartment,
    methodOfService,
    guaranty,
    returnAndExchange,
    termsOfUse,
}) {
    const classes = useInformationStyles()

    let component
    if (howToOrder) {
        component = <Info howToOrder />
    }
    else if (delivery) {
        component = <Info delivery />
    }
    else if (deliveryToApartment) {
        component = <Info deliveryToApartment />
    }
    else if (methodOfService) {
        component = <Info methodOfService />
    }
    else if (guaranty) {
        component = <Info guaranty />
    }
    else if (returnAndExchange) {
        component = <Info returnAndExchange />
    }
    else if (termsOfUse) {
        component = <Info termsOfUse />
    }
    else {
        component = <Info />
    }

    return (
        <Layout>
            <div className={classes.root}>

                <div className={classes.tabs_box}>
                    <TabMenu />
                </div>

                <section className={classes.info_box}>
                    <div className={classes.sidebar}>
                        <InfoSidebar />
                    </div>
                    <div className={classes.info_panel}>
                        {component}
                    </div>
                </section>

            </div>
        </Layout>
    )
}
