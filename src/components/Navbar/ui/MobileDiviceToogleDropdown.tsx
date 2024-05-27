"use client";
import React, { useState } from "react";
import NavBottomPart from "./NavBottomPart";
// icons
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiFillCaretRight,
} from "react-icons/ai";

import Link from "next/link";
import FindVehicles from "./FindVehicles";
import Dropdown from "@/components/Custom/Dropdown";
import {
  LanguageDropdownContent,
  LanguageDropdownitems,
} from "./LanguageDropdown";
import { GrLanguage } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { BiSolidEditLocation } from "react-icons/bi";
import { CountryDropdownContent } from "./CountryDropdown";
import { SalesOfficeDropdownContent } from "./SalesOfficeDropdown";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import MobileSalesOfficeDropdownContent from "./MobileSalesOfficeDropdownContent";

const MobileDiviceToogleDropdown = ({
  isMobileNavOpen,
}: {
  isMobileNavOpen: boolean;
}) => {
  const [isOpenFV, setOpenFV] = useState(false);
  const [isOpenLA, setOpenLA] = useState(false);
  const [isOpenShip, setOpenShip] = useState(false);
  const [isOpenSS, setOpenSS] = useState(false);
  const [isOpenM, setOpenM] = useState(false);
  const [isOpenLD, setOpenLD] = useState(false);
  const [isOpenSLD, setOpenSLD] = useState(false);
  const [isOpenSOD, setOpenSOD] = useState(false);

  const [state, setState] = useState(2);
  return (
    <div
      className={`w-[100vw]  overflow-hidden transition-max-height duration-500 ease-in-out  bg-gray-800 z-2 transition-all   text-white  text-md font-semibold  ${
        isMobileNavOpen ? "max-h-[100vh]" : "max-h-0"
      }`}
    >
      {/* <NavBottomPart /> */}
      <nav className="h-[100vh]">
        <div className=" px-2 py-3  border-b border-gray-700    ">
          <Link href={"/"}>How to Buy</Link>
        </div>
        {/* Find  vehicles */}
        <section>
          <div
            onClick={() => setOpenFV(!isOpenFV)}
            className=" px-2 py-3   w-full  "
          >
            <button className="w-full flex items-center justify-between gap-1">
              Find Vehicles{" "}
              <span className="text-xs">
                {isOpenFV ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </span>
            </button>
          </div>
          {/* Find Vehicles navigation  */}
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              isOpenFV ? "max-h-[27rem]" : "max-h-0"
            }`}
          >
            <section>
              <div className="w-full   bg-gray-900   ">
                <button
                  onClick={() => setState(1)}
                  className={`py-3 px-2 border-b border-gray-700 text-md font-[300]  flex items-center justify-between w-full `}
                >
                  Featured Items{" "}
                  <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />{" "}
                </button>
                <button
                  onClick={() => setState(2)}
                  className="py-3 px-2 border-b border-gray-700 text-md font-[300]  flex items-center justify-between w-full"
                >
                  Popular Makes{" "}
                  <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />{" "}
                </button>
                <button
                  onClick={() => setState(3)}
                  className="py-3 px-2 border-b border-gray-700 text-md font-[300]  flex items-center justify-between w-full"
                >
                  Vehicle Types{" "}
                  <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />{" "}
                </button>
                <button
                  onClick={() => setState(4)}
                  className="py-3 px-2 border-b border-gray-700 text-md font-[300]  flex items-center justify-between w-full"
                >
                  Body Styles{" "}
                  <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />
                </button>
                <button
                  onClick={() => setState(5)}
                  className="py-3 px-2 border-b border-gray-700 text-md font-[300]  flex items-center justify-between w-full"
                >
                  Damage Types{" "}
                  <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />
                </button>
                <button
                  onClick={() => setState(6)}
                  className="py-3 px-2 border-b border-gray-700 text-md font-[300]  flex items-center justify-between w-full"
                >
                  Ownership Doc Types{" "}
                  <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />
                </button>
                <button
                  onMouseEnter={() => setState(7)}
                  className="py-3 px-2 border-b border-gray-700 text-md font-[300]  flex items-center justify-between w-full"
                >
                  Search by US state{" "}
                  <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />
                </button>
                <button
                  onMouseEnter={() => setState(8)}
                  className="py-3 px-2 border-b border-gray-700 text-md font-[300]  flex items-center justify-between w-full"
                >
                  Search by Country{" "}
                  <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />
                </button>
              </div>
            </section>
          </div>
        </section>
        {/* Livé Aucution */}
        <section>
          <div
            onClick={() => setOpenLA(!isOpenLA)}
            className=" px-2 py-3   w-full border-t border-gray-700  "
          >
            <button className="w-full flex items-center justify-between gap-1">
              Live Auctions{" "}
              <span className="text-xs">
                {isOpenFV ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </span>
            </button>
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              isOpenLA ? "max-h-96" : "max-h-0"
            }`}
          >
            <section>
              <div className="w-full  flex flex-col bg-gray-900 text-md font-[300]   ">
                <a href="#" className=" px-2 py-3  border-b border-gray-700  ">
                  Today&apos;s Auctions
                </a>
                <a href="#" className=" px-2 py-3  border-b border-gray-700  ">
                  Auction Calendar
                </a>
                <a href="#" className=" px-2 py-3  border-b border-gray-700  ">
                  Join Auctions
                </a>
                <a href="#" className=" px-2 py-3  border-b border-gray-700  ">
                  Auction Locations
                </a>
                <a href="#" className=" px-2 py-3  border-b border-gray-700  ">
                  <span> Car Auctions in Germany</span>
                </a>
              </div>
            </section>
          </div>
        </section>
        {/* shiping */}
        <section>
          <div
            onClick={() => setOpenShip(!isOpenShip)}
            className="px-2 py-3 w-full border-t border-gray-700 cursor-pointer"
          >
            <button className="w-full flex items-center justify-between gap-1">
              Shipping{" "}
              <span className="text-xs">
                {isOpenShip ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </span>
            </button>
          </div>
          {/* Shipping Conent */}
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              isOpenShip ? "max-h-40" : "max-h-0"
            }`}
          >
            <section>
              <div className="w-full flex flex-col bg-gray-900 text-md font-[300]">
                <a href="#" className="px-2 py-3 border-b border-gray-700">
                  International Shipping
                </a>
                <a href="#" className="px-2 py-3 border-b border-gray-700">
                  US car Shipping
                </a>
              </div>
            </section>
          </div>
        </section>
        {/* Vehicle history */}
        <div className=" px-2 py-3  border-y border-gray-700    ">
          <Link href={"/"}>Vehicale History</Link>
        </div>
        {/* Services & Support*/}
        <section>
          <div
            onClick={() => setOpenSS(!isOpenSS)}
            className=" px-2 py-3   w-full border-b border-gray-700  "
          >
            <button className="w-full flex items-center justify-between gap-1">
              Services & Support
              <span className="text-xs">
                {isOpenFV ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </span>
            </button>
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              isOpenSS ? "max-h-96" : "max-h-0"
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

        {/* Cars in Stock */}
        <div className="group text-orange-300 hover:text-white transition-colors duration-200  px-2 py-3  border-b border-gray-700    ">
          <Link href={"/"}>
            Cars in Stock{" "}
            <span className="group-hover:bg-white px-1 rounded-full bg-orange-300 text-black ">
              NEW
            </span>
          </Link>
        </div>

        {/* language dropdown */}
        <section>
          <div
            onClick={() => setOpenLD(!isOpenLD)}
            className=" px-2 py-3   w-full border-b border-gray-700  "
          >
            <button className="w-full flex items-center justify-between gap-1">
              <span className="flex items-center gap-1">
                {" "}
                <GrLanguage /> English
              </span>{" "}
              <span className="text-xs">
                {isOpenLD ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </span>
            </button>
          </div>
          {/* language dropdown content */}
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              isOpenLD ? "max-h-96" : "max-h-0"
            }`}
          >
            <LanguageDropdownContent />
          </div>
        </section>
        {/* Set location dropdown */}
        <section>
          <div
            onClick={() => setOpenSLD(!isOpenSLD)}
            className=" px-2 py-3   w-full border-b border-gray-700  "
          >
            <button className="w-full flex items-center justify-between gap-1">
              <span className="flex items-center gap-1">
                {" "}
                <CiLocationOn /> Bangladesh{" "}
              </span>{" "}
              <span className="text-xs">
                {isOpenSLD ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </span>
            </button>
          </div>
          {/* language dropdown content */}
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              isOpenSLD ? "max-h-96" : "max-h-0"
            }`}
          >
            <CountryDropdownContent />
          </div>
        </section>
        {/* Sales Office dropdown */}
        <section>
          <div
            onClick={() => setOpenSOD(!isOpenSOD)}
            className=" px-2 py-3   w-full border-b border-gray-700  "
          >
            <button className="w-full flex items-center justify-between gap-1">
              <span className="flex items-center gap-1">
                {" "}
                <TfiHeadphoneAlt /> Sales Office{" "}
              </span>{" "}
              <span className="text-xs">
                {isOpenSOD ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </span>
            </button>
          </div>
          {/* language dropdown content */}
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              isOpenSOD ? "max-h-96" : "max-h-0"
            }`}
          >
            <MobileSalesOfficeDropdownContent />
          </div>
        </section>
      </nav>
    </div>
  );
};

export default MobileDiviceToogleDropdown;
