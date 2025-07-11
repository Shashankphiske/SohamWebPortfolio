import React from 'react'
import Footer from './Footer'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import ContactPage from './ContactPAge';

const Contact = () => {
  return (
    <div className='flex flex-col w-full gap-10' style={{ fontFamily : "PrimerFont" }}>
        <div className='relative flex items-center justify-center'>
            <img src="/masterbedroom.jpg" alt="" className='object-cover w-full h-[70vh]'/>
            <p className='text-white absolute text-[3vw] md:text-[2vw] mt-20'>Live in Luxury, Designed by You</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col md:flex-row w-full gap-10 md:gap-32 items-center md:items-neutral justify-center'>
                <div className='flex flex-col gap-3 w-[]'>
                    <div className='flex flex-row gap-3 items-center'>
                        <PhoneIcon className='h-6 w-6'/>
                        <p className='text-[3vw] md:text-[1.5vw]'>+91 7841010250</p>
                    </div>
                    <div className='flex flex-row gap-3 items-center'>
                        <EnvelopeIcon className='h-6 w-6'/>
                        <p className='text-[3vw] md:text-[1.5vw]'>designdeninteriors22@gmail.com</p>
                    </div>
                </div>
                <ContactPage />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact
