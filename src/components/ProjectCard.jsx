import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ data }) => {
  return (
    <Link to={`/projects/${data[0]}`}>
      <div className='flex flex-col justify-between gap-2 md:gap-4 w-[40vw] md:w-[22vw] max-h-fit rounded-lg md:rounded-xl p-2'>
          <div className='w-[40vw] h-[60vw] md:w-[20vw] md:h-[30vw] overflow-hidden flex rounded-lg md:rounded-xl'>
            <img src={`https://drive.google.com/thumbnail?id=${data[2]}&sz=w1000`} alt={data[2]} className='overflow-hidden hover:scale-120 transform transition-transform duration-300 object-center object-cover rounded-lg md:rounded-xl'/>
          </div>
          <p className='text-[2.5vw] md:text-[1.3vw]'>{data[1]}</p>
      </div>
    </Link>
  )
}

export default ProjectCard
