"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AiFillCaretDown } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

// Import social media icons
import google from "/public/assets/social_media_icon/google.png";
import apple from "/public/assets/social_media_icon/apple.png";
import facebook from "/public/assets/social_media_icon/facebook.png";

// Import country flags
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
import { registerValidationSchema } from "@/schema/auth.schema";
import { IRegisterData } from "@/Interface/auth";
import { useSignupMutation } from "@/Redux/api/auth";
import { message } from "antd";

// Define the form inputs interface

// Define the country interface
interface ICountry {
  name: string;
  code: string;
  dialCode: string;
  flag: any;
}

// Validation schema using Yup

const Register = () => {
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
  const [isOpen, setOpen] = useState<boolean>(false);
  const [validationMessage, setValidationMessage] = useState<string | null>(
    null
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IRegisterData>({
    resolver: yupResolver(registerValidationSchema),
    defaultValues: {
      name: {
        firstName: "",
        lastName: "",
      },
      phoneNumber: "",
      email: "",
      country: countries[0],
    },
  });

  const handleAddCountryCodeInput = (country: ICountry) => {
    setSelectedCountry(country);
    setOpen(false);
  };
  const [setSignup, { isLoading }] = useSignupMutation();
  const onSubmit = async (data: IRegisterData) => {
    console.log(data);
    try {
      const res = await setSignup(data).unwrap();
      if (res?.statusCode === 200) {
        // Example: dispatch(setIsLoggedIn(res?.data?.accessToken));
        message.success(res?.message);
        // Example: router.push("/");
      } else {
        message.error(res?.message || "An error occurred");
        setValidationMessage(res?.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setValidationMessage("An unexpected error occurred");
    }
  };

  return (
    <div className="py-3 md:py-10 px-5 md:px-10 bg-white rounded-xl">
      <h3 className="text-2xl text-center">Register New Account for Free!</h3>

      {/* Social Media Login */}
      <div className="flex justify-center items-center gap-3 mt-5">
        {[
          { icon: google, label: "Google" },
          { icon: apple, label: "Apple" },
          { icon: facebook, label: "Facebook" },
        ].map((social, index) => (
          <button
            key={index}
            className="border border-blue-600 shadow-lg flex items-center py-2 px-2 gap-2 rounded-full w-[9rem] group hover:bg-blue-600 transition-colors duration-300"
          >
            <Image
              className="bg-white rounded p-0.5"
              src={social.icon}
              width={20}
              height={20}
              alt={`${social.label} icon`}
            />
            <span className="text-blue-600 text-sm group-hover:text-white font-semibold">
              {social.label}
            </span>
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-2 mt-3">
        <span className="flex-grow bg-gray-400 h-[1px]"></span>
        <span className="text-[10px] text-gray-600 tracking-tighter">
          OR CONTINUE WITH
        </span>
        <span className="flex-grow bg-gray-400 h-[1px]"></span>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="text-sm">
        <h3 className="text-sm text-gray-600 mt-2">
          * Indicates required fields
        </h3>

        {/* Name Inputs */}
        <div className="flex flex-col md:flex-row items-center my-2 md:gap-5 gap-2">
          <div className="w-full">
            <input
              type="text"
              placeholder="First Name *"
              {...register("name.firstName")}
              className={`outline-none border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } hover:border-blue-700 rounded p-2 w-full`}
            />
            {errors.firstName && (
              <span className="text-red-500 text-xs">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Last Name *"
              {...register("name.lastName")}
              className={`outline-none border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } hover:border-blue-700 rounded p-2 w-full`}
            />
            {errors.lastName && (
              <span className="text-red-500 text-xs">
                {errors.lastName.message}
              </span>
            )}
          </div>
        </div>

        {/* Phone Number Input */}
        <div className="relative">
          <div className="flex items-center border border-gray-300 hover:border-blue-700 rounded">
            <button
              type="button"
              onClick={() => setOpen(!isOpen)}
              className="flex items-center border w-1/2 md:w-1/3 gap-1 py-2 px-1 bg-gray-50"
            >
              <Image
                src={selectedCountry.flag}
                width={20}
                height={20}
                alt="country flag"
              />
              <span className="flex items-center gap-1 text-xs">
                {selectedCountry.dialCode}
                <AiFillCaretDown />
              </span>
            </button>
            <input
              type="text"
              placeholder="Phone number"
              {...register("phoneNumber")}
              className={`outline-none rounded w-full p-2 flex-grow ${
                errors.phoneNumber ? "border-red-500" : ""
              }`}
            />
          </div>
          {errors.phoneNumber && (
            <span className="text-red-500 text-xs">
              {errors.phoneNumber.message}
            </span>
          )}

          {/* Country Dropdown */}
          {isOpen && (
            <div
              onMouseLeave={() => setOpen(false)}
              className="w-full max-h-56 overflow-y-auto bg-gray-50 border-2 border-blue-500 py-1 absolute top-full left-0 z-10"
            >
              {countries.map((country, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 py-1 px-1 text-sm hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleAddCountryCodeInput(country)}
                >
                  <Image
                    src={country.flag}
                    width={20}
                    height={20}
                    alt={`${country.name} flag`}
                  />
                  <span>{country.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Email Input */}
        <div className="mt-2">
          <input
            type="email"
            placeholder="Email *"
            {...register("email")}
            className={`outline-none border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } hover:border-blue-700 rounded p-2 w-full`}
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>

        {validationMessage && (
          <p className="text-red-500 my-3 text-sm md:text-md">
            {validationMessage}
          </p>
        )}

        <div className="mt-2">
          <input
            type="password"
            placeholder="Password *"
            {...register("password")}
            className={`outline-none border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } hover:border-blue-700 rounded p-2 w-full`}
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Confirm Password Input */}
        <div className="mt-2">
          <input
            type="password"
            placeholder="Confirm Password *"
            {...register("confirmPassword")}
            className={`outline-none border ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } hover:border-blue-700 rounded p-2 w-full`}
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-xs">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-700 text-white font-semibold py-2 px-4 w-full mt-5 rounded-full"
        >
          Create Account
        </button>
      </form>

      {/* Link to login page */}
      <p className="text-center text-gray-600 mt-2">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-blue-600 hover:underline">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default Register;
