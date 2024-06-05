"use client";
import React, { useRef, useState } from "react";
import { IProduct } from "@/Interface/common";
import Image from "next/image";

// swiper
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper instance type
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// icons
import { IoArrowBackSharp } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { FaClock, FaHeart, FaMinus, FaPlus } from "react-icons/fa6";

const InventoryProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
  const allImgs = product.pictures;
  const swiperRef = useRef<SwiperType | null>(null);
  const [isWhislisted, setWhislist] = useState(false);
  const [isShowDetail, setShowDetail] = useState(false);

  return (
    <div className="w-full max-h-[80rem] border hover:border-blue-600 rounded overflow-hidden">
      {/* Images section  */}
      <div>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {allImgs.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="w-full border h-[350px] overflow-hidden">
                <Image
                  src={img}
                  className="w-full h-full relative"
                  width={600}
                  height={500}
                  alt="product picture"
                />

                <div>
                  <div className="absolute right-5 bottom-5 text-white text-sm bg-black  bg-opacity-50  px-2 py-0.5     flex items-center justify-center rounded-full">
                    <h2>1/{allImgs.length}</h2>
                  </div>
                  {/* timing */}
                  <div className="absolute left-5 top-5 text-gray-200 text-md bg-black  bg-opacity-100  px-2 py-1     flex items-center justify-center rounded-full">
                    <h2 className="flex items-center gap-2">
                      <FaClock /> 119 days
                    </h2>
                  </div>

                  <div
                    onMouseEnter={() => setWhislist(true)}
                    onMouseLeave={() => setWhislist(false)}
                    className="absolute right-5 top-5 text-gray-200 text-2xl bg-black  bg-opacity-100  px-2 py-2     flex items-center justify-center rounded-full"
                  >
                    <h2 className="flex items-center gap-2  ">
                      {isWhislisted ? <FaHeart /> : <FiHeart />}
                    </h2>
                  </div>
                </div>
                {/* Navigation buttons */}
                <div className="absolute left-0 bottom-1/2 bg-opacity-50 bg-black text-gray-200 py-2 px-3 flex items-center justify-center rounded-e-full">
                  <button onClick={() => swiperRef.current?.slidePrev()}>
                    <IoArrowBackSharp className="text-lg" />
                  </button>
                </div>
                <div className="absolute right-0 bottom-1/2 bg-opacity-50 bg-black text-gray-200 py-2 px-3 flex items-center justify-center rounded-s-full">
                  <button onClick={() => swiperRef.current?.slideNext()}>
                    <IoMdArrowForward className="text-lg" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx global>{`
          .swiper-pagination-bullet {
            background-color: white !important;
            width: 5px !important;
            height: 5px !important;
          }
        `}</style>
      </div>

      {/* Producţ details */}
      <div className=" p-5">
        <h2 className="font-bold   text-xl xl:text-2xl  text-blue-700">
          {product.title}
        </h2>
        {/* product info  */}
        <div className="w-full mt-5">
          <table className="table-auto w-full">
            <tbody>
              <tr>
                <td className="text-gray-500 p-1 ">Odometer:</td>
                <td className="font-bold ">1,493 km</td>
              </tr>
              <tr>
                <td className="text-gray-500 p-1">Damage:</td>
                <td className="font-bold p-1">FrontEnd</td>
              </tr>
              <tr>
                <td className="text-gray-500 p-1 ">Location:</td>
                <td className="font-bold  p-1">Hannover</td>
              </tr>
              <tr>
                <td className="text-gray-500  p-1">Sale Date:</td>
                <td className="font-bold p-1 ">
                  Wed, Oct 2, 2024 - 6:00 PM GMT+6
                </td>
              </tr>
              <tr>
                <td className="text-gray-500 p-1">Sale Status:</td>
                <td className="font-bold p-1">No Reserve</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          className={`w-full bg-blue-100 mt-5 rounded transition-all duration-500 overflow-hidden ${
            isShowDetail ? "max-h-[20rem]" : "max-h-[3rem]"
          }`}
        >
          <button
            onClick={() => setShowDetail(!isShowDetail)}
            className="w-full flex items-center justify-between text-blue-600  py-3 px-3  rounded-lg  "
          >
            <span>{isShowDetail ? "Less Details" : " More Details"}</span>{" "}
            <span>{isShowDetail ? <FaMinus /> : <FaPlus />}</span>
          </button>
          <table className={`table-auto w-full mx-2 `}>
            <tbody>
              <tr>
                <td className="text-gray-500 p-1">Transmission:</td>
                <td className="font-bold">Automatic</td>
              </tr>
              <tr>
                <td className="text-gray-500 p-1">Drive:</td>
                <td className="font-bold p-1">Front Wheel Drive</td>
              </tr>
              <tr>
                <td className="text-gray-500 p-1">Cylinders:</td>
                <td className="font-bold p-1">4</td>
              </tr>
              <tr>
                <td className="text-gray-500 p-1">Fuel:</td>
                <td className="font-bold p-1">Diesel</td>
              </tr>
              <tr>
                <td className="text-gray-500 p-1">Color:</td>
                <td className="font-bold p-1">Grey</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Bid Now button  */}
      <button className="w-full  text-white  bg-blue-600 hover:bg-blue-500 transition-color py-1">
        <span>Bid Now</span>
        <span className="font-bold text-2xl block">$0 USD</span>
      </button>
    </div>
  );
};

export default InventoryProductCard;
