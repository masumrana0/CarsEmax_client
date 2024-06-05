"use client";
import React from "react";
import AntBreadcrumb from "../productDetail/Breadcrumb";
// icons
import { FaHeart } from "react-icons/fa6";

const InventoryHeadSection = () => {
  return (
    <div>
      <div className="bg-slate-100   px-11 flex items-center justify-between">
        {/* head breadcrumb and Title  */}
        <div>
          <AntBreadcrumb cars={false} ford={false} />
          {/* Title  */}
          <h3 className="font-bold  pb-5 text-3xl mt-1">
            Car Finder - Search for Used, Salvage, Damaged and Repairable Autos
            at Online Auction
          </h3>
        </div>
        {/* seave Se arch Button  */}
        <div>
          <button className="flex items-center gap-1 px-4 py-2 text-md font-bold rounded-full text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600    transition-color ">
            <FaHeart /> SAVE SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryHeadSection;
