"use client";
import React from "react";
import products from "/car.json";
import { IProduct } from "@/Interface/common";
import InventoryProductCard from "./InventoryProductCard";
import { useAppSelector } from "@/Redux/hooks";
import InventoryTableProductCard from "./InventoryTableProductCard";
import QuickViewModal from "./QuickViewModal";
 

const FilteredProducts = () => {
  // redux
  const isFilterVisible = useAppSelector((state) => state.filterSlice.isFilter);
  const isShowTableProductCard = useAppSelector(
    (state) => state.filterSlice.isTableProduct
  );

  const isOpenQuickViewModal = useAppSelector(
    (state) => state.inventorySlice.isProductQuickView
  );
  // console.log("is modal open", isOpenQuickViewModal);
  return (
    <div>
      {isShowTableProductCard ? (
        <table className="w-full   table-fixed">
          {" "}
          *{/* Table Header   */}
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
      ) : (
        <div
          className={`grid  ${
            isFilterVisible ? "lg:grid-cols-3" : "lg:grid-cols-4"
          }   gap-5 grid-cols-1 md:grid-cols-2`}
        >
          {products.map((product: IProduct, index: number) => (
            <InventoryProductCard key={index} product={product} />
          ))}
        </div>
      )}

      <QuickViewModal />
    </div>
  );
};

export default FilteredProducts;
