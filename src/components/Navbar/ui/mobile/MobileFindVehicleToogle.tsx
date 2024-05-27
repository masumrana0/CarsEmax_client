"use client";
import React, { useState } from "react";

// icons
import {
  AiFillCaretDown,
  AiFillCaretRight,
  AiFillCaretUp,
} from "react-icons/ai";

const MobileFindVehicleToogle = ({
  setStateFV,
}: {
  setStateFV: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section>
      <div onClick={() => setOpen(!isOpen)} className=" px-2 py-3   w-full  ">
        <button className="w-full flex items-center justify-between gap-1">
          Find Vehicles{" "}
          <span className="text-xs">
            {isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </span>
        </button>
      </div>
      {/* Find Vehicles navigation State  */}
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in ${
          isOpen ? "max-h-[27rem]" : "max-h-0"
        }`}
      >
        <section>
          <div className="w-full bg-gray-900">
            <button
              onClick={() => setStateFV(1)}
              className={`py-3 px-2 border-b border-gray-700 text-md font-[300]  flex items-center justify-between w-full `}
            >
              Featured Items{" "}
              <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />{" "}
            </button>
            <button
              onClick={() => setStateFV(2)}
              className="py-3 px-2 border-b border-gray-700 text-md font-[300]  flex items-center justify-between w-full"
            >
              Popular Makes{" "}
              <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />{" "}
            </button>
            <button
              onClick={() => setStateFV(3)}
              className="py-3 px-2 border-b border-gray-700 text-md font-[300]  flex items-center justify-between w-full"
            >
              Vehicle Types{" "}
              <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />{" "}
            </button>
            <button
              onClick={() => setStateFV(4)}
              className="py-3 px-2 border-b border-gray-700 text-md font-[300]  flex items-center justify-between w-full"
            >
              Body Styles{" "}
              <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />
            </button>
            <button
              onClick={() => setStateFV(5)}
              className="py-3 px-2 border-b border-gray-700 text-md font-[300]  flex items-center justify-between w-full"
            >
              Damage Types{" "}
              <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />
            </button>
            <button
              onClick={() => setStateFV(6)}
              className="py-3 px-2 border-b border-gray-700 text-md font-[300]  flex items-center justify-between w-full"
            >
              Ownership Doc Types{" "}
              <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />
            </button>
            <button
              onMouseEnter={() => setStateFV(7)}
              className="py-3 px-2 border-b border-gray-700 text-md font-[300]  flex items-center justify-between w-full"
            >
              Search by US state{" "}
              <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />
            </button>
            <button
              onMouseEnter={() => setStateFV(8)}
              className="py-3 px-2 border-b border-gray-700 text-md font-[300]  flex items-center justify-between w-full"
            >
              Search by Country{" "}
              <AiFillCaretRight className=" group-hover:translate-x-3 transition-transform duration-300" />
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default MobileFindVehicleToogle;
