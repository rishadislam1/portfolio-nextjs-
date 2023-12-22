"use client"
import { Banner } from "./Banner";
import "./style.css";

const images = [
    "Full Stack Web Developer",
    "Web Designer",
    "Skills: Html",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "JavaScript",
    "ReactJs",
    "NextJs",
    "Laravel",
    "MySQL",
    "MongoDB",
    "C,C++",
    "Python",
    "Machine Learning"
].map((image) => ({
  id: crypto.randomUUID(),
  image
}));

const AutoScroll = ()=> {
  return (
    <div className="bg-gradient-to-r from-[#1f1f1f] border border-gray-900 hover:shadow-lg rounded-full px-5 py-3 flex flex-col justify-center items-center">
   
      <Banner images={images} speed={25000} />
    </div>
  );
}

export default AutoScroll;