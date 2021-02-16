import React, { createContext, useState } from 'react'

export const TranslateContext = createContext()

export default function TranslateProvider(props) {

    const [trans, setTrans] = useState(false)


    return (
        <TranslateContext.Provider value={{ trans, setTrans }} >
            {props.children}
        </TranslateContext.Provider>
    )
}
