import React from 'react'
import Footer from './Footer'

const About = () => {
  return (
    <div className='flex flex-col gap-10 w-full items-center justify-center' style={{ fontFamily : "PrimerFont" }}>
        <div className='flex flex-row w-full justify-between px-20 mt-32 gap-20'>
            <img src="/aboutphoto.jpg" alt="" className='w-[25vw] h-auto rounded-xl'/>
            <div className='flex flex-col gap-10'>
                <p className='text-[2vw]'>About Us</p>
                <p className='text-[1.5vw]'> a reputed university  in The United Kingdom.  
 
                She was  Inspired by the British colonial architecture and design.,  which  fascinated  her to further explore the design philosophy of the European  art and architecture.  Aashi’s designs pursue a studied style fusion of both contemporary and classical forms. Like any true artist, Aashi intricately handles every component of the design process from conception to execution. From furniture and lighting to floor plans and accessorising, her creations are inherently cohesive.

                Aashi is committed to transforming spaces into timeless, functional  and inspiring environments. She has earned a stellar reputation for classical timeless designs, all of which she executes with an exceptional level of craftsmanship

                </p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default About
