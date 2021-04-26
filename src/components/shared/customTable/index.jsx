import React, { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { useProductsQuery } from '../../../hooks/queries';
import axios from 'axios';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import EnhancedTable from './components/EnhancedTable';


const CustomDataGrid = () => {
  const { data, isLoading, isSuccess } = useProductsQuery({ page: 0 })
  const [item, setItem] = useState([])

  const columns = [
    { field: 'number', headerName: 'Tartib', width: 120 },
    { field: 'image', headerName: 'Rasm', width: 120 },
    { field: 'title', headerName: 'Nom', width: 120 },
    { field: 'description', headerName: 'Izoh', width: 120 },
    { field: 'price', headerName: 'Narx', width: 120 },
    { field: 'discount', headerName: 'Chegirma', width: 120 },
    { field: 'buy_count', headerName: 'Marta sotilgan', width: 120 },
    { field: 'quantity', headerName: 'Qolgan mahsulot', width: 120 },
    { field: 'type', headerName: 'Turi', width: 120 },
    { field: 'createdAt', headerName: 'Yaratilgan sana', width: 120 },
    { field: 'update', headerName: `O'zgartirish`, width: 120 },
    { field: 'delete', headerName: `O'chirish`, width: 120 }
  ];

  // {
  //   id: index,
  //   number: index,
  //   iamge: item.image,
  //   title: item.title,
  //   description: item.description,
  //   price: item.price,
  //   discount: item.discount,
  //   buy_count: item.buy_count,
  //   quantity: item.quantity,
  //   type: item.type,
  //   field: item.quantity
  // }


  return (
    <div
      style={{
        width: '100%',
        height: 500
      }}
    >
      {/* <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {
                columns.map((item) => (
                  <TableCell>{item.headerName}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data?.data.data.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.type}
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer> */}
      <EnhancedTable />
    </div>
  )
}

export default CustomDataGrid