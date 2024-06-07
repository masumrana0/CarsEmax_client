"use client";
import React, { useState } from "react";
import Image from "next/image";

// icons
import clearvin from "/public/assets/icons/clearvin-logo.3b2355f8.svg";
import checkmark from "/public/assets/icons/checkmark.39b77f1f.svg";
import { AiFillCaretDown } from "react-icons/ai";

const UnlockVehicleHistoryEight = () => {
  // essential state
  const [isLicensePlate, setLicensePlate] = useState(false);
  const [selectedUsState, setSelectedUsState] = useState("State");
  const [isOpen, setOpen] = useState<boolean>(false);

  //  Us state data
  const usStates = [
    " Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "lowa",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
  ];

  //   handle Select us state
  const handleSelect = (state: string) => {
    setSelectedUsState(state);
    setOpen(false);
  };

  return (
    <div
      className="text-center text-white  md:px-5  py-16"
      style={{
        backgroundImage:
          "url('https://www.autobidmaster.com/build/spa/images/bg.85a39946.jpg')",
        backgroundSize: "cover",
        width: "100wh",
        height: "auto",
      }}
    >
      {/* Top */}
      <div className=" space-y-1 md:space-y-4 mb-5">
        <h3 className="font-bold text-md  md:text-lg  lg:text-3xl  xl:text-5xl md:my-3">
          Unlock Vehicle History and Market Valuation in Minutes
        </h3>
        <p className="font-[500] text-sm md:text-md lg:text-2xl">
          Comprehensive Vehicle History Report for all Makes & Models
        </p>
      </div>

      {/* Middle  */}
      <div>
        <div className="md:w-96  mx-auto relative ">
          <div
            className={`absolute bottom-[-7px]  ${
              isLicensePlate ? "right-10" : "left-10"
            }  w-5 h-5 bg-orange-400 transform rotate-45`}
          ></div>
          <div className="  w-full overflow-hidden     flex items-center  mx-auto my-4 border border-orange-300 rounded-lg    md:font-bold font-[600] text-xs lg:text-md ">
            {" "}
            <button
              onClick={() => setLicensePlate(false)}
              className={`w-1/2 py-3 ${
                !isLicensePlate && "bg-orange-400 text-gray-800"
              }   text-nowrap text-md  `}
            >
              By VIN or Lot Number
            </button>
            <button
              onClick={() => setLicensePlate(true)}
              className={`w-1/2 py-3 ${
                isLicensePlate && "bg-orange-400 text-gray-800"
              }   text-nowrap text-md `}
            >
              By US License Plate
            </button>
          </div>
        </div>

        <div className="lg:w-[56%] w-full mx-auto border py-10 bg-white px-2 md:px-10 rounded-2xl">
          <form className="flex items-center flex-col xl:flex-row  gap-3">
            <div className="flex items-center w-full ">
              {/* Input and SVG Image */}
              <div
                className={`flex justify-center border border-gray-800 w-full mx-auto rounded-lg ${
                  isLicensePlate && "rounded-r-none"
                }   h-[3rem] overflow-hidden`}
              >
                <div className="bg-gray-200 py-3 px-3 w-[7rem] md:w-[14rem]">
                  <Image
                    src={clearvin}
                    className="w-full h-full"
                    width={400}
                    height={200}
                    alt="clearVin icon"
                  />
                </div>
                <input
                  type="text"
                  className="px-2 w-full outline-none text-black text-xs md:text-sm"
                  placeholder="Enter Vin or Lot #"
                  maxLength={17}
                />
              </div>
              {/* State Dropdown */}
              {isLicensePlate && (
                <div className="flex items-center w-[36%] rounded-lg rounded-l-none relative border-r border-y border-black h-[3rem] px-3">
                  <button
                    type="button"
                    onClick={() => setOpen(!isOpen)}
                    className="flex items-center justify-between w-full bg-white text-gray-700 text-nowrap"
                  >
                    <span className="text-xs md:text-sm">
                      {selectedUsState}
                    </span>
                    <AiFillCaretDown />
                  </button>

                  {isOpen && (
                    <div
                      onMouseLeave={() => setOpen(false)}
                      className="w-full max-h-56 overflow-y-auto bg-gray-50 border-2 border-blue-500 py-1 absolute top-full left-0 z-10"
                    >
                      {usStates.map((state, index) => (
                        <button
                          type="button"
                          onClick={() => handleSelect(state)}
                          key={index}
                          className="flex items-center gap-2 w-full hover:bg-blue-300 py-0 px-2 text-sm"
                        >
                          <span className="text-gray-700 mt-1 text-xs md:text-sm ">
                            {state}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div>
              <button className="font-bold text-nowrap text-sm md:text-lg lg:text-xl px-7 py-3 rounded-full bg-green-700 hover:bg-green-500 transition-colors duration-300">
                CHECK VEHICLE
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="lg:w-[56%] w-full mx-auto px-3  grid  grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        <div className="flex flex-col justify-center items-center">
          <Image src={checkmark} width={30} height={30} alt="checkmar icon" />
          <p className="text-sm mt-3">
            Get{" "}
            <span className="font-bold">insight into true market value</span>{" "}
            and sales history of any used car to be sure about your purchase.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image src={checkmark} width={30} height={30} alt="checkmar icon" />
          <p className="text-sm mt-3">
            As an approved <span className="font-bold">NMVTIS data</span>{" "}
            distributor, ClearVin provides{" "}
            <span className="font-bold">interstate vehicle</span> check and
            reveals <span className="font-bold">undisclosed damages</span>.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={checkmark} width={30} height={30} alt="checkmar icon" />
          <p className="text-sm mt-3">
            Search for vehicle history information by{" "}
            <span className="font-bold">VIN</span> or Copart Lot Number to get
            an <span>instant VIN check</span> report at the{" "}
            <span className="font-bold">best price</span> around.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default UnlockVehicleHistoryEight;
