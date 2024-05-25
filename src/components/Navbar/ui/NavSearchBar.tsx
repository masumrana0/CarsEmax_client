"use client";
import React, { useState } from "react";

// icon
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineSearch,
} from "react-icons/ai";

const NavSearchBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [dropdownContent, setDropdownContent] = useState("All");

  const handleSearch = (e) => {
    console.log(e);
  };

  return (
    <div
      onMouseLeave={() => setOpen(false)}
      className="relative xl:w-[800px] lg:w-[450px] md:w-[350px] w-full"
    >
      <form
        onSubmit={handleSearch}
        className={` flex items-center justify-between overflow-hidden h-[40px] bg-white rounded-full   ${
          isOpen && "rounded-bl-none rounded-br-none "
        }  `}
      >
        <div className="bg-gray-200 hover:bg-gray-300 pl-3 py-10 w-[4rem] ">
          <button
            type="button"
            className=" flex items-center text-sm text-gray-700 gap-1 "
            onClick={() => setOpen(!isOpen)}
          >
            {dropdownContent}
            {isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </button>
        </div>

        <input
          type="text"
          className="outline-none px-2 w-full text-sm"
          placeholder="Search Vehicles by Make, Model, Year, Vin,etc "
        />
        <button
          type="submit"
          className={`px-3 h-full bg-orange-400 hover:bg-orange-300  border-2 border-white  rounded-r-full ${
            isOpen && "rounded-br-none"
          } text-xl  `}
        >
          <AiOutlineSearch />
        </button>
      </form>

      {isOpen && (
        <div className="absolute  w-full top-[2rem] md:top-[3rem]  md:w-[20rem]  bg-white gap-1  py-1 flex flex-col items-start rounded-b-lg overflow-hidden   ">
          <button
            type="button"
            onClick={() => setDropdownContent("All")}
            className="hover:bg-gray-100 w-full text-left px-4 py-1"
          >
            All Auctions
          </button>
          <button
            type="button"
            className="hover:bg-gray-100 w-full text-left px-4 py-1"
            onClick={() => setDropdownContent("US")}
          >
            USA and Canada Auctions
          </button>
          <button
            type="button"
            className="hover:bg-gray-100 w-full text-left px-4 py-1"
            onClick={() => setDropdownContent("DE")}
          >
            Germany Auctions
          </button>
        </div>
      )}
    </div>
  );
};

export default NavSearchBar;
