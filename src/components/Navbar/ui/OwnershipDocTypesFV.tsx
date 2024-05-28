import React from "react";

const OwnershipDocTypesFV = () => {
  return (
    <div className="md:w-[200px] w-full h-full  flex flex-col flex-wrap gap-2  px-3 py-2 space-y-1 md:space-y-0 md:px-0 md:py-0">
      <a href="#" className="hover:underline text-[14px]   font-[400]">
        Clean Title <span>(37,675)</span>
      </a>
      <a href="#" className="hover:underline text-[14px]   font-[400]">
        Non-repairable <span>(10,266)</span>
      </a>
      <a href="#" className="hover:underline text-[14px]   font-[400]">
        Salvage Title <span>(143,692)</span>
      </a>
    </div>
  );
};

export default OwnershipDocTypesFV;
