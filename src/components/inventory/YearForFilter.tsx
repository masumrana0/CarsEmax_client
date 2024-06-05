"use client";
import React, { useState } from "react";
// Icons
import { HiMinus } from "react-icons/hi";
import { TiPlus, TiMinus } from "react-icons/ti";

const YearForFilter = () => {
  // Makeing Years Data
  const yearsFrom1920To2025 = Array.from(
    { length: 2025 - 1920 + 1 },
    (_, i) => 1920 + i
  );
  const yearsFrom2024To2016 = Array.from(
    { length: 2024 - 2016 + 1 },
    (_, i) => 2024 - i
  );

  const [isOpen, setOpen] = useState(false);
  const [selectedStartYear, setSelectedStartYear] = useState("");
  const [selectedEndYear, setSelectedEndYear] = useState("");

  const handleStartYearChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedStartYear(event.target.value);
  };

  const handleEndYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEndYear(event.target.value);
  };

  return (
    <div
      className={`border-y border-blue-200 text-sm lg:text-md transition-all duration-500 ease-in overflow-hidden ${
        isOpen ? "max-h-96" : "max-h-[3rem]"
      }`}
    >
      <button
        onClick={() => setOpen(!isOpen)}
        className="flex items-center justify-between font-bold w-full transition-color hover:bg-blue-100 hover:text-blue-600 py-3"
      >
        Year
        {isOpen ? (
          <TiMinus className="font-bold text-blue-600 text-xl" />
        ) : (
          <TiPlus className="font-bold text-blue-600 text-xl" />
        )}
      </button>

      <div className="py-3 px-2 flex gap-2 items-center">
        <div className="mb-3 w-1/2">
          <select
            id="start-year-select"
            value={selectedStartYear}
            onChange={handleStartYearChange}
            className="w-full border-2 rounded-lg py-1.5 px-2 text-gray-600 bg-white"
          >
            <option value="">2016</option>
            {yearsFrom1920To2025.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <span>
          <HiMinus />
        </span>

        <div className="mb-3 w-1/2">
          <select
            id="end-year-select"
            value={selectedEndYear}
            onChange={handleEndYearChange}
            className="w-full border-2 rounded-lg py-1.5 px-2 text-gray-600 bg-white"
          >
            <option value="">2025</option>
            {yearsFrom2024To2016.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default YearForFilter;
