"use client";

import { IQuery } from "@/Interface/common";
import React, { useState } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";

const MarketForFilter: React.FC = () => {
  // All Makes
  const  quries: IQuery[] = [
    { name: "Clean Title", total: "1,921" },
    { name: "Non-repariable", total: "11,20887" },
  ];

  //   Essential state
  const [isOpen, setOpen] = useState(false);
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
        Market
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
      <div>
        <div>
          {quries.map((query: IQuery) => (
            <div
              key={query.name}
              className={`flex items-center justify-between py-1.5  rounded ${
                selectedQuery.includes(query.name) ? "bg-blue-100" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`checkbox-${query.name}`}
                  checked={selectedQuery.includes(query.name)}
                  onChange={() => handleCheckboxChange(query.name)}
                  className="mt-1 focus:ring-white focus:border-blue-500 h-4 w-4"
                />
                <label
                  htmlFor={`checkbox-${query.name}`}
                  className={`${
                    selectedQuery.includes(query.name)
                      ? "text-blue-600"
                      : "text-gray-900"
                  }`}
                >
                  {query.name}
                </label>
              </div>
              <span
                className={`${
                  selectedQuery.includes(query.name)
                    ? "text-blue-600"
                    : "text-gray-900"
                }`}
              >
                {query.total}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketForFilter;
