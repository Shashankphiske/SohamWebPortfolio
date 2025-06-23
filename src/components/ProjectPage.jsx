import React from 'react'
import data from '../projectData'
import { Link, useParams } from 'react-router-dom';

const ProjectPage = () => {

    const { id } = useParams();

    const filteredData = data.filter((element) => {
        return element[0] == id;
    });

    console.log(filteredData[0])

    const mainData = filteredData[0];

    console.log(mainData[1])

  return (
    <div className='flex flex-col w-full p-6 items-center justify-center gap-5' style={{ fontFamily : "PrimerFont" }}>
        <div className='w-[81vw] flex flex-row justify-between mt-32'>
            <div className='flex w-[60vw] h-[80vh] overflow-hidden rounded-xl'>
                <img src={`https://drive.google.com/thumbnail?id=${mainData[2]}&sz=w4000`} alt="" className='object-cover object-center overflow-hidden rounded-xl'/>
            </div>
            <div className='flex flex-col'>
                <p className='text-[1.6vw]'>{mainData[1]}</p>
            </div>
        </div>
        
            <div className='w-[81vw] gap-3 flex flex-row justify-between flex-wrap'>
            {
                mainData[3].map((src, i) => (
                    <a 
                    href={`https://lh3.googleusercontent.com/d/${src}=w4000`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    <div key={i} className="w-[40vw] h-auto aspect-video overflow-hidden rounded-lg shadow-md">
                        <img 
                        src={`https://drive.google.com/thumbnail?id=${src}&sz=w4000`} 
                        alt={`Image ${i}`} 
                        className="w-full h-full object-cover object-center"
                        />
                    </div>
                    </a>

                ))
            }
            </div>

    </div>
  )
}

export default ProjectPage
