import React, { createContext, useState } from 'react'

export const TranslateContext = createContext()

export default function TranslateProvider(props) {

    const [trans, setTrans] = useState(false)

    const sum = trans ? `сум` : `so'm`

    return (
        <TranslateContext.Provider value={{ trans, setTrans, sum }} >
            {props.children}
        </TranslateContext.Provider>
    )
}
