import React from "react";

const LiveAction = () => {
  return (
    <div className="absolute left-0 top-7 flex   gap-5 bg-gray-900 text-white text-[14px] font-normal max-w-[800px] text-left">
      <div className="w-[250px]   bg-gray-800 mt-2  ">
        <a
          href="#"
          className="hover:underline block hover:bg-gray-900 py-2 px-2"
        >
          Today&apos;s Auctions
        </a>
        <a
          href="#"
          className="hover:underline block hover:bg-gray-900 py-2 px-2"
        >
          Auction Calendar
        </a>
        <a
          href="#"
          className="hover:underline block hover:bg-gray-900 py-2 px-2"
        >
          Join Auctions
        </a>
        <a
          href="#"
          className="hover:underline block hover:bg-gray-900 py-2 px-2"
        >
          Auction Locations
        </a>
        <a
          href="#"
          className="hover:underline block hover:bg-gray-900 py-2 px-2 space-x-2"
        >
          <span> Car Auctions in Germany</span>
          <span className="px-1  rounded-full bg-orange-300 text-black font-semibold text-[10px]">
            NEW
          </span>
        </a>
      </div>
    </div>
  );
};

export default LiveAction;
