"use client";

import { IQuery } from "@/Interface/common";
import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { TiPlus, TiMinus } from "react-icons/ti";

// Define Data Interface
interface IDamage extends IQuery {
  sub?: IQuery[];
}

const PrimayDamageForFilter: React.FC = () => {
  // All AllPrimaryDamages Data
  const AllPrimaryDamages: IDamage[] = [
    { name: "Normal Wear", total: "1,921" },
    {
      name: "Low Damage",
      total: "11,20887",
      sub: [
        { name: "Hail", total: "6,34540" },
        { name: "Minor Dent/Scratches", total: "7,7777" },
      ],
    },
    {
      name: "Medium - Heavy Damage",
      total: "177,561",
      sub: [
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
        { name: "All Over", total: "12,3242" },
      ],
    },
  ];

  //   Essential state
  const [isOpen, setOpen] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState<string[]>([]);
  const [isShowAllQuery, setShowAllQuery] = useState(false);

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
      {/* Head Button for Collapse */}
      <button
        onClick={() => setOpen(!isOpen)}
        className="flex items-center justify-between font-bold w-full transition-color hover:bg-blue-100 hover:text-blue-600 py-3"
      >
        Primary Damage
        <div className="flex items-center gap-2">
          {/* if user selected any checkbox then reset visible. IT Handle Resetting */}
          {selectedQuery.length > 0 && (
            <p
              onClick={() => setSelectedQuery([])}
              className="text-blue-600 text-sm cursor-pointer"
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

      {/* Collapse content */}
      <div
        className={` ${
          isShowAllQuery
            ? " overflow-y-auto  h-[20rem]"
            : " overflow-hidden  h-[18rem]"
        }`}
      >
        <div>
          {AllPrimaryDamages.map((primaryDamage: IDamage) => (
            <div key={primaryDamage.name}>
              <div
                className={`flex items-center justify-between py-1.5 rounded ${
                  selectedQuery.includes(primaryDamage.name)
                    ? "bg-blue-100"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`checkbox-${primaryDamage.name}`}
                    checked={selectedQuery.includes(primaryDamage.name)}
                    onChange={() => handleCheckboxChange(primaryDamage.name)}
                    className="mt-1 focus:ring-white focus:border-blue-500 h-4 w-4"
                  />
                  <label
                    htmlFor={`checkbox-${primaryDamage.name}`}
                    className={`${
                      selectedQuery.includes(primaryDamage.name)
                        ? "text-blue-600"
                        : "text-gray-900"
                    }`}
                  >
                    {primaryDamage.name}
                  </label>
                </div>
                <span
                  className={`${
                    selectedQuery.includes(primaryDamage.name)
                      ? "text-blue-600"
                      : "text-gray-900"
                  }`}
                >
                  {primaryDamage.total}
                </span>
              </div>
              {primaryDamage.sub && (
                <div className="ml-6">
                  {primaryDamage.sub.map((subPrimaryDamage: IQuery) => (
                    <div
                      key={subPrimaryDamage.name}
                      className={`flex items-center justify-between py-1.5 rounded ${
                        selectedQuery.includes(subPrimaryDamage.name)
                          ? "bg-blue-100"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id={`checkbox-${subPrimaryDamage.name}`}
                          checked={selectedQuery.includes(
                            subPrimaryDamage.name
                          )}
                          onChange={() =>
                            handleCheckboxChange(subPrimaryDamage.name)
                          }
                          className="mt-1 focus:ring-white focus:border-blue-500 h-4 w-4"
                        />
                        <label
                          htmlFor={`checkbox-${subPrimaryDamage.name}`}
                          className={`${
                            selectedQuery.includes(subPrimaryDamage.name)
                              ? "text-blue-600"
                              : "text-gray-900"
                          }`}
                        >
                          {subPrimaryDamage.name}
                        </label>
                      </div>
                      <span
                        className={`${
                          selectedQuery.includes(subPrimaryDamage.name)
                            ? "text-blue-600"
                            : "text-gray-900"
                        }`}
                      >
                        {subPrimaryDamage.total}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <button
          onClick={() => setShowAllQuery(!isShowAllQuery)}
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          {isShowAllQuery ? <IoMdArrowDropup /> : <IoMdArrowDropdown />} Show
          all Vehicle Type A-Z
        </button>
      </div>
    </div>
  );
};

export default PrimayDamageForFilter;
