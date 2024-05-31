"use client";
import React from "react";

// icons
import { FaRegUser, FaSearch, FaShip } from "react-icons/fa";

import Regsiter from "../forms/Regsiter";
const IntroduceSection = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://www.autobidmaster.com/build/spa/images/shared/backgrounds/home-bg.6dd40655.jpg')",
        backgroundSize: "auto",
      }}
    >
      <section className="flex items-center justify-between  gap-36 text-white px-3 md:px-8 lg:px-10 py-5">
        <section className="w-full lg:w-1/2   md:px-2 xl:px-3">
          {/* Introducing text */}
          <div>
            <h2 className=" text-xl lg:text-2xl  xl:text-4xl  text-center lg:text-left font-bold py-5    ">
              We make it easy to Buy & Ship Auction Cars from USA and Germany
            </h2>
            <h5 className="text-gray-200 text-md xl:text-2xl text-xs  text-center lg:text-left  mb-3 ">
              Choose from over 300 000+ Used, Wholesale and Repairable Cars,
              Trucks, and SUVs for Sale at Copart Auto Auctions
            </h5>
          </div>
          {/* register component for  mobile divice  */}
          <section className=" w-full md:w-[80%] mx-auto lg:hidden  border rounded-xl bg-white shadow-lg text-black pt-5  ">
            <Regsiter />
          </section>

          {/* Customer Step */}
          <div className="space-y-3 mt-2">
            {/* step Register  */}
            <div className="flex  items-center gap-2 border-b-[1px] w-[20rem]  border-gray-500 py-4 ">
              <span className="xl:text-4xl text-3xl">
                <FaRegUser />
              </span>
              <div>
                <h3 className=" text-xs xl:text-sm text-[14px] font-bold">
                  STEP 1: REGISTER
                </h3>
                <p className="text-xs text-gray-200">
                  Register for FREE and start your search
                </p>
              </div>
            </div>

            {/* step buy */}
            <div className="flex  items-center gap-2 ">
              <span className="xl:text-4xl text-3xl">
                <FaSearch />
              </span>
              <div>
                <h3 className="text-xs xl:text-sm text-[14px] font-bold">
                  STEP 1: BUY
                </h3>
                <p className="text-xs text-gray-200">
                  Bid and buy at a great price
                </p>
              </div>
            </div>
            {/* step ship */}
            <div className="flex  items-center gap-2 border-t-[1px]  w-[20rem] border-gray-500 py-4">
              <span className="xl:text-4xl text-3xl">
                <FaShip />
              </span>
              <div>
                <h3 className="text-xs xl:text-sm text-[14px] font-bold">
                  STEP 1: SHIP
                </h3>
                <p className="text-xs text-gray-200">
                  We make shipping and custom clearance easy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* register component it's for desktop  */}
        <section className="  hidden lg:block   w-1/2       shadow-lg text-black pt-5  overflow-hidden ">
          <div className="xl:w-[75%]  w-full">
            <Regsiter />
          </div>
        </section>
      </section>
    </div>
  );
};

export default IntroduceSection;
