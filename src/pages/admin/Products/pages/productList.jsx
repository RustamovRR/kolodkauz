import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useProductsQuery from '../../../../hooks/queries/useProductsQuery';
import { BASE_URL } from '../../../../services/api';
import { Delete, Edit } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            // backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function PrductList() {
    const classes = useStyles();
    const products = useProductsQuery({ page: 0 })
    const productsQuery = products.isSuccess ? products.data?.data : []

    const headers = [
        `Rasm`, `Nomi`, `Turi`, `Narxi`, `Miqdori`, `Actions`
    ]
    console.log(productsQuery)

    return (
        <TableContainer component={Paper} >
            <Table className={classes.table} aria-label="customized table" >
                <TableHead>
                    <TableRow>
                        {headers.map((item) => (
                            <StyledTableCell key={item}>{item}</StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productsQuery.data?.map((item) => (
                        <StyledTableRow key={item.name} hover >
                            <StyledTableCell component="th" scope="row">
                                <img
                                    src={`${BASE_URL}/${item?.image}`}
                                    alt=""
                                    width={100}
                                    height={50}
                                    style={{ objectFit: 'contain' }}
                                />
                            </StyledTableCell>
                            <StyledTableCell >{item?.uz.title}</StyledTableCell>
                            <StyledTableCell >{item?.type}</StyledTableCell>
                            <StyledTableCell >{item?.price}</StyledTableCell>
                            <StyledTableCell >{item?.quantity}</StyledTableCell>
                            <StyledTableCell >
                                <IconButton><Edit /></IconButton>
                                <IconButton><Delete /></IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
