import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BasketPage from './Basket/BasketPage'
import ComparePage from './Compare/ComparePage'
import FavoritePage from './Favorite/FavoritePage'
import HomePage from './Home/HomePage'
import InformationPage from './Information/InformationPage'
import ProductsPage from './Product/ProductsPage'

export default function Pages() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/info" component={InformationPage} />
                <Route path="/favorite" component={FavoritePage} />
                <Route path="/compare" component={ComparePage} />
                <Route path="/basket" component={BasketPage} />
                <Route path="/products" component={ProductsPage} />
            </Switch>
        </div>
    )
}
