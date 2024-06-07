import React from "react";
import Accordion from "../Custom/Accoridan";

const FrequentlyAskedQuestion = () => {
  return (
    <div className=" lg:w-[80%] mx-[1rem]  md:mx-[4rem] lg:mx-auto my-20  ">
      <h2 className=" text-3xl xl:text-4xl mb-10  text-center">
        Frequently Asked Questions
      </h2>
      <div className="mt-5">
        <Accordion
          items={[
            {
              title: "What is ClearVin History Report ?",
              content: (
                <>
                  <p className="text-sm">
                    ClearVin specializes in provding v ehicle history
                    information by VIN number.All ClearVin reports provide a
                    compleate overview of a vehicle&apos;s past with vehicle
                    photos and give insight into it&apos;s currect condition.
                  </p>
                </>
              ),
            },
            {
              title: "What is a VIN and Where Can I Find my VIN Number ?",
              content: (
                <>
                  <p className="text-sm">
                    A Vehicle Identification Number (VIN) is a 17-character
                    unique code assigned by an auto manufacturer, which is used
                    to track and identify motor vehicles. Every VIN conceals
                    lots of valuable information about a vehicle that you can
                    easily get with ClearVin Vehicle Report. Usually, the VIN
                    code is located on the driver&apos;s side dashboard viewable
                    through the front window, on a sticker on the door jump on
                    the driver&apos;s side, and engine. Motorcycles each have a
                    VIN on them but it may be located in a variety of places on
                    the frame or engine.
                  </p>
                </>
              ),
            },
            {
              title: "For Whom do We Provide Vehicle History Reports ?",
              content: (
                <>
                  <p className="text-sm">
                    If you&apos;re in the market for a used car, our reports can
                    provide vital vehicle information to help you make an
                    informed decision. We offer both single VIN checks for
                    individual buyers and packages for car dealers or those
                    requiring multiple reports, you&apos;re free to pick
                    whatever works better for you.
                  </p>
                </>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
