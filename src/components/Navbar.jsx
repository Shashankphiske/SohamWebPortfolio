import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{ fontFamily : "PrimerFont" }} className='w-full bg-white h-24 flex flex-row items-center justify-between px-16 z-50 fixed'>
        <img src="/logo.png" alt="" className='w-[130px]'/>
        <div className='flex flex-row justify-between w-1/3 text-[1.4vw]'>
            <Link to="/" className=''>Home</Link>
            <Link to="/about" className=''>About Us</Link>
            <Link to="/portfolio" className=''>Portfolio</Link>
            <Link to="/contact" className=''>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar
