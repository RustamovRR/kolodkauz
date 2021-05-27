import React from 'react'
import CreateProduct from './pages/createProduct'
// import { useProductsStyles } from './useProductsStyles'

export default function Products() {
    // const classes = useProductsStyles()
    // const { data, isLoading, isSuccess } = useProductsQuery({ page: 0 })
    // const [data, setData] = React.useState(React.useMemo(() => [{ firstName: 'sdf', lastName: 'alsdjf' }]))
    // const [skipPageReset, setSkipPageReset] = React.useState(false)

    // const columns = React.useMemo(
    //     () => [
    //         {
    //             Header: 'First Name',
    //             accessor: 'firstName',
    //         },
    //         {
    //             Header: 'Last Name',
    //             accessor: 'lastName',
    //         },
    //         {
    //             Header: 'Age',
    //             accessor: 'age',
    //         },
    //         {
    //             Header: 'Visits',
    //             accessor: 'visits',
    //         },
    //         {
    //             Header: 'Status',
    //             accessor: 'status',
    //         },
    //         {
    //             Header: 'Profile Progress',
    //             accessor: 'progress',
    //         },
    //     ],
    //     []
    // )


    return (
        <div>
            {/* <CustomTable
                columns={columns}
                data={data}
                setData={setData}
                updateMyData={updateMyData}
                skipPageReset={skipPageReset}
            /> */}
            <CreateProduct />
        </div>
    )
}
