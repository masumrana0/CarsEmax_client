"use client";

import React, { useState } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";

interface Make {
  name: string;
  total: string;
}

const MakeForFilter: React.FC = () => {
  // All Makes
  const allmakes: Make[] = [
    { name: "Acura", total: "1,921" },
    { name: "Aris", total: "19" },
    { name: "Alfa Romeo", total: "19" },
    { name: "Audi", total: "2,635" },
    { name: "Bayl", total: "19" },
    { name: "Bentley", total: "19" },
    { name: "Blue Bird", total: "19" },
    { name: "BMW", total: "19" },
    { name: "bUICK", total: "19" },
    { name: "Cadillac", total: "2,666" },
    { name: "Can-Am", total: "123" },
    { name: "Chevrolet", total: "53" },
    { name: "Chrysler", total: "21" },
    { name: "Coach", total: "42" },
    { name: "Cole", total: "23" },
    { name: "Dacia", total: "134" },
    { name: "Dodge", total: "3,263" },
    { name: "Ducati", total: "32" },
    { name: "Dutc", total: "32" },
    { name: "East", total: "3,263" },
    { name: "Fiat", total: "298" },
  ];

  //   Essential state
  const [isOpen, setOpen] = useState(false);
  const [isShowAllMake, setShowAllMake] = useState(false);
  const [selectedMakes, setSelectedMakes] = useState<string[]>([]);

  //   handling On Searching
  const handleSearching = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchingdata = e.target.value;
    // console.log(searchingdata);
  };

  //   Handle change checkbox
  const handleCheckboxChange = (make: string) => {
    setSelectedMakes((prevSelected) =>
      prevSelected.includes(make)
        ? prevSelected.filter((item) => item !== make)
        : [...prevSelected, make]
    );
  };

  return (
    <div
      className={`border-y border-blue-200 text-sm lg:text-md transition-all duration-500 ease-in overflow-hidden ${
        isOpen ? "max-h-[40rem]" : "max-h-[3rem]"
      }`}
    >
      {/* Head Button  */}
      <button
        onClick={() => setOpen(!isOpen)}
        className="flex items-center justify-between font-bold w-full transition-color hover:bg-blue-100 hover:text-blue-600 py-3"
      >
        Make
        <div className="flex items-center gap-2">
          {/* if user selected any checkbox then reset visisble. IT  Handle Reseting  */}
          {selectedMakes.length > 0 && (
            <p
              onClick={() => setSelectedMakes([])}
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
      <div className="py-3 px-2">
        <input
          onChange={(e) => handleSearching(e)}
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 outline-none border border-gray-300 rounded hover:border-blue-500"
        />
        <div className="mt-5">
          <h2 className="text-sm text-gray-500 font-bold">POPULAR MAKES</h2>

          <div
            className={` ${
              isShowAllMake
                ? " overflow-y-auto  h-[20rem]"
                : " overflow-hidden  h-[18rem]"
            }`}
          >
            {allmakes.map((make) => (
              <div
                key={make.name}
                className={`flex items-center justify-between py-2 px-2 rounded ${
                  selectedMakes.includes(make.name) ? "bg-blue-100" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`checkbox-${make.name}`}
                    checked={selectedMakes.includes(make.name)}
                    onChange={() => handleCheckboxChange(make.name)}
                    className="mt-1 focus:ring-white focus:border-blue-500 h-4 w-4"
                  />
                  <label
                    htmlFor={`checkbox-${make.name}`}
                    className={`${
                      selectedMakes.includes(make.name)
                        ? "text-blue-600"
                        : "text-gray-900"
                    }`}
                  >
                    {make.name}
                  </label>
                </div>
                <span
                  className={`${
                    selectedMakes.includes(make.name)
                      ? "text-blue-600"
                      : "text-gray-900"
                  }`}
                >
                  {make.total}
                </span>
              </div>
            ))}
          </div>
          {!isShowAllMake && (
            <div className="mt-3">
              <button
                onClick={() => setShowAllMake(true)}
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <IoMdArrowDropdown /> Show all Makes A-Z
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MakeForFilter;
