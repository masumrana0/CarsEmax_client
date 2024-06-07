import React from "react";
import YouTubeEmbed from "../Custom/YouTubeEmbed";
import Image from "next/image";
import Link from "next/link";
import bid from "/public/assets/icons/ic_bidding.a679d84e.svg";
const HtbFourthSection = () => {
  interface ISaleOption {
    title: string;
    description: string;
  }

  //   data
  const saleOptions: ISaleOption[] = [
    {
      title: "Pure Sale",
      description: "The vehicle will be awarded to the highest bidder.",
    },
    {
      title: "Buy it Now",
      description:
        "The buyer can choose to pay the listed price, bypassing the bidding process. Note: Fees for salvaged vehicles are still applicable.",
    },
    {
      title: "On Minimum Bid",
      description:
        "The seller reserves the right not to sell the vehicle if the minimum bid is not met.",
    },
  ];

 
   

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center mx-[1rem]  sm:mx-[2rem] lg:mx-[5rem] xl:mx-[10rem]  space-y-10 mb-10">
      {/* left section  */}
      <div className="overflow-hidden rounded-2xl">
        <YouTubeEmbed url="https://www.youtube.com/embed/QYF_QaQDIqw?si=yCt6U0oEZOdYyCMt" />
      </div>

      <div>
        <div>
          <h2 className="font-bold text-3xl mb-5">
            Discover The Auction Process
          </h2>
          <p className="my-5">
            When shopping for cars online with AutoBidMaster, our auctions are
            organized into the following categories:
          </p>

          <ul className="list-disc text-xs sm:text-sm md:text-md ">
            {saleOptions.map((option: ISaleOption, index: number) => (
              <ol key={index} className="flex items-start gap-1 mb-3">
                <Link
                  href={"/"}
                  className="font-bold underline text-gray-800 text-nowrap"
                >
                  {option.title}:
                </Link>
                <p className="text-gray-600 ">{option.description}</p>
              </ol>
            ))}
            <ol className="flex items-start gap-1 mb-3">
              <span className="font-bold text-gray-800 text-nowrap">
                On Approval:
              </span>
              <p className="text-gray-600 ">
                The seller reserves the right to approve or reject the highest
                bid before the sale is finalized.
              </p>
            </ol>
          </ul>
        </div>

        <div className=" mt-5  flex sm:items-start sm:flex-row flex-col  gap-5 bg-white   lg:w-[80%]  rounded-3xl px-2 sm:px-10 py-6">
          <Image src={bid} width={50} height={50} alt="search-img" />
          <div className="">
            <h2 className="font-bold text-xl md:text-lg text-md mb-3">
              Discover The Auction Process
            </h2>
            <p className="mb-5">
              Start bidding on more than 300,000 cars - place your deposit now
            </p>

            <Link href={"/register"}>
              <button className="mt-3 font-bold text-lg   bg-orange-400 hover:bg-orange-300 transition-color px-8 py-3 rounded-full text-nowrap">
                BOOST YOUR BUYING POWER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HtbFourthSection;
