"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";

// icons
import search from "/public/assets/icons/ic_car_finder.5ef84584.svg";
import member from "/public/assets/icons/ic_member.0a49027e.svg";
import car from "/public/assets/icons/ic-car.34c9a121.svg";

const HowToBuyTopSection: React.FC = () => {
  const stepsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const steps = stepsRef.current;
      if (steps) {
        const rect = steps.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          steps.classList.add("animate-slide-in-left");
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-full py-10 md:py-20 h-auto overflow-hidden"
      style={{
        backgroundImage: `url("https://www.autobidmaster.com/build/spa/images/bg-mobile.4e082ac6.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "30rem",
      }}
    >
      <div className="font-bold space-y-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl mx-auto text-center text-white">
        <h2>Step-by-step Instructions</h2>
        <h2>On How To Buy Used Vehicle Online</h2>
      </div>

      <div
        ref={stepsRef}
        className="mt-12 flex md:flex-row flex-col justify-center"
      >
        <div className="text-center text-xl lg:text-2xl space-y-2">
          <span className="bg-white mx-auto p-4 block w-20 h-20 rounded-full">
            <Image src={search} width={50} height={50} alt="search-img" />
          </span>
          <span className="text-gray-300 block">1</span>
          <span className="text-white block font-bold">Find Vehicle</span>
        </div>

        {/* Arrow */}
        <div
          className="w-16 mt-10"
          style={{
            backgroundImage: `url("https://www.autobidmaster.com/build/spa/images/arrow.e9d15811.svg")`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="text-center text-xl lg:text-2xl space-y-2">
          <span className="bg-white mx-auto p-4 block w-20 h-20 rounded-full">
            <Image src={member} width={50} height={50} alt="search-img" />
          </span>
          <span className="text-gray-300 block">2</span>
          <span className="text-white block font-bold">Become a Member</span>
        </div>
        {/* Arrow */}
        <div
          className="w-16 mt-10"
          style={{
            backgroundImage: `url("https://www.autobidmaster.com/build/spa/images/arrow.e9d15811.svg")`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="text-center text-xl lg:text-2xl space-y-2">
          <span className="bg-white mx-auto p-4 block w-20 h-20 rounded-full">
            <Image src={car} width={50} height={50} alt="search-img" />
          </span>
          <span className="text-gray-300 block">3</span>
          <span className="text-white block font-bold">Win Auction</span>
        </div>
      </div>
    </div>
  );
};

export default HowToBuyTopSection;
