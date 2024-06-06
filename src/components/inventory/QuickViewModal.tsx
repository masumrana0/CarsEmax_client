"use client";
import React from "react";
import Image from "next/image";
import { Modal } from "antd";
import { IProduct } from "@/Interface/common";
import products from "/car.json";

// Redux Components
import { setProductQuickView } from "@/Redux/Slices/inventorySlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { RxCross1 } from "react-icons/rx";

// icons
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import ProductImages from "../productDetail/ProductImages";
import BidInformation from "../productDetail/BidInformation";
import VehicleHistory from "../productDetail/VehicleHistory";
import CopyFunctionality from "../Custom/CopyFunctionlity";

const QuickViewModal: React.FC = () => {
  // Redux
  const dispatch = useAppDispatch();
  const isOpenQuickView = useAppSelector(
    (state) => state.inventorySlice.isProductQuickView
  );

  const SelectedProduct = useAppSelector(
    (state) => state.inventorySlice.quickViewProduct
  );

  return (
    <Modal
      width={1400}
      title={null}
      open={isOpenQuickView}
      onOk={() => dispatch(setProductQuickView())}
      onCancel={() => dispatch(setProductQuickView())}
      footer={null}
      closeIcon={null}
    >
      {/* Modal  Title and Close button   */}
      <div className="w-full bg-blue-600 text-white flex items-center justify-between py-2">
        <h2 className="font-semibold text-lg ml-4">Lot # 50354187</h2>
        <button
          className="mr-4"
          onClick={() => dispatch(setProductQuickView())}
        >
          <RxCross1 size={30} />
        </button>
      </div>

      <div>
        {/* Head Buttons */}
        <div className="bg-gray-100 px-4  py-3 ">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-3xl ">0 Reifensatz</h2>
            <div className="flex items-center">
              <button className="text-blue-600 flex items-center gap-2  bg-white hover:bg-gray-100 transition-color px-4 py-3.5 rounded-s-full text-xl text-nowrap  border hover:border-blue-600 ">
                <FaRegHeart size={20} /> Watch
              </button>
              <Link href={"/product/123"}>
                <button className=" flex items-center gap-2   bg-blue-600 hover:bg-blue-500 transition-color px-4 py-3.5   text-white text-xl text-nowrap  ">
                  <FaRegEye size={25} /> View Lot Full Details
                </button>
              </Link>

              <button className="text-blue-600 flex items-center gap-2  bg-white hover:bg-gray-100 transition-color px-2 py-3.5   text-xl text-nowrap  border hover:border-blue-600 ">
                <IoIosArrowRoundBack size={30} /> Prev Lot
              </button>
              <button className="text-blue-600 flex items-center gap-2  bg-white hover:bg-gray-100 transition-color px-2 py-3.5   text-xl text-nowrap  border hover:border-blue-600 rounded-e-full ">
                Next Lot <IoIosArrowRoundForward size={30} />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full grid gap-5 grid-cols-12 p-5">
          <div className="col-span-8   flex justify-center items-center">
            <ProductImages
              useForQuickViewModal={true}
              productImages={SelectedProduct?.pictures as string[]}
            />
          </div>

          <div className="col-span-4  overflow-y-auto">
            <div className="rounded overflow-hidden  ">
              <BidInformation useForQuickViewModal={true} />
            </div>

            <div className="mt-5 p-5 bg-blue-100  text-gray-800  rounded">
              {/* <VehicleHistory /> */}

              <div className="mb-5">
                <h2 className="font-bold text-xl">Vehicle Details</h2>
                <p>Sourced Directly from the auction, not in our inventory</p>
              </div>

              <div>
                <div className="flex items-center w-full text-lg py-2   border-b border-gray-300  ">
                  <span className="w-1/2">Lot Number:</span>
                  <span className="w-1/2 font-bold">
                    <CopyFunctionality content={12378393} />
                  </span>
                </div>

                <div className="flex items-center w-full text-lg py-2  border-b border-gray-300  ">
                  <span className="w-1/2">VIN:</span>
                  <span className="w-1/2 font-bold"></span>
                </div>

                <div className="flex items-center w-full text-lg  py-2  border-b border-gray-300  ">
                  <span className="w-1/2">Odometer:</span>
                  <span className="w-1/2 font-bold">0 km</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default QuickViewModal;
