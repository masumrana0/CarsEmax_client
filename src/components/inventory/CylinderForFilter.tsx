"use client";
import React, { useState } from "react";
// icons
import { TiPlus, TiMinus } from "react-icons/ti";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { IQuery } from "@/Interface/common";

const CylinderForFilter: React.FC = () => {
  // All Makes
  const transmisions: IQuery[] = [
    { name: "Alabamaf", total: "1,921" },
    { name: "Alaska", total: "19" },
    { name: "Alberta", total: "19" },
    { name: "Arizona", total: "2,635" },
    { name: "Arkansas", total: "19" },
    { name: "Baden-Wurttemberg", total: "19" },
    { name: "Colorado", total: "19" },
    { name: "Connecticut", total: "19" },
    { name: "Delaware", total: "19" },
    { name: "Florida", total: "19" },
    { name: "Georgia", total: "19" },
    { name: "Hawaii", total: "19" },
    { name: "Illinois", total: "19" },
    { name: "Indiana", total: "19" },
    { name: "Illinois", total: "19" },
    { name: "Indiana", total: "19" },
    { name: "Kansas", total: "19" },
    { name: "Kentucky", total: "19" },
    { name: "Louisiana", total: "19" },
    { name: "Lower saxony", total: "19" },
  ];

  //   Essential state
  const [isOpen, setOpen] = useState(false);
  const [isShowAll, setShowAll] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState<string[]>([]);

  //   handling On Searching
  const handleSearching = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchingdata = e.target.value;
    // console.log(searchingdata);
  };

  //   Handle change checkbox
  const handleCheckboxChange = (make: string) => {
    setSelectedQuery((prevSelected) =>
      prevSelected.includes(make)
        ? prevSelected.filter((item) => item !== make)
        : [...prevSelected, make]
    );
  };

  return (
    <div
      className={`border-y border-blue-200 text-sm lg:text-md transition-all duration-500 ease-in overflow-hidden ${
        isOpen ? "max-h-[30rem]" : "max-h-[3rem]"
      }`}
    >
      {/* Head Button for Collapce  */}
      <button
        onClick={() => setOpen(!isOpen)}
        className="flex items-center justify-between font-bold w-full transition-color hover:bg-blue-100 hover:text-blue-600 py-3"
      >
        Cylinder
        <div className="flex items-center gap-2">
          {/* if user selected any checkbox then reset visisble. IT  Handle Reseting  */}
          {selectedQuery.length > 0 && (
            <p
              onClick={() => setSelectedQuery([])}
              className="  text-blue-600 text-sm cursor-pointer "
            >
              Reset
            </p>
          )}
          {isOpen ? (
            <TiMinus className="font-bold text-blue-600 text-xl" />
          ) : (
            <TiPlus className="font-bold text-blue-600 text-xl" />
          )}
        </div>
      </button>

      {/* Collapce content */}
      <div className="py-3 px-2  ">
        <input
          onChange={(e) => handleSearching(e)}
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 outline-none border border-gray-300 rounded hover:border-blue-500"
        />
        <div className="mt-1">
          <div
            className={` ${
              isShowAll
                ? " overflow-y-auto  h-[20rem]"
                : " overflow-hidden  h-[18rem]"
            }`}
          >
            {transmisions.map((transmision: IQuery) => (
              <div
                key={transmision.name}
                className={`flex items-center justify-between py-2   rounded ${
                  selectedQuery.includes(transmision.name) ? "bg-blue-100" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`checkbox-${transmision.name}`}
                    checked={selectedQuery.includes(transmision.name)}
                    onChange={() => handleCheckboxChange(transmision.name)}
                    className="mt-1 focus:ring-white focus:border-blue-500 h-4 w-4"
                  />
                  <label
                    htmlFor={`checkbox-${transmision.name}`}
                    className={`${
                      selectedQuery.includes(transmision.name)
                        ? "text-blue-600"
                        : "text-gray-900"
                    }`}
                  >
                    {transmision.name}
                  </label>
                </div>
                <span
                  className={`${
                    selectedQuery.includes(transmision.name)
                      ? "text-blue-600"
                      : "text-gray-900"
                  }`}
                >
                  {transmision.total}
                </span>
              </div>
            ))}
          </div>

          <div>
            <button
              onClick={() => setShowAll(!isShowAll)}
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              {isShowAll ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}{" "}
              {isShowAll ? "Hide" : "Show All"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CylinderForFilter;
