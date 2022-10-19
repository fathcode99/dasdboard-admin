import React from 'react'
import DataTable from '../component/datatable/DataTable'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'

const List = () => {
  return (
    <div className='list flex'>
      <Sidebar />
      <div className="listContainer flex-[6_6_0%]">
        <Navbar />
        <DataTable />
      </div>
    </div>
  )
}

export default List