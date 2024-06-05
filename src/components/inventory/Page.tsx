/**
 * Title: 'Inventory Page define By Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 05-06-2024
 *
 */

"use client";
import React from "react";
import ProductFilter from "./ProductFilter";
import TopQuriesForFilter from "./topQuriesForFilter/TopQuriesForFilter";
import FilteredProducts from "./FilteredProducts";
import InventoryHeadSection from "./InventoryHeadSection";
import { useAppSelector } from "@/Redux/hooks";

const InventoryPageMainComponent: React.FC = () => {
  // Redux use for Access State
  const isFilterVisible = useAppSelector((state) => state.filterSlice.isFilter);
  return (
    <div className="text-gray-800  ">
      {/* Page Top section  */}
      <InventoryHeadSection />

      {/* Produdct Filter Components */}
      <div
        className={`lg:grid lg:grid-cols-12  lg:gap-10  w-full   ${
          isFilterVisible && "fixed lg:static"
        }    top-0  z-50 `}
      >
        {/* Page Left Section / Filtering Essentials */}
        <section
          className={`col-span-3 space-y-7 bg-[#e6ecfd] shadow-lg   rounded-lg transition-opacity  duration-300 ${
            isFilterVisible
              ? "opacity-100 visible"
              : "opacity-0 invisible hidden"
          }`}
        >
          <ProductFilter />
        </section>

        {/* Page Right Section / Shwoing all Filtered Products */}
        <section
          className={`${
            isFilterVisible ? "lg:col-span-9 flex" : "lg:col-span-12 p-4"
          }  space-y-7  rounded-lg col-span-12  `}
        >
          <TopQuriesForFilter />
          <FilteredProducts />
        </section>
      </div>
    </div>
  );
};

export default InventoryPageMainComponent;
