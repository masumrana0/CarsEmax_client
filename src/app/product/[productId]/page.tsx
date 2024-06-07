"use client";
import { IProduct } from "@/Interface/common";
import AntBreadcrumb from "@/components/productDetail/Breadcrumb";
import data from "/car.json";
import React from "react";
import ProductImages from "@/components/productDetail/ProductImages";
import VehicleDetailst from "@/components/productDetail/VehicleDetailst";
import VehicleHistory from "@/components/productDetail/VehicleHistory";
import BidInformation from "@/components/productDetail/BidInformation";
import CalculateFinalPrice from "@/components/productDetail/CalculateFinalPrice";
import SimilarVehicles from "@/components/productDetail/SimilarVehicles";
import ProductAccordian from "@/components/productDetail/ProductAccordian";
import AuctionSaleInformation from "@/components/productDetail/AuctionSaleINformation";

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

      <div className="lg:px-10">
        <div className="grid grid-cols-12 gap-5 mt-5">
          {/* Product images Section */}
          <section className=" col-span-12  md:col-span-6 lg:col-span-5  ">
            <ProductImages productImages={product.pictures as string[]} />
            <section className="block  lg:hidden">
              <VehicleDetailst />
              <VehicleHistory />
            </section>
          </section>

          {/* Product details section  */}
          <section className=" hidden lg:block col-span-4  py-2 rounded-lg">
            <section>
              <VehicleDetailst />
            </section>
            <section>
              <VehicleHistory />
            </section>
          </section>

          {/* Bid information section  */}
          <section className=" col-span-12 md:col-span-6 lg:col-span-3  py-2 rounded-lg">
            <BidInformation />
            <AuctionSaleInformation />
          </section>
        </div>

        <section className="grid grid-cols-12 gap-5 px-10 ">
          <section className=" col-span-12  lg:col-span-8">
            <CalculateFinalPrice />
            {/* <SimilarVehicles /> */}
            <ProductAccordian />
          </section>
        </section>
      </div>
    </div>
  );
};

export default ProductdetailPage;
