/**
 * Title: 'Home Ui develop By Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Email:'masum.rana6267@gmail.com'
 * Date: 29-05-2024
 *
 */

"use client";
import React, { useState } from "react";

// icons
import { FaRegUser, FaSearch, FaShip } from "react-icons/fa";

import Regsiter from "@/components/forms/Regsiter";
import PopularAuction from "@/components/home/PopularAuction";
import ViewFullSalvage from "@/components/home/ViewFullSalvage";

const HomePage = () => {
  return (
    <div>
      {/* first section  */}
      <section className="bg-[#000180] flex items-center justify-between  gap-36 text-white px-3 md:px-8 lg:px-10 py-5">
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

      <section className="mt-10 px-3 md:px-8 lg:px-10">
        <PopularAuction />
      </section>

      {/* Third Section  */}
      <section className="bg-gray-100">
        <div className="mt-10 py-10 px-5 md:px-8 lg:px-10">
          <ViewFullSalvage />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
