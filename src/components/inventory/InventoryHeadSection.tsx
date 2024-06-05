"use client";
import React from "react";
// Components
import AntBreadcrumb from "../productDetail/Breadcrumb";
import SaveSearchFilter from "./SaveSearchFilter";

const InventoryHeadSection = () => {
  return (
    <div>
      <div className="bg-slate-100  px-4  lg:px-8 xl:px-11 flex items-center lg:flex-row flex-col lg:justify-between">
        {/* head breadcrumb and inventory Title  */}
        <div>
          <AntBreadcrumb cars={false} ford={false} />
          {/* Title  */}
          <h3 className="font-bold  pb-5 text-lg md:text-2xl lg:text-3xl mt-1">
            Car Finder - Search for Used, Salvage, Damaged and Repairable Autos
            at Online Auction
          </h3>
        </div>

        {/* seave Se arch Button  */}
        <div className="hidden lg:block">
          <SaveSearchFilter />
        </div>
      </div>
    </div>
  );
};

export default InventoryHeadSection;
