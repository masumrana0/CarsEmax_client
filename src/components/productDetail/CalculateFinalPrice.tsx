"use client";
import { Tooltip } from "antd";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import { LuPrinter } from "react-icons/lu";

const countries = [
  { value: "AL", label: "Albania" },
  { value: "DZ", label: "Algeria" },
  { value: "AO", label: "Angola" },
  { value: "AI", label: "Anguilla" },
  { value: "AR", label: "Argentina" },
  // ... add more countries here
];
const CalculateFinalPrice = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isCheckedOne, setIsCheckedOne] = useState(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleCheckboxChangeOne = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsCheckedOne(event.target.checked);
  };
  const handleCheckboxChangeTwo = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsCheckedTwo(event.target.checked);
  };
  return (
    <div className="w-full flex flex-col md:flex-row   border-2 rounded mt-5 overflow-hidden">
      {/* left section  */}
      <section className="md:w-[42%] w-full bg-white p-2      text-xs lg:text-sm">
        <h3 className="font-bold text-xl mb-10 mt-5">
          Calculate the Final Price for Any Vehicle
        </h3>
        <div className="md:space-y-4 space-y-2 ">
          {/* Lot or VIN */}
          <div className="flex md:items-center justify-between md:flex-row flex-col">
            <h3 className="text-nowrap mb-2   md:mb-0 ">Lot# or VIN</h3>
            <input
              className="md:w-[70%] w-full  p-3 md:p-4  rounded  outline-none border  focus:red-200  hover:bg-gray-200"
              placeholder="Enter Lot # or VIN "
              type="text"
              name=""
              id=""
            />
          </div>
          {/* Aucation Location  */}
          <div className="flex md:items-center justify-between md:flex-row flex-col">
            <h3 className="text-nowrap mb-2  md:mb-0 ">Auction Location</h3>

            <select
              disabled
              value={selectedCountry}
              onChange={handleChange}
              className="md:w-[70%] w-full  p-3 md:p-4  rounded  outline-none border  focus:red-200  hover:bg-gray-200"
            >
              <option value="">NY - NewBurgh</option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>

          {/* sheeping to country */}
          <div className="flex md:items-center justify-between md:flex-row flex-col">
            <h3 className="text-nowrap mb-2  md:mb-0 ">Shipping to Country</h3>

            <select
              value={selectedCountry}
              onChange={handleChange}
              className="md:w-[70%] w-full  p-3 md:p-4  rounded  outline-none border  focus:red-200  hover:bg-gray-200"
            >
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>

          {/* port  */}
          <div className="flex md:items-center justify-between md:flex-row flex-col">
            <h3 className="text-nowrap mb-2  md:mb-0 ">Port</h3>

            <select
              value={selectedCountry}
              onChange={handleChange}
              className="md:w-[70%] w-full  p-3 md:p-4  rounded  outline-none border  focus:red-200  hover:bg-gray-200"
            >
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>

          {/*From Us port  */}
          <div className="flex md:items-center justify-between md:flex-row flex-col">
            <h3 className="text-nowrap mb-2  md:mb-0 ">From US Port</h3>

            <select
              disabled
              value={selectedCountry}
              onChange={handleChange}
              className="md:w-[70%] w-full  p-3 md:p-4  rounded  outline-none border  focus:red-200  hover:bg-gray-200"
            >
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Right Section */}
      <section className="md:w-[58%] w-full    ">
        <section
          className="w-full
             bg-blue-100  "
        >
          <div className="lg:px-5 px-2 pt-2 lg:pt-5">
            {/* Shiiping INfo */}
            <div>
              <div className=" w-full flex items-center justify-between text-sm md:text-md   py-2  border-b-[0.5px] border-green-900">
                <p className=" flex items-center ">
                  Final Bid at Auction
                  <Tooltip
                    overlayInnerStyle={{
                      width: "18rem",
                    }}
                    placement="bottom"
                    title={
                      "Total Loss Coverage means that we will cover the fair market value of your vehicle as of the day of the loss, attributable to: fire or explosion, vessel stranded/capsized, overturning or derailment. Reimbursement is provided as credit on AutoBidMaster account and can be used toward the next purchases or services. Not applicable for moisture/weather condition damage. "
                    }
                    arrow={true}
                  >
                    <span className="text-gray-300 hover:text-white text-xl lg:text-2xl mt-1">
                      <IoInformationCircleOutline />
                    </span>
                  </Tooltip>
                </p>

                <h3 className="text-nowrap">
                  <span className="font-bold">$285</span> USD
                </h3>
              </div>

              <div className="w-full flex items-center justify-between text-sm md:text-md   py-2 border-b-[0.5px] border-green-900  ">
                <p className=" flex items-center">
                  Copart Fees
                  <Tooltip
                    overlayInnerStyle={{
                      width: "30rem",
                    }}
                    placement="bottom"
                    title={
                      "We provide vehicle shipping services from the USA to your country. Your vehicle will be loaded into container and delivered to the port. Our representative will assist you with customs clearance. Cost of custom clearance and unloading are not included in shipping price. Ocean shipping rates are based on consolidation in 40ft container together with 1-3 vehicles. For other shipping types such as RORO or FCL, please contact us before we start working on your order. We offer only 30 days of free storage at our warehouses, after 30 days storage fees will apply. In case of pending documents, storage fees may be applied starting the 1st day of storage. "
                    }
                    arrow={true}
                  >
                    <span className="text-gray-300 hover:text-white text-xl lg:text-2xl mt-1">
                      <IoInformationCircleOutline />
                    </span>
                  </Tooltip>
                </p>

                <h3 className=" text-nowrap  ">
                  <span className="font-bold">$285</span> USD
                </h3>
              </div>

              <div className="w-full flex items-center justify-between py-2 text-sm md:text-md   border-b-[0.5px] border-green-900  ">
                <p className="flex items-center">
                  CarsEMax Transaction Fees
                  <Tooltip
                    overlayInnerStyle={{
                      width: "20rem",
                    }}
                    placement="bottom"
                    title={
                      "Surcharge that applies during times of peak demand. Peak Season Surcharge applied due to high congestion in the ports, drayage cost increase, and equipment shortage. "
                    }
                    arrow={true}
                  >
                    <span className="text-gray-300 hover:text-white text-xl lg:text-2xl mt-1">
                      <IoInformationCircleOutline />
                    </span>
                  </Tooltip>
                </p>

                <h3>
                  <span className="font-bold text-nowrap">$285</span> USD
                </h3>
              </div>
              {/* Unlimited storage  */}
              <div className="w-full flex lg:items-center  lg:justify-between md:flex-row flex-col gap-2 h-[3.5rem] py-2  md:border-b-[0.5px] border-green-900    ">
                <div className="flex items center gap-2 text-sm md:text-md  ">
                  <input
                    type="checkbox"
                    id="show-number-input"
                    checked={isCheckedOne}
                    onChange={handleCheckboxChangeOne}
                    className="mt-1 focus:ring-white focus:border-blue-500 h-4 w-4 lg:h-5 lg:w-5"
                  />
                  <h2 className="flex items-center">
                    Unlimited Auction Storage
                    <Tooltip
                      overlayInnerStyle={{
                        width: "20rem",
                      }}
                      placement="bottom"
                      title={
                        <span>
                          Total Loss Coverage means that we will cover the fair
                          market value of your vehicle as of the day of the
                          loss, attributable to: fire or explosion, vessel
                          stranded/capsized, overturning or derailment.
                          Reimbursement is provided as credit on AutoBidMaster
                          account and can be used toward the next purchases or
                          services. Not applicable for moisture/weather
                          condition damage.
                        </span>
                      }
                      arrow={true}
                    >
                      <span className="text-gray-300 hover:text-white text-xl lg:text-2xl mt-1">
                        <IoInformationCircleOutline />
                      </span>
                    </Tooltip>
                  </h2>
                </div>
                {isCheckedOne ? (
                  <h2 className="text-sm md:text-md">
                    <span className="font-bold text-nowrap">$285</span>{" "}
                    <span>USD</span>
                  </h2>
                ) : (
                  <span>-----</span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* bottom section  */}
        <section className="w-full p-5   bg-blue-200   text-sm md:text-lg  ">
          <div>
            <div className="w-full flex items-center justify-between py-2 text-sm md:text-md   border-b-[0.5px] border-green-900  ">
              <p className="flex items-center">
                Shipping Cost
                <Tooltip
                  overlayInnerStyle={{
                    width: "20rem",
                  }}
                  placement="bottom"
                  title={
                    "Surcharge that applies during times of peak demand. Peak Season Surcharge applied due to high congestion in the ports, drayage cost increase, and equipment shortage. "
                  }
                  arrow={true}
                >
                  <span className="text-gray-300 hover:text-white text-xl lg:text-2xl mt-1">
                    <IoInformationCircleOutline />
                  </span>
                </Tooltip>
              </p>

              <h3>
                <span className="font-bold text-nowrap">-----</span>
              </h3>
            </div>
            <div className=" ">
              {/* Full Coverage */}
              <div className="w-full flex lg:items-center   lg:justify-between md:flex-row flex-col gap-2 h-[3.5rem] py-2  md:border-b-[0.5px] border-green-900  ">
                <div className="flex items center gap-2 text-sm md:text-md  ">
                  <input
                    type="checkbox"
                    id="show-number-input"
                    checked={isCheckedTwo}
                    onChange={handleCheckboxChangeTwo}
                    className="mt-1 focus:ring-white  focus:border-blue-500 h-4 w-4 lg:h-5 lg:w-5"
                  />
                  <h2 className="flex items-center">
                    Full Coverage (5%){" "}
                    <Tooltip
                      overlayInnerStyle={{
                        width: "20rem",
                      }}
                      placement="bottom"
                      title={
                        "Full Coverage means that we will provide you with reimbursement for mechanical damage. Deductible is $500. Reimbursement is provided as credit on AutoBidMaster account and can be used toward the next purchases or services. Not applicable for moisture/weather condition damage. "
                      }
                      arrow={true}
                    >
                      <span className="text-gray-300 hover:text-white text-xl lg:text-2xl mt-1">
                        <IoInformationCircleOutline />
                      </span>
                    </Tooltip>
                  </h2>
                </div>
                {isCheckedTwo ? (
                  <h2 className="text-sm md:text-md">
                    <span className="font-bold text-nowrap">$385</span> USD
                  </h2>
                ) : (
                  <span>-----</span>
                )}
              </div>
            </div>
          </div>

          <h2 className="flex items-center justify-between font-semibold ">
            <span>Total Price</span>{" "}
            <span className="font-bold text-xl ">$3,885 USD</span>
          </h2>

          <div className="my-5 flex items-center gap-5">
            <button className="flex items-center gap-1 text-xl lg:text-2xl">
              <LuPrinter />{" "}
              <span className="hover:underline text-sm  md:text-lg lg:text-xl">
                Print
              </span>
            </button>
            <button className="flex items-center gap-1 text-xl lg:text-2xl">
              <FaRegCopy />{" "}
              <span className="hover:underline text-sm md:text-lg lg:text-xl">
                Copy
              </span>
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default CalculateFinalPrice;
