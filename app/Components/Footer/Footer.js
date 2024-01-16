"use client";

import React, { useState } from "react";
import { Planet } from "react-planet";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";

const Footer = () => {
  const [isOpen, setOpen] = useState(true);
  return (
    <div>
    <div className="my-48 flex flex-col justify-center items-center">
      <Planet
        // mass={4}
        tension={500}
        friction={19}
        orbitRadius={150}
        centerContent={
          <Hamburger toggled={isOpen} toggle={setOpen} color={`${isOpen?'white':'#f8037c'}`}/>
        }
        open
        autoClose
      >
        <div
          className="flex justify-center items-center"
          style={{
            height: 70,
            width: 70,
            borderRadius: "50%",
            backgroundColor: "#f8037c",

            text: "white",
          }}
        >
          <Link href="/" className="text-white">
            Home
          </Link>
        </div>
        <div
          className="flex justify-center items-center"
          style={{
            height: 70,
            width: 70,
            borderRadius: "50%",
            backgroundColor: "#f8037c",

            text: "white",
          }}
        >
          <Link href="/about" className="text-white">
            About
          </Link>
        </div>

        <div
          className="flex justify-center items-center"
          style={{
            height: 70,
            width: 70,
            borderRadius: "50%",
            backgroundColor: "#f8037c",

            text: "white",
          }}
        >
          <Link href="/projects" className="text-white">
            Projects
          </Link>
        </div>

        <div
          className="flex justify-center items-center"
          style={{
            height: 70,
            width: 70,
            borderRadius: "50%",
            backgroundColor: "#f8037c",

            text: "white",
          }}
        >
          <Link href="/contact" className="text-white">
            Contact
          </Link>
        </div>

        <div
          className="flex justify-center items-center"
          style={{
            height: 70,
            width: 70,
            borderRadius: "50%",
            backgroundColor: "#f8037c",

            text: "white",
          }}
        >
          {/* <Link href="/skills" className="text-white">
            Skills
          </Link> */}
        </div>
      </Planet>

    
    </div>
    <div className="text-white text-center mt-60 mb-24">
        @copyright reserve by <Link href="/" className="text-blue-500">Md. Rishad Islam</Link>
      </div>
    </div>
  );
};

export default Footer;
