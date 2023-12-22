"use client";
import React from "react";
import CountUp from "react-countup";

const Experience = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 lg:mx-44 gap-10">
      {/* Project experience */}
   <div className="bg-gradient-to-r from-[#1f1f1f] border border-gray-900 hover:shadow-lg hover:shadow-gray-900  rounded-xl p-10 transition-all duration-500 ">
   <h1 className="text-center my-5 text-white text-3xl font-bold">MY PROJECT EXPERIENCE</h1>
   <div className="flex flex-wrap lg:flex-nowrap justify-between  gap-10 ">
       
        <div className="flex flex-col justify-center items-center text-white bg-gradient-to-r from-[#1f1f1f] border border-gray-500 hover:shadow-lg hover:shadow-gray-900  rounded-xl p-10 transition-all duration-500">
          <div className="text-7xl font-bold ">
            <CountUp start={0} end={3} duration={2.75} />
          </div>
          <p className="text-lg">YEARS EXPERIENCE</p>
        </div>

        <div className="flex flex-col justify-center items-center text-white bg-gradient-to-r from-[#1f1f1f] border border-gray-500 hover:shadow-lg hover:shadow-gray-900  rounded-xl p-10 transition-all duration-500">
          <div className="text-7xl font-bold ">
            <CountUp start={0} end={20} duration={2.75} />
            <span>+</span>
          </div>
          <p className="text-lg">Total Projects</p>
        </div>

        <div className="flex flex-col justify-center items-center text-white bg-gradient-to-r from-[#1f1f1f] border border-gray-500 hover:shadow-lg hover:shadow-gray-900  rounded-xl p-10 transition-all duration-500 ">
          <div className="text-7xl font-bold ">
            <CountUp start={0} end={10} duration={2.75} />
          </div>
          <p className="text-lg">Client Projects</p>
        </div>
      </div>
   </div>

      {/* professional Work */}
      <div className="bg-gradient-to-r from-[#1f1f1f] border border-gray-900 hover:shadow-lg hover:shadow-gray-900  rounded-xl p-10 transition-all duration-500 ">
      <h1 className="text-center my-5 text-white text-3xl font-bold">Professional Experience</h1>
   <div>
       
        <div className="flex flex-col justify-center items-center text-white bg-gradient-to-r from-[#1f1f1f] border border-gray-500 hover:shadow-lg hover:shadow-gray-900  rounded-xl p-10 transition-all duration-500">
          <div className="flex gap-5 text-xl">
          <h1 className="font-bold">Company Name: </h1><span>Avian BPO & IT</span>
          
          </div>
          <p className="my-5">Starting from 5-JULY, 2023</p>
          <p>Position: Technical Support Engineer</p>
        </div>


      </div>
      </div>
    </div>
  );
};

export default Experience;
