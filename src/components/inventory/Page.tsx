/**
 * Title: 'Inventory Page define By Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 05-06-2024
 *
 */

"use client";
import React, { useEffect, useState } from "react";
import ProductFilter from "./ProductFilter";
import TopQuriesForFilter from "./topQuriesForFilter/TopQuriesForFilter";
import FilteredProducts from "./FilteredProducts";
import InventoryHeadSection from "./InventoryHeadSection";
import { useAppSelector } from "@/Redux/hooks";
import ProductFilterSort from "./ProductFilterSort";

const InventoryPageMainComponent: React.FC = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(
          "https://copart-iaai-api.com/api/v2/get-cars?api_token=cbb592fc92ce94becb1a0dac0f64471c6aa3ca717e83b1c374871b84ee63be50&per_page=20&page=1 ",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            // body: JSON.stringify({
            //   api_token:
            //     "cbb592fc92ce94becb1a0dac0f64471c6aa3ca717e83b1c374871b84ee63be50",
            //   per_page: 20,
            //   page: 1,
            // }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setData(data);
        // setCars(data);
      } catch (error) {
        // setError(error);
      } finally {
        // setLoading(false);
      }
    };

    fetchCars();
  }, []);

  console.log(data);

  // Redux use for Access State
  const isFilterVisible = useAppSelector((state) => state.filterSlice.isFilter);

  // useEffect(() => {
  //   const getAlllProduct = async () => {
  //     const data = await getAlldata(null);
  //     console.log(data);
  //   };
  //   getAlllProduct();
  // }, []);
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
            isFilterVisible ? "lg:col-span-9  " : "lg:col-span-12 p-4"
          }  space-y-7  rounded-lg col-span-12  overflow-hidden `}
        >
          <TopQuriesForFilter />
          <ProductFilterSort />
          <FilteredProducts />
        </section>
      </div>
    </div>
  );
};

export default InventoryPageMainComponent;
