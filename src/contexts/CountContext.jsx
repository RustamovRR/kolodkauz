import React, { createContext, useReducer, useState } from 'react'

export const CountContext = createContext()

export default function CountProvider({ children }) {

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

    return (
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
            {children}
        </CountContext.Provider>
    )
}
