import React from "react";
import cart from "/public/assets/icons/shopping_cart.svg";
import pickup from "/public/assets/icons/pickup.svg";
import home_delivery from "/public/assets/icons/home_delivery.svg";
import shipping from "/public/assets/icons/shipping.svg";
import deliverid from "/public/assets/icons/deliveried.svg";
import arrow from "/public/assets/icons/arrow.svg";
import Image from "next/image";

const HowToBuyAndShip = () => {
  return (
    <div className="xl:w-[65%] lg:w-[80%] w-full mx-auto  py-20 ">
      <h2 className=" text-xl  md:text-2xl  lg:text-3xl  text-center mb-10">
        How to Buy Ship Your Vehicle to Bangladesh
      </h2>

      <div className="flex items-center flex-col   lg:flex-row justify-between gap-4">
        {/* step -1 */}
        <div className="flex items-center flex-col">
          <Image src={cart} width={80} height={100} alt="icon" />
          <p className="text-gray-500 font-bold text-sm mt-4 mb-1">Step 1</p>
          <p className="text-sm  md:text-md text-nowrap">Place Your Order</p>
        </div>
        {/* arrow  */}
        <span className="mb-10 lg:rotate-0 rotate-90">
          <Image src={arrow} width={60} height={100} alt="arrow icon" />
        </span>

        {/* step -2 */}
        <div className="flex items-center flex-col">
          <Image src={pickup} width={80} height={100} alt="icon" />
          <p className="text-gray-500 font-bold text-sm mt-4 mb-1">Step 2</p>
          <p className="text-sm  md:text-md text-nowrap">
            Pick Up From Auction
          </p>
        </div>
        {/* arrow */}
        <span className="mb-10 lg:rotate-0 rotate-90">
          <Image src={arrow} width={60} height={100} alt="arrow icon" />
        </span>

        {/* step-3 */}
        <div className="flex items-center flex-col">
          <Image src={home_delivery} width={80} height={100} alt="icon" />
          <p className="text-gray-500 font-bold text-sm mt-4 mb-1">Step 3</p>
          <p className="text-sm  md:text-md text-nowrap">
            Delivery to US port{" "}
          </p>
        </div>
        {/* arrow */}
        <span className="mb-10 lg:rotate-0 rotate-90">
          <Image src={arrow} width={60} height={100} alt="arrow icon" />
        </span>

        {/* step-4 */}
        <div className="flex items-center flex-col">
          <Image src={shipping} width={80} height={100} alt="icon" />
          <p className="text-gray-500 font-bold text-sm mt-4 mb-1">Step 4</p>
          <p className="text-sm  md:text-md text-nowrap">Ocean Shipping </p>
        </div>

        {/* arrow */}
        <span className="mb-10 lg:rotate-0 rotate-90">
          <Image src={arrow} width={60} height={100} alt="arrow icon" />
        </span>

        {/* step-5 */}
        <div className="flex items-center flex-col">
          <Image src={deliverid} width={80} height={100} alt="icon" />
          <p className="text-gray-500 font-bold text-sm mt-4 mb-1">Step 5</p>
          <p className="sm:text-sm  md:text-md text-nowrap">
            Delivery to Bangladesh{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToBuyAndShip;
