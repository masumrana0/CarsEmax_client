import { Tooltip } from "antd";
import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import clearvin from "/public/assets/icons/clearvin-logo.3b2355f8.svg";
import Image from "next/image";

const VehicleHistory = () => {
  return (
    <div className="p-5 mt-16 bg-gray-100 rounded-xl ">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center font-bold text-xl  gap-2">
          Vehicle History{" "}
          <button>
            <Tooltip
              title={
                "Check detailed information with instant vehicle history report."
              }
            >
              <IoMdInformationCircleOutline className="text-xl" />
            </Tooltip>
          </button>
        </h3>
        <Image
          src={clearvin}
          width={100}
          height={200}
          alt="clearvin svg icon"
        />
      </div>

      {/* Previous Auction Sales */}
      <div className="w-full flex justify-between border-b border-gray-200   py-2   ">
        <h4 className="w-1/2">Previous Auction Sales:</h4>
        <div className="flex items-center justify-between w-1/2">
          <span>
            <h3 className="font-semibold">1 Record(s) </h3>
          </span>
        </div>
      </div>

      {/* Previous Owners */}
      <div className="w-full flex justify-between border-b border-gray-200  py-2    ">
        <h4 className="w-1/2">Previous Owners:</h4>
        <div className="flex items-center justify-between w-1/2">
          <span>
            <h3 className="font-semibold">Record Found </h3>
          </span>
          <Tooltip title={"Estimated amount of previous car owners. "}>
            <button className="text-gray-500 text-xl">
              <IoMdInformationCircleOutline />
            </button>
          </Tooltip>
        </div>
      </div>

      {/* Title Brand History */}
      <div className="w-full flex justify-between border-b border-gray-200  py-2    ">
        <h4 className="w-1/2">Title Brand History:</h4>
        <div className="flex items-center justify-between w-1/2">
          <span>
            <h3 className="font-semibold">Record Found </h3>
          </span>
          <Tooltip title={"Estimated amount of previous car owners. "}>
            <button className="text-gray-500 text-xl">
              <IoMdInformationCircleOutline />
            </button>
          </Tooltip>
        </div>
      </div>

      {/* Lien/Impound/Theft: */}
      <div className="w-full flex justify-between border-b border-gray-200  py-2    ">
        <h4 className="w-1/2">Lien/Impound/Theft:</h4>
        <div className="flex items-center justify-between w-1/2">
          <span>
            <h3 className="font-semibold">Record Found </h3>
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

      {/*Safety Recalls: */}
      <div className="w-full flex justify-between border-b border-gray-200  py-2   ">
        <h4 className="w-1/2">Safety Recalls:</h4>
        <div className="flex items-center justify-between w-1/2">
          <span>
            <h3 className="font-semibold"> 7 Record(s)</h3>
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

      {/* Additional Photos: */}
      <div className="w-full flex justify-between border-b border-gray-200  py-2    ">
        <h4 className="w-1/2"> Additional Photos:</h4>
        <div className="flex items-center justify-between w-1/2">
          <span>
            <h3 className="font-semibold">10 Photos </h3>
          </span>
        </div>
      </div>

      <button className="w-full py-2 text-blue-500 border border-blue-500 font-bold hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded-full mt-3  ">
        GET FULL HISTORY REPORT
      </button>
    </div>
  );
};

export default VehicleHistory;
