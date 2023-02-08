import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({user,setUser}) => {
  return (
    <>
    <Navbar user={user} setUser={setUser}/>
    <div className='h-2 pt-20'></div>
    <Outlet/>
    <div className='flex justify-center bg-[#1D2939] text-white'>
      <Footer/>
    </div>
        </>
    )
}

export default Layout