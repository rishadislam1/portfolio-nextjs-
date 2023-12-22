import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const HeaderMainFooter = ({ name, header, link }) => {
  return (
    <div>
      <div className="flex justify-between items-center text-white">
        <div>
          <p className="text-gray-400">{name}</p>
          <h1 className="text-3xl mt-3">{header}</h1>
        </div>
        <div>
          <Link
            href={link}
            className="text-5xl hover:text-gray-500 transition-all duration-500"
          >
            {" "}
            <MdOutlineKeyboardDoubleArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderMainFooter;
