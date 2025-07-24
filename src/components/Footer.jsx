import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom'

const Footer = () => {

    const linkedin = <SocialIcon  url="https://www.linkedin.com/in/soham-ambede-4b9610241/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" bgColor='white' fgColor='black'/>
    const insta = <SocialIcon  url="https://www.instagram.com/designdeninteriors?igsh=eHZiZG45ZTd2azFi" bgColor='white' fgColor='black'/>
    const behance = <SocialIcon url='https://www.behance.net/designdeninteriors' bgColor='white' fgColor='black'/>
    

  return (
    <div className='flex flex-col gap-2 bg-neutral-900 w-full md:h-[50vh] items-center justify-center'>
        <div className='flex flex-col gap-2 w-full items-center justify-center mt-5 md:mt-5'>
            <p className='text-white text-[4vw] md:text-[2vw]'>Stay in Touch</p>
            <div className='flex flex-row justify-between w-[50vw] md:w-[20vw] md:mr-7'>
                <p className='md:w-[2vw]'>{linkedin}</p>
                <p className='md:w-[2vw]'>{insta}</p>
                <p className='md:w-[2vw]'>{behance}</p>
            </div>
        </div>
        <div className='h-[0.5px] bg-white w-[80vw] md:w-[60vw] lg:w-[50vw] mt-5'></div>
        <div className='w-[80vw] md:w-[60vw] lg:w-[50vw] flex flex-row items-center justify-between gap-2 md:gap-0 text-white'>
            <div className='flex flex-col gap-4 h-[20vh]'>
                <p className='text-[3vw] md:text-[1.8vw]'>Explore</p>
                <div className='flex flex-col gap-2 text-[2vw] md:text-[1.2vw]'>
                    <Link  to="/about">About Us</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className='flex flex-col gap-4 ml-18 md:ml-24 h-[20vh]'>
                <p className='text-[3vw] md:text-[1.8vw]'>Contact Us</p>
                <div className='flex flex-col gap-2 text-[2vw] md:text-[1.2vw]'>
                    <p>+91 7841010250</p>
                    <p>designdeninteriors22@gmail.com</p>
                </div>
            </div>
            <Link to="/contact">
                <button className='py-1 px-2 rounded-full border border-white hover:bg-white hover:text-black mb-10 md:mb-0 text-[2vw] md:text-[1.2vw]'>Contact Page</button>
            </Link>
        </div>
        <p className='ml-6 md:mt-5 text-[1.5vw] md:text-[1vw] text-white'>©2025 Design Den Designs. All rights reserved</p>
    </div>
  )
}

export default Footer
