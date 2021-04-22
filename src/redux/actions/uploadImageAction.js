import { request } from "../../services/api"

const uploadImage = () => async (dispatch) => {
    const adsData = await request.post('/uploads')
    dispatch({
        type: 'POST_IMAGE',
        payload: {
            ads: adsData.data
        }
    })
}

export default uploadImage