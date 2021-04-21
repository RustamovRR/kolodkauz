import React from 'react'
import { request } from '../../services/api'

const useFileUpload = async ({ image }) => {
    image.preventDefault()
    const formdata = new FormData()

    formdata.append('image', image)

    const response = await request.post('/uploads', formdata)
    console.log(response)

    return response
}

export default useFileUpload