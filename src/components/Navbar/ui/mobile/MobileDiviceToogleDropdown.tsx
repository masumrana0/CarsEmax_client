"use client";
import Link from "next/link";
import { useState } from "react";
import { CountryDropdownContent } from "../CountryDropdown";
import { LanguageDropdownContent } from "../LanguageDropdown";
import MobileSalesOfficeDropdownContent from "./MobileSalesOfficeDropdownContent";
import MobileLiveAuctionToggle from "./MobileLiveAuctionToggle";
import MobileShippingToggle from "./MobileShippingToogleDropdown";
import MobileServiceAndSupportToggle from "./MobileServiceandSupportToogle";
import MobileFindVehicleToogle from "./MobileFindVehicleToogle";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import MobileFindVehicleSubNav from "./MobileFindVehicleSubNav";
// icons
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";

const MobileDiviceToogleDropdown = ({
  isMobileNavOpen,
}: {
  isMobileNavOpen: boolean;
}) => {
  const [isOpenLD, setOpenLD] = useState<boolean>(false);
  const [isOpenSLD, setOpenSLD] = useState<boolean>(false);
  const [isOpenSOD, setOpenSOD] = useState<boolean>(false);
  const [stateFV, setStateFV] = useState(0);

  return (
    <div
      className={`w-[100vw]  relative  overflow-hidden transition-max-height duration-700 ease-in  bg-gray-800  transition-all   text-white  text-md font-semibold  ${
        isMobileNavOpen ? "max-h-[150vh]" : "max-h-0"
      }`}
    >
      {/* Mobile Navigation Content */}
      <nav className="h-[100vh]">
        <div className=" px-2 py-3  border-b border-gray-700    ">
          <Link href={"/"}>How to Buy</Link>
        </div>
        {/* Find  vehicles */}
        <div>
          <MobileFindVehicleToogle setStateFV={setStateFV} />
        </div>
        {/* Livé Aucution */}
        <div>
          <MobileLiveAuctionToggle />
        </div>
        {/* shiping */}
        <div>
          {" "}
          <MobileShippingToggle />
        </div>
        {/* Vehicle history */}
        <div className=" px-2 py-3  border-y border-gray-700    ">
          <Link href={"/"}>Vehicale History</Link>
        </div>

        {/* Services & Support*/}
        <div>
          <MobileServiceAndSupportToggle />
        </div>

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
            className={`overflow-hidden transition-max-height duration-300 ease-in ${
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
            className={`overflow-hidden transition-max-height duration-300 ease-in ${
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
            className={`overflow-hidden transition-max-height duration-300 ease-in  ${
              isOpenSOD ? "max-h-96" : "max-h-0"
            }`}
          >
            <MobileSalesOfficeDropdownContent />
          </div>
        </section>
      </nav>

      {/* showing FindVehicle navigation  */}
      {stateFV > 0 && (
        <MobileFindVehicleSubNav setStateFV={setStateFV} stateFV={stateFV} />
      )}
    </div>
  );
};

export default MobileDiviceToogleDropdown;
