"use client";
import React, { useRef, useState } from "react";
import products from "/car.json";
import ProductCard from "../Shared/ProductCard";
import { IProduct } from "@/Interface/common";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
import SwiperCore, { Navigation, Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Initialize Swiper and its modules
SwiperCore.use([Pagination]);

const SimilarVehicles: React.FC<{ isClean?: boolean }> = ({ isClean }) => {
  const [slides, setSlides] = useState(products);

  const prepend = () => {
    setSlides([
      ...products.slice(products.length - 2), // Prepend the last two products
      ...slides,
    ]);
  };

  const append = () => {
    setSlides([...slides, ...products.slice(0, 1)]); // Append the first product
  };

  const slideTo = (index) => {
    // Implement slideTo logic if needed
  };

  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        pagination={{ clickable: true }}
        virtual
      >
        {slides.map((product: IProduct, index) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} isClean={isClean} />
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="append-buttons">
        <button onClick={prepend} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        {/* Add buttons for other actions as needed */}
      </p>
    </>
  );
};

export default SimilarVehicles;

//  <div className="mt-10" {...swipeHandlers}>
//       <div className="text-xl flex items-center gap-5 float-end mb-5">
//         <button
//           className="p-2 border rounded-full hover:bg-blue-300"
//           onClick={handleGoPreviousProducts}
//           disabled={productIndex[0] === 0}
//         >
//           <FiArrowLeft />
//         </button>
//         <button
//           className="p-2 border rounded-full hover:bg-blue-300"
//           onClick={handleGoNextProducts}
//           disabled={productIndex[1] >= products.length}
//         >
//           <FiArrowRight />
//         </button>
//       </div>
//       <div className="flex items-center flex-wrap md:flex-nowrap  w-full gap-3 mt-4">
//         {products
//           .slice(productIndex[0], productIndex[1])
//           .map((product: IProduct, index: number) => (
//             <ProductCard product={product} key={index} isClean={isClean} />
//           ))}
//       </div>
//     </div>
