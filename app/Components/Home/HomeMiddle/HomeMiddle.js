"use client";

import cvIcon from "../../../../public/images/cvicon.png";
import Image from "next/image";
import HeaderMainFooter from "../../HeaderMainFooter";
import { FaCode, FaCss3, FaFacebook, FaGithub, FaHtml5, FaJava, FaLaravel, FaLinkedin, FaReact } from "react-icons/fa";
import Link from "next/link";
import { SiFiverr, SiLeetcode, SiMysql } from "react-icons/si";
import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IoLogoJavascript } from "react-icons/io5";


const HomeMiddle = () => {
  return (
    <div className="mt-10 lg:mx-44 md:mx-10">
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* mycv */}
        <div className="bg-gradient-to-r from-[#1f1f1f] border border-gray-900 hover:shadow-lg hover:shadow-gray-900  rounded-xl p-10 transition-all duration-500">
          <div className="flex flex-wrap justify-center items-center mb-5">
            <Image src={cvIcon} width={150} height={500} alt="rishadislam" />
          </div>

          <HeaderMainFooter name="DOWNLOAD MY CV" header="CV" link="/about" />
        </div>

        {/* skills */}

        <div className="bg-gradient-to-r from-[#1f1f1f] border border-gray-900 hover:shadow-lg hover:shadow-gray-900  rounded-xl p-10 transition-all duration-500 col-span-2">
          <div className="flex flex-wrap lg:flex-nowrap justify-center items-center mb-20 mt-14 gap-5 text-3xl text-white">
            <div className="flex flex-col justify-center items-center gap-5">
              <CircularProgressbar
                value={"90"}
                maxValue={100}
                text={`90%`}
                width="1px"
                className="w-5 "
              
              />
              <FaHtml5 />
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <CircularProgressbar
                value={"93"}
                maxValue={100}
                text={`93%`}
                width="1px"
                className="w-5"
              />
              <FaCss3/>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <CircularProgressbar
                value={"80"}
                maxValue={100}
                text={`80%`}
                width="1px"
                className="w-5"
              />
              <IoLogoJavascript />

            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <CircularProgressbar
                value={"85"}
                maxValue={100}
                text={`85%`}
                width="1px"
                className="w-5"
              />
             <FaReact/>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <CircularProgressbar
                value={"80"}
                maxValue={100}
                text={`82%`}
                width="1px"
                className="w-5"
              />
              <FaLaravel/>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <CircularProgressbar
                value={"87"}
                maxValue={100}
                text={`87%`}
                width="1px"
                className="w-5"
              />
              <SiMysql/>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <CircularProgressbar
                value={"83"}
                maxValue={100}
                text={`83%`}
                width="1px"
                className="w-5"
              />
             <FaCode/>
            </div>
          </div>

          <HeaderMainFooter name="SEE MY SKILL DESCRIPTION" header="My Skills" link="/skills" />
        </div>

        {/* profiles */}
        <div className="bg-gradient-to-r from-[#1f1f1f] border border-gray-900 hover:shadow-lg hover:shadow-gray-900  rounded-xl p-10 transition-all duration-500">
          <div className="flex justify-center items-center mb-20 mt-14 gap-5">
          <Link
              href="https://www.fiverr.com/freelancerrisha"
              className="text-3xl text-white hover:text-white hover:bg-green-700 transition-all duration-300 border p-2 rounded-full"
              target="_blank"
            >
              <SiFiverr />
            </Link>
            <Link
              href="https://www.facebook.com/rishadislam01/"
              className="text-3xl text-white hover:text-white hover:bg-blue-400 border rounded-full p-2 transition-all duration-300"
              target="_blank"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rishad-islam/"
              className="text-3xl text-white hover:text-white hover:bg-blue-700 border rounded-full p-2 transition-all duration-300"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/rishadislam1"
              className="text-3xl text-white hover:text-black hover:bg-white border rounded-full p-2 transition-all duration-300"
              target="_blank"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://leetcode.com/rishadislam6790/"
              className="text-3xl text-white hover:text-yellow-600 hover:bg-white border rounded-full p-2 transition-all duration-300"
              target="_blank"
            >
              <SiLeetcode />
            </Link>
          </div>

          <HeaderMainFooter name="STAY WITH ME" header="profiles" link="/" />
        </div>
      </div>
    </div>
  );
};

export default HomeMiddle;
