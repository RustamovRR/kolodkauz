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
            <section className={classes.header_box}>
                <Header />
            </section>

            <div className={classes.tabs_box}>
                <TabMenu />
            </div>

            <section className={classes.info_box}>
                <Info />
            </section>

            <section className={classes.footer_box}>
                <Footer />
            </section>
        </div>
    )
}
