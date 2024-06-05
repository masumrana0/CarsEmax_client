"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";
import { HiOutlineZoomIn } from "react-icons/hi";
import ReactImageMagnify from "react-image-magnify";

const ProductImages = ({ productImages }: { productImages: string[] }) => {
  const [imgIndex, setImgIndex] = useState(0);

  // Handler for going to the next image
  const handleComeNextImg = () => {
    setImgIndex((prevIndex) => (prevIndex + 1) % productImages.length);
  };

  // Handler for going to the previous image
  const handleComePreviousImg = () => {
    setImgIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full">
      {/* Main image container */}
      <div className="rounded-lg h-[20rem] md:h-[30rem] relative group">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Product Image",
              isFluidWidth: true,
              src: productImages[imgIndex],
            },
            largeImage: {
              src: productImages[imgIndex],
              width: 1200,
              height: 1800,
            },
            enlargedImageContainerStyle: { zIndex: 9 },
            isHintEnabled: true,
            hintTextMouse: "Click to Zoom",
          }}
        />

        {/* Zoom hint button */}
        <div className=" group-hover:hidden absolute top-4 left-5 bg-opacity-50 flex items-center gap-2 bg-black text-gray-200 py-1 px-2 rounded-full">
          <HiOutlineZoomIn className="text-xl" /> Click image to zoom
        </div>

        {/* Navigation buttons */}
        <div className="hidden group-hover:block absolute left-0 bottom-1/2 bg-opacity-50 bg-black text-gray-200 py-2 px-4 rounded-full">
          <button onClick={handleComePreviousImg}>
            <IoArrowBackSharp className="text-2xl" />
          </button>
        </div>
        
        <div className="hidden group-hover:block absolute right-0 bottom-1/2 bg-opacity-50 bg-black text-gray-200 py-2 px-4 rounded-full">
          <button onClick={handleComeNextImg}>
            <IoMdArrowForward className="text-2xl" />
          </button>
        </div>

        {/* Total photos label */}
        <h3 className="absolute left-5 bottom-5 bg-opacity-50 bg-black text-gray-200 py-2 px-4 rounded-full">
          {productImages.length} PHOTOS
        </h3>
      </div>

      {/* Thumbnails container */}
      <div className="my-28 flex flex-wrap gap-2 w-full items-center">
        {productImages.map((img, index) => (
          <button
            onClick={() => setImgIndex(index)}
            key={index}
            className="w-[4rem] h-[2rem] md:w-[8rem] md:h-[4rem] rounded overflow-hidden"
          >
            <Image
              className="h-full w-full object-cover"
              src={img}
              width={500}
              height={500}
              alt={`product img ${index + 1}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
