import React from 'react'
import { Link } from 'react-router-dom'
import { useNavlinkStyles } from './useNavlinkStyles'

export default function Navlinks() {
    const classes = useNavlinkStyles()

    const links = [
        { name: `Марки автомобилей`, href: `#` },
        { name: `Ходовая часть`, href: `#` },
        { name: `Моторная часть`, href: `#` },
        { name: `Запчасти ТО`, href: `#` },
        { name: `Кузов и оптика`, href: `#` },
        { name: `Аккумуляторы`, href: `#` },
        { name: `Шины`, href: `#` },
        { name: `Масла и автохимия`, href: `#` },
        { name: `Автотовары`, href: `#` },
    ]

    return (
        <div className={classes.link_root}>
            {
                links.map(item => (
                    <Link to={item.href} className={classes.link} key={item.name}>
                        {item.name}
                    </Link>
                ))
            }
        </div>
    )
}
