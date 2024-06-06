import { Tooltip } from "antd";
import React, { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import clearvin from "/public/assets/icons/clearvin-logo.3b2355f8.svg";
import Image from "next/image";
import Link from "next/link";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { BiRightArrow } from "react-icons/bi";
import { HiOutlineArrowSmRight } from "react-icons/hi";



const BidInformation: React.FC<{ useForQuickViewModal?: boolean }> = ({
  useForQuickViewModal = false,
}) => {
 
  const [startingBid, setStartingBid] = useState(400);
  const [maximumBid, setMaximumBid] = useState(525);

  return (
    <div className="bg-gray-100   ">
      {/* Bid Information  */}
      <div>
        {/* Section Title  */}
        <div className="flex items-center justify-between p-5">
          <h3 className="flex items-center font-bold text-xl  gap-2">
            Bid Information{" "}
          </h3>
        </div>

        <div className="p-5">
          {/* Top Part  */}
          <div>
            {/* Bid Status */}
            <div className="w-full flex justify-between border-b border-gray-300  py-2    ">
              <h4 className="w-1/2">Bid Status:</h4>
              <div className="flex items-center justify-between w-1/2">
                <span>
                  <h3 className="font-semibold">You Haven&apos;t bid </h3>
                </span>
                <Tooltip title={"Estimated amount of previous car owners. "}>
                  <button className="text-gray-500 text-xl">
                    <IoMdInformationCircleOutline />
                  </button>
                </Tooltip>
              </div>
            </div>

            {/* Sale Status */}
            <div className="w-full flex justify-between border-b border-gray-300  py-2    ">
              <h4 className="w-1/2">Sale Status:</h4>
              <div className="flex items-center justify-between w-1/2">
                <span>
                  <h3 className="font-semibold">On Minimum Bid </h3>
                </span>
                <Tooltip title={"Estimated amount of previous car owners. "}>
                  <button className="text-gray-500 text-xl">
                    <IoMdInformationCircleOutline />
                  </button>
                </Tooltip>
              </div>
            </div>

            {/*Recommended Bid */}
            <div className="w-full flex justify-between border-b border-gray-300  py-2    ">
              <h4 className="w-1/2">Recommended Bid:</h4>
              <div className="flex items-center justify-between w-1/2">
                <span>
                  <h3 className="font-semibold">
                    {" "}
                    <span className="text-blue-500 underline">
                      <Link href={"/login"}>Login </Link>
                      <Link href={"/register"}>Login </Link>
                    </span>{" "}
                    to view
                  </h3>
                </span>
                <Tooltip
                  title={
                    "Check report for bank name and date if lien or theft reported. Vehicles with open liens/theft records may have problems with title issuance or export. "
                  }
                >
                  <button className="text-gray-500 text-xl">
                    <IoMdInformationCircleOutline />
                  </button>
                </Tooltip>
              </div>
            </div>

            {/* Currect Bid */}
            <div className="w-full flex justify-between border-b border-gray-300  py-2   ">
              <h4 className="w-1/2">Current Bid:</h4>
              <div className="flex items-center justify-between w-1/2">
                <span>
                  <h3 className="font-semibold text-2xl mb-1">
                    <span className="font-bold ">$0</span>
                  </h3>
                  <p className="font-bold text-xs">
                    Seller Reserve Not Yet Met
                  </p>
                </span>
                <Tooltip
                  title={
                    "Open NHTSA recalls from major light auto automakers, motorcycle manufacturers and some medium/heavy truck manufacturers."
                  }
                >
                  <button className="text-gray-500 text-xl">
                    <IoMdInformationCircleOutline />
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>

          {/* Bootom part  */}
          {!useForQuickViewModal && (
            <div>
              {/* Time Left */}
              <div className="w-full flex justify-between    py-2    ">
                <h4 className="w-[40%]"> Time left:</h4>
                <div className="flex items-center justify-between w-[60%]">
                  <span>
                    <h3 className="text-nowrap ">
                      {" "}
                      <span className="font-semibold  text-red-500">
                        2D 6h 59m 5s
                      </span>{" "}
                      <span className="underline text-xs">
                        (Add to calendar)
                      </span>{" "}
                    </h3>
                  </span>
                  <Tooltip
                    title={
                      "Open NHTSA recalls from major light auto automakers, motorcycle manufacturers and some medium/heavy truck manufacturers."
                    }
                  >
                    <button className="text-gray-500 text-xl">
                      <IoMdInformationCircleOutline />
                    </button>
                  </Tooltip>
                </div>
              </div>

              {/* Starting Bid */}
              <div className="w-full flex justify-between    py-2    ">
                <h4 className="w-1/2">
                  <span className="flex items-center gap-1">
                    Starting Bid{" "}
                    <span className="mt-1">
                      {" "}
                      <Tooltip
                        title={
                          "Open NHTSA recalls from major light auto automakers, motorcycle manufacturers and some medium/heavy truck manufacturers."
                        }
                      >
                        <button className="text-gray-500 text-xl">
                          <IoMdInformationCircleOutline />
                        </button>
                      </Tooltip>
                    </span>{" "}
                  </span>{" "}
                  <span className="text-sm block">($200 USD increment)</span>
                </h4>
                <div className="flex items-center justify-between w-1/2 bg-white  px-2 rounded border border-gray-400">
                  <button
                    onClick={() => setStartingBid((previous) => previous - 25)}
                    className="text-white text-xl h-7 w-7 bg-gray-400 rounded-full flex items-center justify-center"
                  >
                    <FaMinus />
                  </button>
                  <span className="font-bold text-xl">${startingBid}</span>
                  <button
                    onClick={() => setStartingBid((previous) => previous + 25)}
                    className="text-white text-xl h-7 w-7 bg-gray-400 rounded-full flex items-center justify-center"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>

              {/*  Maximum Bid */}
              <div className="w-full flex justify-between    py-2    ">
                <h4 className="w-1/2">
                  <span className="flex items-center gap-1">
                    Maximum Bid
                    <span className="mt-1">
                      {" "}
                      <Tooltip
                        title={
                          "Open NHTSA recalls from major light auto automakers, motorcycle manufacturers and some medium/heavy truck manufacturers."
                        }
                      >
                        <button className="text-gray-500 text-xl">
                          <IoMdInformationCircleOutline />
                        </button>
                      </Tooltip>
                    </span>{" "}
                  </span>{" "}
                  <span className="text-sm block">($200 USD increment)</span>
                </h4>
                <div className="flex items-center justify-between w-1/2 bg-white  px-2 rounded border border-gray-400">
                  <button
                    onClick={() => setMaximumBid((previous) => previous - 25)}
                    className="text-white text-xl h-7 w-7 bg-gray-400 rounded-full flex items-center justify-center"
                  >
                    <FaMinus />
                  </button>
                  <span className="font-bold text-xl">${maximumBid}</span>
                  <button
                    onClick={() => setMaximumBid((previous) => previous + 25)}
                    className="text-white text-xl h-7 w-7 bg-gray-400 rounded-full flex items-center justify-center"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              {/* Bid Now button */}
              <div className="px-5">
                <button className="w-full py-2  text-gray-800    font-bold bg-orange-400 hover:bg-orange-300   transition-colors duration-300 rounded-full mt-3  ">
                  BID NOW{" "}
                  <span className="float-right text-2xl mr-2">
                    <HiOutlineArrowSmRight />
                  </span>
                </button>
              </div>

              {/*  */}
              <div className="text-center  mt-1">
                <Link
                  className="  hover:underline mt-5 text-gray-700 text-sm mx-auto mb-3"
                  href={"/"}
                >
                  Final Price Estimator
                </Link>

                <div className=" border-t border-gray-300">
                  <p className="text-xs mt-3">
                    All bids are legally binding, and sales are
                    &quot;as-is&quot; and final .{" "}
                    <Link className="underline" href={"/"}>
                      Learn More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BidInformation;
