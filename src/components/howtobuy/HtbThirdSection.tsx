import React from "react";

const HtbThirdSection = () => {
  return (
    <div
      className="w-full py-10 md:py-[6rem] md:px-32 h-auto overflow-hidden  rounded-2xl"
      style={{
        backgroundImage: `url("https://www.autobidmaster.com/build/spa/images/background-cars.5705a7d5.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "30rem",
      }}
    >
      <div className="text-white">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-5 font-bold text-center md:text-left">
          Cut the risks — boost your value!
        </h2>
        <p className="text-sm md:text-md mb-5 text-center md:text-left">
          Download our full buyer guide for free
        </p>
        <div className="text-gray-800 flex md:flex-row flex-col items-center gap-5">
          <input
            type="email"
            placeholder="Enter your email address"
            className="rounded-lg px-5 md:pr-20 py-3 outline-none "
          />
          <button className="px-8 py-3 font-bold bg-orange-400  hover:bg-orange-300 rounded-full ">
            DOWNLOAD
          </button>
        </div>
      </div>
    </div>
  );
};

export default HtbThirdSection;
