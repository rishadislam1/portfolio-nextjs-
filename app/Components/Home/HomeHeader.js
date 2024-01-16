import professionalImage from "../../../public/images/rishadislam.jpg";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import signImage from "../../../public/images/rishadislam.png";
import myWork from "../../../public/images/my-works.png";
import "./HomeHeader.css";
import AutoScroll from "./AutoScroll/AutoScroll";
import Image from "next/image";
import Link from "next/link";
import HeaderMainFooter from '../HeaderMainFooter';
const HomeHeader = () => {
  return (
    <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 xl:mx-44 md:mx-10 text-white">
      <Link href="/about">
        <div className="bg-gradient-to-r from-[#1f1f1f] border border-gray-900 hover:shadow-lg hover:shadow-gray-900  rounded-xl transition-all duration-500">
          <div className=" flex flex-col md:flex-row justify-around py-10 px-10 gap-10">
            <div>
              <Image
                src={professionalImage}
                width={315}
                height={500}
                alt="rishadislam"
                className="imageComponent "
              />
            </div>
            <div className="text-white font-thin flex flex-col justify-center gap-5">
              <p>A FULL STACK WEB DEVELOPER</p>
              <h1 className="text-3xl font-bold mt-5">Md. Rishad Islam</h1>
              <p>
                I am a web developer who can work with modern technology like
                ReactJs, NextJs, Laravel
              </p>
            </div>
          </div>
          <div className="flex justify-end text-gray-500 hover:text-white text-3xl mr-10 mb-2">
            <MdOutlineKeyboardDoubleArrowRight />
          </div>
        </div>
      </Link>
      <div>
        <AutoScroll />
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-10">
          <div className="bg-gradient-to-r from-[#1f1f1f] border border-gray-900 hover:shadow-lg hover:shadow-gray-900  rounded-xl p-10 transition-all duration-500">
            <Image
              src={signImage}
              width={800}
              height={500}
              alt="rishadislam"
              className="imageComponent "
            />
        
            <HeaderMainFooter name='MORE ABOUT ME' header='Credentials' link='/about'/>
          </div>
{/* projects */}
          <div className="bg-gradient-to-r from-[#1f1f1f] border border-gray-900 hover:shadow-lg hover:shadow-gray-900  rounded-xl p-10 transition-all duration-500">
            <Image
              src={myWork}
              width={250}
              height={500}
              alt="rishadislam"
              className="imageComponent "
            />
          
            <HeaderMainFooter name='SHOWCASE' header='Projects' link='/projects'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
