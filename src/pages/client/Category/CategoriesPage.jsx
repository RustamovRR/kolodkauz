import React, { useContext, useEffect, useState, } from 'react'
import { Grid, Hidden } from '@material-ui/core'
import { useCategoryPageStyles } from './categoryPageStyles'

import { Layout, Sidebar, SortNavigation, TabMenu, Product, ProductMedium, ProductSmall, BreadCrumbs, ButtonComponent, ProductDrawer } from '../../../components/shared'
import { ContextRoot } from '../../../contexts'
import { FilterList } from '@material-ui/icons'
import { Pagination } from '@material-ui/lab'
import { useProductsQuery } from '../../../hooks/queries'
import { useParams, useLocation } from 'react-router-dom'

export default function CategoriesPage({ medium, small }) {
    const classes = useCategoryPageStyles()
    const { search } = useLocation()
    const [open, setOpen] = useState(false)
    const [count, setCount] = useState(0)
    const params = useParams()

    const state = useContext(ContextRoot)
    const { trans } = useContext(ContextRoot)
    const { brand, model, sort, sale, page, setPage, price, productsData, allProduct } = state.product

    // const products = useProductsQuery({ page, brand, model, sort, sale, price })
    // const productsQuery = products.isSuccess && products.data?.data ? products.data?.data : []

    const drawerOpen = () => {
        setOpen(true)
    }

    const drawerClose = () => {
        setOpen(false)
    }

    const handleChangePage = (e, value) => {
        setPage(value === 0 ? value = 0 : value - 1)
    }

    const productLength = allProduct.data?.length

    useEffect(() => {
        if (productLength <= 20) {
            setCount(1)
        } else {
            setCount(() => Math.ceil(55 / 20))
        }
    }, [])

    console.log(params)

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
                            {trans === 'ru' ? `Шины и Диски` : `Shinalar va disklar`}
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
                                    productsData.data?.map((item, index) => {
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