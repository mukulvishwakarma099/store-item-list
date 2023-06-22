"use client";

import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className="w-full bg-black text-white relative py-3">
      <nav className="py-4 px-10 flex justify-between">
        <h2 className="text-xl font-medium cursor-pointer">Logo</h2>

        <div className="hidden lg:flex gap-4 text-base font-normal">
          <a
            href="#"
            className="hover:text-pink-600 hover:underline duration-200"
          >
            Product
          </a>
          <a
            href="#"
            className="hover:text-pink-600 hover:underline duration-200"
          >
            Club
          </a>
          <a
            href="#"
            className="hover:text-pink-600 hover:underline duration-200"
          >
            Get in touch
          </a>
        </div>

        <button className="lg:hidden" onClick={() => setNav(!nav)}>
          {nav ? (
            <AiOutlineClose size={"1.5rem"} />
          ) : (
            <BiMenuAltRight size={"1.5rem"} />
          )}
        </button>
      </nav>

      <div
        className={`${
          nav ? "top-14" : "top-[-300px]"
        } lg:hidden absolute w-full bg-black flex items-center flex-col gap-5 pt-5 ease-in-out duration-300 pb-10 z-10`}
      >
        <a
          href="#"
          className="hover:text-pink-600 hover:underline duration-200"
        >
          Product
        </a>
        <a
          href="#"
          className="hover:text-pink-600 hover:underline duration-200"
        >
          Club
        </a>
        <a
          href="#"
          className="hover:text-pink-600 hover:underline duration-200"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
};

export default Header;
