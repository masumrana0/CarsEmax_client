import React, { useRef, useState } from "react";
import { Tooltip } from "antd";
import { FaRegCopy } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Link from "next/link";

const VehicleDetails = () => {
  const lotNumberRef = useRef<HTMLSpanElement>(null);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (lotNumberRef.current) {
      // Create a range to select the text
      const range = document.createRange();
      range.selectNode(lotNumberRef.current);

      // Select the text
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);

      // Copy text to clipboard
      document.execCommand("copy");

      // Deselect the text
      window.getSelection()?.removeAllRanges();

      // Set copied state to true to trigger the tooltip
      setCopied(true);

      // Reset copied state after some time
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  const titleCodeTooltContent = (
    <div>
      <b>NY MV-907A Salvage Certificate</b>
      <br />
      Title descriptions only describe the current title, which may change by
      type or issuing government during transaction. It is your responsibility
      to check with applicable motor vehicle agencies to determine if a
      particular vehicle and title type will transfer as expected and serve your
      purpose. Please see our{" "}
      <Link href={"/"} className="hover:underline text-blue-500">
        Member Terms and Conditions
      </Link>{" "}
      and our{" "}
      <Link href={"/"} className="hover:underline text-blue-500">
        Rules & Policies
      </Link>{" "}
      for more information.
    </div>
  );
  const RepairCostTooltContent = (
    <div>
      <b>Repair Cost</b>
      <br />
      <br />
      Repair Cost is the estimated cost to repair the vehicle as submitted to
      Copart by the seller of the vehicle. The Repair Cost listed here may vary
      greatly from the actual cost to repair this vehicle. The availability and
      use of recycled parts, varying labor rates, paint times, etc. greatly
      affect the cost to repair any vehicle.
      <br />
      <br />
      Copart recommends that each bidder evaluate the damage to determine the
      extent of the repairs necessary. This number is presented for
      informational purposes only. Copart or AutoBidMaster make no
      representations as to the validity or accuracy of the listed value.
    </div>
  );
  const OdometertooltipContent = (
    <div>
      <b>Odometer</b>
      <br />
      <br />
      Odometer codes are shown to reflect the known reliability of the odometer
      reading.
      <br />
      <b>ACTUAL</b>
      Means that the odometer reading is believed to be the true and actual
      mileage of the lot.
      <br />
      <b>EXCEEDS MECHANICAL LIMITS</b>
      Means that the true mileage of the lot cannot be expressed because it has
      exceeded the capacity of the odometer to measure it, in other words it has
      rolled over.
      <br />
      <br />
      <b>EXEMPT</b>
      <br />
      Means that by Federal Law, no odometer code is required to be displayed
      for this lot.
      <br />
      <br />
      <b>NOT ACTUAL</b>
      <br />
      Means that the odometer reading does not correctly reflect the mileage of
      the vehicle or it cannot be ascertained.
    </div>
  );

  return (
    <div className="  rounded-lg bg-gray-100">
      <div className="p-3">
        <h2 className="font-bold text-xl  ">Vehicle Details</h2>
        <p className="text-xs   mt-1">
          Sourced directly from the auction, not in our inventory
        </p>
      </div>
      <div className="text-md p-3 ">
        {/* Lot Number */}
        <div className="w-full flex justify-between border-b border-gray-200 py-2  px-3 ">
          <h4 className="w-1/2">Lot Number:</h4>
          <div className="flex items-center gap-1 w-1/2">
            <span ref={lotNumberRef}>
              <h3 className="font-semibold">47703684</h3>
            </span>
            <Tooltip
              overlayStyle={{ backgroundColor: "white" }}
              title={copied ? "Copied!" : "Copy Lot Number"}
            >
              <button className="text-gray-500" onClick={copyToClipboard}>
                <FaRegCopy />
              </button>
            </Tooltip>
          </div>
        </div>
        {/* Vin */}
        <div className="w-full flex justify-between border-b border-gray-200 py-2   px-3 ">
          <h4 className="w-1/2">VIN:</h4>
          <div className="flex items-center gap-1 w-1/2">
            <span ref={lotNumberRef}>
              <h3 className="font-semibold">1FT8W3BT7NE******</h3>
              <button className="px-2 py-1 mt-1 font-[400] border  border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded-full ">
                Get History Report{" "}
              </button>
            </span>
          </div>
        </div>

        {/* Title Code */}
        <div className="w-full flex justify-between border-b border-gray-200 py-2   px-3 ">
          <h4 className="w-1/2">Title Code:</h4>
          <div className="flex items-center justify-between w-1/2">
            <span>
              <h3 className="font-semibold">NY MV-907A SALVAGE</h3>
              <h3 className="font-semibold">CERTIFICATE</h3>
            </span>
            <Tooltip title={titleCodeTooltContent}>
              <button className="text-gray-500 text-xl">
                <IoMdInformationCircleOutline />
              </button>
            </Tooltip>
          </div>
        </div>

        {/* Odometer */}
        <div className="w-full flex justify-between border-b border-gray-200 py-2   px-3 ">
          <h4 className="w-1/2">Odometer:</h4>
          <div className="flex items-center justify-between w-1/2">
            <span>
              <h3 className="font-semibold">56,167 Not Actual</h3>
            </span>
            <Tooltip title={OdometertooltipContent}>
              <button className="text-gray-500 text-xl">
                <IoMdInformationCircleOutline />
              </button>
            </Tooltip>
          </div>
        </div>

        {/*  Primary Damage */}
        <div className="w-full flex justify-between border-b border-gray-200 py-2   px-3 ">
          <h4 className="w-1/2">Primary Damage:</h4>
          <div className="flex items-center   w-1/2">
            <span>
              <h3 className="font-semibold">Side</h3>
            </span>
          </div>
        </div>

        {/*  Repair Cost */}
        <div className="w-full flex justify-between border-b border-gray-200 py-2   px-3 ">
          <h4 className="w-1/2">Est. Repair Cost::</h4>
          <div className="flex items-center justify-between w-1/2">
            <span>
              <h3 className="font-semibold">$5,000 USD</h3>
            </span>
            <Tooltip title={OdometertooltipContent}>
              <button className="text-gray-500 text-xl">
                <IoMdInformationCircleOutline />
              </button>
            </Tooltip>
          </div>
        </div>

        {/*   Retail value */}
        <div className="w-full flex justify-between border-b border-gray-200 py-2   px-3 ">
          <h4 className="w-1/2">Est. Retail Value:</h4>
          <div className="flex items-center justify-between w-1/2">
            <span>
              <h3 className="font-semibold">$63,841 USD</h3>
            </span>
            <Tooltip title={OdometertooltipContent}>
              <button className="text-gray-500 text-xl">
                <IoMdInformationCircleOutline />
              </button>
            </Tooltip>
          </div>
        </div>

        {/*  Vehicle Type */}
        <div className="w-full flex justify-between border-b border-gray-200 py-2   px-3 ">
          <h4 className="w-1/2">Vehicle Type:</h4>
          <div className="flex items-center   w-1/2">
            <span>
              <h3 className="font-semibold">Car</h3>
            </span>
          </div>
        </div>

        {/*  Color */}
        <div className="w-full flex justify-between border-b border-gray-200 py-2   px-3 ">
          <h4 className="w-1/2">Color:</h4>
          <div className="flex items-center   w-1/2">
            <span>
              <h3 className="font-semibold">Black</h3>
            </span>
          </div>
        </div>

        {/*  Engine */}
        <div className="w-full flex justify-between border-b border-gray-200 py-2   px-3 ">
          <h4 className="w-1/2">Engine:</h4>
          <div className="flex items-center   w-1/2">
            <span>
              <h3 className="font-semibold">6.7L 8</h3>
            </span>
          </div>
        </div>

        {/*  Cylinders */}
        <div className="w-full flex justify-between border-b border-gray-200 py-2   px-3 ">
          <h4 className="w-1/2">Cylinders:</h4>
          <div className="flex items-center   w-1/2">
            <span>
              <h3 className="font-semibold">8</h3>
            </span>
          </div>
        </div>

        {/*  Drive */}
        <div className="w-full flex justify-between border-b border-gray-200 py-2   px-3 ">
          <h4 className="w-1/2">Drive:</h4>
          <div className="flex items-center   w-1/2">
            <span>
              <h3 className="font-semibold">4x4 w/Rear Wheel Drv</h3>
            </span>
          </div>
        </div>

        {/*  Fuel */}
        <div className="w-full flex justify-between border-b border-gray-200 py-2   px-3 ">
          <h4 className="w-1/2">Fuel:</h4>
          <div className="flex items-center   w-1/2">
            <span>
              <h3 className="font-semibold">Diesel</h3>
            </span>
          </div>
        </div>

        {/*   Auction Highlight */}
        <div className="w-full flex justify-between border-b border-gray-200 py-2   px-3 ">
          <h4 className="w-1/2">Auction Highlight:</h4>
          <div className="flex items-center justify-between w-1/2">
            <span>
              <h3 className="font-semibold">Run and Drive</h3>
            </span>
            <Tooltip title={OdometertooltipContent}>
              <button className="text-gray-500 text-xl">
                <IoMdInformationCircleOutline />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* text */}
      <div className="bg-gray-200  p-3">
        <p className="text-xs text-gray-800 ">
          According to the auction, at inventory, the vehicle was “Run & Drive”
          meaning the vehicle: 1) Started under its own power or with the use of
          an external jump box. 2) Was put into gear. 3) Moved forward. This
          designation is no guarantee, representation, or warranty that the
          vehicle will be able to start, be put into gear or be capable of
          moving forward at the time of the sale
        </p>
      </div>

      <div className="p-3">
        {/*  Auction Highlight */}
        <div className="w-full flex justify-between border-b border-gray-200 py-2 mt-3 px-3 ">
          <h4 className="w-1/2">Auction Highlight:</h4>
          <div className="flex items-center justify-between w-1/2">
            <span>
              <h3 className="font-semibold">Yes (not guaranteed)</h3>
            </span>
            <Tooltip title={OdometertooltipContent}>
              <button className="text-gray-500 text-xl">
                <IoMdInformationCircleOutline />
              </button>
            </Tooltip>
          </div>
        </div>

        {/* Special Note */}
        <div className="w-full flex justify-between border-b border-gray-200 py-2 mt-3 px-3 ">
          <h4 className="w-1/2">Special Note:</h4>
          <div className="flex items-center   w-1/2">
            <span>
              <h3 className="font-semibold">There are no Notes for this Lot</h3>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
