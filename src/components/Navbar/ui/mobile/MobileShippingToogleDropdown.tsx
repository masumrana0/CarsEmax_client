"use client";
import React, { useState } from "react";
// icons
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const MobileShippingToggle = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <section>
      <div
        onClick={() => setOpen(!isOpen)}
        className="px-2 py-3 w-full border-t border-gray-700 cursor-pointer"
      >
        <button className="w-full flex items-center justify-between gap-1">
          Shipping{" "}
          <span className="text-xs">
            {isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </span>
        </button>
      </div>
      {/* Shipping Conent */}
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <section>
          <div className="w-full flex flex-col bg-gray-900 text-md font-[300]">
            <a href="#" className="px-2 py-3 border-b border-gray-700">
              International Shipping
            </a>
            <a href="#" className="px-2 py-3 border-b border-gray-700">
              US car Shipping
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default MobileShippingToggle;
