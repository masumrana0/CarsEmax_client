import React from "react";

const FeaturedItems = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3  md:w-full lg:w-[80%] mt-10 text-blue-500 ">
      <a href="#" className="hover:underline text-[14px]   font-[400]">
        Bid price $2,000 or less <span>(187,000)</span>
      </a>

      <a href="#" className="hover:underline text-[14px]   font-[400]">
        Buy It Now <span>(22,832)</span>
      </a>

      <a href="#" className="hover:underline text-[14px]   font-[400]">
        Cars 5 years or less <span>(41,525)</span>
      </a>
      <a href="#" className="hover:underline text-[14px]   font-[400]">
        Clean Title <span>(37,603)</span>
      </a>
      <a href="#" className="hover:underline text-[14px]   font-[400]">
        Electric <span>(2,115)</span>
      </a>
      <a href="#" className="hover:underline text-[14px]   font-[400]">
        Front End <span>(91,893)</span>
      </a>
      <a href="#" className="hover:underline text-[14px]  font-[400]">
        Hail <span>(5,834)</span>
      </a>
      <a href="#" className="hover:underline text-[14px]  font-[400]">
        Hybrid <span>(5,686)</span>
      </a>
      <a href="#" className="hover:underline text-[14px]  font-[400]">
        Lots with Bids <span>(33,598)</span>
      </a>
      <a href="#" className="hover:underline text-[14px]  font-[400]">
        Minor Dent/Scratches <span>(7,816)</span>
      </a>
      <a href="#" className="hover:underline text-[14px]  font-[400]">
        New Items <span>(4,372)</span>
      </a>
      <a href="#" className="hover:underline text-[14px]  font-[400]">
        No Bids Yet <span>(160,442)</span>
      </a>
      <a href="#" className="hover:underline text-[14px]  font-[400]">
        Normal Wear <span>(130,542)</span>
      </a>
      <a href="#" className="hover:underline text-[14px]  font-[400]">
        Pure Sale Items <span>(129,652)</span>
      </a>
      <a href="#" className="hover:underline text-[14px]  font-[400]">
        Runs and Drives <span>(121,059)</span>
      </a>
      <a
        href="#"
        className="hover:underline text-[14px]  font-[400]"
        aria-label="Salvage Title"
      >
        Salvage Title <span>(11,019)</span>
      </a>
      <a
        href="#"
        className="hover:underline text-[14px]  font-[400]"
        aria-label="Vandalism"
      >
        Vandalism <span>(1,029)</span>
      </a>
      <a href="#" className="hover:underline text-[14px]  font-[400]">
        Water/Flood <span>(2,859)</span>
      </a>
    </div>
  );
};

export default FeaturedItems;
