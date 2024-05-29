"use client";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import google from "/public/assets/social_media_icon/google.png";
import apple from "/public/assets/social_media_icon/apple.png";
import facebook from "/public/assets/social_media_icon/facebook.png";

// countries flag
import bangladesh from "/public/assets/flag/bd.png";
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
import ukraine from "/public/assets/flag/ukraine.png";
import afganistan from "/public/assets/flag/afghanistan.png";
import albenia from "/public/assets/flag/albania.png";

import Image from "next/image";
import Link from "next/link";

// United States +1
// Bulgaria (България) +359
// El Salvador +503
// Georgia (საქართველო) +995
// Ghana (Gaana) +233
// Guatemala +502
// Nicaragua +505
// Nigeria +234
// Poland (Polska) +48
// Romania (România) +40
// Ukraine (Україна) +380
// (افغانستان) Afghanistan
// Albania (Shqipëri) +355
// Andorra +376
// Angola +244
// Anguilla +1
// Argentina +54
// Armenia (Հայաստան) +374
// Aruba +297
// Australia +61
// Austria (Österreich) +43
// Azerbaijan (Azərbaycan) +994
// Bahamas +1
// 973+ (البحرين) Bahrain
//
// Barbados +1
// Belarus (Беларусь) +375
// Belgium (België) +32
// Belize +501
// Benin (Bénin) +229
// Bermuda +1
// Bhutan () +975
// Bolivia +591
// Bosnia and Herzegovina (Босна и Херцеговина) +387
// Botswana +267
// Brazil (Brasil) +55
// British Indian Ocean Territory +246
// British Virgin Islands +1
// Brunei +673
// Bulgaria (България) +359
// Burkina Faso +226
// Burundi (Uburundi) +257
// Cambodia (កម្ពុជា) +855
// Cameroon (Cameroun) +237
// Canada +1
// Cape Verde (Kabu Verdi) +238
// Caribbean Netherlands +599
// Cayman Islands +1
// Central African Republic (République centrafricaine) +236
// Chad (Ichad) +235
// Chile +56
// China (中国)+86
// Christmas Island +61
// Cocos (Keeling) Islands +61
// Colombia +57
// 269 جزر القمر Comoros
// Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo) +243
// Congo (Republic) (Congo-Brazzaville) +242
// Cook Islands +682
// Costa Rica +506
// Côte d'Ivoire +225
// Croatia (Hrvatska) +385
// Cuba +53
// Curaçao +599
// Cyprus (Κύπρος) +357
// Czech Republic (Česká republika) +420
// Denmark (Danmark) +45
// Djibouti +253
// Dominica +1
// Dominican Republic (República Dominicana) +1
// Ecuador +593

interface ICountry {
  name: string;
  code: string;
  dialCode: string;
  flag: any;
}

