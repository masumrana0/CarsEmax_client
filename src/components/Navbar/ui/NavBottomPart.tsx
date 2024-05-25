"use client";
import Link from "next/link";
import React, { useState } from "react";

// icons
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { GrLanguage, GrLocation } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";

import { LanguageDropdownitems } from "./LanguageDropdown";
import { BiGitCommit } from "react-icons/bi";
import Dropdown from "@/components/Custom/Dropdown";
import { countryDropdownitems } from "./CountryDropdown";
import { SalesOfficeDropdownitems } from "./SalesOfficeDropdown";

const NavBottomPart = () => {
  // essential dropdown state
  const [isOpenFV, setOpenFV] = useState(false);
  const [isOpenLA, setOpenLA] = useState(false);
  const [isOpenShip, setOpenShip] = useState(false);
  const [isOpenSS, setOpenSS] = useState(false);
  const [isOpenE, setOpenE] = useState(false);
  //   close all dropdown when mouse leave in the compoenet
  const OnMouseLeave = () => {
    setOpenFV(false);
    setOpenLA(false);
    setOpenShip(false);
    setOpenSS(false);
  };
  return (
    <div className="w-full flex items-center justify-between bg-gray-800   text-white px-3 py-2   md:text-xs lg:text-sm font-semibold ">
      <section className="flex items-center   ">
        <div className="hover:bg-white hover:text-black px-2 py-1 rounded transition-colors duration-300">
          <Link href={"/"}>How to Buy</Link>
        </div>
        <div className="hover:bg-white hover:text-black px-2 py-1 rounded transition-colors duration-300">
          <button
            onMouseEnter={() => setOpenFV(true)}
            className="flex items-center gap-1"
          >
            Find Vehicles{" "}
            <span className="text-xs">
              {isOpenFV ? <AiFillCaretDown /> : <AiFillCaretUp />}
            </span>
          </button>
        </div>
        <div className="hover:bg-white hover:text-black px-2 py-1 rounded transition-colors duration-300">
          <button
            onMouseEnter={() => setOpenLA(true)}
            className="flex items-center gap-1"
          >
            Live Auctions{" "}
            <span className="text-xs">
              {" "}
              {isOpenFV ? <AiFillCaretDown /> : <AiFillCaretUp />}
            </span>
          </button>
        </div>
        <div className="hover:bg-white hover:text-black px-2 py-1 rounded transition-colors duration-300">
          <button
            onMouseEnter={() => setOpenShip(true)}
            className="flex items-center gap-1"
          >
            Shipping{" "}
            <span className="text-xs">
              {isOpenFV ? <AiFillCaretDown /> : <AiFillCaretUp />}
            </span>
          </button>
        </div>
        <div className="hover:bg-white hover:text-black px-2 py-1 rounded transition-colors duration-300">
          <Link href={"/"}>Vehicle History</Link>
        </div>

        <div className="hover:bg-white hover:text-black px-2 py-1 rounded transition-colors duration-300">
          <button
            onMouseEnter={() => setOpenSS(true)}
            className="flex items-center gap-1"
          >
            Services & Support
            <span className="text-xs">
              {isOpenFV ? <AiFillCaretDown /> : <AiFillCaretUp />}
            </span>
          </button>
        </div>

        <div className="group text-orange-300 hover:text-white transition-colors duration-200">
          <Link href={"/"}>
            Cars in Stock{" "}
            <span className="group-hover:bg-white px-1 rounded-full bg-orange-300 text-black ">
              NEW
            </span>
          </Link>
        </div>
      </section>

      <section className="flex  ">
        {/* language dropdown */}
        <div className="border-r border-gray-300 px-4 relative">
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
        <div className="border-r border-gray-300 px-4">
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
