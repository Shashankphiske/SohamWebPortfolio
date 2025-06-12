import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-between w-full -z-20 gap-10' style={{ fontFamily : "PrimerFont" }}>
        <img src="/livingroom.jpg" alt="homeimage" className=''/>
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
        <div className='w-full flex flex-col pl-40 h-[90vh]'>
            <p className='text-[2vw] font-semibold'>About Me</p>
        </div>
    </div>
  )
}

export default Home
