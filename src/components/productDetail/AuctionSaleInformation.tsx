"use client";
import Image from "next/image";
import React, { useState } from "react";
import whatsapp from "/public/assets/icons/whatsapp-circle-30x30.0009f2ba.svg";
import { Tooltip } from "antd";
import { IoMdInformationCircleOutline } from "react-icons/io";

// countries flag
import bangladesh from "/public/assets/flag/bd.png";
import unitedState from "/public/assets/flag/united-states.png";
import bulgaria from "/public/assets/flag/bulgaria.png";
import elslavador from "/public/assets/flag/el-salvador.png";
import georgia from "/public/assets/flag/georgia.png";
import ghana from "/public/assets/flag/ghana.png";
import guatemala from "/public/assets/flag/guatemala.png";
import nicaragua from "/public/assets/flag/nicaragua.png";
import nigeria from "/public/assets/flag/nigeria.png";
import poland from "/public/assets/flag/poland.png";
import romania from "/public/assets/flag/romania.png";
import ukraine from "/public/assets/flag/ukraine.png";
import afganistan from "/public/assets/flag/afghanistan.png";
import albenia from "/public/assets/flag/albania.png";
import { AiFillCaretDown } from "react-icons/ai";

interface ICountry {
  name: string;
  code: string;
  dialCode: string;
  flag: any;
}

