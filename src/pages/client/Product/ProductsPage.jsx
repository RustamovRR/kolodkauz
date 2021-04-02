import React, { useContext, } from 'react'
import { Divider, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useProductPageStyles } from './productsPageStyles'

import { Header, Footer, Sidebar, SortNavigation, TabMenu, Product, ProductMedium, ProductSmall, BreadCrumbs } from '../../../components/shared'
import { TranslateContext } from '../../../contexts'

import balon from '../../../assets/images/products/balon.png'
import bolgarka from '../../../assets/images/products/bolgarka.png'
import rectangle from '../../../assets/images/products/Rectangle 14.png'
import rol from '../../../assets/images/products/rol.png'

export default function ProductsPage({ medium, small }) {
    const classes = useProductPageStyles()
    const { trans, setTrans } = useContext(TranslateContext)

    // const arrays = [balon]
    const arrays = [balon, bolgarka, rectangle, rol, balon, bolgarka, rectangle, rol]


    return (
        <div className={classes.root}>
            <section className={classes.tabs_box}>
                <TabMenu />
            </section>

            <Grid className={classes.container}>
                <section className={classes.title_box}>
                    <BreadCrumbs
                        items={[
                            {
                                link: `/`,
                                titleRu: `Главная`,
                                titleUz: `Asosiy`
                            },
                            {
                                link: `/`,
                                titleRu: `Автотовары`,
                                titleUz: `Avtovarlar`
                            },
                            {
                                link: `/`,
                                titleRu: `Шины и Диски`,
                                titleUz: `Shinalar va disklar`
                            }
                        ]}
                    />

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
                                                <ProductMedium index={index} />
                                            </div>
                                        )
                                    }
                                    else if (small) {
                                        return (
                                            <div className={classes.product_small}>
                                                <ProductSmall index={index} />
                                            </div>
                                        )
                                    }
                                    else {
                                        return (
                                            <div className={classes.product}>
                                                <Product favorite index={index} />
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </section>
            </Grid>
        </div>
    )
}