import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom'

const Footer = () => {

    const linkedin = <SocialIcon url="https://linkedin.com" bgColor='white' fgColor='black'/>
    const insta = <SocialIcon url="https://instagram.com" bgColor='white' fgColor='black'/>
    const behance = <SocialIcon url='https://behance.net' bgColor='white' fgColor='black'/>

  return (
    <div className='flex flex-col gap-2 bg-black w-full h-[50vh] items-center'>
        <div className='flex flex-col gap-2 w-full items-center justify-center mt-5'>
            <p className='text-white text-[2vw]'>Stay in Touch</p>
            <div className='flex flex-row gap-2'>
                <p>{linkedin}</p>
                <p>{insta}</p>
                <p>{behance}</p>
            </div>
        </div>
        <div className='h-[0.5px] bg-white w-[50vw] mt-5'></div>
        <div className='w-[50vw] flex flex-row items-center justify-between text-white'>
            <div className='flex flex-col gap-4 h-[20vh]'>
                <p className='text-[1.8vw]'>Explore</p>
                <div className='flex flex-col gap-2 text-[1.2vw]'>
                    <Link  to="/about">About Us</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className='flex flex-col gap-4 ml-24 h-[20vh]'>
                <p className='text-[1.8vw]'>Contact Us</p>
                <div className='flex flex-col gap-2 text-[1.2vw]'>
                    <p>+91 9960490150</p>
                    <p>sogambajwa@gmail.com</p>
                </div>
            </div>
            <Link to="/contact">
                <button className='py-1 px-2 rounded-full border border-white hover:bg-white hover:text-black text-[1.2vw]'>Contact Page</button>
            </Link>
        </div>
        <p className='ml-6 mt-5 text-[1vw] text-white'>©2025 Design Den Designs. All rights reserved</p>
    </div>
  )
}

export default Footer
