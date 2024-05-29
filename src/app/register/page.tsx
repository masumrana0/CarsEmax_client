"use client";
import Regsiter from "@/components/forms/Regsiter";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const RegisterPage = () => {
  return (
    <div>
      <section className="w-full  bg-[#f1f1f8] mt-20 lg:mt-0 ">
        <div className="container  mx-auto  flex items-center   flex-col-reverse  lg:flex-row lg:gap-10   py-10  h-[80vh]  ">
          <section className="lg:w-[40%] w-full px-5 py-5 ">
            <h2 className="lg:text-3xl text-xl mb-5 text-center lg:text-left  ">
              Quick Registration - Register for FREE in less than 30 seconds
            </h2>
            <div className="flex flex-col gap-4 ">
              <div className="flex items-center gap-2">
                <p className="bg-blue-600 text-white text-sm  rouneded-full  p-2 w-2 h-2 border flex items-center justify-center  rounded-full ">
                  <span>
                    <AiOutlineCheck />
                  </span>
                </p>
                <p className="lg:text-lg text-md">
                  Get The Best Prices Across All Auto Auctions Located In USA
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="bg-blue-600 text-white text-sm  rouneded-full  p-2 w-2 h-2 border flex items-center justify-center  rounded-full ">
                  <span>
                    <AiOutlineCheck />
                  </span>
                </p>
                <p className="lg:text-lg text-md">
                  Easy Bidding, Buying and Shipping Services
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="bg-blue-600 text-white text-sm  rouneded-full  p-2 w-2 h-2 border flex items-center justify-center  rounded-full ">
                  <span>
                    <AiOutlineCheck />
                  </span>
                </p>
                <p className="lg:text-lg text-md">
                  96% Customer Satisfaction Rate
                </p>
              </div>
            </div>
          </section>
          <section className="lg:w-[40%]  w-full bg-white rounded-lg lg:p-5 mb-2  mx-1 ">
            <Regsiter />
          </section>
        </div>
      </section>

      <section className=" ">
        <div className=" flex text-center justify-center items-center gap-4 text-blue-400  text-sm my-3">
          <a className="hover:underline" href="/">
            Find Vehicles
          </a>
          <span className="h-[1rem] w-[1px] bg-gray-500"></span>
          <a className="hover:underline" href="/helpcenter">
            Help Center
          </a>
          <span className="h-[1rem] w-[1px] bg-gray-500"></span>
          <a className="hover:underline" href="/contactus">
            Contact Us
          </a>
        </div>
        <p className="text-xs text-center ">
          Copyright © 2024 AutoBidMaster, LLC All Rights Reserved.
        </p>
      </section>
    </div>
  );
};

export default RegisterPage;
