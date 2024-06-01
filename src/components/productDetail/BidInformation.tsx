import { Tooltip } from "antd";
import React, { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import clearvin from "/public/assets/icons/clearvin-logo.3b2355f8.svg";
import Image from "next/image";
import Link from "next/link";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { BiRightArrow } from "react-icons/bi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import whatsapp from "/public/assets/icons/whatsapp-circle-30x30.0009f2ba.svg";

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
const BidInformation = () => {
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
  const [startingBid, setStartingBid] = useState(400);
  const [maximumBid, setMaximumBid] = useState(525);

  return (
    <div className="bg-gray-100   ">
      {/* Bid Information  */}
      <div>
        <div className="flex items-center justify-between p-5">
          <h3 className="flex items-center font-bold text-xl  gap-2">
            Bid Information{" "}
          </h3>
        </div>

        <div className="p-5">
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
                <p className="font-bold text-xs">Seller Reserve Not Yet Met</p>
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
                  <span className="underline text-xs">(Add to calendar)</span>{" "}
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
              All bids are legally binding, and sales are &quot;as-is&quot; and
              final .{" "}
              <Link className="underline" href={"/"}>
                Learn More
              </Link>
            </p>
          </div>
        </div>
      </div>

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
        <h2 className="text-gray-800 font-bold text-xl">Auction Sale Information</h2>
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

export default BidInformation;
