import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'

const New = () => {
  return (
    <div className='new flex w-full'>
      <Sidebar />
      <div className="newContainer flex-[6_6_0%]">
        <Navbar />
        <div className="top px-4 py-4">
          <h1 className='title-new px-6 text-2xl font-bold text-purple-700'>Add New User</h1>
        </div>
        <div className="bottom px-4 m-5 flex">
          <div className="left flex-1 w-full">
            <div className="upImg w-full h-full flex justify-center items-center border">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-28 h-28 text-slate-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
          </div>

          <div className="right flex-[2_2_0%] ml-5">
            <form action="submit" className='form'>
              <div className="formInput">
                <label htmlFor='fileImg' className='flex items-center gap-3'>
                  <p>Image :</p>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                </label>
                <input type="file" id='fileImg' className='hidden' />
              </div>
              <div className="formInput">
                <label> Username </label>
                <input className='input' type="text" placeholder='john_doe' />
              </div>
              <div className="formInput">
                <label> Name and Surename </label>
                <input className='input' type="text" placeholder='John Doe' />
              </div>
              <div className="formInput">
                <label> Email </label>
                <input className='input' type="email" placeholder='johndoe@xmail.com' />
              </div>
              <div className="formInput">
                <label> No Telp / WA </label>
                <input className='input' type="text" placeholder='+1 2345 678' />
              </div>
              <div className="formInput">
                <label> Password </label>
                <input className='input' type="password" />
              </div>
              <div className="formInput">
                <label> Alamat </label>
                <input className='input' type="text" placeholder='Desa/Kel-RT/RW-No-Kec-Kab/Kota' />
              </div>
              <div className="formInput">
                <label> Alamat </label>
                <input className='input' type="text" placeholder='Desa/Kel-RT/RW-No-Kec-Kab/Kota' />
              </div>
              <div className='formInput flex justify-start items-end'>
                <button className='w-16 h-8 bg-sky-500 rounded text-blue-900 font-medium text-base'>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New