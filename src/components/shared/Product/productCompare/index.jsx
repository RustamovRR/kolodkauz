import React, { useContext } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Product, RatingComp } from '../../../shared'

import { useProductCompareStyles } from './productCompareStyles'
import { ContextRoot } from '../../../../contexts';

export default function ProductCompare({ primary }) {
    const classes = useProductCompareStyles()
    const { trans, sum } = useContext(ContextRoot)

    function createData(title, body) {
        return { title, body };
    }

    const sizes = [
        createData(`Ширина профиля`, `175, 185, 195, 205, 215, 225`),
        createData(`Высота Профиля`, `45, 55, 60, 65, 70`),
        createData(`Диаметр`, `13, 14, 15, 16, 17`)
    ];

    const speeds = [
        createData(`Индекс максимальной скорости`, `H (до 210 км/ч), T (до 190 км/ч), V (до 240 км/ч)`),
        createData(`Индекс нагрузки`, `82-95`)
    ]

    const features = [
        createData(`Технология runflat`, `H (до 210 км/ч), T (до 190 км/ч)`),
        createData(`Технология runflat`, `Нет`),
        createData(`Тип рисунка протектора`, `нет данных`)
    ]

    return (
        <div>
            <TableContainer >
                <Table className={classes.table} aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            <TableCell><Product compare={true} favorite /></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody className={classes.tableBody}>
                        <TableRow  >
                            <TableCell className={classes.primary}>
                                <div style={{ marginBottom: 50 }} >
                                    <p className={classes.price} >7,500,000 {sum}</p>
                                    <RatingComp value={4} />
                                </div>
                                {primary
                                    ? <h1 >Общие характеристики</h1>
                                    : ""
                                }

                            </TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell >
                                <header>Назначение</header>
                                <p>для легкового автомобиля</p>
                            </TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell className={classes.sizeHeader}>
                                {primary
                                    ? <h1>Типоразмер</h1>
                                    : ""
                                }
                            </TableCell>
                        </TableRow>

                        {sizes.map((row) => (
                            <TableRow key={row.title}>
                                <TableCell >
                                    <header>{row.title}</header>
                                    <p>{row.body}</p>
                                </TableCell>
                            </TableRow>
                        ))}

                        <TableRow >
                            <TableCell className={classes.speedHeader} >
                                {primary
                                    ? <h1>Индексы скорости и нагрузки</h1>
                                    : ""
                                }
                            </TableCell>
                        </TableRow>
                        {speeds.map((row) => (
                            <TableRow key={row.title}>
                                <TableCell >
                                    <header>{row.title}</header>
                                    <p>{row.body}</p>
                                </TableCell>
                            </TableRow>
                        ))}

                        <TableRow >
                            <TableCell className={classes.featuresHeader} >
                                {primary
                                    ? <h1>Другие функции и особенности</h1>
                                    : ""
                                }
                            </TableCell>
                        </TableRow>
                        {features.map((row) => (
                            <TableRow key={row.title}>
                                <TableCell >
                                    <header>{row.title}</header>
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

