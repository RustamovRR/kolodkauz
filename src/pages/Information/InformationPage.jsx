import React from 'react'
import Header from '../../components/header/Header'
import Info from '../../components/info/Info'
import TabMenu from '../../components/tabmenu/TabMenu'
import Footer from '../../components/footer/Footer'
import { useInformationStyles } from './informationPageStyles'

export default function InformationPage() {
    const classes = useInformationStyles()

    return (
        <div>
            <div className={classes.header_box}>
                <Header />
            </div>

            {/* <div className={classes.tabs_box}>
                <TabMenu />
            </div> */}

            <div className={classes.info_box}>
                <Info />
            </div>

            <div className={classes.footer_box}>
                <Footer />
            </div>
        </div>
    )
}
