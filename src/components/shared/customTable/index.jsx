import React, { useMemo } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import EnhancedTable from './components/EnhancedTable'
import makeData from './makeData'
import { Cell } from 'react-table'
import { useProductsQuery } from '../../../hooks/queries'

const CustomTable = () => {
  const query = useProductsQuery({ page: 0 })

  const rows = useMemo(() => {
    const columnTypes = {
      'getProducts': [
        {
          Header: 'Tartib',
          accessor: 'number',
          Cell
        }
      ]
    }
    return columnTypes
  })

  console.log(query)

  const columns = React.useMemo(
    () => [
      {
        Header: 'Tartib',
        accessor: 'number',
      },
      {
        Header: 'Rasm',
        accessor: 'image',
      },
      {
        Header: 'Nom',
        accessor: 'title',
      },
      {
        Header: 'Narx',
        accessor: 'price',
      },
      {
        Header: 'Chegirma',
        accessor: 'discount',
      },
      {
        Header: 'Marta sotilgan',
        accessor: 'buy_count',
      },
      {
        Header: 'Qolgan mahsulot',
        accessor: 'quantity',
      },
      {
        Header: 'Turi',
        accessor: 'type',
      },
      {
        Header: 'Yaratilgan sana',
        accessor: 'createdAt',
      },
      {
        Header: `O'zgartirish`,
        accessor: 'update',
      },
      {
        Header: `O'chirish`,
        accessor: 'delete',
      },
    ],
    []
  )

  // (data) => [
  //   {
  //     Header: 'Tartib',
  //     accessor: 'number',
  //   },
  //   {
  //     Header: 'Rasm',
  //     accessor: 'image',
  //   },
  //   {
  //     Header: 'Nom',
  //     accessor: 'title',
  //   },
  //   {
  //     Header: 'Narx',
  //     accessor: 'price',
  //   },
  //   {
  //     Header: 'Chegirma',
  //     accessor: 'discount',
  //   },
  //   {
  //     Header: 'Marta sotilgan',
  //     accessor: 'buy_count',
  //   },
  //   {
  //     Header: 'Qolgan mahsulot',
  //     accessor: 'quantity',
  //   },
  //   {
  //     Header: 'Turi',
  //     accessor: 'type',
  //   },
  //   {
  //     Header: 'Yaratilgan sana',
  //     accessor: 'createdAt',
  //   },
  //   {
  //     Header: `O'zgartirish`,
  //     accessor: 'update',
  //   },
  //   {
  //     Header: `O'chirish`,
  //     accessor: 'delete',
  //   },
  // ],

  const [make, setMake] = React.useState(React.useMemo(() => makeData(20), []))
  const [skipPageReset, setSkipPageReset] = React.useState(false)

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true)
    setMake(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }

  return (
    <div>
      <CssBaseline />
      <EnhancedTable
        columns={columns}
        data={make}
        setData={setMake}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div>
  )
}

export default CustomTable
