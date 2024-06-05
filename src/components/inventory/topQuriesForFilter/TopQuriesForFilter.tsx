"use client";
import React, { useRef, useState } from "react";

// swiper
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper instance type
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
// CSS Module
import styles from "./TopQuriesForFilter.module.css";

// Redux Components
import { filterToggle } from "@/Redux/Slices/FilterSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";

// icons
import { IoMdArrowDropright } from "react-icons/io";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { HiOutlinePlus } from "react-icons/hi";
import { MdOutlineArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

const TopQueriesForFilter = () => {
  // Redux
  const dispatch = useAppDispatch();
  const isFilterVisible = useAppSelector((state) => state.filterSlice.isFilter);

  // Create a Swiper instance ref
  const swiperRef = useRef<SwiperType>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setCurrentSlide(swiperRef.current.activeIndex);
      setTotalSlides(swiperRef.current.slides.length);
    }
  };

  

  return (
    <div className="flex  lg:flex-row flex-col  lg:items-center   gap-5 bg-gray-50  lg:p-5">
      {/* Visible or invisible filter section */}
      <button
        onClick={() => dispatch(filterToggle())}
        className={`font-bold text-xl ${
          isFilterVisible ? "text-white bg-blue-600" : "text-blue-600"
        } px-2 py-1.5 border border-blue-600 hidden lg:flex items-center gap-1 rounded-full transition-colors `}
      >
        <PiSlidersHorizontalBold />
        <span className="text-[17px]">FILTERS</span>
        <IoMdArrowDropright />
      </button>

      {/* Queries Swiper */}
      <div className="relative w-full lg:w-[80%] flex items-center">
        {currentSlide > 0 && (
          <button
            className="mr-2  p-2 text-xl bg-blue-600 text-white rounded-full"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <MdArrowBackIosNew />
          </button>
        )}
        {/* Seiper Content */}
        <div className="w-full  px-1  border-x border-gray-500   ">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView="auto"
            spaceBetween={20}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setTotalSlides(swiper.slides.length);
            }}
            onSlideChange={handleSlideChange}
          >
            <div className="!flex  !items-center justify-between gap-3 ">
              <SwiperSlide className={styles.customSwiperSlide}>
                <div>
                  <button className="font-semibold text-nowrap text-sm  md:text-md lg:text-xl px-3 py-1.5 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 flex items-center gap-1 rounded-full transition-color">
                    <span className=" text-[12px] lg:text-[15px] text-nowrap">
                      Clean Title(32,592)
                    </span>
                    <HiOutlinePlus />
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.customSwiperSlide}>
                <div>
                  <button className="font-semibold text-nowrap text-sm  md:text-md lg:text-xl px-3 py-1.5 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 flex items-center gap-1 rounded-full transition-color">
                    <span className=" text-[12px] lg:text-[15px] text-nowrap">
                      Buy It Now(32,592)
                    </span>
                    <HiOutlinePlus />
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.customSwiperSlide}>
                <div>
                  <button className="font-semibold text-nowrap text-sm  md:text-md lg:text-xl px-3 py-1.5 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 flex items-center gap-1 rounded-full transition-color">
                    <span className=" text-[12px] lg:text-[15px] text-nowrap">
                      Future Sale Items(32,592)
                    </span>
                    <HiOutlinePlus />
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.customSwiperSlide}>
                <div>
                  <button className="font-semibold text-nowrap text-sm  md:text-md lg:text-xl px-3 py-1.5 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 flex items-center gap-1 rounded-full transition-color">
                    <span className=" text-[12px] lg:text-[15px] text-nowrap">
                      Electric(32,592)
                    </span>
                    <HiOutlinePlus />
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.customSwiperSlide}>
                <div>
                  <button className="font-semibold text-nowrap text-sm  md:text-md lg:text-xl px-3 py-1.5 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 flex items-center gap-1 rounded-full transition-color">
                    <span className=" text-[12px] lg:text-[15px] text-nowrap">
                      Hybrid Engine(32,592)
                    </span>
                    <HiOutlinePlus />
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.customSwiperSlide}>
                <div>
                  <button className="font-semibold text-nowrap text-sm  md:text-md lg:text-xl px-3 py-1.5 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 flex items-center gap-1 rounded-full transition-color">
                    <span className=" text-[12px] lg:text-[15px] text-nowrap">
                      Insurance(32,592)
                    </span>
                    <HiOutlinePlus />
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.customSwiperSlide}>
                <div>
                  <button className="font-semibold text-nowrap text-sm  md:text-md lg:text-xl px-3 py-1.5 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 flex items-center gap-1 rounded-full transition-color">
                    <span className=" text-[12px] lg:text-[15px] text-nowrap">
                      Rental(32,592)
                    </span>
                    <HiOutlinePlus />
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.customSwiperSlide}>
                <div>
                  <button className="font-semibold text-nowrap text-sm  md:text-md lg:text-xl px-3 py-1.5 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 flex items-center gap-1 rounded-full transition-color">
                    <span className=" text-[12px] lg:text-[15px] text-nowrap">
                      Classics(32,592)
                    </span>
                    <HiOutlinePlus />
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.customSwiperSlide}>
                <div>
                  <button className="font-semibold text-nowrap text-sm  md:text-md lg:text-xl px-3 py-1.5 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 flex items-center gap-1 rounded-full transition-color">
                    <span className=" text-[12px] lg:text-[15px] text-nowrap">
                      Exotics(32,592)
                    </span>
                    <HiOutlinePlus />
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.customSwiperSlide}>
                <div>
                  <button className="font-semibold text-nowrap text-sm  md:text-md lg:text-xl px-3 py-1.5 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 flex items-center gap-1 rounded-full transition-color">
                    <span className=" text-[12px] lg:text-[15px] text-nowrap">
                      Runs and Drives(32,592)
                    </span>
                    <HiOutlinePlus />
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.customSwiperSlide}>
                <div>
                  <button className="font-semibold text-nowrap text-sm  md:text-md lg:text-xl px-3 py-1.5 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 flex items-center gap-1 rounded-full transition-color">
                    <span className=" text-[12px] lg:text-[15px] text-nowrap">
                      Copart Select(32,592)
                    </span>
                    <HiOutlinePlus />
                  </button>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>

        {currentSlide < totalSlides - 1 && (
          <button
            className="ml-2 p-2 text-xl bg-blue-600 text-white rounded-full hidden lg:block"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <MdOutlineArrowForwardIos />
          </button>
        )}
      </div>
      <style jsx>{`
        .swiper-slide {
          margin: 0 10px !important;
          flex-basis: content !important;
        }
      `}</style>
    </div>
  );
};

export default TopQueriesForFilter;
