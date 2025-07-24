import React from 'react'
import Footer from './Footer'
import data from '../projectData';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  return (
    <div style={{ fontFamily : "PrimerFont" }} className='w-full flex flex-col justify-between h-screen'>
        <div className='px-5 md:px-5 md:py-10 mt-20 flex flex-col gap-2 md:gap-10'>
            <p className='text-[4vw] md:text-[2vw]'>My Portfolio</p>
            <div className='w-full flex flex-row flex-wrap md:gap-3 justify-center gap-4 -ml-1 md:-ml-0'>
                {
                    data.map((data, index) => {
                        return <ProjectCard data={data} key={index} />
                    })
                }
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Portfolio
