"use client";
import React from "react";
import products from "/car.json";
import { IProduct } from "@/Interface/common";
import InventoryProductCard from "./InventoryProductCard";
import ProductFilterSort from "./ProductFilterSort";
import { useAppSelector } from "@/Redux/hooks";
import InventoryTableProductCard from "./InventoryTableProductCard";

const FilteredProducts = () => {
  const isFilterVisible = useAppSelector((state) => state.filterSlice.isFilter);
  return (
    <div>
      <ProductFilterSort />

      <table className="w-full   table-fixed">
        {/* Table Header */}
        <thead>
          <tr className="bg-gray-300">
            <th className="w-1/6 px-4 py-2 text-left border border-gray-300">
              Image
            </th>
            <th className="w-1/6 px-4 py-2 text-left border border-gray-300">
              Lot Info
            </th>
            <th className="w-1/6 px-4 py-2 text-left border border-gray-300">
              Vehicle Info
            </th>
            <th className="w-1/6 px-4 py-2 text-left border border-gray-300">
              Condition
            </th>
            <th className="w-1/6 px-4 py-2 text-left border border-gray-300">
              Sale Info
            </th>
            <th className="w-1/6 px-4 py-2 text-left border border-gray-300">
              Bids
            </th>
          </tr>
        </thead>
        {products.map((product: IProduct, index: number) => (
          <InventoryTableProductCard key={index} product={product} />
        ))}
      </table>

      {/* <div
        className={`grid  ${
          isFilterVisible ? "grid-cols-3" : "grid-cols-4"
        }   gap-5`}
      >
        {products.map((product: IProduct, index: number) => (
          <InventoryProductCard key={index} product={product} />
        ))}
      </div> */}
    </div>
  );
};

export default FilteredProducts;