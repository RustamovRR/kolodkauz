import axios from "axios"
import { request } from "../../services/api"

const loadProducts = () => async (dispatch) => {
    const products = request.get('/products')
    dispatch({
        type: 'FETCH_PRODUCTS',
        payload: products.data
    })
}

export default loadProducts