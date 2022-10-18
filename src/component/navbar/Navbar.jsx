import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Navbar = () => {
  return (
    <div className='navbar h-12 border-b-2 border-slate-400 flex items-center text-sm text-slate-800'>
      <div className="wrapper p-5 flex items-center justify-between w-full">
        <div className="search flex items-center border-2 border-slate-400 p-1 px-2 text-sm">
          <input type="text" placeholder='Search ...' className='input outline-none bg-transparent' />
          <SearchIcon />
        </div>
        <div className="items flex items-center">
          <div className="item">
            <DarkModeIcon className="nav-icon" />
          </div>
          <div className="item">
            <FullscreenExitIcon className="nav-icon" />
          </div>
          <div className="item">
            <NotificationsActiveIcon className="nav-icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MarkChatUnreadIcon className="nav-icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FormatListBulletedIcon className="nav-icon" />
          </div>
          <div className="item">
            <img className='avatar w-8 h-8 rounded-full' src="https://sp-images.summitpost.org/947006.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=876696700800816d01e0d1eb31ce7ab0" alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar