/**
 * Title: 'How to Buy page Develop By Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 07-06-2024
 *
 */

import React from "react";
import HowToBuyTopSection from "./HowToBuyTopSection";
import HtbSecondSection from "./HtbSecondSection";
import HtbThirdSection from "./HtbThirdSection";
import HtbFourthSection from "./HtbFourthSection";
import HtbFivethSection from "./HtbFivethSection";
import HtbsixthSection from "./HtbsixthSection";

const HowToByPage = () => {
  return (
    <div className="space-y-10">
      <HowToBuyTopSection />
      <section className="mx-[1rem]  sm:mx-[2rem] lg:mx-[5rem] xl:mx-[10rem]  space-y-10 my-10">
        <HtbSecondSection />
        <HtbThirdSection />
      </section>
      <section className="bg-gray-100 w-full py-5">
        <HtbFourthSection />
      </section>
      <section className="mx-[1rem]  sm:mx-[2rem] lg:mx-[5rem] xl:mx-[10rem]  space-y-20 my-10">
        <HtbFivethSection />
        <HtbsixthSection />
      </section>
    </div>
  );
};

export default HowToByPage;
