import React from 'react'

export default function Component({ data }) {
    console.log(data)
    return (
        <div>
            {
                data.map((item) => {
                    <h1>{item.name}</h1>
                })
            }
        </div>
    )
}
