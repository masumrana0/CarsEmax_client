"use client";
import React, { useState } from "react";

const HtbsixthSection = () => {
  const [readMore, SetReadMore] = useState(false);

  return (
    <div className="text-center text-gray-400 space-y-5 md:w-[90%]  lg:w-[70%] mx-auto py-10  ">
      <h2 className="font-bold text-4xl text-gray-800 ">
        Shop Cars Online With a Trusted Online Auto Auction Platform
      </h2>
      <p className="mb-5 ">
        If you were wondering where to find used cars, CarEMax has got you
        covered! Gain access to salvage vehicles through trusted online auto
        auctions. You can register in just a few minutes and start buying used
        cars online. The key point is that you don’t need a broker license to
        buy a car online with us.{" "}
        <span className={`${!readMore && "text-gray-300"}`}>
          Choose from more than 300,000 wholesale and repairable vehicles in one
          place and buy salvage cars effortlessly.
        </span>
      </p>

      {readMore && (
        <div>
          <div className="space-y-4">
            <h2 className="font-bold text-left text  text-lg md:text-xl text-gray-800 ">
              Is It Worth Buying a Car with a Salvage Title?
            </h2>
            <p className="mt-4">
              Car online shopping has made it incredibly convenient to browse
              through countless cars for sale in the USA. You can find a wide
              variety of options at your fingertips when it comes to buying used
              cars online. For example, we at CarEMax provide access to all
              vehicle types, starting from city hatchbacks to heavy industrial
              equipment. Moreover, you can easily compare the prices, features,
              and backgrounds of salvage vehicles. And that&apos;s not all the
              benefits you get when buying cars online! So, if you&apos;re in
              the market for a used car, the world of online car shopping is the
              place to start your search.
            </p>
            <h2 className="font-bold text-left text  text-lg md:text-xl text-gray-800 ">
              Why Choose AutoBidMaster for Your Online Car Buying
            </h2>
            <p className="mt-4">
              CarEMax is more than a platform for buying cars online; it&apos;s
              a full-service solution for acquiring vehicles. In addition to a
              large selection of wholesale and repairable automobiles, our
              website provides a number of useful features to make your online
              car buying experience smooth. For example, you can also perform a
              VIN lookup to check vehicle history and arrange shipping for the
              automobile you&apos;ve won with CarEMax. Our team of dedicated
              specialists is ready to provide assistance with any questions or
              concerns you may have when buying a salvage car.
            </p>
            <p>
              Our simple bidding system is one of the major features that makes
              us stand out. A bunch of search filters and well-thought-out
              notifications allow for targeted online car buying and make
              placing bids on your favorite used cars as straightforward as
              possible. Furthermore, our professional team will walk you through
              the process in case of any possible issues, ensuring that you
              obtain the best salvage vehicles available on our auction
              platform.
            </p>
            <p>
              In addition, CarEMax pays close attention to verification of the
              vehicle details, such as the car title, odometer reading, damage
              type, etc. We do extensive title checks to guarantee that the
              salvage vehicles offered at the auctions are correctly described,
              and we give complete vehicle information to help you make an
              informed selection. This means you can buy a car online with
              certainty because our staff has checked the vehicle&apos;s
              condition and history.
            </p>

            <h2 className="font-bold text-left text  text-lg md:text-xl text-gray-800 ">
              Why Choose AutoBidMaster for Your Online Car Buying
            </h2>
            <p>
              When you select online car shopping with CarEMax, you&apos;re not
              just getting access to a large inventory of salvage vehicles;
              you&apos;re also joining a community of happy car enthusiasts and
              dealers who discovered their ideal offers with our assistance.
              Begin your adventure with CarEMax now and explore a reliable
              online car buying process. Experience a bunch of benefits that
              distinguish us from the competition. Your next excellent
              automobile is only a click away!
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

export default HtbsixthSection;