const AuctionSaleInformation = () => {
  // countries Data
  const countries: ICountry[] = [
    { name: "United States", code: "US", dialCode: "+1", flag: unitedState },
    { name: "Bulgaria", code: "BG", dialCode: "+359", flag: bulgaria },
    { name: "El Salvador", code: "SV", dialCode: "+503", flag: elslavador },
    { name: "Georgia", code: "GE", dialCode: "+995", flag: georgia },
    { name: "Ghana", code: "GH", dialCode: "+233", flag: ghana },
    { name: "Guatemala", code: "GT", dialCode: "+502", flag: guatemala },
    { name: "Nicaragua", code: "NI", dialCode: "+505", flag: nicaragua },
    { name: "Nigeria", code: "NG", dialCode: "+234", flag: nigeria },
    { name: "Poland", code: "PL", dialCode: "+48", flag: poland },
    { name: "Romania", code: "RO", dialCode: "+40", flag: romania },
    { name: "Ukraine", code: "UA", dialCode: "+380", flag: ukraine },
    {
      name: "Bangladesh (বাংলাদেশ) ",
      code: "BD",
      dialCode: "+880",
      flag: bangladesh,
    },
  ];
  const [selectedCountry, setSelectedCountry] = useState<ICountry>(
    countries[0]
  );
  const handleSelect = (country: ICountry) => {
    setSelectedCountry(country);
    setOpen(false);
  };
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div>
      {/* do you wan to buy this vehicle  */}
      <div className="bg-blue-100 py-4 px-2 rounded-xl mt-3">
        <div className="text-md">
          <h2 className="inline text-xl">
            Do you want to buy this vehicle now for{" "}
            <span className="font-bold">$51,500</span> USD without an auction?
          </h2>
          <span>
            <Tooltip title={"Estimated amount of previous car owners. "}>
              <button className="text-gray-500 text-xl ">
                <IoMdInformationCircleOutline />
              </button>
            </Tooltip>
          </span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <button className="border flex-grow border-blue-500 hover:bg-blue-500 hover:text-white font-bold text-blue-500 rounded-full py-2 transition-colors duration-300">
            MAKE OFFER
          </button>
          <button className="border flex-grow border-blue-500 bg-blue-500 hover:bg-blue-400 transition-colors duration-300 font-bold text-white  py-2 rounded-full ">
            BUY IT NOW
          </button>
        </div>
      </div>

      {/* reserve this car  section */}
      <section className=" px-4   py-5   bg-[#ecf6e6] rounded-xl  mt-10">
        <h3 className="font-bold  "> Reserve this car now!</h3>

        <form className="w-full mx-auto   mt-4  text-gray-800">
          <div className=" flex items-center md:flex-nowrap flex-wrap my-2 gap-4    ">
            <div className="lg:w-1/2 w-full">
              <input
                type="text"
                placeholder="First Name *"
                className="outline-none  border border-gray-300 hover:border-blue-700 rounded  p-3  w-full  "
                name="firstName"
                id=""
              />
            </div>

            {/* Phone Number Input  */}
            <div className="relative group  lg:w-1/2 w-full">
              <div className="w-full flex items-center border border-gray-300    rounded relative overflow-hidden ">
                <button
                  type="button"
                  onClick={() => setOpen(!isOpen)}
                  className="flex items-center gap-1 h-full   w-1/3 px-1 py-[14px] bg-gray-50"
                >
                  <Image
                    src={selectedCountry.flag}
                    width={20}
                    height={20}
                    alt="country flag"
                  />
                  <span className="flex items-center gap-1 text-xs ">
                    {selectedCountry.dialCode}
                    <AiFillCaretDown />
                  </span>
                </button>
                <input
                  type="text"
                  className="outline-none   w-full  py-3 px-2   "
                  placeholder="Phone number"
                />
              </div>

              {isOpen && (
                <div
                  onMouseLeave={() => setOpen(false)}
                  className="w-full max-h-56 overflow-y-auto bg-gray-50 border-2 border-blue-500 py-1 absolute top-full left-0 z-10"
                >
                  {countries.map((country) => (
                    <button
                      type="button"
                      onClick={() => handleSelect(country)}
                      key={country.code}
                      className="flex items center gap-2 w-full hover:bg-blue-300 py-0 px-2 text-sm"
                    >
                      <span>
                        <Image
                          src={country.flag}
                          width={30}
                          height={30}
                          alt="country flag"
                        />
                      </span>
                      <span className="text-gray-700 mt-1">
                        {country.name}
                        {country.dialCode}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="py-3 text-md mt-3 w-full text-[#217e03] hover:bg-green-600 hover:text-white  border border-green-500  transition-colors duration-300  font-bold rounded-full"
          >
            SPEAK TO OUR AGENT
          </button>
        </form>

        <div className="flex items-center justify-between mt-5">
          <h2 className="mt-2">
            Call our office{" "}
            <span className="hover:underline text-blue-700 font-bold ">
              {" "}
              +503 7209-9896
            </span>
          </h2>
          <Image src={whatsapp} width={30} height={100} alt="whatsapp icon" />
        </div>
      </section>

      {/* Auction sale information section  */}

      <div className="p-5">
        <h2 className="text-gray-800 font-bold text-xl">
          Auction Sale Information
        </h2>
        <div className="w-full flex justify-between border-b border-gray-300  py-2    ">
          <h4 className="w-1/2">Location:</h4>
          <div className="flex items-center justify-between w-1/2">
            <span>
              <h3 className="font-semibold underline text-blue-500">
                {" "}
                SC - Spartanburg{" "}
              </h3>
            </span>
          </div>
        </div>

        <div className="w-full flex justify-between border-b border-gray-300  py-2  text-sm   ">
          <h4 className="w-1/2">Sale Date:</h4>
          <div className="flex items-center justify-between w-1/2">
            <span>
              <h3 className="font-semibold  ">
                {" "}
                Mon, Jun 3, 2024 - 8:00 PM GMT+6
              </h3>
            </span>
          </div>
        </div>

        <div className="w-full flex justify-between border-b border-gray-300  py-2   text-sm  ">
          <h4 className="w-1/2">Lane/Item:</h4>
          <div className="flex items-center justify-between w-1/2">
            <span>
              <h3 className="font-semibold  "> –/–</h3>
            </span>
          </div>
        </div>

        <div className="w-full flex justify-between border-b border-gray-300  py-2  text-sm   ">
          <h4 className="w-1/2">Last Updated:</h4>
          <div className="flex items-center justify-between w-1/2">
            <span>
              <h3 className="font-semibold  "> 5/24/2024, 11:53 PM</h3>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionSaleInformation;
