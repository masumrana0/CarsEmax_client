"use client";
import { IProduct } from "@/Interface/common";
import AntBreadcrumb from "@/components/productDetail/Breadcrumb";
import data from "/car.json";
import React, { useRef } from "react";
import ProductImages from "@/components/productDetail/ProductImages";
import VehicleDetailst from "@/components/productDetail/VehicleDetailst";
import VehicleHistory from "@/components/productDetail/VehicleHistory";
import BidInformation from "@/components/productDetail/BidInformation";
import CalculateFinalPrice from "@/components/productDetail/CalculateFinalPrice";

const ProductdetailPage = () => {
  const product: IProduct = data[0];

  // console.log(product.pictures);
  return (
    <div className="text-gray-800">
      <div className="bg-gray-100 w-full py-2 px-10">
        <AntBreadcrumb />
        {/* Vehicle name or title  */}
        <h3 className=" font-bold text-xl lg:text-2xl xl:text-3xl ">
          2022 FORD F350 SUPER 6.7L FOR SALE IN SPARTANBURG, SC - SIDE
        </h3>
      </div>

      <div className="grid grid-cols-12 mt-5">
        <section className="col-span-5  ">
          <ProductImages productImages={product.pictures as string[]} />
        </section>

        <section className="col-span-4  py-2 rounded-lg">
          <section>
            <VehicleDetailst />
          </section>
          <section>
            <VehicleHistory />
          </section>
        </section>

        <section className="col-span-3  py-2 rounded-lg">
          <BidInformation />
        </section>
      </div>

      <section className="grid grid-cols-12 gap-5 px-10 ">
        <section className="col-span-8">
          <CalculateFinalPrice />
        </section>
      </section>
    </div>
  );
};

export default ProductdetailPage;
