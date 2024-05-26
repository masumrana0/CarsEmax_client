import React from "react";

const BodyTypeFV = () => {
  return (
    <div className="w-[230px] h-full  flex flex-col flex-wrap gap-2">
      <a href="#" className="hover:underline block">
        Convertible <span>(402)</span>
      </a>
      <a href="#" className="hover:underline block">
        Coupe <span>(1,197)</span>
      </a>
      <a href="#" className="hover:underline block">
        Hatchback <span>(2,530)</span>
      </a>
      <a href="#" className="hover:underline block">
        Pickup Trucks <span>(3,490)</span>
      </a>
      <a href="#" className="hover:underline block">
        Sedan <span>(12,568)</span>
      </a>
      <a href="#" className="hover:underline block">
        Suv/Crossover <span>(10,952)</span>
      </a>
      <a href="#" className="hover:underline block">
        Vans/Minivan <span>(1,564)</span>
      </a>
      <a href="#" className="hover:underline block">
        Wagon <span>(283)</span>
      </a>
    </div>
  );
};

export default BodyTypeFV;
