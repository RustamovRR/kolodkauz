import { Breadcrumbs, Divider } from '@material-ui/core'
import React, { useContext, } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import SortNavigation from '../../components/sortNavigation/SortNavigation'
import TabMenu from '../../components/tabmenu/TabMenu'
import Product from '../../components/product/Product'
import { useProductPageStyles } from './productsPageStyles'

import balon from '../../images/products/balon.png'
import bolgarka from '../../images/products/bolgarka.png'
import rectangle from '../../images/products/Rectangle 14.png'
import rol from '../../images/products/rol.png'
import ProductMedium from '../../components/productMedium/ProductMedium'
import ProductSmall from '../../components/productSmall/ProductSmall'
import { TranslateContext } from '../../contexts/TranslateContext'

export default function ProductsPage({ medium, small }) {
    const classes = useProductPageStyles()
    const { trans, setTrans } = useContext(TranslateContext)

    // const arrays = [balon]
    const arrays = [balon, bolgarka, rectangle, rol, balon, bolgarka, rectangle, rol]


    return (
        <div className={classes.root}>
            <section className={classes.header_box}>
                <Header />
            </section>

            <section className={classes.tabs_box}>
                <TabMenu />
            </section>

            <section className={classes.title_box}>
                <Breadcrumbs className={classes.navigation}>
                    <Link to="/" className={classes.link}>
                        {trans ? `Главная` : `Asosiy`}
                    </Link>
                    <Link to="/" className={classes.link}>
                        {trans ? `Автотовары` : `Avtotovarlar`}
                    </Link>
                    <p >
                        {trans ? `Шины и Диски` : `Shinalar va disklar`}
                    </p>
                </Breadcrumbs>

                <h1>
                    {trans ? `Шины и Диски` : `Shinalar va disklar`}
                </h1>
            </section>

            <section className={classes.products_box} >
                <div className={classes.sidebar}>
                    <Sidebar />
                </div>

                <div className={classes.sort}>
                    <div className={classes.sort_navigation}>
                        <SortNavigation />
                    </div>
                    <div className={classes.product_box}>
                        {
                            arrays.map((item, index) => {
                                if (medium) {
                                    return (
                                        <div className={classes.product_medium}>
                                            <ProductMedium hovered index={index} />
                                            <Divider />
                                        </div>
                                    )
                                }
                                else if (small) {
                                    return (
                                        <div className={classes.product_small}>
                                            <ProductSmall hovered index={index} />
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div className={classes.product}>
                                            <Product hovered index={index} />
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </section>

            <section className={classes.footer_box}>
                <Footer />
            </section>

        </div>
    )
}