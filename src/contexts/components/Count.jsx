import React, { useReducer } from 'react'

const Count = () => {

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

    return {
        countState: count,
        countDispatch: dispatch,
    }
}

export default Count
