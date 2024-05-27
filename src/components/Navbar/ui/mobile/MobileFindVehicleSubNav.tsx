import React, { SetStateAction } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import FeaturedItemsFV from "../FeaturedItemsFV";
import PopularMakesItemFV from "../PopularMakesItemFV";
import VehicaleTypeFV from "../VehicaleTypeFV";
import BodyTypeFV from "../BodyStyleFV";
import DamageTypeFV from "../DamageTypeFV";
import OwnershipDocTypesFV from "../OwnershipDocTypesFV";
import SearchByUsStateFV from "../SearchByUsStateFV";
import SearchByCountryFV from "../SearchByCountryFV";

const MobileFindVehicleSubNav = ({
  stateFV,
  setStateFV,
}: {
  stateFV: number;
  setStateFV: React.Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="absolute  h-[100vh] overflow-y-auto  w-full top-0   bg-gray-900 pb-32">
      <div className="w-full bg-gray-800 border-b border-gray-700 py-3 px-2  text-md font-bold">
        {stateFV == 1 && (
          <button
            onClick={() => setStateFV(0)}
            className={`flex items-center  gap-1  `}
          >
            <AiFillCaretLeft />
            Featured Items
          </button>
        )}
        {stateFV == 2 && (
          <button
            onClick={() => setStateFV(0)}
            className={`flex items-center  gap-1  `}
          >
            <AiFillCaretLeft />
            Popular Makes
          </button>
        )}
        {stateFV == 3 && (
          <button
            onClick={() => setStateFV(0)}
            className={`flex items-center  gap-1  `}
          >
            <AiFillCaretLeft />
            Vehicle Types
          </button>
        )}
        {stateFV == 4 && (
          <button
            onClick={() => setStateFV(0)}
            className={`flex items-center  gap-1  `}
          >
            <AiFillCaretLeft />
            Body Styles
          </button>
        )}
        {stateFV == 5 && (
          <button
            onClick={() => setStateFV(0)}
            className={`flex items-center  gap-1  `}
          >
            <AiFillCaretLeft />
            Damage Types
          </button>
        )}

        {stateFV == 6 && (
          <button
            onClick={() => setStateFV(0)}
            className={`flex items-center  gap-1  `}
          >
            <AiFillCaretLeft />
            Ownership Doc Types
          </button>
        )}
        {stateFV == 7 && (
          <button
            onClick={() => setStateFV(0)}
            className={`flex items-center  gap-1  `}
          >
            <AiFillCaretLeft />
            Search by US state
          </button>
        )}
        {stateFV == 8 && (
          <button
            onClick={() => setStateFV(0)}
            className={`flex items-center  gap-1  `}
          >
            <AiFillCaretLeft />
            Search by Country
          </button>
        )}
      </div>

      <div className="w-full">
        {stateFV == 1 && <FeaturedItemsFV />}
        {stateFV == 2 && <PopularMakesItemFV />}
        {stateFV == 3 && <VehicaleTypeFV />}
        {stateFV == 4 && <BodyTypeFV />}
        {stateFV == 5 && <DamageTypeFV />}
        {stateFV == 6 && <OwnershipDocTypesFV />}
        {stateFV == 7 && <SearchByUsStateFV />}
        {stateFV == 8 && <SearchByCountryFV />}
      </div>
    </div>
  );
};

export default MobileFindVehicleSubNav;
