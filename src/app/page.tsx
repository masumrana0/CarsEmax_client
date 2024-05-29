"use client";
import React, { useState } from "react";

// icons
import { FaRegUser, FaSearch, FaShip } from "react-icons/fa";

import Image from "next/image";
import Regsiter from "@/components/forms/Regsiter";
import PopularAuction from "@/components/home/PopularAuction";

const countries = [
  { name: "United States", code: "US", dialCode: "+1", flag: "🇺🇸" },
  { name: "Bulgaria", code: "BG", dialCode: "+359", flag: "🇧🇬" },
  { name: "El Salvador", code: "SV", dialCode: "+503", flag: "🇸🇻" },
  { name: "Georgia", code: "GE", dialCode: "+995", flag: "🇬🇪" },
  { name: "Ghana", code: "GH", dialCode: "+233", flag: "🇬🇭" },
  { name: "Guatemala", code: "GT", dialCode: "+502", flag: "🇬🇹" },
  { name: "Nicaragua", code: "NI", dialCode: "+505", flag: "🇳🇮" },
  { name: "Nigeria", code: "NG", dialCode: "+234", flag: "🇳🇬" },
  { name: "Poland", code: "PL", dialCode: "+48", flag: "🇵🇱" },
  { name: "Romania", code: "RO", dialCode: "+40", flag: "🇷🇴" },
  { name: "Ukraine", code: "UA", dialCode: "+380", flag: "🇺🇦" },
];

const HomePage = () => {
  return (
    <div>
      {/* first section  */}
      <section className="bg-[#000180] flex items-center justify-between  gap-36 text-white md:px-5 py-5">
        <section className="w-full lg:w-1/2 px-3">
          <div>
            <h2 className="text-2xl lg:text-4xl  text-center lg:text-left font-bold py-5    ">
              We make it easy to Buy & Ship Auction Cars from USA and Germany
            </h2>
            <h5 className="text-gray-200 lg:text-2xl text-xs  text-center lg:text-left  mb-3 ">
              Choose from over 300 000+ Used, Wholesale and Repairable Cars,
              Trucks, and SUVs for Sale at Copart Auto Auctions
            </h5>
          </div>

          <section className=" w-full lg:hidden   border rounded-xl bg-white shadow-lg text-black pt-5  ">
            <Regsiter />
          </section>

          <div className="space-y-3 mt-2">
            {/* step Register  */}
            <div className="flex  items-center gap-2 border-b-[1px] w-[20rem]  border-gray-500 py-4 ">
              <span className="lg:text-5xl text-4xl">
                <FaRegUser />
              </span>
              <div>
                <h3 className="lg:text-sm text-[14px] font-bold">
                  STEP 1: REGISTER
                </h3>
                <p className="text-xs text-gray-200">
                  Register for FREE and start your search
                </p>
              </div>
            </div>

            {/* step buy */}
            <div className="flex  items-center gap-2 ">
              <span className="lg:text-5xl text-4xl">
                <FaSearch />
              </span>
              <div>
                <h3 className="lg:text-sm text-[14px] font-bold">
                  STEP 1: BUY
                </h3>
                <p className="text-xs text-gray-200">
                  Bid and buy at a great price
                </p>
              </div>
            </div>
            {/* step ship */}
            <div className="flex  items-center gap-2 border-t-[1px]  w-[20rem] border-gray-500 py-4">
              <span className="lg:text-5xl text-4xl">
                <FaShip />
              </span>
              <div>
                <h3 className="lg:text-sm text-[14px] font-bold t">
                  STEP 1: SHIP
                </h3>
                <p className="text-xs text-gray-200">
                  We make shipping and custom clearance easy
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* for mobile divice  */}
        <div className="w-1/2 hidden lg:block">
          <section className=" w-[70%]   border rounded-xl bg-white shadow-lg text-black pt-5  ">
            <Regsiter />
          </section>
        </div>
      </section>

      {/* second section  */}

      <section className="mt-10 px-3">
        <PopularAuction />
      </section>
    </div>
  );
};

export default HomePage;
