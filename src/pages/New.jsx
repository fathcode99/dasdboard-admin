import React, { useState, useRef } from 'react'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'

const New = ({title}) => {
  const [file, setFile] = useState("")
  
  const refUsername = useRef()
  
  const refNickName = useRef()
  const refFullName = useRef()
  const refEmail = useRef()
  const refCatatan = useRef()
  const refAddress = useRef()
  const refTelp = useRef()
  const refImg = useRef()

  const handleSend = () => {
    const userName = refUsername.current.value
    const nickName = refNickName.current.value
    const fullName = refFullName.current.value
    const email = refEmail.current.value
    const catatan = refCatatan.current.value
    const address = refAddress.current.value
    const telp = refTelp.current.value
    const urlImg = refImg.current.value
    console.log(userName, nickName, fullName, email, catatan, address, telp, urlImg)
    
  }
  
  
  return (
    <div className='new flex w-full'>
      <Sidebar />
      <div className="newContainer flex-[6_6_0%]">
        <Navbar />
        <div className="top px-4 py-4">
          <h1 className='title-new px-6 text-2xl font-bold text-purple-700'>{title}</h1>
        </div>
        <div className="bottom px-4 m-5 flex">
          <div className="left flex-1 w-full">
            <div className="upImg w-full h-full flex justify-center items-center border">
              <img src={file ? URL.createObjectURL(file) : "https://th.bing.com/th/id/OIP.MkL5wbXZbiY6vpYb_tZSfgHaE8?pid=ImgDet&rs=1"} alt="avatar" />
            </div>
          </div>

          <div className="right flex-[2_2_0%] ml-5">
            <form className='form'>
              <div className="formInput">
                <label htmlFor='fileImg' className='flex items-center gap-3'>
                  <p>Image :</p>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                </label>
                <input ref={refImg} type="file" id='fileImg' onChange={(e) => setFile(e.target.files[0])} className='hidden' />
              </div>

              <div className='formInput'>
                <label>Username</label>
                <input className='input' type="text" placeholder='Username' ref={refUsername}  autocomplete="off"/>
              </div>
              <div className='formInput'>
                <label>Nick Name</label>
                <input className='input' type="text" placeholder='Nick Name' ref={refNickName}  autocomplete="off"/>
              </div>
              <div className='formInput'>
                <label>Full Name</label>
                <input className='input' type="text" placeholder='Full Name' ref={refFullName}  autocomplete="off" />
              </div>
              <div className='formInput'>
                <label>Address</label>
                <input className='input' type="text" placeholder='Address' ref={refAddress}   autocomplete="off"/>
              </div>
              <div className='formInput'>
                <label>Telp</label>
                <input className='input' type="text" placeholder='+1 234 56 789' ref={refTelp}  autocomplete="off" />
              </div>
              <div className='formInput'>
                <label>Email</label>
                <input className='input' type="email" placeholder='Username' ref={refEmail}  autocomplete="off"/>
              </div>
              <div className='formInput'>
                <label>Catatan</label>
                <input className='input' type="text" placeholder='Catatan' ref={refCatatan}  autocomplete="off" />
              </div>
              

              <div className='formInput flex justify-start items-end'>
                <div className='w-16 h-8 bg-sky-500 rounded text-blue-900 font-medium text-base cursor-pointer'
                onClick={handleSend}
                >Send</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New