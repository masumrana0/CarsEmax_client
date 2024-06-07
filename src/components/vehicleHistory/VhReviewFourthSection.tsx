import React from "react";
// avatars and icons
import { IoStar } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import person_1 from "/public/assets/person/person-1.jpeg";
import person_2 from "/public/assets/person/person-2.jpeg";
import person_3 from "/public/assets/person/person-3.jpeg";
import Image from "next/image";

const VhReviewFourthSection = () => {
  const ReviewData = [
    {
      person: {
        name: "Justin Trudo",
        photo: person_1,
      },
      review:
        "I got a 2020 Toyota Tundra Crewmax, I love it I rebuilt it and drive it myself. Was able to buy it for about 1/2 the price of a new truck. Very happy with my purchase. ",
    },
    {
      person: {
        name: "Jason Bar",
        photo: person_2,
      },
      review:
        "Without your services, I would not have been able to purchase the van I won with the current State of New York rules and regulations. When I went to pick up my vehicle everything worked out smoothly ",
    },
    {
      person: {
        name: "Nayeli Morrow",
        photo: person_3,
      },
      review:
        "I have only Excellent Things to say about  CarEMax Lana my contact there has been exceedingly Exceptional and wonderful to work with and she was able to get my titles extremely quick to me.",
    },
  ];
  return (
    <div className="mx-[1rem]  sm:mx-[2rem]  xl:mx-[15rem]    lg:py-20     flex flex-col   items-center justify-center gap-20 ">
      <h2 className=" text-xl md:text-3xl xl:text-4xl text-center py-5   ">
        Trusted by Customers Worldwide
      </h2>

      <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 items-center gap-5 xl:gap-10">
        {ReviewData.map((review, index) => (
          <div
            className="bg-white rounded-xl p-5  h-[18rem]  relative "
            key={index}
          >
            {/* stars section  */}
            <div className="text-white flex items-center gap-1  ">
              <span className="text-sm text-blue-600">
                <IoStar />
              </span>
              <span className="text-sm text-blue-600">
                <IoStar />
              </span>
              <span className="text-sm text-blue-600">
                <IoStar />
              </span>
              <span className="text-sm text-blue-600">
                <IoStar />
              </span>
              <span className="text-sm text-blue-600">
                <IoStar />
              </span>
              <span className="text-gray-500 text-xs">5 of t stars</span>
            </div>
            <p className="text-sm my-5">{review.review}</p>

            <div className="flex items-center gap-2 mt-12 border-t border-gray-300 pt-2  absolute bottom-0 left-0 right-0 p-5">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  className=" w-full h-full object-cover  "
                  src={review.person.photo}
                  width={50}
                  height={50}
                  alt="customer profile picture"
                />
              </div>
              <div>
                <h2 className="font-bold">{review.person.name}</h2>
                <p className="flex items-center gap-1 text-sm text-gray-500">
                  <GiCheckMark /> Verified AutoBidMaster Customer
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VhReviewFourthSection;
