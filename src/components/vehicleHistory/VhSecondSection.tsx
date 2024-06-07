import Image from "next/image";
import React from "react";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

const VhSecondSection = () => {
  return (
    <div className="mx-[1rem]  sm:mx-[2rem]  xl:mx-[10rem]    py-20  text-center   ">
      <h2 className="text-3xl font-[500]  tracking-wide mb-2">
        Reveal the True Vehicle History and Bid with Confidence
      </h2>
      <p className="xl:w-[80%] mx-auto my-5 text-gray-700  ">
        Thanks to extensive partnerships throughout the automotive industry,
        ClearVin gives customers unique information gathered in easy-to-read and
        multilingual vehicle reports that helps to avoid costly problems and
        support the right buying decisions.
      </p>

      <div className="flex justify-center items-center xl:flex-row flex-col gap-5">
        {/* Before sale section  */}
        <div className="bg-white p-5 rounded-lg">
          <h2 className="font-bold text-lg mb-3 ">1 MONTH BEFORE SALE</h2>
          <div className="flex items-center lg:flex-row flex-col gap-3">
            <Image
              src={
                "https://www.autobidmaster.com/build/spa/images/photo1.6422685e.jpg"
              }
              width={300}
              height={300}
              alt="Car image"
            />
            <Image
              src={
                "https://www.autobidmaster.com/build/spa/images/photo2.24c6a7b8.jpg"
              }
              width={300}
              height={300}
              alt="Car image"
            />
          </div>
        </div>
        {/* after sale section  */}
        <div className="bg-white p-5 rounded-lg text-lg font-bold relative  ">
          <div className=" mb-3">
            <h2>ON SALE</h2>
            <h2 className="flex items-center text-xs  md:text-md    gap-1 text-red-700 absolute right-5 top-5">
              <BsFillExclamationTriangleFill />
              <span>SCAM ALERT</span>
            </h2>
          </div>

          <div className="flex items-center lg:flex-row flex-col gap-3">
            <Image
              src={
                "https://www.autobidmaster.com/build/spa/images/photo3.27d42342.jpg"
              }
              width={300}
              height={300}
              alt="Car image"
            />
            <Image
              src={
                "https://www.autobidmaster.com/build/spa/images/photo4.e51932f7.jpg"
              }
              width={300}
              height={300}
              alt="Car image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VhSecondSection;
