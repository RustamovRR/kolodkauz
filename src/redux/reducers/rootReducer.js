import { combineReducers } from 'redux'
import { adsReducer } from './'

const rootReducer = combineReducers({
    ads: adsReducer
})

export default rootReducer