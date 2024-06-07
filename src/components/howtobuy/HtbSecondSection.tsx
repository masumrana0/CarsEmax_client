import React from "react";
import YouTubeEmbed from "../Custom/YouTubeEmbed";
import member from "/public/assets/icons/ic_member.0a49027e.svg";
import Image from "next/image";
import Link from "next/link";
const HtbSecondSection = () => {
  return (
    <div className="grid grid-cols-span-1  xl:grid-cols-2 gap-10 text-gray-800 ">
      <div>
        <h2 className="font-bold text-3xl mb-5">Find a car through CarEmax</h2>
        <p>
          CarsEMax proudly offers an extensive selection of vehicles, refreshed
          every day. With more than 300,000 used cars for sale CarsEMax offer
          cars at online auto auctions in the USA, Canada, and Germany. Heres a
          quick guide to get you started!
        </p>
        <div className=" mt-12  flex sm:items-start sm:flex-row flex-col  gap-5 bg-blue-100   lg:w-[80%]  rounded-3xl px-2 sm:px-10 py-6">
          <Image
            className=""
            src={member}
            width={50}
            height={50}
            alt="search-img"
          />
          <div className="">
            <h2 className="font-bold text-xl md:text-lg text-md mb-3">
              Get Full Access Now
            </h2>
            <p>
              To start bidding and buying used cars online, you’ll have to
              register with CarEmax.
            </p>
            <Link href={"/register"}>
              <button className="mt-5 font-bold text-lg lg:text-xl bg-orange-400 hover:bg-orange-300 transition-color px-7 py-3 rounded-full text-nowrap">
                REGISTER NOW
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl">
        <YouTubeEmbed url="https://www.youtube.com/embed/hrOdSePfA28?si=KDEN50yLqVbm0N_M" />
      </div>
    </div>
  );
};

export default HtbSecondSection;
