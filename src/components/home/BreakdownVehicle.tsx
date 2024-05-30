"use client";
import Image from "next/image";
import React, { useState } from "react";
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
const BreakdownVehicle = () => {
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
  const handleAddCountryCodeInput = (country: ICountry) => {
    setSelectedCountry(country);
    setOpen(false);
  };
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex items-center lg:flex-row flex-col gap-5 lg:py-20 overflow-hidden">
      <section className="lg:w-1/2 w-full lg:pl-[5rem]   ">
        <h2 className="font-bold text-gray-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center lg:text-left ">
          Get a Full-price Breakdown For Your Vehicle
        </h2>
        <p className="my-3 text-sm  md:text-lg text-center lg:text-left    ">
          We&apos;ll get back to you with final prices, including customs fees
          and shipping
        </p>

        <form className="lg:w-[80%] w-full mt-6 p-2">
          <div className=" flex items-center my-2 gap-4    ">
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
              <div className="w-full flex items-center border border-gray-300  group-hover:border-blue-700 rounded relative ">
                <button
                  type="button"
                  onClick={() => setOpen(!isOpen)}
                  className="flex items-center gap-1 border w-1/3 px-1 py-3 bg-gray-50"
                >
                  <Image
                    src={selectedCountry.flag}
                    width={20}
                    height={20}
                    alt="country flag"
                  />
                  <span className="flex items-center gap-1 text-xs">
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
                      onClick={() => handleAddCountryCodeInput(country)}
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
            className="py-3 text-md mt-3 w-full bg-blue-700 hover:bg-blue-500 transition-colors duration-300 text-white font-bold rounded-full"
          >
            REQUEST INFORMATION
          </button>
        </form>
      </section>
      <section className="lg:w-1/2 w-full   lg:relative    ">
        <Image
          src={
            "https://www.autobidmaster.com/build/spa/images/cars.7f702157.jpg"
          }
          className="h-auto w-full object-cover rounded-lg lg:scale-150  lg:absolute top-[-11rem] right-[-16rem]    "
          width={2000}
          height={1000}
          alt="car img"
        />
      </section>
    </div>
  );
};

export default BreakdownVehicle;
