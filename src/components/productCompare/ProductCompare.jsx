import React from 'react'
import { Divider } from '@material-ui/core'
import Product from '../product/Product'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import RatingComp from '../rating/RatingComp'

import { useProductCompareStyles } from './productCompareStyles'

export default function ProductCompare() {
    const classes = useProductCompareStyles()

    function createData(title, body) {
        return { title, body };
    }

    const sizes = [
        createData(`ШИРИНА ПРОФИЛЯ`, `175, 185, 195, 205, 215, 225`),
        createData(`ВЫСОТА ПРОФИЛЯ`, `45, 55, 60, 65, 70`),
        createData(`ДИАМЕТР`, `13, 14, 15, 16, 17`)
    ];

    const speeds = [
        createData(`ИНДЕКС МАКСИМАЛЬНОЙ СКОРОСТИ`, `H (до 210 км/ч), T (до 190 км/ч), V (до 240 км/ч)`),
        createData(`ИНДЕКС НАГРУЗКИ`, `82-95`)
    ]

    const features = [
        createData(`ТЕХНОЛОГИЯ RUNFLAT`, `H (до 210 км/ч), T (до 190 км/ч), V (до 240 км/ч)`),
        createData(`ТЕХНОЛОГИЯ RUNFLAT`, `Нет`),
        createData(`ТИП РИСУНКА ПРОТЕКТОРА`, `нет данных`)
    ]

    return (
        <div>

            <TableContainer >
                <Table className={classes.table} aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            <TableCell><Product compare={true} /></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow >
                            <TableCell >
                                <span>НАЗНАЧЕНИЕ</span>
                                <p>для легкового автомобиля</p>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><h1>Типоразмер</h1></TableCell>
                        </TableRow>

                        {sizes.map((row) => (
                            <TableRow key={row.title}>
                                <TableCell >
                                    <span>{row.title}</span>
                                    <p>{row.body}</p>
                                </TableCell>
                            </TableRow>
                        ))}

                        <TableRow>
                            <TableCell><h1>Индексы скорости и нагрузки</h1></TableCell>
                        </TableRow>
                        {speeds.map((row) => (
                            <TableRow key={row.title}>
                                <TableCell >
                                    <span>{row.title}</span>
                                    <p>{row.body}</p>
                                </TableCell>
                            </TableRow>
                        ))}

                        <TableRow>
                            <TableCell><h1>Другие функции и особенности</h1></TableCell>
                        </TableRow>
                        {features.map((row) => (
                            <TableRow key={row.title}>
                                <TableCell >
                                    <span>{row.title}</span>
                                    <p>{row.body}</p>
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

