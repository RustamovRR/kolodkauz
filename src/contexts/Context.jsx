import React, { createContext, useReducer, useState } from 'react'

export const ContextRoot = createContext()

export default function Provider({ children }) {

    const [openBasket, setOpenBasket] = useState(false)
    const [openTabList, setOpenTabList] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const [trans, setTrans] = useState(false)
    const sum = trans ? `сум` : `so'm`


    const initialValue = 1
    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1

            case 'decrement':
                return state - 1

            case 'reset':
                return initialValue

            default:
                return state
        }
    }
    const [count, dispatch] = useReducer(reducer, initialValue)

    const state = {
        sum,
        openBasket, setOpenBasket,
        openTabList, setOpenTabList,
        imageUrl, setImageUrl,
        trans, setTrans,
        countState: count, countDispatch: dispatch,
    }

    return (
        <ContextRoot.Provider value={state}>
            {children}
        </ContextRoot.Provider>
    )
}
