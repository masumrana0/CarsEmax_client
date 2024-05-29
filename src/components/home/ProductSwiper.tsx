"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import products from "/car.json";
import { IProduct } from "@/Interface/common";
import ProductCard from "../Shared/ProductCard";

const ProductSwiper: React.FC<{ isClean: boolean }> = ({ isClean }) => {
  // css  for scrollbar none
  const hideScrollbarStyle: React.CSSProperties = {
    msOverflowStyle: "none" /* IE and Edge */,
    scrollbarWidth: "none" /* Firefox */,
    overflowX: "auto",
  };

  return (
    <div
      className=" flex items-center justify-center  gap-5 overflow-x-auto scroll-smooth"
      style={hideScrollbarStyle}
    >
      {products.slice(0, 5).map((product: IProduct, index: number) => (
        <ProductCard product={product} key={index} isClean={isClean} />
      ))}
    </div>
  );
};

export default ProductSwiper;
