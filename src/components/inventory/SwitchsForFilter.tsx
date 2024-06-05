"use client";
import { Image, Switch } from "antd";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import selectMark from "/public/assets/icons/copart-select.84955e29.svg";

const SwitchsForFilter = () => {
  return (
    <div>
      {/* Select Vehicle only */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-1">
          <Image src={selectMark} width={60} height={100} alt="selectmarkimg" />
          <h4 className="text-sm md:text-md lg:text-lg">Vehicle Only</h4>
        </div>
        <Switch />
      </div>
      {/* Exclude Upcoming Auction vhicles */}
      <div className="flex items-center justify-between mt-4">
        <h4 className=" text-sm  md:text-md lg:text-lg">
          Exclude Upcoming Auction vhicles
        </h4>

        <Switch />
      </div>

      {/* Newly Added Lots Last 24 Hours */}
      <div className="flex items-center justify-between mt-4">
        <h4 className="flex items-center gap-2  text-sm md:text-md lg:text-lg">
          {" "}
          Newly Added Lots{" "}
          <span className="text-gray-500 flex items-center">
            Last 24 Hours <IoMdArrowDropdown />
          </span>
        </h4>

        <Switch />
      </div>
    </div>
  );
};

export default SwitchsForFilter;
