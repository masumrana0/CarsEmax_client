"use client";
import React, { useState } from "react";
// icons
import { TiPlus, TiMinus } from "react-icons/ti";

const DistancePort = () => {
  // data
  const ports = [
    "New Jersey",
    "Savannah",
    "Miami",
    "Houston",
    "Los Angeles",
    "Seattle",
  ];
  const distanceOptions = [
    { distance: "Any Distance", number: "198,756" },
    { distance: "30 Miles", number: "1,003" },
    { distance: "50 Miles", number: "1,003" },
    { distance: "100 Miles", number: "1,003" },
    { distance: "150 Miles", number: "3,261" },
    { distance: "200 Miles", number: "7,093" },
  ];

  const [isOpen, setOpen] = useState(false);
  const [selectedPort, setSelectedPort] = useState("");
  const [selectedDistance, setSelectedDistance] = useState("");

  //   handle changeing Port
  const handlePortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPort(event.target.value);
  };

  //   Handle Change Distance
  const handleDistanceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDistance(event.target.value);
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
        Distance to the port
        {isOpen ? (
          <TiMinus className="font-bold text-blue-600 text-xl" />
        ) : (
          <TiPlus className="font-bold text-blue-600 text-xl" />
        )}
      </button>

      <div className="py-3 px-2">
        <div className="mb-3">
          <label htmlFor="port-select" className="block text-gray-700">
            Choose Port
          </label>
          <select
            id="port-select"
            value={selectedPort}
            onChange={handlePortChange}
            className="w-full border-2 rounded-lg py-1.5 px-2 text-gray-600 bg-white"
          >
            <option value="">Choose Port</option>
            {ports.map((port, index) => (
              <option key={index} value={port}>
                {port}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="distance-select" className="block text-gray-700">
            Choose Distance
          </label>
          <select
            id="distance-select"
            value={selectedDistance}
            onChange={handleDistanceChange}
            className="w-full border-2 rounded-lg py-1.5 px-2 text-gray-600 bg-white"
          >
            <option value="">Any Distance</option>
            {distanceOptions.map((option, index) => (
              <option key={index} value={option.distance}>
                {option.distance} ({option.number})
              </option>
            ))}
          </select>
        </div>

        <button className="border-2 py-2 text-center w-full mt-3 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 transition-color border-blue-600 font-bold">
          APPLY
        </button>
      </div>
    </div>
  );
};

export default DistancePort;
