import React from "react";
import { FaHeart, FaPlus, FaMinus } from "react-icons/fa";
import Image from "next/image";
import { IProduct } from "@/Interface/common";

const InventoryTableProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <tbody>
      {/* Product Image */}
      <tr>
        <td className="border border-white">
          <div className="w-full h-32 relative mx-auto">
            <Image
              className="w-full h-full"
              width={200}
              height={200}
              src={product?.pictures[1]}
              alt="product img"
            />
            <div className="absolute bg-black w-full h-6 bottom-0 bg-opacity-50 flex justify-center">
              <button className="text-white text-sm">Quick View</button>
            </div>
          </div>
        </td>
        {/* Lot Info */}
        <td className="px-4 py-2 border border-white">
          <div className="flex flex-col justify-center h-full">
            <h3 className="font-semibold text-xl text-blue-600">{product.title}</h3>
            <p className="text-sm text-blue-500">213214123121</p>
            <button className="w-[6rem] flex items-center gap-1 px-2 py-1 mt-2 border border-blue-600 rounded-full hover:bg-blue-100 transition-colors">
              <FaHeart className="text-blue-600 transition-colors" />
              Watch
            </button>
          </div>
        </td>
        {/* Vehicle Info */}
        <td className="px-4 py-2 border border-white">
          <div className="flex flex-col justify-center h-full space-y-1">
            <p>Odometer</p>
            <h2 className="font-bold">1,493 km</h2>
            <p>Est. Retail Value</p>
            <h2>
              <span className="font-bold">$10,387 </span>
              USD
            </h2>
          </div>
        </td>
        {/* Condition */}
        <td className="px-4 py-2 border border-white">
          <div className="flex flex-col justify-center h-full space-y-1">
            <p>Front End</p>
            <p>Bodengruppe</p>
          </div>
        </td>
        {/* Sale Info */}
        <td className="px-4 py-2 border border-white">
          <div className="flex flex-col justify-center h-full">
            <p>Hannover</p>
            <p>A / K90</p>
            <p>Item #: 1</p>
            <p>Wed, Oct 2, 2024 - 6:00 PM GMT+6</p>
          </div>
        </td>
        {/* Current bid */}
        <td className="px-4 py-2 border border-white">
          <div className="flex flex-col justify-center h-full space-y-2">
            <div>
              <p>Current Bid</p>
              <h2>
                <span className="font-bold">$10,387 </span>
                USD
              </h2>
            </div>
            <div>
              <button className="px-4 py-1 text-white bg-blue-600 hover:bg-blue-400 rounded-full">
                BID NOW
              </button>
            </div>
          </div>
        </td>
      </tr>
      {/* More Details */}
      <tr>
        <td className="w-full bg-blue-300"></td>
        <td className="w-full bg-blue-300"></td>
        <td className="w-full bg-blue-300"></td>
        <td className="w-full bg-blue-300">
          <button>More Details</button>
        </td>
        <td className="w-full bg-blue-300"></td>
        <td className="w-full bg-blue-300"></td>
      </tr>
    </tbody>
  );
};

export default InventoryTableProductCard;
