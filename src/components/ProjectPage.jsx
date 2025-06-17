import React from 'react'
import data from '../projectData'
import { useParams } from 'react-router-dom';

const ProjectPage = () => {

    const { id } = useParams();

    const filteredData = data.filter((element) => {
        return element[0] == id;
    });

    console.log(filteredData[0])

    const mainData = filteredData[0];

    console.log(mainData[1])

  return (
    <div className='flex flex-col w-full p-6' style={{ fontFamily : "PrimerFont" }}>
        <div className='w-full flex flex-row justify-between gap-10 mt-32 px-20'>
            <div className='flex w-[60vw] h-[80vh] overflow-hidden'>
                <img src={`https://drive.google.com/thumbnail?id=${mainData[2]}&sz=w4000`} alt="" className='object-cover object-center overflow-hidden'/>
            </div>
            <div className='flex flex-col gap-10'>
                <p className='text-[1.6vw]'>{mainData[1]}</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectPage
