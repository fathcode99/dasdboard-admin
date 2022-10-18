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
        <div className="search flex items-center border-2 border-slate-400 p-1 px-2 text-xs">
          <input type="text" placeholder='Search ...' className='input outline-none bg-transparent' />
          <SearchIcon />
        </div>
        <div className="items flex">
          <div className="item">
            <DarkModeIcon />
          </div>
          <div className="item">
            <FullscreenExitIcon />
          </div>
          <div className="item">
            <NotificationsActiveIcon />
          </div>
          <div className="item">
            <MarkChatUnreadIcon />
          </div>
          <div className="item">
            <FormatListBulletedIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar