"use client";
import Link from "next/link";
import React, { useState } from "react";
// components
import { LanguageDropdownitems } from "./LanguageDropdown";
import Dropdown from "@/components/Custom/Dropdown";
import { countryDropdownitems } from "./CountryDropdown";
import { SalesOfficeDropdownitems } from "./SalesOfficeDropdown";
import FindVehicles from "./FindVehicles";
import LiveAction from "./LiveAction";
import Shipping from "./Shipping";
import ServiceAndSupport from "./Service&Support";
import More from "./More";

// icons
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { GrLanguage, GrLocation } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const NavBottomPart = () => {
  // essential dropdown state
  const [isOpenFV, setOpenFV] = useState(false);
  const [isOpenLA, setOpenLA] = useState(false);
  const [isOpenShip, setOpenShip] = useState(false);
  const [isOpenSS, setOpenSS] = useState(false);
  const [isOpenM, setOpenM] = useState(false);

  return (
    <div className="w-full flex items-center  justify-between flex-col md:flex-row bg-gray-800   text-white px-3 md:px-8 lg:px-10 py-2   md:text-xs lg:text-sm font-semibold ">
      {/* Left section  */}
      <section className="flex items-center  flex-col md:flex-row  text-left ">
        <div className="hover:bg-white hover:text-black px-2 py-1 rounded transition-colors duration-300">
          <Link href={"/howtobuy"}>How to Buy</Link>
        </div>
        {/* find Vehicale */}
        <div
          // Find Vahicale
          onMouseEnter={() => setOpenFV(true)}
          onMouseLeave={() => setOpenFV(false)}
          className="hover:bg-white hover:text-black px-2 py-1 rounded transition-colors duration-300  relative  "
        >
          <button className="flex items-center gap-1">
            Find Vehicles{" "}
            <span className="text-xs">
              {isOpenFV ? <AiFillCaretDown /> : <AiFillCaretUp />}
            </span>
          </button>
          <div>{isOpenFV && <FindVehicles />}</div>
        </div>

        {/* Live Auctions */}
        <div
          onMouseEnter={() => setOpenLA(true)}
          onMouseLeave={() => setOpenLA(false)}
          className="hover:bg-white hover:text-black px-2 py-1 rounded transition-colors duration-300  relative md:hidden lg:block"
        >
          <button
            onMouseEnter={() => setOpenLA(true)}
            className="flex items-center gap-1"
          >
            Live Auctions{" "}
            <span className="text-xs">
              {" "}
              {isOpenLA ? <AiFillCaretDown /> : <AiFillCaretUp />}
            </span>
            <div>{isOpenLA && <LiveAction />}</div>
          </button>
        </div>

        {/* Shipping */}
        <div
          onMouseEnter={() => setOpenShip(true)}
          onMouseLeave={() => setOpenShip(false)}
          className="hover:bg-white hover:text-black px-2 py-1 rounded transition-colors duration-300  relative md:hidden lg:block"
        >
          <button className="flex items-center gap-1">
            Shipping{" "}
            <span className="text-xs">
              {isOpenShip ? <AiFillCaretDown /> : <AiFillCaretUp />}
            </span>
          </button>
          <div>{isOpenShip && <Shipping />}</div>
        </div>

        {/* Vehicle history */}
        <div className="hover:bg-white hover:text-black px-2 py-1 rounded transition-colors duration-300 md:hidden xl:block">
          <Link href={"/vehiclehistory"}>Vehicle History</Link>
        </div>

        {/* Service and Support  */}
        <div
          onMouseEnter={() => setOpenSS(true)}
          onMouseLeave={() => setOpenSS(false)}
          className="hover:bg-white hover:text-black px-2 py-1 rounded transition-colors duration-300  relative md:hidden lg:block"
        >
          <button
            onMouseEnter={() => setOpenSS(true)}
            className="flex items-center gap-1"
          >
            Services & Support
            <span className="text-xs">
              {isOpenFV ? <AiFillCaretDown /> : <AiFillCaretUp />}
            </span>
          </button>
          <div>{isOpenSS && <ServiceAndSupport />}</div>
        </div>

        {/* Car in Stock */}
        <div className="group text-orange-300 hover:text-white transition-colors duration-200 ml-2 md:hidden xl:block">
          <Link href={"/"}>
            Cars in Stock{" "}
            <span className="group-hover:bg-white px-1 rounded-full bg-orange-300 text-black ">
              NEW
            </span>
          </Link>
        </div>

        {/* More for Mobile Divice  */}
        <div
          onMouseEnter={() => setOpenM(true)}
          onMouseLeave={() => setOpenM(false)}
          className="hover:bg-white hover:text-black px-2 py-1 rounded transition-colors duration-300 md:block xl:hidden  relative"
        >
          <button
            onMouseEnter={() => setOpenM(true)}
            className="flex items-center gap-1"
          >
            More
            <span className="text-xs">
              {isOpenM ? <AiFillCaretDown /> : <AiFillCaretUp />}
            </span>
          </button>
          <div>{isOpenM && <More />}</div>
        </div>
      </section>

      {/* Right section */}
      <section className="flex  flex-col md:flex-row ">
        {/* language dropdown */}
        <div className="md:border-r border-gray-300 md:px-4 relative">
          <Dropdown
            optionStyle="hover:bg-gray-800"
            dropdownOverlay="bg-gray-800 w-[20rem]"
            placement="middle"
            isFillCaret={true}
            arrow={true}
            options={[...LanguageDropdownitems]}
          >
            <span className="flex items-center gap-1">
              <GrLanguage /> English{" "}
            </span>
          </Dropdown>
        </div>

        {/* Location  */}
        <div className="md:border-r md:border-gray-300 md:px-4">
          <Dropdown
            dropdownOverlay="bg-gray-800 w-[20rem]"
            placement="middle"
            arrow={true}
            isFillCaret={true}
            options={[...countryDropdownitems]}
          >
            <span className="flex items-center gap-1">
              <CiLocationOn /> Bangladesh{" "}
            </span>
          </Dropdown>
        </div>

        <div className="pl-4">
          <Dropdown
            dropdownOverlay="bg-gray-800 w-[20rem]"
            placement="left"
            arrow={true}
            isFillCaret={true}
            options={[...SalesOfficeDropdownitems]}
          >
            <span className="flex items-center gap-1">
              <TfiHeadphoneAlt /> Sales Office{" "}
            </span>
          </Dropdown>
        </div>
      </section>
    </div>
  );
};

export default NavBottomPart;
