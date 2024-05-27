"use client";
import React, { useState } from "react";
// icons
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const MobileServiceAndSupportToggle = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <section>
      <div
        onClick={() => setOpen(!isOpen)}
        className=" px-2 py-3   w-full border-b border-gray-700  "
      >
        <button className="w-full flex items-center justify-between gap-1">
          Services & Support
          <span className="text-xs">
            {isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </span>
        </button>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <section>
          <div className="w-full  flex flex-col bg-gray-900 text-md font-[300]   ">
            <a href="#" className=" px-2 py-3  border-b border-gray-700  ">
              Business Buyers
            </a>
            <a href="#" className=" px-2 py-3  border-b border-gray-700  ">
              Video Guides
            </a>
            <a href="#" className=" px-2 py-3  border-b border-gray-700  ">
              Help Center
            </a>
            <a href="#" className=" px-2 py-3  border-b border-gray-700  ">
              Rules and Policies
            </a>
            <a href="#" className=" px-2 py-3  border-b border-gray-700  ">
              AutoBidMaster Lounge El Salvador
            </a>
            <a href="#" className=" px-2 py-3  border-b border-gray-700  ">
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default MobileServiceAndSupportToggle;
