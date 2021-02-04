import React, { createContext, useState } from 'react'

export const TabListContext = createContext()

export default function TabListProvider(props) {

    const [open, setOpen] = useState(false)


    return (
        <TabListContext.Provider value={{ open, setOpen }} >
            {props.children}
        </TabListContext.Provider>
    )
}
