"use client";
import React from "react";

// icons
import { IoStar } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";
import shipping from "/public/assets/icons/shipping.svg";
import Image from "next/image";

const IsTopSection = () => {
  // Handle Submit
  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div
      className="px-[2rem]  md:px-[5rem] xl:px-0"
      style={{
        backgroundImage:
          'url("https://www.autobidmaster.com/build/spa/images/background.96a6e62b.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center  justify-center lg:flex-row flex-col gap-5 py-10">
        {/* left part  */}
        <div className="xl:w-[35%] w-full">
          <div className="flex xl:items-center gap-2 text-xs xl:text-sm text-orange-300 mb-2">
            <span>
              <IoStar />
            </span>
            <span>
              <IoStar />
            </span>
            <span>
              <IoStar />
            </span>
            <span>
              <IoStar />
            </span>
            <span>
              <IoStar />
            </span>
            <p className="tracking-wider">
              TOP-RATED NVOCC PROVIDER OF AUTO AUCTION SHIPPING SERVICES.
            </p>
          </div>
          <h2 className="xl:text-4xl lg:text-3xl sm:text-2xl  text-white font-bold mt-1">
            Ship your car from any location in US or Canada to your country with
            CarEMax
          </h2>
          <div className="grid grid-cols-1  md:grid-cols-2 items-center gap-5 mt-5">
            {/* world shipping  */}
            <div className="flex  gap-1 ">
              <span className="text-orange-300 mt-1">
                {" "}
                <FaCheckCircle />
              </span>
              <div className="text-white">
                <h2 className="font-bold xl:text-xl md:text-md text-md">
                  Worldwide Shipping
                </h2>
                <p className="text-xs">from USA or Canada</p>
              </div>
            </div>

            {/* world shipping  */}
            <div className="flex gap-1 ">
              <span className="text-orange-300 mt-1">
                {" "}
                <FaCheckCircle />
              </span>
              <div className="text-white">
                <h2 className="font-bold xl:text-xl md:text-md text-md">
                  Vehicle Pick-Up
                </h2>
                <p className="text-xs">within 3 days</p>
              </div>
            </div>

            {/*  Cargo Insurance */}
            <div className="flex gap-1 ">
              <span className="text-orange-300 mt-1">
                {" "}
                <FaCheckCircle />
              </span>
              <div className="text-white">
                <h2 className="font-bold xl:text-xl md:text-md text-md">
                  Cargo Insurance
                </h2>
                <p className="text-xs">24/7 tracking service</p>
              </div>
            </div>

            {/*  30 days of FREE Storage */}
            <div className="flex gap-1 ">
              <span className="text-orange-300 mt-1">
                {" "}
                <FaCheckCircle />
              </span>
              <div className="text-white">
                <h2 className="font-bold xl:text-xl md:text-md text-md">
                  30 days of FREE Storage
                </h2>
                <p className="text-xs">at warehouse</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Part */}
        <div className="xl:w-[25%] w-full">
          <form onSubmit={handleOnSubmit}>
            {/* Email input */}
            <input
              type="eamil"
              name="email"
              placeholder="Email"
              className="w-full outline-none bg-[#305f8c] py-2 px-3 rounded-lg border border-transparent hover:border-white mb-3"
            />
            {/* vin number input */}
            <input
              type="text"
              name="vinnumber"
              placeholder="VIN Number"
              className="w-full outline-none bg-[#305f8c] py-2 px-3 rounded-lg border border-transparent hover:border-white"
            />
            {/* from button infut  */}
            <button className="flex items-center justify-center font-bold bg-orange-400 hover:bg-orange-300 transition-color gap-2 text-gray-800 py-3 px-10 rounded-full w-full text-center my-3">
              TRACK MY ORDER <HiArrowRight />
            </button>
          </form>

          <div className="flex items-center gap-1 text-gray-400 w-full">
            <hr className="w-full border-t border-gray-500" /> OR{" "}
            <hr className="w-full border-t border-gray-500" />
          </div>

          <button className="flex items-center justify-center gap-2  w-full bg-[#305f8c] py-3 px-3 rounded-full border border-transparent border-gray-600 hover:border-white text-white font-bold">
            PLACE SHIPPING ORDER{" "}
            <Image src={shipping} width={20} height={20} alt="shipping img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IsTopSection;
