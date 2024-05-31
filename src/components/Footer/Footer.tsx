import Link from "next/link";
import React from "react";

// icons
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full bg-[#101d36] ">
      <section className="bg-[#101d36] text-white py-10  px-10 flex flex-col  gap-10  md:gap-0 md:flex-row justify-between ">
        <div>
          <h2 className="font-bold text-xl mb-4">Vehicle Finder</h2>
          <div className="text-gray-400 grid grid-cols-2  gap-1">
            <Link
              className=" text-xs md:text-[14px] hover:underline"
              href={"/"}
            >
              Cars
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline"
              href={"/"}
            >
              SUV / Crossovers
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline"
              href={"/"}
            >
              Pickup Trucks
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline"
              href={"/"}
            >
              Motorcyles
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline"
              href={"/"}
            >
              Classic Cars
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline"
              href={"/"}
            >
              Electric Cars
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline"
              href={"/"}
            >
              Vans
            </Link>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-4">Auto Auctions</h2>
          <div className="text-gray-400  flex flex-col gap-1 ">
            <Link
              className=" text-xs md:text-[14px] hover:underline"
              href={"/"}
            >
              Today&apos;s Auctions
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline"
              href={"/"}
            >
              Auction Calendar
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline"
              href={"/"}
            >
              Join Auctions
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline"
              href={"/"}
            >
              Auction Locations
            </Link>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-4">Support</h2>
          <div className="text-gray-400 flex flex-col gap-1">
            <Link
              className=" text-xs md:text-[14px] hover:underline "
              href={"/"}
            >
              Video Guides
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline "
              href={"/"}
            >
              How to Buy
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline "
              href={"/"}
            >
              Help Center
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline "
              href={"/"}
            >
              Register
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline "
              href={"/"}
            >
              Contact Us
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline "
              href={"/"}
            >
              Blog
            </Link>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-4">Services</h2>
          <div className="text-gray-400 flex flex-col gap-1">
            <Link
              className=" text-xs md:text-[14px] hover:underline "
              href={"/"}
            >
              Vehicle History Reports
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline "
              href={"/"}
            >
              US Car Shipping
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline "
              href={"/"}
            >
              International Shipping
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline "
              href={"/"}
            >
              Business Buyers
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline "
              href={"/"}
            >
              Cars in Stock
            </Link>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-4">Company Information</h2>
          <div className="text-gray-400 flex flex-col gap-1">
            <Link
              className=" text-xs md:text-[14px] hover:underline "
              href={"/"}
            >
              About AutoBidMaster
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline "
              href={"/"}
            >
              Terms and Conditions
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline "
              href={"/"}
            >
              Rules and Policies
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline "
              href={"/"}
            >
              Careers
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline "
              href={"/"}
            >
              Access and Inclusion
            </Link>
            <Link
              className=" text-xs md:text-[14px] hover:underline "
              href={"/"}
            >
              AutoBidMaster Reviews
            </Link>
          </div>

          <div className="mt-3 flex items-center  gap-2">
            <Link
              href={"/"}
              className="text-gray-400 hover:text-gray-100 transition-color duration-300  text-3xl "
            >
              <IoLogoFacebook />
            </Link>
            <Link
              href={"/"}
              className="text-gray-400 hover:text-gray-100 transition-color duration-300  text-3xl "
            >
              <FaInstagram />
            </Link>
            <Link
              href={"/"}
              className="text-gray-400 hover:text-gray-100 transition-color duration-300  text-3xl "
            >
              <FaTwitter />
            </Link>
            <Link
              href={"/"}
              className="text-gray-400 hover:text-gray-100 transition-color duration-300  text-3xl "
            >
              <IoLogoYoutube />
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-700 w-full text-[11px] text-center py-4 text-gray-400  lg:px-10  px-3  ">
        <p>
          {" "}
          Copyright © 2024 CarEmax, LLC All Rights Reserved. The use of this Web
          site constitutes acceptance of the{" "}
          <Link href={"/"} className="underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href={"/"} className="underline">
            Privacy Policy. Sitemap.
          </Link>
          CarEMax LLC is not owned by or affiliated with Copart, Inc, or its
          subsidiaries. All vehicles are purchased from AutoBidMaster not
          Copart.
        </p>
      </div>
    </div>
  );
};

export default Footer;
