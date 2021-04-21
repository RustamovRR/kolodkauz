import axios from "axios"
import { request } from "../../services/api"

const loadAds = () => async (dispatch) => {
    const products = await request.get('/ads')
    dispatch({
        type: 'FETCH_ADS',
        payload: products.data
    })
}

export default loadAds