"use client";
import React, { useEffect, useRef, useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import FeaturedItemsFV from "./FeaturedItemsFV";
import PopularMakesItemFV from "./PopularMakesItemFV";
import VehicaleTypeFV from "./VehicaleTypeFV";
import BodyTypeFV from "./BodyStyleFV";
import DamageTypeFV from "./DamageTypeFV";
import OwnershipDocTypesFV from "./OwnershipDocTypesFV";
import SearchByUsStateFV from "./SearchByUsStateFV";
import SearchByCountryFV from "./SearchByCountryFV";

const FindVehicles = () => {
  const [state, setState] = useState(2);
  return (
    <div className="absolute left-0 top-7 flex   gap-5 bg-gray-900 text-white text-[14px] font-normal max-w-[800px]">
      {/* left side or navigator */}
      <section>
        <div className="w-[250px]   bg-gray-800 mt-3 ">
          <button
            onMouseEnter={() => setState(1)}
            className={`pr-5 px-2 py-2 flex items-center justify-between w-full  group hover:bg-gray-900 ${
              state == 1 && "bg-gray-900"
            }`}
          >
            Featured Items{" "}
            <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />{" "}
          </button>
          <button
            onMouseEnter={() => setState(2)}
            className={`pr-5 px-2 py-2 flex items-center justify-between w-full  group hover:bg-gray-900 ${
              state == 2 && "bg-gray-900"
            }`}
          >
            Popular Makes{" "}
            <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />{" "}
          </button>
          <button
            onMouseEnter={() => setState(3)}
            className={`pr-5 px-2 py-2 flex items-center justify-between w-full  group hover:bg-gray-900 ${
              state == 3 && "bg-gray-900"
            }`}
          >
            Vehicle Types{" "}
            <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />{" "}
          </button>
          <button
            onMouseEnter={() => setState(4)}
            className={`pr-5 px-2 py-2 flex items-center justify-between w-full  group hover:bg-gray-900 ${
              state == 4 && "bg-gray-900"
            }`}
          >
            Body Styles{" "}
            <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />
          </button>
          <button
            onMouseEnter={() => setState(5)}
            className={`pr-5 px-2 py-2 flex items-center justify-between w-full  group hover:bg-gray-900 ${
              state == 5 && "bg-gray-900"
            }`}
          >
            Damage Types{" "}
            <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />
          </button>
          <button
            onMouseEnter={() => setState(6)}
            className={`pr-5 px-2 py-2 flex items-center justify-between w-full  group hover:bg-gray-900 ${
              state == 6 && "bg-gray-900"
            }`}
          >
            Ownership Doc Types{" "}
            <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />
          </button>
          <button
            onMouseEnter={() => setState(7)}
            className={`pr-5 px-2 py-2 flex items-center justify-between w-full  group hover:bg-gray-900 ${
              state == 7 && "bg-gray-900"
            }`}
          >
            Search by US state{" "}
            <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />
          </button>
          <button
            onMouseEnter={() => setState(8)}
            className={`pr-5 px-2 py-2 flex items-center justify-between w-full  group hover:bg-gray-900 ${
              state == 8 && "bg-gray-900"
            }`}
          >
            Search by Country{" "}
            <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />
          </button>
        </div>
      </section>
      {/* right side or Navigator content */}
      <section className="px-3 py-5 max-h-[400px] relative ">
        {state == 1 && <FeaturedItemsFV />}
        {state == 2 && <PopularMakesItemFV />}
        {state == 3 && <VehicaleTypeFV />}
        {state == 4 && <BodyTypeFV />}
        {state == 5 && <DamageTypeFV />}
        {state == 6 && <OwnershipDocTypesFV />}
        {state == 7 && <SearchByUsStateFV />}
        {state == 8 && <SearchByCountryFV />}
      </section>
    </div>
  );
};

export default FindVehicles;
