"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const ProductAccordian = () => {
  const [accordionState, setAccordionState] = useState(0);

  return (
    <div className="my-10 space-y-2">
      <div
        className={`bg-slate-100   overflow-hidden transition-max-height duration-300 ease-in ${
          accordionState == 1 ? "max-h-[50rem]" : "max-h-[5rem]"
        }`}
      >
        <button
          onClick={() => setAccordionState(accordionState === 1 ? 0 : 1)}
          className="h-[5rem] w-full  px-5 flex items-center justify-between      "
        >
          <h2 className="font-bold text-md md:text-lg xl:text-xl ">
            More about this Ford F350 Super, Lot #47703684
          </h2>{" "}
          <span>
            {accordionState == 1 ? (
              <FaMinus className="text-2xl" />
            ) : (
              <FaPlus className="text-2xl" />
            )}
          </span>
        </button>
        <div className="px-5">
          <p>
            You&apos;re looking at the 2022 Ford F350 Super that&apos;s being
            offered at the AutoBidMaster car auction. The vehicle has its sale
            location in SC - Spartanburg. You can find the real photos of the
            Ford F350 Super 2022 on the AutoBidMaster online platform, including
            several clear interior pictures. All the basic information, such as
            specifications and mileage, is provided in the lot details section.
            It will help you to figure out whether the vehicle meets your
            requirements. We also offer to conduct VIN research for the Ford
            2022 F350 Super by using the VIN number lookup. This will give you
            an understanding of whether the vehicle has a clean background.
          </p>
          <br />
          <br />
          <p>
            If you&apos;re interested in more opportunities, AutoBidMaster
            encourages you to get your premium membership with more free VIN
            reports, an unlimited maximum bid and purchase limit, etc. Moreover,
            you can use domestic auto-delivery or place an order for
            international ocean freight. To find out more, get a shipping quote
            for this lot by using our built-in calculator on the page. It will
            allow you to see the estimated carriage cost for the F350 Super Ford
            2022. As you can see, AutoBidMaster provides a complex solution when
            it comes to car auctions.
          </p>
          <br />
          <br />
          <p>
            Pay special attention to the 2022 Ford F350 Super bid information in
            the top right corner of the lot window. It provides you with all the
            data concerning your bargain status. We highly recommend you get
            acquainted with the How to Bid section in our Help Center if you
            haven&apos;t done it yet. There you&apos;ll find all the details
            needed to feel comfortable and submit your offers like a pro.
          </p>
          <br />
          <br />
          This auction is set for 6/3/2024, so make sure to save it to your
          watchlist. If you suppose that this lot isn&apos;t a good fit for you,
          you can also look over other Ford F350 Super lots available on the
          AutoBidMaster platform. Along with that, we provide an opportunity to
          set personalized alerts for similar vehicles, so our system will
          notify you when offers like this will be accessible. Don&apos;t
          hesitate to contact us if you have any questions, and our team will be
          happy to assist you!
        </div>
      </div>
      <div
        className={`bg-slate-100   overflow-hidden transition-max-height duration-300 ease-in ${
          accordionState == 2 ? "max-h-[50rem]" : "max-h-[5rem]"
        }`}
      >
        <button
          onClick={() => setAccordionState(accordionState === 2 ? 0 : 2)}
          className="h-[5rem] w-full  px-5 flex items-center justify-between      "
        >
          <h2 className="font-bold text-md md:text-lg xl:text-xl ">
            More about this Ford F350 Super, Lot #47703684
          </h2>{" "}
          <span>
            {accordionState == 1 ? (
              <FaMinus className="text-2xl" />
            ) : (
              <FaPlus className="text-2xl" />
            )}
          </span>
        </button>
        <div className="px-5">
          <p>
            You&apos;re looking at the 2022 Ford F350 Super that&apos;s being
            offered at the AutoBidMaster car auction. The vehicle has its sale
            location in SC - Spartanburg. You can find the real photos of the
            Ford F350 Super 2022 on the AutoBidMaster online platform, including
            several clear interior pictures. All the basic information, such as
            specifications and mileage, is provided in the lot details section.
            It will help you to figure out whether the vehicle meets your
            requirements. We also offer to conduct VIN research for the Ford
            2022 F350 Super by using the VIN number lookup. This will give you
            an understanding of whether the vehicle has a clean background.
          </p>
          <br />
          <br />
          <p>
            If you&apos;re interested in more opportunities, AutoBidMaster
            encourages you to get your premium membership with more free VIN
            reports, an unlimited maximum bid and purchase limit, etc. Moreover,
            you can use domestic auto-delivery or place an order for
            international ocean freight. To find out more, get a shipping quote
            for this lot by using our built-in calculator on the page. It will
            allow you to see the estimated carriage cost for the F350 Super Ford
            2022. As you can see, AutoBidMaster provides a complex solution when
            it comes to car auctions.
          </p>
          <br />
          <br />
          <p>
            Pay special attention to the 2022 Ford F350 Super bid information in
            the top right corner of the lot window. It provides you with all the
            data concerning your bargain status. We highly recommend you get
            acquainted with the How to Bid section in our Help Center if you
            haven&apos;t done it yet. There you&apos;ll find all the details
            needed to feel comfortable and submit your offers like a pro.
          </p>
          <br />
          <br />
          This auction is set for 6/3/2024, so make sure to save it to your
          watchlist. If you suppose that this lot isn&apos;t a good fit for you,
          you can also look over other Ford F350 Super lots available on the
          AutoBidMaster platform. Along with that, we provide an opportunity to
          set personalized alerts for similar vehicles, so our system will
          notify you when offers like this will be accessible. Don&apos;t
          hesitate to contact us if you have any questions, and our team will be
          happy to assist you!
        </div>
      </div>
      <div
        className={`bg-slate-100   overflow-hidden transition-max-height duration-300 ease-in ${
          accordionState == 3 ? "max-h-[50rem]" : "max-h-[5rem]"
        }`}
      >
        <button
          onClick={() => setAccordionState(accordionState === 3 ? 0 : 3)}
          className="h-[5rem] w-full  px-5 flex items-center justify-between      "
        >
          <h2 className="font-bold text-md md:text-lg xl:text-xl ">
            More about this Ford F350 Super, Lot #47703684
          </h2>{" "}
          <span>
            {accordionState == 1 ? (
              <FaMinus className="text-2xl" />
            ) : (
              <FaPlus className="text-2xl" />
            )}
          </span>
        </button>
        <div className="px-5">
          <p>
            You&apos;re looking at the 2022 Ford F350 Super that&apos;s being
            offered at the AutoBidMaster car auction. The vehicle has its sale
            location in SC - Spartanburg. You can find the real photos of the
            Ford F350 Super 2022 on the AutoBidMaster online platform, including
            several clear interior pictures. All the basic information, such as
            specifications and mileage, is provided in the lot details section.
            It will help you to figure out whether the vehicle meets your
            requirements. We also offer to conduct VIN research for the Ford
            2022 F350 Super by using the VIN number lookup. This will give you
            an understanding of whether the vehicle has a clean background.
          </p>
          <br />
          <br />
          <p>
            If you&apos;re interested in more opportunities, AutoBidMaster
            encourages you to get your premium membership with more free VIN
            reports, an unlimited maximum bid and purchase limit, etc. Moreover,
            you can use domestic auto-delivery or place an order for
            international ocean freight. To find out more, get a shipping quote
            for this lot by using our built-in calculator on the page. It will
            allow you to see the estimated carriage cost for the F350 Super Ford
            2022. As you can see, AutoBidMaster provides a complex solution when
            it comes to car auctions.
          </p>
          <br />
          <br />
          <p>
            Pay special attention to the 2022 Ford F350 Super bid information in
            the top right corner of the lot window. It provides you with all the
            data concerning your bargain status. We highly recommend you get
            acquainted with the How to Bid section in our Help Center if you
            haven&apos;t done it yet. There you&apos;ll find all the details
            needed to feel comfortable and submit your offers like a pro.
          </p>
          <br />
          <br />
          This auction is set for 6/3/2024, so make sure to save it to your
          watchlist. If you suppose that this lot isn&apos;t a good fit for you,
          you can also look over other Ford F350 Super lots available on the
          AutoBidMaster platform. Along with that, we provide an opportunity to
          set personalized alerts for similar vehicles, so our system will
          notify you when offers like this will be accessible. Don&apos;t
          hesitate to contact us if you have any questions, and our team will be
          happy to assist you!
        </div>
      </div>
    </div>
  );
};

export default ProductAccordian;
