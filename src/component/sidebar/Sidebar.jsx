import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import FaceIcon from '@mui/icons-material/Face';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className='sidebar flex-1 font-nunito border-r-2 border-sky-700 min-h-screen'>
        <div className="top h-12 flex items-center justify-center">
            <span className='logo text-xl font-bold text-secondary'>DashboardAdmin</span>
        </div>
        <hr />
        <div className="center pl-4">
            <ul>
                <p className="title">MAIN</p>
                <li className='li-list'>
                    <DashboardIcon className="icon" />
                    <span className='li-label'>Dashboard</span>
                </li>

                <p className="title">LIST</p>
                <li className='li-list'>
                    <PersonIcon className="icon" />
                    <span className='li-label'>Users</span>
                </li>
                <li className='li-list'>
                    <CategoryIcon className="icon" />
                    <span className='li-label'>Products</span>
                </li>
                <li className='li-list'>
                    <BookmarkBorderIcon className="icon" />
                    <span className='li-label'>Order</span>
                </li>
                <li className='li-list'>
                    <LocalShippingIcon className="icon" />
                    <span className='li-label'>Delivery</span>
                </li>

                <p className="title">USEFULL</p>
                <li className='li-list'>
                    <NotificationsActiveIcon className="icon" />
                    <span className='li-label'>Notification</span>
                </li>

                <p className="title">SERVICES</p>
                <li className='li-list'>
                    <SystemSecurityUpdateGoodIcon className="icon" />
                    <span className='li-label'>System Health</span>
                </li>
                <li className='li-list'>
                    <PsychologyIcon className="icon" />
                    <span className='li-label'>Logs</span>
                </li>
                <li className='li-list'>
                    <SettingsIcon className="icon" />
                    <span className='li-label'>Setting</span>
                </li>

                <p className="title">USER</p>
                <li className='li-list'>
                    <FaceIcon className="icon" />
                    <span className='li-label'>Profile</span>
                </li>
                <li className='li-list'>
                    <LogoutIcon className="icon" />
                    <span className='li-label'>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">Color Options</div>
    </div>
  )
}

export default Sidebar