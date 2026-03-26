import React from "react";
import works from "../../../../public/utilits/works.json";
import vector from "../../../assets/Vector.png";
const Works = () => {
  return (
    <div>
    <h1 className="px-4 sm:px-6 md:px-8 lg:px-16 text mb-8">How It Works</h1>
    <div className="grid grid-cols-1 gap-1  px-4 sm:grid-cols-2 sm:px-6 sm:gap-2 md:grid-cols-3 md:px-8 md:gap-3 lg:grid-cols-4 lg:px-16 gap-4">
      {works.map((work) => (
        <>
        
          <div className="card card-dash bg-[#EAECED] ">
            <div className="card-body">
              <img className="max-w-10" src={vector} alt="" />
              <h2 className="card-title">{work.title}</h2>
              <p>{work.description}</p>
            </div>
          </div>
        </>
      ))}
    </div>
    </div>
  );
};

export default Works;
