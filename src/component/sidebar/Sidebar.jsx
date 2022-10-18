import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';

const Sidebar = () => {
  return (
    <div className='sidebar flex-1 font-nunito border-r-2 border-sky-700 min-h-screen'>
        <div className="top h-12 flex items-center justify-center">
            <span className='logo text-xl font-bold text-secondary'>DashboardAdmin</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <li>
                    <DashboardIcon />
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>Users</span>
                </li>
                <li>
                    <span>Products</span>
                </li>
                <li>
                    <span>Order</span>
                </li>
                <li>
                    <span>Delivery</span>
                </li>
                <li>
                    <span>Notification</span>
                </li>
                <li>
                    <span>System Health</span>
                </li>
                <li>
                    <span>Logs</span>
                </li>
                <li>
                    <span>Setting</span>
                </li>
                <li>
                    <span>Profile</span>
                </li>
                <li>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">Color Options</div>
    </div>
  )
}

export default Sidebar