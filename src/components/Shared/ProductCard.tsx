"use client";
import { IProduct } from "@/Interface/common";
import Image from "next/image";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaClock, FaRegHeart } from "react-icons/fa6";

const ProductCard: React.FC<{ product: IProduct; isClean?: boolean }> = ({
  product,
  isClean,
}) => {
  const [isFevorite, setFevorite] = useState(false);
  return (
    <div className="border-2 rounded w-[315px] md:[350px] lg:w-[380px] xl:w-[400px] overflow-hidden hover:border-blue-500 hover:shadow-lg p-1 flex-shrink-0">
      {/* img section */}
      <div className="relative">
        <Image
          src={product.pictures[0]}
          className="h-[70%] w-full"
          width={400}
          height={400}
          alt={`${product.title}'s photo`}
        />
        <button className="border px-2 py-1 font-[200] text-sm text-white bg-gray-700 rounded-full flex gap-2 items-center absolute top-2 left-2">
          <FaClock /> <span>8.46.33</span>
        </button>
        <button
          onMouseLeave={() => setFevorite(false)}
          onMouseEnter={() => setFevorite(true)}
          className="border p-2 font-[200] text-sm text-white bg-gray-700 rounded-full flex gap-2 items-center absolute top-2 right-2"
        >
          {isFevorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      {/* text section */}
      <div>
        <div className="px-3">
          <h2 className="font-bold text-lg lg:text-xl mt-1 text-blue-500 hover:underline">
            {product.title}
          </h2>
          <p className="text-xs lg:text-md text-gray-500 mt-1">
            Location: Moraine, OH | Lot #: {product.vin}
          </p>
          <p className="text-xs lg:text-md text-gray-500">
            Sale Date: Wed, May 29, 2024 - 8:00 PM GMT+6
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <button className="text-white bg-blue-600 hover:bg-blue-400 flex-grow py-1">
            Bid Now
            <span className="block font-bold text-md">
              {product.finalBidAtAuction} USD
            </span>
          </button>
          {!isClean && (
            <button className="text-white bg-green-700 hover:bg-green-600 flex-grow py-1">
              Buy It Now
              <span className="block font-bold text-md">
                {product.finalBidAtAuction} USD
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
