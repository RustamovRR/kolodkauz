import { request } from "../../services/api"

const loadAds = () => async (dispatch) => {
    const adsData = await request.get('/ads')
    dispatch({
        type: 'FETCH_ADS',
        payload: {
            ads: adsData.data.data
        }
    })
}

export default loadAds