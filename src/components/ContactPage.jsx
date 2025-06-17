import React, { useState } from 'react'

const ContactPage = () => {


    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [query, setQuery] = useState(null);

  return (
    <div className='flex flex-col w-[70vw] md:w-[30vw] py-3 px-3 items-center justify-between gap-4 border rounded-xl'>
        <div className='flex flex-col w-full'>
            <p className='md:text-[1.6vw] lg:text-[1.3vw]'>Name</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='John Doe' className='border border-gray-300 rounded-lg py-1 px-2 md:text-[1.6vw]'/>
        </div>  
        <div className='flex flex-col w-full'>
            <p className='md:text-[1.6vw] lg:text-[1.3vw]'>Phone Number</p>
            <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='+91 XXXXXXXXXX' className='border border-gray-300 rounded-lg py-1 px-2 md:text-[1.6vw]'/>
        </div>
        <div className='flex flex-col w-full'>
            <p className='md:text-[1.6vw] lg:text-[1.3vw]'>Email</p>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='xyz@gmail.com' className='border border-gray-300 rounded-lg py-1 px-2 md:text-[1.6vw]'/>
        </div>
        <div className='flex flex-col w-full'>
            <p className='md:text-[1.6vw] lg:text-[1.3vw]'>Message</p>
            <textarea type="text" value={query} onChange={(e) => setQuery(e.target.value)} className='border border-gray-300 rounded-lg py-1 px-2 md:text-[1.6vw]'/>
        </div>
    </div>
  )
}

export default ContactPage
