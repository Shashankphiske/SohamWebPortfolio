import React from 'react'
import Footer from './Footer'

const About = () => {
  return (
    <div className='flex flex-col gap-10 w-full items-center justify-center' style={{ fontFamily : "PrimerFont" }}>
        <div className='flex flex-col md:flex-row w-full justify-between items-center px-10 md:px-20 mt-28 md:mt-32 gap-10 md:gap-20'>
            <img src="/aboutphoto.jpg" alt="" className='w-[60vw] md:w-[25vw] h-auto rounded-xl '/>
            <div className='flex flex-col gap-3 md:gap-10'>
                <p className='text-[3vw] md:text-[2vw]'>About Us</p>
                <p className='text-[2.5vw] md:text-[1.5vw]'> I'm Soham Ambede, an interior designer known for my nature-inspired, stylish, and functional designs. My signature style involves incorporating earthy colors, curved patterns, and natural materials to craft spaces that exude warmth and tranquility while connecting people to nature.

My design philosophy revolves around a deep understanding of my clients' unique needs and lifestyles. I'm passionate about blending aesthetics seamlessly with functionality, ensuring that my designs enhance overall well-being.

If you're in search of a designer who effortlessly marries style and functionality with a nature-inspired flair, look no further
                </p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default About
