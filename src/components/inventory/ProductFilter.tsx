"use client"
import React from "react";
// All Filter Components
import AuctionsForFilter from "./AuctionsForFilter";
import DistancePort from "./DistancePort";
import YearForFilter from "./YearForFilter";
import MakeForFilter from "./MakeForFilter";
import ModelForFilter from "./ModelForFilter";
import VehicleTitleTypeForFilter from "./VehicleTitleTypeForFIlter";
import StateForFilter from "./StateForFilter";
import SaleNameForFilter from "./SaleNameForFilter";
import MarketForFilter from "./MarketForFilter";
import LocationForFilter from "./LocationForFilter";
import PrimayDamageForFilter from "./PrimaryDamageForFilter";
import VehicleTypeForFilter from "./VehicleTypeForFilter";
import EngineTypeForFilter from "./EngineTypeForFilter";
import TransmissionForFilter from "./TransmissionForFilter";
import BodyStyleForFilter from "./BodyStyleForFilter";
import OdometerForFilter from "./OdometerForFilter";
import FuelTypeForFilter from "./FuelTypeForFilter";
import DriveTrainForFilter from "./DriveTrainForFilter";
import SaleDateForFilter from "./SaleDateForFilter";
import SourceForFilter from "./SourceForFilter";
import ColorForFilter from "./ColorForFilter";
import AuctionsTypeForFilter from "./AuctionTypeForFilter";
import CylinderForFilter from "./CylinderForFilter";
import TopQueriesForFilter from "./topQuriesForFilter/TopQuriesForFilter";
import SwitchsForFilter from "./SwitchsForFilter";

// redux
import { useDispatch } from "react-redux";
import { filterToggle } from "@/Redux/Slices/FilterSlice";

// icons
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

const ProductFilter = () => {
  // Redux
  const dispatch = useDispatch();
  return (
    <div>
      {/* It's Section For only Mobile or Tablet Divice  */}
      <div className="bg-blue-600 text-white lg:hidden ">
        <div className=" px-3 sm:px-6 md:px-8 py-3 flex items-center justify-between">
          <span className="flex items-center gap-1 text-2xl">
            <PiSlidersHorizontalBold />
            <span className="text-[17px] tracking-wide">FILTERS</span>
          </span>
          <button onClick={() => dispatch(filterToggle())} className="text-xl">
            <RxCross2 />
          </button>
        </div>
      </div>

      {/* It's Section For only Mobile or Tablet Divice  */}
      <div className="fixed bottom-0 p-3 bg-white shadow-2xl shadow-gray-500 w-full text-sm sm:text-md    lg:hidden">
        <button className="font-bold px-3 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-400    ">
          Show 195,603 Results
        </button>
      </div>

      <div className="bg-white  lg:bg-inherit py-3 lg:py-4 lg:px-8 ">
        <h3 className="font-bold px-4 lg:px-0  text-md mb-3 lg:mb-0 lg:text-2xl">
          Search Filters
        </h3>

        <div className="w-full lg:hidden">
          <TopQueriesForFilter isUseFilter={true} />
        </div>
      </div>

      {/* Fintering Functionlites Section  */}
      <div className="px-3  sm:px-8 sm:pb-8 mb-52 h-[100vh] lg:h-auto overflow-y-auto lg:overflow-hidden">
        {/* Switchs section */}
        <section>
          <SwitchsForFilter />
        </section>
        {/*  Filter Queryies  section */}
        <section>
          <AuctionsForFilter />
          <DistancePort />
          <YearForFilter />
          <MakeForFilter />
          <ModelForFilter />
          <VehicleTitleTypeForFilter />
          <StateForFilter />
          <SaleNameForFilter />
          <MarketForFilter />
          <LocationForFilter />
          <PrimayDamageForFilter />
          <VehicleTypeForFilter />
          <EngineTypeForFilter />
          <TransmissionForFilter />
          <BodyStyleForFilter />
          <OdometerForFilter />
          <FuelTypeForFilter />
          <DriveTrainForFilter />
          <SaleDateForFilter />
          <AuctionsTypeForFilter />
          <CylinderForFilter />
          <SourceForFilter />
          <ColorForFilter />
        </section>
      </div>
    </div>
  );
};

export default ProductFilter;
