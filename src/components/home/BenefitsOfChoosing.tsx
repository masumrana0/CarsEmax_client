import React from "react";
import Image from "next/image";

// icons
import icon1 from "/public/assets/icons/copart-gray.08d1774a.svg";
import icon2 from "/public/assets/icons/ic_bidding.a679d84e.svg";
import icon3 from "/public/assets/icons/ic_online_platform.5058206d.svg";
import icon4 from "/public/assets/icons/ic_support.119174bd.svg";
import icon5 from "/public/assets/icons/ic_transaction_fees.dba7d7b2.svg";
import icon6 from "/public/assets/icons/ic_transportation.7af47055.svg";
import RegisterBtn from "../Navbar/ui/RegisterBtn";

const BenefitsOfChoosing = () => {
  return (
    <div>
      <div className="py-10 flex flex-col  xl:flex-row items-center gap-3 text-gray-800">
        <div className=" w-full xl:w-[35%]">
          <h2 className="  text-2xl  xl:text-4xl font-bold  text-center xl:text-left">
            Benefits of Choosing CarsEMax
          </h2>
          <p className="my-3 text-sm lg:text-xl text-center xl:text-left lg:leading-10 lg:w-[90%]  ">
            CarseMax is top-tier service provider offering comprehensive
            solutions to help you find the right car and deliver it to your
            country with ease. From custom clearance support to logistics
            services, AutoBidMaster has you covered.
          </p>

          <div className="flex justify-center xl:justify-start my-6 md:my-7 lg:my-2">
            <RegisterBtn />
          </div>
        </div>

        <div className="xl:w-[65%] w-full  grid  lg:grid-cols-3 gap-10  text-center ">
          {/* 1 */}
          <div className="  bg-white rounded-[3rem] xl:px-7 px-4  py-10 ">
            <Image className="mx-auto  " src={icon1} width={150} alt="" />
            <h3 className="font-bold my-5 text-2xl text-gray-800">
              Official representative
            </h3>
            <p className="text-lg">
              CarEMax is the only Official Authorized Copart Online Auctions
              Platform in Bangladesh.
            </p>
          </div>
          {/* 2 */}

          <div className="  bg-white rounded-[3rem] xl:px-7 px-4 py-10">
            <Image className="mx-auto  " src={icon2} width={40} height={40} alt="" />
            <h3 className="font-bold my-5 text-2xl text-gray-800">
              Live bidding
            </h3>
            <p className="text-lg">
              Place your bids yourself, avoiding intermediaries and
              overpayments! With our license, you can buy a car from any state
              without restrictions.
            </p>
          </div>

          {/* 3 */}
          <div className="  bg-white rounded-[3rem] xl:px-7 px-4 py-10">
            <Image className="mx-auto  " src={icon3} width={40} height={40} alt="" />
            <h3 className="font-bold my-5 text-2xl text-gray-800">
              Low Transaction Fees
            </h3>
            <p className="text-lg">
              The lowest auction and transaction fees on the market. Price
              includes consultations with company auction experts.
            </p>
          </div>

          {/* 4 */}
          <div className="  bg-white rounded-[3rem] xl:px-7 px-4 py-10">
            <Image className="mx-auto  " src={icon4} width={40} height={40} alt="" />
            <h3 className="font-bold my-5 text-2xl text-gray-800">
              Online platform
            </h3>
            <p className="text-lg">
              You can control all stages of online purchase, and independently
              take part in auctions for any car, no hidden fees.
            </p>
          </div>

          {/* 5 */}
          <div className="  bg-white rounded-[3rem] px-7 py-10">
            <Image className="mx-auto  " src={icon5} width={40} height={40} alt="" />
            <h3 className="font-bold my-5 text-2xl text-gray-800">
              Customer support
            </h3>
            <p className="text-lg">
              Our team will provide full consultations for customers by
              telephone for purchases and car delivery.
            </p>
          </div>
          {/* 6 */}

          <div className="  bg-white rounded-[3rem] px-7 py-10">
            <Image className="mx-auto  " src={icon6} width={40} height={40} alt="" />
            <h3 className="font-bold my-5 text-2xl text-gray-800">
              Transportation to Bangladesh
            </h3>
            <p className="text-lg">
              We have the lowest prices for shipping to Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfChoosing;
