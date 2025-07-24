import React from 'react'
import Footer from "./Footer"
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import data from '../projectData';
import ProjectCard from './ProjectCard';
import Carousel from './Carousal';

const Home = () => {
  return (
    <>
    <div className='flex flex-col w-full -z-20 gap-10' style={{ fontFamily : "PrimerFont" }}>
        <div className='relative w-full'>
            <img src="/livingroom.jpg" alt="homeimage" className='w-full h-auto object-cover' />

            <p className='absolute inset-0 flex items-center justify-center text-white text-[3vw] md:text-[2.5vw] bg-black/30'>
                Artful Living, Inside and Out
            </p>
        </div>

        <div className='flex w-full h-[15vh] md:h-[40vh] flex-col px-10 md:px-20 md:py-10 lg:py-12 lg:px-40 justify-between'>
            <div className='w-[60vw]'>
                <p className='text-[2.1vw] md:text-[1.7vw]'>We design and deliver projects that vary in context, function, and scale, encompassing architecture, masterplanning, and interior design. From concept design to turnkey, we have projects on-site from London to Mumbai, covering boutique residential to high-tech workspace.</p>
            </div>
            <div className='border-white h-[0.5px] md:h-[1px] bg-black'></div>       
        </div>
        <div className='w-full flex flex-row items-start'>
            <Carousel />
        </div>
        <div className='px-5 lg:px-5 bg-amber-50 p-2'>
            <p className='ml-4 md:ml-14 lg:ml-20 text-[3vw] md:text-[2vw]'>Recent Projects</p>
            <div className='w-full mt-3 md:mt-10 flex flex-row flex-wrap items-center justify-center gap-2 md:gap-2 lg:gap-5 md:px-2'>
                {
                    data.map((data, index) => {
                        console.log(data[1])
                        return <ProjectCard data={data} key={index} />
                    })
                }
            </div>
        </div>
        <div className='w-full flex flex-col gap-10 px-10 md:px-20 lg:px-30'>
            <p className='text-[3vw] md:text-[2vw]'>About Us</p>
            <div className='flex flex-row gap-10 md:gap-20 justify-between w-full'>
                <img src="/aboutphoto.jpg" alt="" className='w-[33vw] md:w-[25vw] h-auto rounded-xl'/>
                <div className='flex flex-col gap-10 '>
                    <p className='text-[2vw] md:text-[1.5vw]'>Aashi Gupta is the founder and creative head at Aashi Gupta Designs that works across luxury residential and commercial interiors. Aashi is committed to transforming spaces into timeless....</p>
                    <Link to="/about" ><button className='text-[2vw] md:text-[1.5vw] flex items-center gap-3 hover:gap-6 transition-all duration-200'>Learn more <ArrowRightIcon className='w-4 h-4'/></button></Link>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    </>
  )
}

export default Home
