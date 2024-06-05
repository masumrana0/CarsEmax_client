"use client";

import React, { useState } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import { IQuery } from "@/Interface/common";

interface IModel {
  name: string;
  total: string;
}

const ModelForFilter: React.FC = () => {
  // All Makes
  const quries: IQuery[] = [
    { name: "1500", total: "1,921" },
    { name: "200", total: "19" },
    { name: "3", total: "19" },
    { name: "3 Series", total: "2,635" },
    { name: "300", total: "19" },
    { name: "4Runner", total: "19" },
    { name: "5 Series", total: "19" },
    { name: "Acadia", total: "19" },
    { name: "Accent", total: "19" },
    { name: "Altima", total: "2,666" },
    { name: "Avalon", total: "123" },
    { name: "C-Class", total: "53" },
    { name: "Camry", total: "21" },
    { name: "Caravan", total: "42" },
    { name: "Challenger", total: "23" },
    { name: "Charger", total: "134" },
    { name: "Civic", total: "3,263" },
    { name: "Colorado", total: "32" },
    { name: "Compass", total: "32" },
    { name: "Corolla", total: "3,263" },
    { name: "Cruze", total: "298" },
    { name: "Cx-5", total: "298" },
    { name: "Durango", total: "298" },
    { name: "E-Class", total: "298" },
    { name: "Edge", total: "298" },
    { name: "Elantra", total: "298" },
    { name: "Enclave", total: "298" },
    { name: "Encore", total: "298" },
    { name: "Equinox", total: "298" },
    { name: "Es350", total: "298" },
    { name: "Escape", total: "298" },
    { name: "Expedition", total: "298" },
    { name: "Explorer", total: "298" },
    { name: "Express", total: "298" },
    { name: "F-150", total: "298" },
    { name: "F250", total: "298" },
    { name: "F350", total: "298" },
    { name: "Focus", total: "298" },
    { name: "Forester", total: "298" },
    { name: "Forte", total: "298" },
    { name: "Frontier", total: "298" },
    { name: "Fusion", total: "298" },
    { name: "Grand Cherokee", total: "298" },
  ];

  //   Essential state
  const [isOpen, setOpen] = useState(false);
  const [isShowAllModel, setShowAllModel] = useState(false);
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
        Model
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
        <input
          onChange={(e) => handleSearching(e)}
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 outline-none border border-gray-300 rounded hover:border-blue-500"
        />
        <div className="mt-5">
          <h2 className="text-sm text-gray-500 font-bold">POPULAR MODELS</h2>

          <div
            className={` ${
              isShowAllModel
                ? " overflow-y-auto  h-[20rem]"
                : " overflow-hidden  h-[18rem]"
            }`}
          >
            {quries.map((query: IQuery) => (
              <div
                key={query.name}
                className={`flex items-center justify-between py-2 px-2 rounded ${
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
          {!isShowAllModel && (
            <div className="mt-3">
              <button
                onClick={() => setShowAllModel(true)}
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <IoMdArrowDropdown /> Show all Model A-Z
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModelForFilter;
