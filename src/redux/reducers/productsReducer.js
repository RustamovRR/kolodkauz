import axios from "axios"

const initialState = {

}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {
                ...state,

            }
        default:
            return { ...state }
    }
}

export default productsReducer