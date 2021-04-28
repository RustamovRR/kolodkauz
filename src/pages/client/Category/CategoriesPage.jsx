import React, { useContext, useEffect, useState, } from 'react'
import { Drawer, Grid, Hidden } from '@material-ui/core'
import { useCategoryPageStyles } from './categoryPageStyles'

import { Layout, Sidebar, SortNavigation, TabMenu, Product, ProductMedium, ProductSmall, BreadCrumbs, ButtonComponent, Select, ProductDrawer } from '../../../components/shared'
import { ContextRoot } from '../../../contexts'
import { FilterList } from '@material-ui/icons'
import { Pagination } from '@material-ui/lab'
import { useProductsQuery } from '../../../hooks/queries'

export default function CategoriesPage({ medium, small }) {
    const classes = useCategoryPageStyles()
    const { trans, setTrans, productsData } = useContext(ContextRoot)
    const [open, setOpen] = useState(false)
    const [page, setPage] = useState(0)
    const [count, setCount] = useState(5)
    const products = useProductsQuery({ page })
    const productsQuery = products.isSuccess && products.data?.data ? products.data?.data : []

    const drawerOpen = () => {
        setOpen(true)
    }

    const drawerClose = () => {
        setOpen(false)
    }

    const handleChangePage = (e, value) => {
        setPage(value == 0 ? value = 0 : value - 1)
    }

    console.log(productsQuery.data?.length)



    return (
        <Layout>
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
                        <Hidden className={classes.sidebar} xsDown >
                            <Sidebar />
                        </Hidden>
                        <Hidden smUp>
                            <ButtonComponent
                                outlined
                                title="Filter"
                                startIcon
                                componentIcon={<FilterList />}
                                onClick={drawerOpen}
                            />
                        </Hidden>

                        <Hidden smUp>
                            <ProductDrawer
                                open={open}
                                setOpen={setOpen}
                                drawerOpen={drawerOpen}
                                drawerClose={drawerClose}
                            />
                        </Hidden>

                        <div className={classes.sort}>
                            <div className={classes.sort_navigation}>
                                <SortNavigation />
                            </div>

                            <div className={classes.product_box}>
                                {
                                    productsQuery.data?.map((item, index) => {
                                        if (medium) {
                                            return (
                                                <div className={classes.product_medium} key={item._id} >
                                                    <ProductMedium
                                                        index={index}
                                                        id={item._id}
                                                        data={item}
                                                    />
                                                </div>
                                            )
                                        }
                                        else if (small) {
                                            return (
                                                <div className={classes.product_small} key={item._id} >
                                                    <ProductSmall
                                                        index={index}
                                                        id={item._id}
                                                        data={item}
                                                    />
                                                </div>
                                            )
                                        }
                                        else {
                                            return (
                                                <div className={classes.product} key={item._id} >
                                                    <Product
                                                        favorite
                                                        index={index}
                                                        id={item._id}
                                                        data={item}
                                                    />
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                            <section className={classes.pagination} >
                                <Pagination
                                    count={count}
                                    shape="rounded"
                                    color="primary"
                                    hidePrevButton
                                    className={classes.paginationItem}
                                    onChange={handleChangePage}
                                    onClick={() => window.scrollTo(0, 200)}
                                />
                            </section>
                        </div>
                    </section>
                </Grid>
            </div>
        </Layout>
    )
}