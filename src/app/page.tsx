/**
 * Title: 'Home Ui develop By Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Email:'masum.rana6267@gmail.com'
 * Date: 29-05-2024
 *
 */

import React from "react";

// Components
import PopularAuction from "@/components/home/PopularAuction";
import ViewFullSalvage from "@/components/home/ViewFullSalvage";
import BenefitsOfChoosing from "@/components/home/BenefitsOfChoosing";
import PaymentCalculator from "@/components/home/PaymentCalculator";
import BreakdownVehicle from "@/components/home/BreakdownVehicle";
import UnlockVehicleHistoryEight from "@/components/home/UnlockVehicleHistoryEight";
import InternationalShippingNine from "@/components/home/InternationalShippingNine";
import AboutTen from "@/components/home/AboutTen";
import IntroduceSection from "@/components/home/IntroduceSection";

const HomePage = () => {
  return (
    <div>
      {/* first section  */}
      <section>
        <IntroduceSection />
      </section>

      {/* second section  */}
      <section className="mt-10 px-3 md:px-8 lg:px-10">
        <PopularAuction />
      </section>

      {/* Third Section  */}
      <section className="bg-gray-100">
        <div className="mt-10 py-10 px-5 md:px-8 lg:px-10">
          <ViewFullSalvage />
        </div>
      </section>

      {/* Fourth Section */}
      {/* <section className="w-full  px-3 md:px-8 lg:px-10 flex items-center">
        <div className="flex items-center">
          <div className="flex items-center gap-3">
            <div className="flex gap-2 top-5">
              <div className="absolute">
                <span className="bg-gray-100 text-blue-600 p-3 rounded-full block w-10 h-10">
                  <FaUser />
                </span>
                <h2>Register with Us</h2>
              </div>
              <div>
                <h2 className="font-bold text-white py-1 px-6 bg-blue-500 w-[6rem]    text-nowrap rounded-full text-center">
                  DAY 1
                </h2>
              </div>
              <Arrow />
            </div>
            <div className="flex gap-2">
              <div>
                <h2 className="font-bold text-white py-1 px-6 bg-blue-500 w-[6rem]    text-nowrap rounded-full text-center">
                  DAY 1
                </h2>
              </div>
              <Arrow />
            </div>
          </div>
        </div>
      </section> */}

      {/* Fifth section */}
      <section className="bg-gray-100">
        <section className="mt-20 px-3 md:px-8 lg:px-10">
          <BenefitsOfChoosing />
        </section>
      </section>

      {/* Sixth section  */}
      <section className="bg-[#004979]">
        <section className="mt-20 px-3 md:px-8 lg:px-10">
          <PaymentCalculator />
        </section>
      </section>

      {/* Seventh Section */}
      <section>
        <div className="mt-20 px-3 md:pl-8 lg:pl-10">
          <BreakdownVehicle />
        </div>
      </section>

      {/* Eightth Section */}
      <section className="mt-20">
        <UnlockVehicleHistoryEight />
      </section>

      {/* Nine Section */}
      <section>
        <InternationalShippingNine />
      </section>

      {/* ten section  */}

      <section>
        <AboutTen />
      </section>
    </div>
  );
};

export default HomePage;
