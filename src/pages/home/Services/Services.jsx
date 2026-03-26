import React from "react";
import services from "../../../../public/utilits/services.json";
import servicePng from "../../../assets/service.png";
const Services = () => {
  return (
    <div className="border py-20 bg-secondary rounded-xl">
      <div className="text-center text-white max-w-11/12 md:max-w-6/12 mx-auto space-y-4 mb-8">
        <h1 className="px-4 sm:px-6 md:px-8 lg:px-16 text
        ">
        Our Services
      </h1>
      <p>
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      </div>
      <div className="grid grid-cols-1 gap-1  px-4 sm:grid-cols-2 sm:px-6 sm:gap-2 md:grid-cols-3 md:px-8 md:gap-3 lg:grid-cols-4 lg:px-16 gap-4">
        {services.map((service) => (
          <>
            <div className="card card-dash bg-[#EAECED] hover:bg-primary hover:transition-all hover:delay-100 hover:ease-in">
              <div className="card-body">
                <img className="max-w-10" src={servicePng} alt="" />
                <h2 className="card-title">{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Services;
