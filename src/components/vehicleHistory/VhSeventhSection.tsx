"use client";
import React, { useState } from "react";

const VHSeventhSection = () => {
  const [readMore, SetReadMore] = useState(false);

  return (
    <div className="text-center text-gray-400 space-y-5 w-[90%]  lg:w-[70%] mx-auto py-10  ">
      <h2 className="font-bold text-4xl text-gray-800 ">
        Shop Cars Online With a Trusted Online Auto Auction Platform
      </h2>
      <p className="mb-5 border-b border-gray-400 pb-5 ">
        Do you want to review a car history by VIN prior to buying a used
        vehicle but are hesitant because of possible fraud and high VIN decoding
        service prices? Are you new to a VIN history lookup and don&apos;t know
        where to start in order to get a complete and accurate car history
        report? With AutoBidMaster and its trusted partner ClearVIN, a
        well-known VIN data provider that has been in business for over 10
        years, you will face no such issues. When obtaining your vehicle history
        report with us, you can relax knowing that you have found the most
        beneficial VIN history check offered and that your personal data is
        safe.
      </p>

      {readMore && (
        <div>
          <div className="space-y-4 text-left">
            <h2 className="font-bold text-left text    md:text-xl text-gray-800 ">
              Coverage of the ClearVIN Car VIN History
            </h2>
            <p className="mt-4">
              You&apos;ll be pleased to know that the ClearVIN database boasts
              an extensive range of coverage for your VIN history lookup. This
              wide scope ensures that we can provide comprehensive information
              for a vehicle history report on a vast array of passenger cars,
              light-duty pickup trucks, motorcycles, RVs. When running your
              vehicle history check with ClearVIN, you can dive deep into the
              history of numerous car types and models, empowering you to make
              well-informed decisions when it comes to your automotive needs.
            </p>
            <h2 className="font-bold text-left text  text-lg md:text-xl text-gray-800 ">
              How to Get a Car History Report
            </h2>
            <p className="mt-4">
              To see the used vehicle history and get a car VIN report when
              bidding on salvage automobiles at online auctions, just click or
              tap on “Get History Report” in the auction lot details right on
              the bidding webpage. If you have a specific request that
              doesn&apos;t link with the AutoBidMaster online auctions, visit
              the ClearVin website to find out more. Please note that you can
              also run a license plate lookup or get an original window sticker
              for your vehicle.
            </p>

            <h2 className="font-bold text-left text  text-lg md:text-xl text-gray-800 ">
              Why Run a Vehicle History Check With ClearVIN?
            </h2>
            <p>
              With more than 300,000 items in the used vehicle inventory
              available for public online auto auctions, we at AutoBidMaster
              value our clients and work with transparency by providing vehicle
              details and photos right on the auction lot bidding page. In
              addition, you are free to run a VIN history lookup with ClearVIN
              for any car you are interested in. Let&apos;s take a look at some
              reasons why you should make use of the offer and perform your VIN
              car history research with us.
            </p>
            <p>
              First, the basis of ClearVIN&apos;s business relies on a tight
              collaboration with reputable players in the vehicle data
              collection field. As an example, we can outline such organizations
              as the National Motor Vehicle Title Information System (NMVTIS),
              the National Highway Traffic Safety Administration (NHTSA), and
              others. Being an official NMVTIS data provider, ClearVin includes
              99% of the U.S. DMV data in the United States. All U.S. states and
              jurisdictions provide data into the NMVTIS before issuing new
              titles, ensuring that you have access to valuable insights
              regardless of the state. Besides, NMVTIS serves as a repository of
              information related to used vehicles that have been in the
              possession of auto recyclers, junk yards, and salvage yards. This
              means that ClearVIN provides only reliable and verified motor
              vehicle records that will meet your demands.
            </p>
            <p>
              Second, data privacy is a top concern when providing valuable
              information for a vehicle history check. ClearVIN protects against
              VIN cloning, leaks, and other forms of information fraud, so you
              can rest easy knowing your personal information is secure.
            </p>
            <p>
              Third, when running a VIN history lookup with us, you can also
              take advantage of an exclusive bulk access feature designed
              specifically for used car dealers and online auto auction
              participants. With this service from ClearVIN, you can easily
              obtain multiple VIN reports at a highly reasonable price.
            </p>
            <p>
              With our vehicle history check, you can make informed purchase
              decisions about used automobiles that fit your expectations. We
              can provide motorists with valuable insights about the
              automobile&apos;s history and its specs just in a few clicks or
              smartphone taps. So, don’t wait and take all the benefits we
              offer!
            </p>
          </div>
        </div>
      )}

      <button
        className="hover:underline text-blue-600  "
        onClick={() => SetReadMore(!readMore)}
      >
        {readMore ? "Show Less" : " Read more"}
      </button>
    </div>
  );
};

export default VHSeventhSection;
