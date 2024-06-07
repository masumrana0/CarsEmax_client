import React from "react";
import odometer from "/public/assets/icons/odometer.svg";
import ownership from "/public/assets/icons/ownership_history.svg";
import nmvtis from "/public/assets/icons/nmvts.svg";
import lemon from "/public/assets/icons/lemon_buyback.svg";
import insurance from "/public/assets/icons/insurance.svg";
import stolen from "/public/assets/icons/stolen_summary.svg";
import vehicle_rating from "/public/assets/icons/vehicle_rating.svg";
import auction_sales from "/public/assets/icons/ic_bidding.a679d84e.svg";
import lien from "/public/assets/icons/lieon_record.svg";
import Image from "next/image";

const VhThirdSection = () => {
  return (
    <div className="mx-[1rem]  sm:mx-[2rem]  xl:mx-[10rem]    py-20  text-center  flex flex-col lg:flex-row  items-center justify-center gap-20 ">
      {/* Left part  */}
      <section className=" w-full lg:w-1/2 xl:w-[40%] text-left">
        <h2 className=" text-3xl xl:text-4xl ">
          ClearVin Gives You the Best Value for Your Money
        </h2>
        <p className="my-5 text-gray-700">
          Get additional peace of mind with an extensive VIN report that covers
          more than 40 data points from creditable data sources at the best
          price around.
        </p>
        <button className="text-lg  font-bold text-blue-600  mt-3  px-10 py-2 hover:bg-blue-600 hover:text-white transition-color  border  border-blue-600 rounded-full  ">
          VIEW SAMPLE REPORT
        </button>
      </section>

      {/* Right parţ */}
      <section className="grid grid-cols-3 items-center gap-5  text-center">
        <div className="flex flex-col items-center">
          <Image src={odometer} width={50} height={50} alt="odometer" />
          <p className="text-sm text-gray-700 mt-3">
            Odometer Rollback Checkup
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={ownership} width={50} height={50} alt="odometer" />
          <p className="text-sm text-gray-700 mt-3">Ownership History</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={nmvtis} width={50} height={50} alt="odometer" />
          <p className="text-sm text-gray-700 mt-3">
            NMVTIS Title Brands History
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={lemon} width={50} height={50} alt="odometer" />
          <p className="text-sm text-gray-700 mt-3">Lemon Buyback</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={insurance} width={50} height={50} alt="odometer" />
          <p className="text-sm text-gray-700 mt-3">Insurance Total Loss</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={stolen} width={50} height={50} alt="odometer" />
          <p className="text-sm text-gray-700 mt-3">Stolen Summary</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={vehicle_rating} width={50} height={50} alt="odometer" />
          <p className="text-sm text-gray-700 mt-3">Exclusive Vehicle Rating</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={auction_sales} width={50} height={50} alt="odometer" />
          <p className="text-sm text-gray-700 mt-3">Auction Sales History</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={lien} width={50} height={50} alt="odometer" />
          <p className="text-sm text-gray-700 mt-3">Lien Records</p>
        </div>
      </section>
    </div>
  );
};

export default VhThirdSection;
