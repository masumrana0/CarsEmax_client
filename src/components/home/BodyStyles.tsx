import React from 'react';

const BodyStyles = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3  md:w-full lg:w-[80%] mt-10 text-blue-500 ">
        <a href="#" className="hover:underline text-[14px]   font-[400]">
          Convertible <span>(402)</span>
        </a>
        <a href="#" className="hover:underline text-[14px]   font-[400]">
          Coupe <span>(1,197)</span>
        </a>
        <a href="#" className="hover:underline text-[14px]   font-[400]">
          Hatchback <span>(2,530)</span>
        </a>
        <a href="#" className="hover:underline text-[14px]   font-[400]">
          Pickup Trucks <span>(3,490)</span>
        </a>
        <a href="#" className="hover:underline text-[14px]   font-[400]">
          Sedan <span>(12,568)</span>
        </a>
        <a href="#" className="hover:underline text-[14px]   font-[400]">
          Suv/Crossover <span>(10,952)</span>
        </a>
        <a href="#" className="hover:underline text-[14px]   font-[400]">
          Vans/Minivan <span>(1,564)</span>
        </a>
        <a href="#" className="hover:underline text-[14px]   font-[400]">
          Wagon <span>(283)</span>
        </a>
      </div>
    );
};

export default BodyStyles;