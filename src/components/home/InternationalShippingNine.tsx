"use client";
import React, { useEffect, useState } from "react";
import YouTubeEmbed from "../Custom/YouTubeEmbed";
import Image from "next/image";
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
const InternationalShippingNine = () => {
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
    <div className="bg-[#e6ecfd] text-gray-800 py-10 ">
      <div className="text-center ">
        <h3 className=" text-lg lg:text-xl xl:text-5xl font-bold ">
          International Shipping – Import Cars to Bangladesh
        </h3>
        <p className=" w-[90%] md:w-[80%] lg:w-[70%] xl:w-[55%] mx-auto lg:my-5 my-2 text-sm md:text-lg lg:text-xl xl:text-2xl  ">
          We offer competitive shipping services to anywhere in the world. We
          are a licensed NVOCC and can provide you the best price in the market.
          Import your next car to Bangladesh
        </p>
      </div>
      {/*  */}
      <div
        className="hidden lg:block"
        style={{
          backgroundImage:
            "url('https://www.autobidmaster.com/build/spa/images/backgroundDesktop.812959fe.png')",
          backgroundSize: "cover",
          width: "100wh",
          height: "80vh",
        }}
      ></div>

      {/* processing section  */}
      <section className="lg:px-10 flex gap-2  lg:block">
        <div>
          <div className="flex items-center flex-col lg:flex-row text-white">
            <span className="border p-4 h-10 w-10 flex items-center justify-center bg-blue-700 text-white rounded-full font-bold text-lg">
              1
            </span>
            <div className=" h-[310px] md:h-[600px]  lg:h-0 lg:w-full border-[0.2px] border-blue-800"></div>

            <span className="border p-4 h-10  w-10 flex items-center justify-center bg-blue-700 text-white rounded-full font-bold text-lg">
              2
            </span>
            <div className=" h-[310px] md:h-[600px] lg:h-0 lg:w-full border-[0.2px] border-blue-800"></div>
            <span className="border p-4 h-10 w-10 flex items-center justify-center bg-blue-700 text-white rounded-full font-bold text-lg">
              3
            </span>
            <div className=" h-[310px] md:h-[600px] lg:h-0 lg:w-full border-[0.2px] border-blue-800"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3   gap-5">
          <div>
            <h3 className="sm:text-nowrap  font-bold my-1 lg:mt-5  text-sm md:text-md lg:text-lg xl:text-xl">
              DELIVERY FROM AUCTION TO THE PORT
            </h3>
            <p className="text-sm sm:text-md  md:text-lg xl:text-xl tracking-tighter ">
              Our experts will manage the delivery of your vehicle from the
              auction location to the port in the US. The transit time depends
              on the location of the auction yard and destination port.
            </p>
            <div className="mt-4 lg:hidden">
              <YouTubeEmbed url="https://www.youtube.com/embed/iAS2Dnp9gwo?si=nkF7ELRJ2C7W9gtU" />
            </div>
          </div>

          <div>
            <h3 className="sm:text-nowrap  font-bold my-1 lg:mt-5  text-sm md:text-md lg:text-lg xl:text-xl">
              LOADING AND SAILING
            </h3>
            <p className="text-sm sm:text-md  md:text-lg xl:text-xl tracking-tighter ">
              We provide shipping services from the USA and Canada. For
              shipments from the US we use 7 ports: New Jersey, Savannah, Miami,
              Houston, Los Angeles, Seattle, Chicago. For Canadian international
              deliveries, we use the Toronto port.
            </p>
            <div className="mt-4 lg:hidden ">
              <YouTubeEmbed url="https://www.youtube.com/embed/sdpAK1EWSJY?si=8i-l7Z7y9_NP-Z4s" />
            </div>
          </div>

          <div>
            <h3 className="sm:text-nowrap  font-bold my-1 lg:mt-5  text-sm md:text-md lg:text-lg xl:text-xl">
              OCEAN SHIPPING AND UNLOADING
            </h3>
            <p className="text-sm sm:text-md  md:text-lg xl:text-xl tracking-tighter ">
              {" "}
              CarsEMax has offices in other countries that are happy to assist
              you with unloading and customs clearance. We provide you with the
              final price of your vehicle including shipping cost, customs
              clearance, and agent fees in the destination port.
            </p>
            <div className="mt-4 lg:hidden">
              <YouTubeEmbed url="https://www.youtube.com/embed/qVUNzuOydBE?si=ZOmch_MEXJ_QHZ-M" />
            </div>
          </div>
        </div>

        <div className="hidden  md:grid grid-cols-3   items-center mt-5 gap-5">
          <YouTubeEmbed url="https://www.youtube.com/embed/qVUNzuOydBE?si=ZOmch_MEXJ_QHZ-M" />
          <YouTubeEmbed url="https://www.youtube.com/embed/sdpAK1EWSJY?si=8i-l7Z7y9_NP-Z4s" />
          <YouTubeEmbed url="https://www.youtube.com/embed/iAS2Dnp9gwo?si=nkF7ELRJ2C7W9gtU" />
        </div>
      </section>

      {/* got shipping questions section */}
      <section className="lg:px-10  mt-20">
        <section className="px-4 lg:px-0  py-16 lg:rounded-[50px]  md:rounded-[20px] text-white  bg-[#004979] ">
          <div className="text-center">
            <h2 className="font-bold   text-xl sm:text-2xl md:text-3xl lg:text-4xl   ">
              Got Shipping Questions?
            </h2>
            <p className="my-3 text-sm  md:text-lg     ">
              Leave a request to contact a manager
            </p>
          </div>

          <form className="lg:w-[70%]  xl:w-[45%] mx-auto w-full mt-6 p-2 text-gray-800">
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
              className="py-3 text-md mt-3 w-full bg-orange-400 hover:bg-orange-300 transition-colors duration-300  font-bold rounded-full"
            >
              REQUEST A CALLBACK
            </button>
          </form>
        </section>
      </section>
    </div>
  );
};

export default InternationalShippingNine;
