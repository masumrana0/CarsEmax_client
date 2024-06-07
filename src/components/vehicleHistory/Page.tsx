import React from "react";
import UnlockVehicleHistoryEight from "../home/UnlockVehicleHistoryEight";
import VhSecondSection from "./VhSecondSection";
import VhThirdSection from "./VhThirdSection";
import VhReviewFourthSection from "./VhReviewFourthSection";
import FrequentlyAskedQuestion from "./FrequentlyAskedQuestion";
import VhRegisterSixthSection from "./VhRegisterSixthSection";
import VHSeventhSection from "./VhSeventhSection";

const VehicleHistoryComponentPage = () => {
  return (
    <div>
      <section>
        <UnlockVehicleHistoryEight />
      </section>
      <section className="bg-blue-100">
        <VhSecondSection />
      </section>
      <section>
        <VhThirdSection />
      </section>
      <section className="bg-blue-100">
        <VhReviewFourthSection />
      </section>
      <section>
        <FrequentlyAskedQuestion />
      </section>
      <section>
        <VhRegisterSixthSection />
      </section>
      <section>
        <VHSeventhSection />
      </section>
    </div>
  );
};

export default VehicleHistoryComponentPage;
