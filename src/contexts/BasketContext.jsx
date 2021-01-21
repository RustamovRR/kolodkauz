import React, { createContext, useState } from 'react'

export const BasketContext = createContext()

export default function BasketProvider(props) {

    const [open, setOpen] = useState(false)


    return (
        <BasketContext.Provider value={{ open, setOpen }} >
            {props.children}
        </BasketContext.Provider>
    )
}
