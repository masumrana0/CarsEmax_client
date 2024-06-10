import React from "react";
import IsTopSection from "./IsTopSection";
import InternationalShippingNine from "../home/InternationalShippingNine";
import PaymentCalculator from "../home/PaymentCalculator";
import PlaceShippingOrder from "./PlaceShippingOrder";
import HowToBuyAndShip from "./HowToBuyAndShip";

const InternationalShippingComponentPage = () => {
  return (
    <div>
      <IsTopSection />
      {/* <InternationalShippingNine /> */}
      <section className="bg-gray-200">
        <PlaceShippingOrder />
      </section>

      <section>
        <HowToBuyAndShip />
      </section>
    </div>
  );
};

export default InternationalShippingComponentPage;
