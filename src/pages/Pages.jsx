import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ComparePage from './Compare/ComparePage'
import FavoritePage from './Favorite/FavoritePage'
import HomePage from './Home/HomePage'
import InformationPage from './Information/InformationPage'

export default function Pages() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/info" component={InformationPage} />
                <Route path="/favorite" component={FavoritePage} />
                <Route path="/compare" component={ComparePage} />
            </Switch>
        </div>
    )
}
