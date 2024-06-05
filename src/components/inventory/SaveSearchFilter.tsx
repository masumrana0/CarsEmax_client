"use client";
import React from "react";
// icons
import { FaHeart } from "react-icons/fa6";

const SaveSearchFilter = () => {
  return (
    <button className="flex items-center gap-1 px-4 py-2 text-md font-bold rounded-full text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600    transition-color ">
      <FaHeart /> SAVE SEARCH
    </button>
  );
};

export default SaveSearchFilter;
