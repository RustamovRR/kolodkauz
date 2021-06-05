import React, { useState } from 'react'

const VariableStates = () => {

    const [openBasket, setOpenBasket] = useState(false)
    const [openTabList, setOpenTabList] = useState(false)
    const [openFastBuyModal, setOpenFastBuyModal] = useState(false)
    const [activeTab, setActiveTab] = useState(0)
    const [imageUrl, setImageUrl] = useState('')

    return {
        openFastBuyModal, setOpenFastBuyModal,
        openBasket, setOpenBasket,
        openTabList, setOpenTabList,
        activeTab, setActiveTab,
        imageUrl, setImageUrl,
    }
}

export default VariableStates
