import React, { useState } from "react";
import PopularMakesItemFV from "../Navbar/ui/PopularMakesItemFV";
import PopularMakes from "./PopularMakes";
import FeaturedItems from "./FeaturedItems";
import VehicleTypes from "./VehicleTypes";
import BodyStyles from "./BodyStyles";
import DamageType from "./DamageType";
import PopularModels from "./PopularModels";
import LocationStates from "./LocationStates";
import LocationCites from "./LocationCites";

const ViewFullSalvage = () => {
  const [state, setState] = useState(1);
  return (
    <div>
      {/* section title  */}
      <h3 className="font-bold text-xl md:text-3xl lg:text-4xl text-gray-800">
        View Full Salvage Auto Auction Inventory
      </h3>
      {/* button groups */}
      <div className="my-5 flex items-center  gap-3 overflow-x-auto   ">
        <button
          onClick={() => setState(1)}
          className={`text-nowrap  border border-gray-300 rounded lg:px-4   py-2 text-xs lg:text-sm  hover:border-blue-500 hover:text-blue-600 ${
            state == 1 && "bg-blue-300 text-blue-600"
          }`}
        >
          Popular Makes
        </button>
        <button
          onClick={() => setState(2)}
          className={`text-nowrap  border border-gray-300 rounded lg:px-4 px-3 py-2 text-sm hover:border-blue-500 hover:text-blue-600 ${
            state == 2 && "bg-blue-300 text-blue-600"
          }`}
        >
          Featured Items
        </button>
        <button
          onClick={() => setState(3)}
          className={`text-nowrap  w-[9rem] border border-gray-300 rounded lg:px-4 px-3 py-2 text-sm hover:border-blue-500 hover:text-blue-600 ${
            state == 3 && "bg-blue-300 text-blue-600"
          }`}
        >
          Vehicle Types
        </button>
        <button
          onClick={() => setState(4)}
          className={`  text-nowrap  border border-gray-300 rounded lg:px-4 px-3 py-2 text-sm hover:border-blue-500 hover:text-blue-600 ${
            state == 4 && "bg-blue-300 text-blue-600"
          }`}
        >
          Body Styles
        </button>
        <button
          onClick={() => setState(5)}
          className={` text-nowrap border border-gray-300 rounded lg:px-4 px-3 py-2 text-sm hover:border-blue-500 hover:text-blue-600 ${
            state == 5 && "bg-blue-300 text-blue-600"
          }`}
        >
          Damage Types
        </button>
        <button
          onClick={() => setState(6)}
          className={`text-nowrap border border-gray-300 rounded lg:px-4 px-3 py-2 text-sm hover:border-blue-500 hover:text-blue-600 ${
            state == 6 && "bg-blue-300 text-blue-600"
          }`}
        >
          Popular Models
        </button>
        <button
          onClick={() => setState(7)}
          className={`text-nowrap border border-gray-300 rounded lg:px-4 px-3 py-2 text-sm hover:border-blue-500 hover:text-blue-600 ${
            state == 7 && "bg-blue-300 text-blue-600"
          }`}
        >
          Location States
        </button>
        <button
          onClick={() => setState(8)}
          className={`text-nowrap border border-gray-300 rounded lg:px-4 px-3 py-2 text-sm hover:border-blue-500 hover:text-blue-600 ${
            state == 8 && "bg-blue-300 text-blue-600"
          }`}
        >
          Location Cities
        </button>
      </div>

      {/* <PopularMakes /> */}
      <div>
        {state == 1 && <PopularMakes />}
        {state == 2 && <FeaturedItems />}
        {state == 3 && <VehicleTypes />}
        {state == 4 && <BodyStyles />}
        {state == 5 && <DamageType />}
        {state == 6 && <PopularModels />}
        {state == 7 && <LocationStates />}
        {state == 8 && <LocationCites />}
      </div>
    </div>
  );
};

export default ViewFullSalvage;
