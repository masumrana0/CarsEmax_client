"use client";
import React, { useState } from "react";
// icons
import { TiPlus, TiMinus } from "react-icons/ti";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { IQuery } from "@/Interface/common";

const ColorForFilter: React.FC = () => {
  // All Makes
  const Colors: IQuery[] = [
    { name: "Crimson", total: "1,921" },
    { name: "Azure", total: "19" },
    { name: "Amber", total: "19" },
    { name: "Indigo", total: "2,635" },
    { name: "Slate", total: "19" },
    { name: "Emerald", total: "19" },
    { name: "Cobalt", total: "19" },
    { name: "Teal", total: "19" },
    { name: "Lavender", total: "19" },
    { name: "Magenta", total: "19" },
    { name: "Ruby", total: "19" },
    { name: "Ivory", total: "19" },
    { name: "Silver", total: "19" },
    { name: "Bronze", total: "19" },
    { name: "Onyx", total: "19" },
    { name: "Pearl", total: "19" },
    { name: "Sapphire", total: "19" },
    { name: "Topaz", total: "19" },
    { name: "Jade", total: "19" },
    { name: "Ruby", total: "19" },
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
        isOpen ? "max-h-[40rem]" : "max-h-[3rem]"
      }`}
    >
      {/* Head Button for Collapce  */}
      <button
        onClick={() => setOpen(!isOpen)}
        className="flex items-center justify-between font-bold w-full transition-color hover:bg-blue-100 hover:text-blue-600 py-3"
      >
        Color
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
            {Colors.map((color: IQuery) => (
              <div
                key={color.name}
                className={`flex items-center justify-between py-2   rounded ${
                  selectedQuery.includes(color.name) ? "bg-blue-100" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`checkbox-${color.name}`}
                    checked={selectedQuery.includes(color.name)}
                    onChange={() => handleCheckboxChange(color.name)}
                    className="mt-1 focus:ring-white focus:border-blue-500 h-4 w-4"
                  />
                  <label
                    htmlFor={`checkbox-${color.name}`}
                    className={`${
                      selectedQuery.includes(color.name)
                        ? "text-blue-600"
                        : "text-gray-900"
                    }`}
                  >
                    {color.name}
                  </label>
                </div>
                <span
                  className={`${
                    selectedQuery.includes(color.name)
                      ? "text-blue-600"
                      : "text-gray-900"
                  }`}
                >
                  {color.total}
                </span>
              </div>
            ))}
          </div>

          <div>
            <button
              onClick={() => setShowAll(!isShowAll)}
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              {isShowAll ? <IoMdArrowDropup /> : <IoMdArrowDropdown />} Show All
              Colors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorForFilter;
