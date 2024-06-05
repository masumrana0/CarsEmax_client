import React, { useState } from "react";
// icons
import { IoMdArrowDropdown } from "react-icons/io";
import { GoSortAsc, GoSortDesc } from "react-icons/go";
import { BiGridAlt } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";
import { GiCheckMark } from "react-icons/gi";

const ProductFilterSort = () => {
  const [isOpenSortQuries, setOpenSortQuries] = useState<boolean>(false);
  const [isAsc, setAscOrDsc] = useState(false);
  const [isShowTableProductCard, setShowTableProductCard] =
    useState<boolean>(false);
  const [selectedSortedQuery, setSelectQuery] = useState<string>("Sale Date");

  const sortQueries = [
    "Sale Date",
    "Mileage",
    "Year",
    "Location Distance",
    "Vehicle Condition",
    "Make",
    "Model",
    "Current Bid",
    "Buy It Now",
  ];

  const handleSortAscOrDsc = () => {
    setAscOrDsc(!isAsc);
  };

  return (
    <div className="bg-slate-100 w-full flex justify-between items-center mb-2 px-1 py-2">
      <h2>Showing 1 – 30 of 195,207 Listings </h2>

      <div className="flex items-center gap-1">
        {/* Sorting Part */}
        <div className="flex items-center">
          <h2 className="mr-2">Sort by:</h2>
          <div
            onMouseLeave={() => setOpenSortQuries(false)}
            className="bg-white flex items-center gap-2 border px-2 py-1.5 relative"
          >
            <button
              //   onBlur={() => setOpenSortQuries(false)}
              onClick={() => setOpenSortQuries(!isOpenSortQuries)}
            >
              {selectedSortedQuery}
            </button>
            <IoMdArrowDropdown />
            <div
              className={`absolute top-10 left-0 pb-2 flex flex-col gap-1 border-2 rounded bg-white shadow-2xl z-50 w-[12rem] transition-opacity duration-500 ${
                isOpenSortQuries
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {sortQueries.map((query, index) => (
                <button
                  onClick={() => setSelectQuery(query)}
                  key={index}
                  className="text-left py-1 px-4 hover:bg-gray-200 flex items-center justify-between"
                >
                  {query}

                  {selectedSortedQuery == query && (
                    <span className="text-blue-600">
                      <GiCheckMark />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleSortAscOrDsc}
            className="text-4xl text-gray-500"
          >
            {isAsc ? <GoSortAsc /> : <GoSortDesc />}
          </button>
        </div>

        {/* Product Card Showing Part  */}
        <div
          className={`${
            !isShowTableProductCard ? "bg-blue-200" : "bg-white"
          } p-3 flex items-center justify-center rounded transition-color`}
        >
          <button
            onClick={() => setShowTableProductCard(false)}
            className="text-xl text-blue-600"
          >
            <BiGridAlt />
          </button>
        </div>
        <div
          className={`${
            isShowTableProductCard ? "bg-blue-200" : "bg-white"
          } p-3 rounded transition-color flex items-center justify-center`}
        >
          <button
            onClick={() => setShowTableProductCard(true)}
            className="text-xl text-gray-600"
          >
            <CiMenuBurger />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterSort;
