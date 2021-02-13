import { Breadcrumbs } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import TabMenu from '../../components/tabmenu/TabMenu'
import Product from '../../components/product/Product'
import Footer from '../../components/footer/Footer'
import { Rating } from '@material-ui/lab'
import { useComparePageStyles } from './comparePageStyles'
import { productCompare } from '../../Globals/productCompare'
import { clr } from '../../Globals/colors'

export default function ComparePage() {
    const classes = useComparePageStyles()

    const products = [
        {
            id: 1,
            name: 'Product1',
            price: 123123123,
        },
        {
            id: 2,
            name: 'Product2',
            price: 123123123,
        },
        {
            id: 3,
            name: 'Product3',
            price: 123123123,
        },
    ]

    const sections = [
        {
            title: "Main Info",
            fields: [
                {
                    title: "Name",
                    name: 'name'
                },
                {
                    title: "Price",
                    name: "price"
                },
                {
                    title: "Garranty",
                    name: "garranty"
                }
            ]
        }
    ]


    return (
        <div>
            <section className={classes.header_box}>
                <Header />
            </section>

            <section className={classes.tabs_box}>
                <TabMenu />
            </section>

            <section className={classes.compare_box}>
                <Breadcrumbs className={classes.navigation}>
                    <Link to="/" className={classes.link}>
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
            </section>


            <section className={classes.compare_info_box}>
                {
                    productCompare.map((item, index) => (
                        <div
                            className={classes.info}
                            style={
                                index % 2 === 0 ? { backgroundColor: clr.divider } : { backgroundColor: '#fff' }}
                        >
                            <p
                                className={
                                    index == 0 ? classes.title : '' ||
                                        index == 6 ? classes.title : '' ||
                                            index == 11 ? classes.title : ''
                                }
                                style={{ paddingLeft: 15 }}
                            >
                                {item.title}
                            </p>
                            <p>
                                {index === 3
                                    ? <Rating defaultValue={item.name1} readOnly />
                                    : item.name1
                                }
                            </p>
                            <p>
                                {index === 3
                                    ? <Rating defaultValue={item.name2} readOnly />
                                    : item.name2
                                }
                            </p>
                            <p>
                                {index === 3
                                    ? <Rating defaultValue={item.name3} readOnly />
                                    : item.name3
                                }
                            </p>
                            <p>
                                {index === 3
                                    ? <Rating defaultValue={item.name4} readOnly />
                                    : item.name4
                                }
                            </p>
                        </div>
                    ))
                }
            </section>

            <section className={classes.footer_box}>
                <Footer />
            </section>
        </div >
    )
}
