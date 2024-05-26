import React from "react";

const Shipping = () => {
  return (
    <div className="absolute left-0 top-7 flex   gap-5 bg-gray-900 text-white text-[14px] font-normal max-w-[800px] text-left">
      <div className="w-[200px]   bg-gray-800 mt-2  ">
        <a
          href="#"
          className="hover:underline block hover:bg-gray-900 py-2 px-2"
        >
          International Shipping
        </a>
        <a
          href="#"
          className="hover:underline block hover:bg-gray-900 py-2 px-2"
        >
          US car Shipping
        </a>
      </div>
    </div>
  );
};

export default Shipping;
