import axios from "axios"

const initialState = {
    ads: []
}

const adsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ADS':
            return {
                ...state,
                ads: action.payload.ads
            }
        default:
            return { ...state }
    }
}

export default adsReducer