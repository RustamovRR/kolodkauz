import { Breadcrumbs, Divider } from '@material-ui/core'
import React, { useContext, } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
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

export default function ProductsPage({ medium, small }) {
    const classes = useProductPageStyles()

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
                        Главная
                    </Link>
                    <Link to="/" className={classes.link}>
                        Автотовары
                    </Link>
                    <p >
                        Шины и Диски
                    </p>
                </Breadcrumbs>

                <h1>Шины и Диски</h1>
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

        </div>
    )
}