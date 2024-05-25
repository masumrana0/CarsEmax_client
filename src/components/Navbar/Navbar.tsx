/**
 * Title: 'Navbar Ui develop By Masum Rana'
 * Description: 'This is CarEMax Navbar '
 * Author: 'Masum Rana'
 * Email: 'masum.rana6267@gmail.com'
 * Date: 25-05-2024
 *
 */

"use client";
import Image from "next/image";
import React, { useState } from "react";
// import logo from "/public/assets/logo.jpg";
import Link from "next/link";

// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";
import NavSearchBar from "./ui/NavSearchBar";
import NavBottomPart from "./ui/NavBottomPart";

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <div>
      <section className="bg-blue-700 px-3 md:px-8 py-1">
        <div className="flex items-center justify-between">
          {/* Logo and Menu for Mobile divice */}
          <section className="flex items-center gap-3">
            <div className=" md:hidden">
              <button
                className="text-xl text-white "
                onClick={() => setMobileNavOpen(!isMobileNavOpen)}
              >
                {isMobileNavOpen ? <RxCross1 /> : <GiHamburgerMenu />}
              </button>
            </div>

            {/* logo */}
            <div>
              <Link href={"/"} className="text-white text-xl font-bold">
                {/* <Image src={logo} width={100} height={50} alt="logo" /> */}
                <span className="text-[#bfdcff]">Cars</span>
                <span className="text-[#71e2c0]">EMax</span>
              </Link>
            </div>
          </section>

          {/* navbar Search Bar */}
          <section className="hidden md:block">
            <NavSearchBar />
          </section>

          {/* Account  */}
          <section className="md:flex items-center gap-1 lg:gap-5 hidden ">
            <button className="flex items-center gap-2 hover:bg-blue-500 px-5 py-2 md:text-xs lg:text-lg rounded-full transition-colors duration-300">
              <span className="p-1.5 bg-[#cdd9fd] text-[#2158f5] rounded-full">
                <FaUser />
              </span>
              <span className="text-white font-bold">SIGN IN</span>
            </button>

            <button className="py-2 px-5 md:text-xs lg:text-lg font-semibold bg-orange-400 hover:bg-orange-300  rounded-full transition-colors duration-300">
              REGISTER NOW
            </button>
          </section>

          {/* for Mobile divice */}
          <section className="md:hidden  flex items-center gap-1 sm:gap-4 text-white font-bold">
            <p className="  text-xs flex items-center gap-1 sm:gap-2">
              {" "}
              <span>
                {" "}
                <TfiHeadphoneAlt />
              </span>{" "}
              +1(971) 308-9263
            </p>
            {/* whatsapp icon svg */}
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fff"
                  d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24	c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"
                ></path>
                <path
                  fill="#fff"
                  d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"
                ></path>
                <path
                  fill="#cfd8dc"
                  d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3	l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"
                ></path>
                <path
                  fill="#40c351"
                  d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8l6-1.6l0.6,0.3	c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"
                ></path>
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4	s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6	s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4	c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8	C20.6,19.3,19.7,17,19.3,16z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </section>
        </div>{" "}
        {/* its for mobile divice */}
        <section className="my-2 md:hidden">
          <NavSearchBar />
        </section>
      </section>
      {/* destop nav Bottom part  */}
      <section className="hidden md:block">
        <NavBottomPart />
      </section>
    </div>
  );
};

export default Navbar;
