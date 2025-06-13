import React from 'react'
import Footer from "./Footer"
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col justify-between w-full -z-20 gap-10' style={{ fontFamily : "PrimerFont" }}>
        <div className='relative w-full'>
            <img src="/livingroom.jpg" alt="homeimage" className='w-full h-auto object-cover' />

            <p className='absolute inset-0 flex items-center justify-center text-white text-[2.5vw] bg-black/30'>
                Artful Living, Inside and Out
            </p>
        </div>

        <div className='flex w-full h-[40vh] flex-col py-12 px-40 justify-between'>
            <div className='w-[60vw]'>
                <p className='text-[1.7vw]'>We design and deliver projects that vary in context, function, and scale, encompassing architecture, masterplanning, and interior design. From concept design to turnkey, we have projects on-site from London to Mumbai, covering boutique residential to high-tech workspace.</p>
            </div>
            <div className='w-[80vw] border-white h-[1px] bg-black'></div>       
        </div>
        <div className='p-8 pl-40'>
            <p className='text-[2vw] font-semibold'>Projects</p>
            <div className='w-full h-[75vh]'>

            </div>
        </div>
        <div className='w-full bg-black h-[60vh]'>

        </div>
        <div className='w-full flex flex-col gap-10 pl-40'>
            <p className='text-[2vw] font-semibold'>About Us</p>
            <div className='flex flex-row gap-20 justify-between w-full'>
                <img src="/aboutphoto.jpg" alt="" className='w-[25vw] h-auto rounded-xl'/>
                <div className='flex flex-col gap-10 px-10'>
                    <p className='text-[1.5vw]'>Aashi Gupta is the founder and creative head at Aashi Gupta Designs that works across luxury residential and commercial interiors. Aashi is committed to transforming spaces into timeless....</p>
                    <Link to="/about" ><button className='text-[1.5vw] flex items-center gap-3 hover:gap-6 transition-all duration-200'>Learn more <ArrowRightIcon className='w-4 h-4'/></button></Link>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home
