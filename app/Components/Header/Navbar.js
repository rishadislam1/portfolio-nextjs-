"use client";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuOpen = ()=>{
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="text-white">
      {/* humburger */}
      <div className="lg:hidden">
        <div className="flex justify-between mt-5" onClick={handleMenuOpen}>
          <Hamburger toggled={isOpen} toggle={setOpen} color="white"/>
          <div>
            <Link href="/contact">
              <button className="bg-gray-800 px-5 py-2 rounded-xl font-semibold">
                {/*  eslint-disable-next-line react/no-unescaped-entities */}
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
        <div className={`bg-white ${menuOpen?'mt-0':'-mt-96'} transition-all duration-700`}>
          <div>
            <h1 className="text-2xl lg:text-4xl text-black font-bold text-center my-5">
              Rishad Islam
            </h1>
          </div>
          <div>
            <ul className="flex flex-col justify-center items-center gap-5 font-semibold text-lg ">
              <Link href={"/"}>
                {" "}
                <li
                  className={`cursor-pointer hover:text-red-500 transition-all duration-500 ${
                    pathname === "/" ? "text-[##f8037c]" : "text-black"
                  }`}
                >
                  Home
                </li>
              </Link>
              <Link href={"/about"}>
                <li
                  className={`cursor-pointer hover:text-red-500 transition-all duration-500 ${
                    pathname === "/about" ? "text-[##f8037c]" : "text-black"
                  }`}
                >
                  About
                </li>
              </Link>
              <Link href={"/projects"}>
                {" "}
                <li
                  className={`cursor-pointer hover:text-red-500 transition-all duration-500 ${
                    pathname === "/projects" ? "text-[##f8037c]" : "text-black"
                  }`}
                >
                  Projects
                </li>
              </Link>
              <Link href={"/contact"}>
                <li
                  className={`cursor-pointer hover:text-red-500 transition-all duration-500 ${
                    pathname === "/contact" ? "text-[##f8037c]" : "text-black"
                  }`}
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {/* main menu */}
      <div className="hidden lg:flex justify-around items-center mt-5">
        <div>
          <h1 className="text-2xl lg:text-4xl text-white font-bold">
            Rishad Islam
          </h1>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-20 font-semibold text-lg ">
            <Link href={"/"}>
              {" "}
              <li
                className={`cursor-pointer hover:text-red-500 transition-all duration-500 ${
                  pathname === "/" ? "text-[#f8037c]" : "text-white"
                }`}
              >
                Home
              </li>
            </Link>
            <Link href={"/about"}>
              <li
                className={`cursor-pointer hover:text-red-500 transition-all duration-500 ${
                  pathname === "/about" ? "text-[#f8037c]" : "text-white"
                }`}
              >
                About
              </li>
            </Link>
            <Link href={"/projects"}>
              {" "}
              <li
                className={`cursor-pointer hover:text-red-500 transition-all duration-500 ${
                  pathname === "/projects" ? "text-[#f8037c]" : "text-white"
                }`}
              >
                Projects
              </li>
            </Link>
            <Link href={"/contact"}>
              <li
                className={`cursor-pointer hover:text-red-500 transition-all duration-500 ${
                  pathname === "/contact" ? "text-[#f8037c]" : "text-white"
                }`}
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <Link href="/contact">
            <button className="bg-gray-800 px-5 py-2 rounded-xl font-semibold">
              Let's Talk
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
