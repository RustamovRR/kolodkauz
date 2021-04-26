import React from 'react'
import { useMutation } from 'react-query'
import { request } from '../../services/api'

export default function useAdsMutation(values) {
    const mutation = useMutation(() => {
        request.post('/ads', values)
    })
    return mutation
}
