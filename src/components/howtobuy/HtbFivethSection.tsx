import React from "react";
import YouTubeEmbed from "../Custom/YouTubeEmbed";
import Accordion from "../Custom/Accoridan";
import Link from "next/link";

const HtbFivethSection = () => {
  return (
    <div className="grid grid-cols-1  xl:grid-cols-2 gap-10 text-gray-800 ">
      <div>
        <h2 className="font-bold text-3xl mb-5">Find a car through CarEmax</h2>
        <p>
          Won an auction? Great! We&apos;ll guide you through the next steps to
          complete your purchase smoothly.
        </p>

        {/* Collapse  */}
        <div>
          <Accordion
            items={[
              {
                title: "Seamless Payment Process",
                content: (
                  <>
                    <p>
                      Won an auction? Congrats! We&apos;ll guide you through the
                      payment process.{" "}
                      <Link
                        className="hover:underline text-blue-500"
                        href={"/"}
                      >
                        Read more about payment options and payment status.
                      </Link>
                    </p>
                  </>
                ),
              },
              {
                title: "Stress-free vehicle Shipping",
                content: (
                  <>
                    <p>
                      Our dedicated logistics teamensures a smooth shipping
                      experience.Get quotes, updates and track your vehicle -
                      all from your CarEMax account.
                      <Link
                        className="hover:underline text-blue-500"
                        href={"/"}
                      >
                        Read more about shipping.storage and tracking status.
                      </Link>
                    </p>
                  </>
                ),
              },
              {
                title: "PaperWork Made Easy",
                content: (
                  <>
                    <p>
                      Once your payment&apos;s through¿youalll get a
                      notification to e-sign your purchase documents.It
                      typically take 2-5 weeks for your car ownership documents
                      to be ready.
                      <Link
                        className="hover:underline text-blue-500"
                        href={"/"}
                      >
                        Read more about vehicle information and titles
                      </Link>
                    </p>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl">
        <YouTubeEmbed url="https://www.youtube.com/embed/hrOdSePfA28?si=KDEN50yLqVbm0N_M" />
      </div>
    </div>
  );
};

export default HtbFivethSection;
