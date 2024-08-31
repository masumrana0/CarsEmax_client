"use client";
import React, { useState } from "react";

// icons
import { FaRegEye } from "react-icons/fa";
import google from "/public/assets/social_media_icon/google.png";
import apple from "/public/assets/social_media_icon/apple.png";
import facebook from "/public/assets/social_media_icon/facebook.png";

import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const [isVisible, setVisable] = useState<boolean>(false);

  return (
    <div className="py-1 px-5 bg-white">
      <h3 className="text-2xl text-center mb-10 ">Sign in to Your Account</h3>

      {/* Registration from  */}
      <form>
        {/* Email Input */}
        <div className="my-2 w-full">
          <input
            type="email"
            placeholder="Email *"
            className="outline-none  border border-gray-300 hover:border-blue-700 rounded  p-2  w-full   "
            name="eamil"
            id=""
          />
        </div>

        {/* Email Input */}
        <div className="my-2 w-full  border border-gray-300 hover:border-blue-700 rounded flex items-center px-2 py-2">
          <input
            type={`${isVisible ? "text" : "password"}`}
            placeholder="Password "
            className="outline-none w-full   "
            name="password"
            id=""
          />
          <button type="button" onClick={() => setVisable(!isVisible)}>
            <FaRegEye className={`${isVisible && "text-gray-400"}`} />
          </button>
        </div>

        <div className="bg-[#edf4ea] my-3">
          <h4 className="text-xs text-[#217e02] py-3 text-center">
            By clicking *REGISTER NOW* you agree to CareEMax&apos;s{" "}
            <Link className="underline text-blue-500" href={""}>
              Terms and Conditions
            </Link>{" "}
          </h4>
        </div>
        {/* submit button */}
        <button
          type="submit"
          className="py-3  w-full text-white bg-blue-500 hover:bg-blue-300 transition-colors duration-300 font-bold rounded-full"
        >
          SiGN IN
        </button>
      </form>

      <div className="flex items-center space-x-2 mt-3">
        <span className="flex-grow bg-gray-400 h-[1px]"></span>
        <span className="text-[10px] text-gray-600 tracking-tighter">
          OR CONTINUE WITH
        </span>
        <span className="flex-grow bg-gray-400 h-[1px]"></span>
      </div>
      {/* Login with google apple faebook */}
      <div className="flex  justify-center items-center gap-3 mt-5">
        <button className="border border-blue-600 shadow-lg flex items-center py-2 px-2 gap-2 rounded-full w-[8rem] group hover:bg-blue-600 transition-colors duration-300 ">
          <Image
            className="bg-white rounded p-0.5"
            src={google}
            width={20}
            height={20}
            alt="google icon"
          />
          <span className="text-blue-600  text-sm   group-hover:text-white font-semibold">
            Google
          </span>
        </button>
        <button className="border border-blue-600 shadow-lg flex items-center py-2 px-2 gap-2 rounded-full w-[8rem] group hover:bg-blue-600 transition-colors duration-300 ">
          <Image
            className="bg-white rounded p-0.5"
            src={apple}
            width={20}
            height={20}
            alt="google icon"
          />
          <span className="text-blue-600  text-sm   group-hover:text-white font-semibold">
            Apple
          </span>
        </button>
        <button className="border border-blue-600 shadow-lg flex items-center py-2 px-2 gap-2 rounded-full w-[8rem] group hover:bg-blue-600 transition-colors duration-300 ">
          <Image
            className="bg-white rounded p-0.5"
            src={facebook}
            width={20}
            height={20}
            alt="google icon"
          />
          <span className="text-blue-600  text-sm l  group-hover:text-white font-semibold">
            Facebook
          </span>
        </button>
      </div>
      <p className="text-center mt-2 text-sm">
        Don&apos;t have an account with us ?
        <Link
          className=" hover:underline text-blue-500"
          href={"/auth/register"}
        >
          Register Now
        </Link>
      </p>
    </div>
  );
};

export default Login;
