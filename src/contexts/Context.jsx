import React, { createContext, useEffect, useReducer, useState } from 'react'
import { request } from '../services/api'
import Sort from './components/Sort'
import Favorite from './components/Favorite'
import Product from './components/Product'
import Count from './components/Count'
import VariableStates from './components/VariableStates'

export const ContextRoot = createContext()

export default function Provider({ children }) {

    const [trans, setTrans] = useState(false)
    const sum = trans ? `сум` : `so'm`

    const state = {
        sum,
        trans,
        setTrans,

        // queries: Sort(),
        count: Count(),
        product: Product(),
        favorite: Favorite(),
        variables: VariableStates()

    }

    return (
        <ContextRoot.Provider value={state}>
            {children}
        </ContextRoot.Provider>
    )
}
