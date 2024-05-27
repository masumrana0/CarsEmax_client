"use client";
import React, { useState } from "react";
import Image from "next/image";
import unitedState from "/public/assets/flag/united-states.png";
import bulgaria from "/public/assets/flag/bulgaria.png";
import elslavador from "/public/assets/flag/el-salvador.png";
import georgia from "/public/assets/flag/georgia.png";
import ghana from "/public/assets/flag/ghana.png";
import guatemala from "/public/assets/flag/guatemala.png";
import nicaragua from "/public/assets/flag/nicaragua.png";
import nigeria from "/public/assets/flag/nigeria.png";
import poland from "/public/assets/flag/poland.png";
import romania from "/public/assets/flag/romania.png";
import { IDropdownOption } from "@/Interface/common";

interface IOptionContent {
  text: string;
  flag: any;
}

interface IOption {
  id: string;
  content: IOptionContent;
}

const countries: IOption[] = [
  {
    id: "1",
    content: {
      text: "United States | +1 (971) 308-9263",
      flag: unitedState,
    },
  },
  {
    id: "2",
    content: {
      text: "Bulgaria | +1 (971) 308-9263",
      flag: bulgaria,
    },
  },
  {
    id: "3",
    content: {
      text: "El Salvador | +503 7209-9896",
      flag: elslavador,
    },
  },
  {
    id: "4",
    content: {
      text: "Georgia | +995 (599) 99-27-33",
      flag: georgia,
    },
  },
  {
    id: "5",
    content: {
      text: "Ghana | +233 (596) 992 759",
      flag: ghana,
    },
  },
  {
    id: "6",
    content: {
      text: "Guatemala | +502 6670-1350",
      flag: guatemala,
    },
  },
  {
    id: "7",
    content: {
      text: "Nicaragua | +505 8334 1839",
      flag: nicaragua,
    },
  },
  {
    id: "8",
    content: {
      text: "Nigeria | +234 (904) 022 0222",
      flag: nigeria,
    },
  },
  {
    id: "9",
    content: {
      text: "Poland | +48 22 266 21 01",
      flag: poland,
    },
  },
  {
    id: "10",
    content: {
      text: "Romania | +1 (971) 308-9263",
      flag: romania,
    },
  },
];
const MobileSalesOfficeDropdownContent = () => {
  const [selectedCountry, setSelectedCountry] = useState<IOption>(countries[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (country: IOption) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="bg-gray-800 text-white py-2 px-2 md:px-0">
      <p className="mb-4 font-[300] text-sm">
        Choose a country or region from the dropdown for a personalized
        experience. This connects you directly to experts familiar with your
        local market when you reach out to our sales or support teams.
      </p>
      <div className="relative">
        <button
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-inherit border"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-3">
            <Image
              src={selectedCountry.content.flag}
              width={30}
              height={20}
              alt="flag"
            />
            <p className="text-[11px]">{selectedCountry.content.text}</p>
          </div>
        </button>
        {isOpen && (
          <div className="     w-full rounded-md   shadow-lg bg-gray-800 h-[20rem] overflow-y-auto">
            {countries.map((country) => (
              <div
                key={country.id}
                className="cursor-pointer hover:bg-blue-600 px-2"
                onClick={() => handleSelect(country)}
              >
                <div className="flex items-center gap-3 p-2">
                  <Image
                    src={country.content.flag}
                    width={30}
                    height={20}
                    alt="flag"
                  />
                  <p className="text-[11px]">{country.content.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileSalesOfficeDropdownContent;
