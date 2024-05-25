"use client";
import { IDropdownOption } from "@/Interface/common";
import { Button } from "antd";
import React, { useState } from "react";

interface IOption {
  id: string;
  name: string;
}

const CountryDropdownContent = () => {
  const countries: IOption[] = [
    { id: "1", name: "Afghanistan" },
    { id: "2", name: "Albania" },
    { id: "3", name: "Algeria" },
    { id: "4", name: "Andorra" },
    { id: "5", name: "Angola" },
    { id: "6", name: "Antigua and Barbuda" },
    { id: "7", name: "Argentina" },
    { id: "8", name: "Armenia" },
    { id: "9", name: "Australia" },
    { id: "10", name: "Austria" },
    { id: "11", name: "Azerbaijan" },
    { id: "12", name: "Bahamas" },
    { id: "13", name: "Bahrain" },
    { id: "14", name: "Bangladesh" },
    { id: "15", name: "Barbados" },
    { id: "16", name: "Belarus" },
    { id: "17", name: "Belgium" },
    { id: "18", name: "Belize" },
    { id: "19", name: "Benin" },
    { id: "20", name: "Bhutan" },
    { id: "21", name: "Bolivia (Plurinational State of)" },
    { id: "22", name: "Bosnia and Herzegovina" },
    { id: "23", name: "Botswana" },
    { id: "24", name: "Brazil" },
    { id: "25", name: "Brunei Darussalam" },
    { id: "26", name: "Bulgaria" },
    { id: "27", name: "Burkina Faso" },
    { id: "28", name: "Burundi" },
    { id: "29", name: "Cabo Verde" },
    { id: "30", name: "Cambodia" },
    { id: "31", name: "Cameroon" },
    { id: "32", name: "Canada" },
    { id: "33", name: "Central African Republic" },
    { id: "34", name: "Chad" },
    { id: "35", name: "Chile" },
    { id: "36", name: "China" },
    { id: "37", name: "Colombia" },
    { id: "38", name: "Comoros" },
    { id: "39", name: "Congo" },
    { id: "40", name: "Costa Rica" },
    { id: "41", name: "Croatia" },
    { id: "42", name: "Cuba" },
    { id: "43", name: "Cyprus" },
    { id: "44", name: "Czech Republic" },
    { id: "45", name: "Democratic People's Republic of Korea" },
    { id: "46", name: "Democratic Republic of the Congo" },
    { id: "47", name: "Denmark" },
    { id: "48", name: "Djibouti" },
    { id: "49", name: "Dominica" },
    { id: "50", name: "Dominican Republic" },
    { id: "51", name: "Ecuador" },
    { id: "52", name: "Egypt" },
    { id: "53", name: "El Salvador" },
    { id: "54", name: "Equatorial Guinea" },
    { id: "55", name: "Eritrea" },
    { id: "56", name: "Estonia" },
    { id: "57", name: "Eswatini" },
    { id: "58", name: "Ethiopia" },
    { id: "59", name: "Fiji" },
    { id: "60", name: "Finland" },
    { id: "61", name: "France" },
    { id: "62", name: "Gabon" },
    { id: "63", name: "Gambia" },
    { id: "64", name: "Georgia" },
    { id: "65", name: "Germany" },
    { id: "66", name: "Ghana" },
    { id: "67", name: "Greece" },
    { id: "68", name: "Grenada" },
    { id: "69", name: "Guatemala" },
    { id: "70", name: "Guinea" },
    { id: "71", name: "Guinea-Bissau" },
    { id: "72", name: "Guyana" },
    { id: "73", name: "Haiti" },
    { id: "74", name: "Honduras" },
    { id: "75", name: "Hungary" },
    { id: "76", name: "Iceland" },
    { id: "77", name: "India" },
    { id: "78", name: "Indonesia" },
    { id: "79", name: "Iran (Islamic Republic of)" },
    { id: "80", name: "Iraq" },
    { id: "81", name: "Ireland" },
    { id: "82", name: "Israel" },
    { id: "83", name: "Italy" },
    { id: "84", name: "Jamaica" },
    { id: "85", name: "Japan" },
    { id: "86", name: "Jordan" },
    { id: "87", name: "Kazakhstan" },
    { id: "88", name: "Kenya" },
    { id: "89", name: "Kiribati" },
    { id: "90", name: "Kuwait" },
    { id: "91", name: "Kyrgyzstan" },
    { id: "92", name: "Lao People's Democratic Republic" },
    { id: "93", name: "Latvia" },
    { id: "94", name: "Lebanon" },
    { id: "95", name: "Lesotho" },
    { id: "96", name: "Liberia" },
    { id: "97", name: "Libya" },
    { id: "98", name: "Liechtenstein" },
    { id: "99", name: "Lithuania" },
    { id: "100", name: "Luxembourg" },
    { id: "101", name: "Madagascar" },
    { id: "102", name: "Malawi" },
  ];

  const [selectedcountry, setSelectedcountry] = useState<string>(
    countries[0].name
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedcountry(event.target.value);
  };

  return (
    <div className=" bg-gray-800 text-white pt-5">
      <select
        id="country"
        value={selectedcountry}
        onChange={handleChange}
        className="  block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-inherit border"
      >
        {countries.map((country: IOption) => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
      <Button type="primary" className="w-full mt-3 font-bold rounded-full  ">
        Save
      </Button>
    </div>
  );
};

export const countryDropdownitems: IDropdownOption[] = [
  {
    key: "1",
    label: <CountryDropdownContent />,
  },
];
