import React from 'react'
import TabMenu from '../../components/tabmenu/TabMenu'
import Info from '../../components/info/Info'
import InfoSidebar from '../../components/infoSidebar/InfoSidebar'
import { useInformationStyles } from './informationPageStyles'

export default function InformationPage() {
    const classes = useInformationStyles()

    return (
        <div>

            <div className={classes.tabs_box}>
                <TabMenu />
            </div>

            <section className={classes.info_box}>
                <div className={classes.sidebar}>
                    <InfoSidebar />
                </div>
                <div className={classes.info_panel}>
                    <Info />
                </div>
            </section>

        </div>
    )
}
