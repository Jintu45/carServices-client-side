import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className=" max-w-screen-xl m-auto">
      <div className=" py-24">
        <div className=" text-center mb-8">
          <p className="text-xl font-bold text-orange-600">Service</p>
          <h1 className="text-4xl font-semibold">Our Service Area</h1>
          <p className="text-lg mt-5 w-1/2 m-auto">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 m-auto gap-6">
          {services.map((service) => (
            <ServicesCard 
                key={service._id} 
                service={service}>
            </ServicesCard>
          ))}
        </div>
        <div className="text-center">
          <button className="mt-12 bg-orange-600 text-white font-semibold rounded-lg text-lg py-2 px-6">
            More Services{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
