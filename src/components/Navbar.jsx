import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full bg-white h-24 flex flex-row items-center justify-between px-16 z-50 fixed'>
        <img src="/logo.png" alt="" className='w-[130px]'/>
        <div className='flex flex-row justify-between w-1/3 text-[1.4vw]'>
            <p className='hover:font-bold'>Home</p>
            <p className='hover:font-bold'>About Us</p>
            <p className='hover:font-bold'>Portfolio</p>
            <p className='hover:font-bold'>Contact</p>
        </div>
    </div>
  )
}

export default Navbar
