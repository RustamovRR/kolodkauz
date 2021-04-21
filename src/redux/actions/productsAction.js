import { request } from "../../services/api"

const loadProducts = () => async (dispatch) => {
    const productsData = await request.get('/products')
    dispatch({
        type: 'FETCH_PRODUCTS',
        payload: {
            products: productsData.data.data
        }
    })
}

export default loadProducts