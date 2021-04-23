import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Component from './Component'

export default function Users() {
    const [data, setData] = useState([])

    const fetchApi = async () => {
        await axios.get('https://breakingbadapi.com/api/characters')
            .then(res => setData(res.data))
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <div>
            <Component data={data} />
        </div>
    )
}
