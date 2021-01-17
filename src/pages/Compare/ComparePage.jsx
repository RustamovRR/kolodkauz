import { Breadcrumbs } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import TabMenu from '../../components/tabmenu/TabMenu'
import Product from '../../components/product/Product'
import Footer from '../../components/footer/Footer'
import { useComparePageStyles } from './comparePageStyles'
import { productCompare } from '../../Globals/productCompare'

export default function ComparePage() {
    const classes = useComparePageStyles()

    return (
        <div>
            <div className={classes.header_box}>
                <Header />
            </div>

            <div className={classes.tabs_box}>
                <TabMenu />
            </div>

            <div className={classes.compare_box}>
                <Breadcrumbs className={classes.navigation}>
                    <Link to="#" className={classes.link}>
                        Главная
                    </Link>
                    <p >
                        Сравнение
                    </p>
                </Breadcrumbs>

                <h1>Сравнение</h1>

                <div className={classes.product_box}>
                    <p>Изображение</p>
                    <Product compare={true} />
                    <Product compare={true} />
                    <Product compare={true} />
                    <Product compare={true} />
                </div>
            </div>

            <div>
                {
                    productCompare.map(item => (
                        <p>{item.name2}</p>
                    ))
                }
            </div>

            <div className={classes.footer_box}>
                <Footer />
            </div>
        </div>
    )
}
