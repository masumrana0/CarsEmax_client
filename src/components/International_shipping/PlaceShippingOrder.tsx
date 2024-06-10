"use client";
import React, { useState } from "react";

// icons
import { IoInformationCircleOutline } from "react-icons/io5";
import { LuPrinter } from "react-icons/lu";
import { FaRegCopy } from "react-icons/fa6";
import { Tooltip } from "antd";

const countries = [
  { value: "AL", label: "Albania" },
  { value: "DZ", label: "Algeria" },
  { value: "AO", label: "Angola" },
  { value: "AI", label: "Anguilla" },
  { value: "AR", label: "Argentina" },
];
const PlaceShippingOrder = () => {
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
    <div className="xl:w-[65%] lg:w-[75%] w-full mx-auto  ">
      <div className="py-10 container mx-auto  ">
        <div>
          <h2 className=" text-3xl xl:text-4xl text-center mb-10">
            Place Shipping Order
          </h2>
        </div>
        {/* Processing  */}
        <div className="mx-5 md:mx-0">
          <div className="flex items-center">
            <div>
              <span className="w-12 h-12  p-2 flex  items-center justify-center border  bg-blue-200    rounded-full">
                <span className="  h-6 w-6  flex items-center justify-center  text-white  bg-blue-700 rounded-full">
                  1
                </span>
              </span>
            </div>

            <hr className="  w-full border-t border-gray-400"></hr>

            <span className="border p-2 h-6 w-6 flex items-center justify-center bg-gray-400 text-white  rounded-full">
              2
            </span>
            <hr className="  w-full border-t border-gray-400"></hr>
            <span className="border p-2 h-6 w-6 flex items-center justify-center bg-gray-400 text-white  rounded-full">
              3
            </span>
          </div>
          <div className="w-full flex items-center">
            <h3 className=" text-nowrap font-bold text-gray-500   text-xs  ">
              Shipping Quote
            </h3>
            <div className="  w-full "></div>
            <h3 className="text-nowrap  text-gray-500 text-xs">
              Complete Order
            </h3>
            <div className="  w-full  "></div>
            <h3 className="text-nowrap   text-gray-500 text-xs">
              Order Placed
            </h3>
          </div>
        </div>

        <div className="w-full flex items-center flex-col md:flex-row     rounded-lg mt-5 overflow-hidden ">
          {/* left section  */}
          <section className="md:w-1/2 w-full h-full   bg-white   p-9  space-y-4     text-xs md:text-md  ">
            {/* Lot or VIN */}
            <div className="flex md:items-center justify-between md:flex-row flex-col">
              <h3 className="text-nowrap mb-2   md:mb-0 ">Lot# or VIN</h3>
              <input
                className="md:w-[70%] w-full  p-3    rounded  outline-none border  focus:red-200  hover:bg-gray-200"
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
                className="md:w-[70%] w-full  p-3    rounded  outline-none border  focus:red-200  hover:bg-gray-200"
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
              <h3 className="text-nowrap mb-2  md:mb-0 ">
                Shipping to Country
              </h3>

              <select
                value={selectedCountry}
                onChange={handleChange}
                className="md:w-[70%] w-full  p-3   rounded  outline-none border  focus:red-200  hover:bg-gray-200"
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
                className="md:w-[70%] w-full  p-3    rounded  outline-none border  focus:red-200  hover:bg-gray-200"
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
                className="md:w-[70%] w-full  p-3    rounded  outline-none border  focus:red-200  hover:bg-gray-200"
              >
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>
          </section>

          {/* Right Section */}
          <section className="md:w-1/2  w-full  h-full   ">
            {/* top section */}
            <section
              className="w-full
             bg-[#23618b] text-white"
            >
              <div className="lg:px-5 px-5 pt-2 lg:pt-5">
                {/* section title  */}
                <h2 className="font-bold  text-md     pb-2 my-2 text-white border-b-[0.5px] border-green-900">
                  SHIPPING ORDER
                </h2>
                {/* Shiiping INfo */}
                <div>
                  <div className=" w-full flex items-center justify-between text-sm md:text-md    py-2  border-b-[0.5px] border-green-900">
                    <p className=" flex items-center ">Shipping Cost</p>

                    <h3 className="text-nowrap">
                      <span className="font-bold">------</span>
                    </h3>
                  </div>
                </div>

                {/* Coverage */}
                <div className="space-y-5 md:space-y-0 pb- md:pb-0">
                  {/* Loss Coverage */}
                  <div className="w-full flex lg:items-center  lg:justify-between md:flex-row flex-col gap-2 h-[3.5rem] py-2  md:border-b border-green-900  ">
                    <div className="flex items-center gap-2 text-sm md:text-md  ">
                      <input
                        type="checkbox"
                        id="show-number-input"
                        checked={isCheckedOne}
                        onChange={handleCheckboxChangeOne}
                        className="mt-1 focus:ring-white focus:border-blue-500 h-3 w-3 lg:h-4 lg:w-4"
                      />
                      <h2 className="flex items-center">
                        Total Loss Coverage (1.5%){" "}
                        <Tooltip
                          overlayInnerStyle={{
                            width: "20rem",
                          }}
                          placement="bottom"
                          title={
                            <span>
                              Total Loss Coverage means that we will cover the
                              fair market value of your vehicle as of the day of
                              the loss, attributable to: fire or explosion,
                              vessel stranded/capsized, overturning or
                              derailment. Reimbursement is provided as credit on
                              AutoBidMaster account and can be used toward the
                              next purchases or services. Not applicable for
                              moisture/weather condition damage.
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
                    {isCheckedOne && (
                      <input
                        type="number"
                        id="number-input"
                        placeholder="Vehicle Value"
                        className="text-black  text-sm md:text-md  xl:text-lg border  border-gray-300 rounded-md  px-2 lg:px-3  w-full  py-1 md:py-0 md:w-32 md:h-10   focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    )}
                  </div>
                  {/* Full Coverage */}
                  <div className="w-full flex lg:items-center  lg:justify-between md:flex-row flex-col gap-2 h-[3.5rem] py-2  md:border-b-[0.5px] border-green-900  ">
                    <div className="flex items-center gap-2 text-sm md:text-md  ">
                      <input
                        type="checkbox"
                        id="show-number-input"
                        checked={isCheckedTwo}
                        onChange={handleCheckboxChangeTwo}
                        className="mt-1 focus:ring-white  focus:border-blue-500 h-3 w-3 lg:h-4 lg:w-4"
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
                    {isCheckedTwo && (
                      <input
                        type="number"
                        id="number-input"
                        placeholder="Vehicle Value"
                        className="text-black  text-sm md:text-md  xl:text-lg border  border-gray-300 rounded-md  px-2 lg:px-3  w-full  py-1 md:py-0 md:w-32 md:h-10   focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    )}
                  </div>
                </div>
              </div>
            </section>
            {/* bottom section  */}
            <section className="w-full  p-[5px] bg-[#004979] text-white text-sm md:text-lg  ">
              <button className="py-3  text-sm md:text-md   text-center text-gray-800 font-bold mt-5 w-full rounded-full bg-orange-400 hover:bg-orange-300 transition-colors duration-300">
                ORDER SHIPPING
              </button>

              <div className="my-5 flex items-center gap-5">
                <button className="flex items-center gap-1 text-xl  ">
                  <LuPrinter />{" "}
                  <span className="hover:underline text-sm   ">Print</span>
                </button>
                <button className="flex items-center gap-1 text-xl  ">
                  <FaRegCopy />{" "}
                  <span className="hover:underline text-sm   ">Copy</span>
                </button>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PlaceShippingOrder;
