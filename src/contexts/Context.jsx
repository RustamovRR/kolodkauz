import React, { createContext, useEffect, useReducer, useState } from 'react'
import { request } from '../services/api'

import Sort from './components/Sort'
import Product from './components/Product'
import Count from './components/Count'
import VariableStates from './components/VariableStates'
import User from './components/User'

export const ContextRoot = createContext()

export default function Provider({ children }) {

    const [userId, setUserId] = useState(false)
    const [token, setToken] = useState(false)
    const [trans, setTrans] = useState(false)
    const sum = trans ? `сум` : `so'm`

    const storageToken = localStorage.getItem('token')
    const storageUserId = localStorage.getItem('userId')

    useEffect(() => {
        setToken(storageToken)
    }, [storageToken])

    useEffect(() => {
        setUserId(storageUserId)
    }, [storageUserId])

    const state = {
        sum,
        trans,
        setTrans,
        token,
        setToken,
        userId,
        setUserId,

        // queries: Sort(),

        count: Count(),
        product: Product(),
        user: User(token),
        variables: VariableStates()

    }

    return (
        <ContextRoot.Provider value={state}>
            {children}
        </ContextRoot.Provider>
    )
}