const Regsiter = () => {
  const countries: ICountry[] = [
    { name: "United States", code: "US", dialCode: "+1", flag: unitedState },
    { name: "Bulgaria", code: "BG", dialCode: "+359", flag: bulgaria },
    { name: "El Salvador", code: "SV", dialCode: "+503", flag: elslavador },
    { name: "Georgia", code: "GE", dialCode: "+995", flag: georgia },
    { name: "Ghana", code: "GH", dialCode: "+233", flag: ghana },
    { name: "Guatemala", code: "GT", dialCode: "+502", flag: guatemala },
    { name: "Nicaragua", code: "NI", dialCode: "+505", flag: nicaragua },
    { name: "Nigeria", code: "NG", dialCode: "+234", flag: nigeria },
    { name: "Poland", code: "PL", dialCode: "+48", flag: poland },
    { name: "Romania", code: "RO", dialCode: "+40", flag: romania },
    { name: "Ukraine", code: "UA", dialCode: "+380", flag: ukraine },
    {
      name: "Bangladesh (বাংলাদেশ) ",
      code: "BD",
      dialCode: "+880",
      flag: bangladesh,
    },
  ];
  const [selectedCountry, setSelectedCountry] = useState<ICountry>(
    countries[0]
  );
  const handleAddCountryCodeInput = (country: ICountry) => {
    setSelectedCountry(country);
    setOpen(false);
  };
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="py-3 px-5 bg-white">
      <h3 className="text-2xl text-center ">Register New Account for Free!</h3>
      {/* Login with google apple faebook */}
      <div className="flex  justify-center items-center gap-3 mt-5">
        <button className="border border-blue-600 shadow-lg flex items-center py-2 px-2 gap-2 rounded-full w-[8rem] group hover:bg-blue-600 transition-colors duration-300 ">
          <Image
            className="bg-white rounded p-0.5"
            src={google}
            width={20}
            height={20}
            alt="google icon"
          />
          <span className="text-blue-600  text-sm   group-hover:text-white font-semibold">
            Google
          </span>
        </button>
        <button className="border border-blue-600 shadow-lg flex items-center py-2 px-2 gap-2 rounded-full w-[8rem] group hover:bg-blue-600 transition-colors duration-300 ">
          <Image
            className="bg-white rounded p-0.5"
            src={apple}
            width={20}
            height={20}
            alt="google icon"
          />
          <span className="text-blue-600  text-sm   group-hover:text-white font-semibold">
            Apple
          </span>
        </button>
        <button className="border border-blue-600 shadow-lg flex items-center py-2 px-2 gap-2 rounded-full w-[8rem] group hover:bg-blue-600 transition-colors duration-300 ">
          <Image
            className="bg-white rounded p-0.5"
            src={facebook}
            width={20}
            height={20}
            alt="google icon"
          />
          <span className="text-blue-600  text-sm l  group-hover:text-white font-semibold">
            Facebook
          </span>
        </button>
      </div>
      <div className="flex items-center space-x-2 mt-3">
        <span className="flex-grow bg-gray-400 h-[1px]"></span>
        <span className="text-[10px] text-gray-600 tracking-tighter">
          OR CONTINUE WITH
        </span>
        <span className="flex-grow bg-gray-400 h-[1px]"></span>
      </div>

      {/* Registration from  */}
      <form>
        <h3 className="text-sm text-gray-600 mt-2">
          * Indicates required fields
        </h3>

        {/* name input */}
        <div className="w-full flex items-center my-2 gap-5  ">
          <input
            type="text"
            placeholder="First Name *"
            className="outline-none  border border-gray-300 hover:border-blue-700 rounded  p-2  w-full  "
            name="firstName"
            id=""
          />
          <input
            type="text"
            placeholder="Last Name *"
            className="outline-none  border border-gray-300 hover:border-blue-700 rounded  p-2  w-full  "
            name="firstName"
            id=""
          />
        </div>

        {/* Phone Number Input  */}
        <div className="relative group">
          <div className="w-full flex items-center border border-gray-300 group-hover:border-blue-700 rounded relative">
            <button
              type="button"
              onClick={() => setOpen(!isOpen)}
              className="flex items-center gap-1 border p-2 bg-gray-50"
            >
              <Image
                src={selectedCountry.flag}
                width={30}
                height={30}
                alt="country flag"
              />
              <span className="flex items-center gap-1 text-sm">
                {selectedCountry.dialCode}
                <AiFillCaretDown />
              </span>
            </button>
            <input
              type="text"
              className="outline-none rounded  p-2 flex-grow"
              placeholder="Phone number"
            />
          </div>

          {isOpen && (
            <div
              onMouseLeave={() => setOpen(false)}
              className="w-full max-h-56 overflow-y-auto bg-gray-50 border-2 border-blue-500 py-1 absolute top-full left-0 z-10"
            >
              {countries.map((country) => (
                <button
                  type="button"
                  onClick={() => handleAddCountryCodeInput(country)}
                  key={country.code}
                  className="flex items center gap-2 w-full hover:bg-blue-300 py-0 px-2 text-sm"
                >
                  <span>
                    <Image
                      src={country.flag}
                      width={30}
                      height={30}
                      alt="country flag"
                    />
                  </span>
                  <span className="text-gray-700 mt-1">
                    {country.name}
                    {country.dialCode}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Email Input */}
        <div className="my-2 w-full">
          <input
            type="email"
            placeholder="Email *"
            className="outline-none  border border-gray-300 hover:border-blue-700 rounded  p-2  w-full   "
            name="firstName"
            id=""
          />
        </div>

        <div className="bg-[#edf4ea] my-3">
          <h4 className="text-xs text-[#217e02] py-3 text-center">
            By clicking *REGISTER NOW* you agree to CareEMax&apos;s{" "}
            <Link className="underline text-blue-500" href={""}>
              Terms and Conditions
            </Link>{" "}
          </h4>
        </div>
        {/* submit button */}
        <button className="py-3  w-full bg-orange-400 hover:bg-orange-300 transition-colors duration-300 font-bold rounded-full">
          REGISTER NOW
        </button>

        <p className="text-center mt-2 text-sm">
          Already a memeber?{" "}
          <Link className=" hover:underline text-blue-500" href={"/login"}>
            SIGN IN
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Regsiter;
