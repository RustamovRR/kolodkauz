import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductMedium from '../components/productMedium/ProductMedium'
import ProductSmall from '../components/productSmall/ProductSmall'
import BasketPage from './Basket/BasketPage'
import ComparePage from './Compare/ComparePage'
import FavoritePage from './Favorite/FavoritePage'
import HomePage from './Home/HomePage'
import InformationPage from './Information/InformationPage'
import ProductsPage from './Product/ProductsPage'
import ProductInfoPage from './ProductInfo/ProductInfoPage'

export default function Pages() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/info" component={InformationPage} />
                <Route path="/favorite" component={FavoritePage} />
                <Route path="/compare" component={ComparePage} />
                <Route path="/basket" component={BasketPage} />
                <Route exact path="/products" component={ProductsPage} />
                <Route path="/products/medium">
                    <ProductsPage medium />
                </Route>
                <Route path="/products/small">
                    <ProductsPage small />
                </Route>
                <Route path="/product_info" component={ProductInfoPage} />
            </Switch>
        </div>
    )
}
