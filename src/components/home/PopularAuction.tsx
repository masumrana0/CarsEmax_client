"use client";
import { useGetAllProductQuery } from "@/Redux/api/product";
import React, { useState } from "react";
import ProductSwiper from "./ProductSwiper";
import Link from "next/link";

const PopularAuction = () => {
  const [isClean, setClean] = useState(false);
  return (
    <div>
      <h3 className="font-bold text-xl md:text-3xl lg:text-4xl text-gray-800">
        Popular Auction Vehicles in Bangladesh
      </h3>
      {/* button */}
      <div className="my-5 flex items-center  gap-3 ">
        <button
          className={`border border-gray-300 rounded lg:px-4 px-3 py-2 text-sm hover:bg-blue-300 hover:text-blue-600`}
        >
          Popular
        </button>
        <button
          className={`border border-gray-300 rounded lg:px-4 px-3 py-2 text-sm hover:bg-blue-300 hover:text-blue-600`}
        >
          Buy It Now
        </button>
        <button
          onClick={() => setClean(!isClean)}
          className={`border border-gray-300 rounded lg:px-4 px-3 py-2 text-sm hover:bg-blue-300 hover:text-blue-600 ${
            !isClean && "bg-blue-300"
          }`}
        >
          Clean Titles
        </button>
      </div>
      <div>
        <ProductSwiper isClean={isClean} />
      </div>
      <div className="flex justify-center my-10">
        <Link href={"/"}>
          <button className="font-bold text-lg   px-10 py-3 hover:bg-blue-600 hover:text-white tracking-tighter transition-colors duration-300 border border-blue-500 text-blue-600 rounded-full">
            VIEW INVENTORY
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularAuction;
