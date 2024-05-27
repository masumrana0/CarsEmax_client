"use client";
import { IDropdownOption } from "@/Interface/common";
import { Button } from "antd";
import React, { useState } from "react";

interface LanguageOption {
  id: string;
  name: string;
}

export const LanguageDropdownContent = () => {
  const languages: LanguageOption[] = [
    { id: "1", name: "English" },
    { id: "2", name: "Español" },
    { id: "3", name: "Polski" },
    { id: "4", name: "Русский" },
    { id: "5", name: "العربية" },
    { id: "6", name: "Български" },
    { id: "7", name: "한국어" },
    { id: "7", name: "Українська" },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    languages[0].name
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className=" bg-gray-800 text-white px-2 py-3 md:px-0 md:py-0">
      <p className="text-sm font-[300] md:font-semibold md:text-base ">
        CarsEMax is a global online car marketplace with an extensive inventory
        of 300,000+ vehicles. For a tailored browsing experience, select your
        preferred language.
      </p>

      <select
        id="language"
        value={selectedLanguage}
        onChange={handleChange}
        className="mt-5 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-inherit border"
      >
        {languages.map((language) => (
          <option key={language.id} value={language.id}>
            {language.name}
          </option>
        ))}
      </select>
      <Button type="primary" className="w-full mt-3 font-bold rounded-full  ">
        Save
      </Button>
    </div>
  );
};

export const LanguageDropdownitems: IDropdownOption[] = [
  {
    key: "1",
    label: <LanguageDropdownContent />,
  },
];
