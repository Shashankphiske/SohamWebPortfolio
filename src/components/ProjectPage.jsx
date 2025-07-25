import React, { useState } from 'react';
import data from '../projectData';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';

const ProjectPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredData = data.filter((element) => element[0] == id);
  const mainData = filteredData[0];

  return (
    <div className="flex flex-col w-full items-center justify-center gap-5 relative" style={{ fontFamily: "PrimerFont" }}>
      <div className="w-[87vw] md:w-[81vw] flex flex-row justify-between mt-32">
        <div className="flex w-[50vw] h-[70vw] md:w-[60vw] md:h-[80vh] overflow-hidden rounded-xl">
          <img
            src={`https://drive.google.com/thumbnail?id=${mainData[2]}&sz=w4000`}
            alt=""
            className="object-cover object-center overflow-hidden rounded-xl"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-[4vw] md:text-[1.8vw]">{mainData[1]}</p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="w-full px-2 md:px-0 md:w-[81vw] gap-2 md:gap-3 flex flex-row justify-between flex-wrap">
        {mainData[3].map((src, i) => (
          <div
            key={i}
            onClick={() => setSelectedImage(src)}
            className="cursor-pointer w-full md:w-[40vw] h-auto aspect-video overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={`https://drive.google.com/thumbnail?id=${src}&sz=w4000`}
              alt={`Image ${i}`}
              className="w-full h-full object-cover object-center"
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </div>

      {/* Modal View */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/50">
          <div className="relative w-[90vw] md:w-[60vw] aspect-video bg-black rounded-xl overflow-hidden shadow-xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-[1.5vw] font-bold rounded-full w-6 h-6 flex items-center justify-center cursor-pointer"
            >
              &times;
            </button>
            <div
              onDragStart={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
              className="w-full h-full select-none pointer-events-none"
            >
              <img
                src={`https://drive.google.com/thumbnail?id=${selectedImage}&sz=w4000`}
                alt="Full view"
                className="w-full h-full object-contain select-none pointer-events-none"
                draggable="false"
                onDragStart={(e) => e.preventDefault()}
                onMouseDown={(e) => e.preventDefault()}
              />
            </div>

          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProjectPage;
