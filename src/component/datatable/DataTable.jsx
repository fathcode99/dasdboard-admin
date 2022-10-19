import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from './column';
import { userRows } from './row';

const DataTable = () => {
    const actionColumn = [{
        field:'action', headerName:"Action", width:150,
        renderCell:()=> {
            return (
                <div className="cellAction flex items-center">
                    <div className='viewButton py-1 px-2 bg-sky-300 text-sky-600 mr-2 rounded font-medium'>View</div>
                    <div className='deleteButton py-1 px-2 bg-red-300 text-red-600 rounded font-medium'>Delete</div>
                </div>
            )
        }
    }]
    return (
        <>
            <div className='title-table text-xl font-bold pl-7 py-4'> Data Orang Tua</div>
            <div className='datatable w-full h-3/4 px-7'>
                <DataGrid
                    rows={userRows}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                    checkboxSelection
                />
            </div>
        </>
    )
}

export default DataTable