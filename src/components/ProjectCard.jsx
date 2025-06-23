import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ data }) => {
  return (
    <Link to={`/projects/${data[0]}`}>
      <div className='flex flex-col justify-between gap-4 w-[22vw] max-h-fit rounded-xl p-2'>
          <div className='w-[20vw] h-[30vw] overflow-hidden flex rounded-xl'>
            <img src={`https://drive.google.com/thumbnail?id=${data[2]}&sz=w1000`} alt={data[2]} className='overflow-hidden hover:scale-120 transform transition-transform duration-300 object-center object-cover rounded-xl'/>
          </div>
          <p className='text-[1.3vw]'>{data[1]}</p>
      </div>
    </Link>
  )
}

export default ProjectCard
