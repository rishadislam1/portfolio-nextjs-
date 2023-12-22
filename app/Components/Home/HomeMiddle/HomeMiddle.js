import React from "react";
import cvIcon from "../../../../public/images/cvicon.png";
import Image from "next/image";
import HeaderMainFooter from "../../HeaderMainFooter";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { SiLeetcode } from "react-icons/si";


const HomeMiddle = () => {
  return (
    <div className="mt-10 lg:mx-44 md:mx-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* mycv */}
        <div className="bg-gradient-to-r from-[#1f1f1f] border border-gray-900 hover:shadow-lg hover:shadow-gray-900  rounded-xl p-10 transition-all duration-500">
          <div className="flex justify-center items-center mb-5">
            <Image src={cvIcon} width={150} height={500} alt="rishadislam" />
          </div>

          <HeaderMainFooter name="DOWNLOAD MY CV" header="CV" link="/about" />
        </div>

        {/* skills */}

        <div className="bg-gradient-to-r from-[#1f1f1f] border border-gray-900 hover:shadow-lg hover:shadow-gray-900  rounded-xl p-10 transition-all duration-500 col-span-2">
          <div className="flex justify-center items-center mb-5">
            <Image src={cvIcon} width={150} height={500} alt="rishadislam" />
          </div>

          <HeaderMainFooter name="DOWNLOAD MY CV" header="CV" link="/about" />
        </div>

        {/* profiles */}
        <div className="bg-gradient-to-r from-[#1f1f1f] border border-gray-900 hover:shadow-lg hover:shadow-gray-900  rounded-xl p-10 transition-all duration-500">
          <div className="flex justify-center items-center mb-20 mt-14 gap-5">
            <Link href="https://www.facebook.com/rishadislam01/" className="text-3xl text-white hover:text-blue-500 transition-all duration-300" target="_blank">
              <FaFacebook />
            </Link>
            <Link href="https://www.linkedin.com/in/rishad-islam/" className="text-3xl text-white hover:text-blue-500 transition-all duration-300" target="_blank">
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/rishadislam1" className="text-3xl text-white hover:text-gray-500 transition-all duration-300" target="_blank">
              <FaGithub />
            </Link>
            <Link href="https://leetcode.com/rishadislam6790/" className="text-3xl text-white hover:text-blue-500 transition-all duration-300" target="_blank">
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
