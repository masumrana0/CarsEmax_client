import Link from "next/link";
import React from "react";

const VhRegisterSixthSection = () => {
  return (
    <div
      className="mx-[1rem]  sm:mx-[2rem]  xl:mx-[10rem]  my-20  py-20  text-center  flex flex-col   items-center justify-center gap-5 rounded-xl overflow-hidden  text-white"
      style={{
        backgroundImage: `url("https://www.autobidmaster.com/build/spa/images/bg-desktop.f215eb0f.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className=" text-3xl xl:text-4xl font-bold  text-center">
        Register Today And Get FREE VIN Checks
      </h2>
      <p>It&apos;s fast and easy</p>

      <Link href={"/register"}>
        <button className="font-bold bg-white lg:text-xl   hover:bg-gray-300 transition-color px-10 py-3 text-blue-600 rounded-full">
          REGISTER NOW
        </button>
      </Link>
    </div>
  );
};

export default VhRegisterSixthSection;
