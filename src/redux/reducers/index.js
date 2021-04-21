import { combineReducers } from 'redux'
import adsReducer from './adsReducer'
import productsReducer from './productsReducer'

const rootReducer = combineReducers({
    ads: adsReducer,
    products: productsReducer
})

export default rootReducer