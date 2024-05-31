import React from "react";

const AboutTen = () => {
  return (
    <div className="text-center py-10">
      <section className="bg-white text-gray-800 ">
        <h3 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          About CarEMax
        </h3>
        <p className="  text-sm  lg:text-md xl:text-xl  mx-3  sm:mx-5 md:mx-10 lg:mx-20 xl:mx-80 mt-2">
          With more than 10 years of experience in the automotive industry,
          we’re here to help you understand the auction process, as well as the
          best delivery options. We have offices in both the USA and Bangladesh
          that work together to get your vehicle to you. AutoBidMaster is the
          only Copart Authorized Online Auction Platform in Bangladesh.
        </p>

        <button
          className="font-bold mb-5 text-blue-700 px-8 py-2 lg:px-10 lg:py-3 border border-blue-700 text-lg mt-5 rounded-full hover:bg-blue-800 hover:text-white transition-colors duration-300
        "
        >
          LEARN MORE
        </button>
      </section>

      <section className="bg-gray-100 py-20 text-gray-800 ">
        <h3 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          A Trusted Auto Auction Platform in America
        </h3>
        <p className="  text-sm  lg:text-md xl:text-xl  mx-3  sm:mx-5 md:mx-10 lg:mx-20 xl:mx-80 mt-2">
          CarsEMax.com provides you with access to a wide range of exclusive
          America auto auctions. As a registered member, you can participate in
          ‘public car auctions near me’ or across the country, regardless of
          your location. Our online vehicle auctions feature repairable
          vehicles, including luxury, sports, classic, and even exotic cars.
        </p>

        <button className="font-bold text-blue-700  hover:text-blue-500 text-md mt-5 underline ">
          Read More
        </button>
      </section>
    </div>
  );
};

export default AboutTen;
