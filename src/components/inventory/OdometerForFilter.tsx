"use client";
import React, { useState } from "react";
import { InputNumber, InputNumberProps, Slider } from "antd";
import { TiMinus, TiPlus } from "react-icons/ti";

const OdometerForFilter: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [range, setRange] = useState<[number, number]>([0, 2500000]);
  const [min, max] = range;

  //  Hanle On Chnage Min
  const onChangeMin: InputNumberProps["onChange"] = (newValue) => {
    const newMin = newValue as number;
    setRange([newMin, max < newMin ? newMin : max]);
  };

  //   Handle On Change Max
  const onChangeMax: InputNumberProps["onChange"] = (newValue) => {
    const newMax = newValue as number;
    setRange([min > newMax ? newMax : min, newMax]);
  };

  //   Hanle On Slider
  const onSliderChange = (value: [number, number] | number[]) => {
    setRange(value as [number, number]);
  };

  //   Hanle ON Appy Filter
  const handleApplyFilter = () => {};

  return (
    <div
      className={`border-y border-blue-200 text-sm lg:text-md transition-all duration-500 ease-in overflow-hidden ${
        isOpen ? "max-h-[40rem]" : "max-h-[3rem]"
      }`}
    >
      <button
        onClick={() => setOpen(!isOpen)}
        className="flex items-center justify-between font-bold w-full transition-color hover:bg-blue-100 hover:text-blue-600 py-3"
      >
        Odometer
        <div className="flex items-center gap-2">
          {/* if user selected any checkbox then reset visisble. IT  Handle Reseting  */}
          {(range[0] > 0 || range[1] < 2500000) && (
            <p
              onClick={() => setRange([0, 2500000])}
              className="text-blue-600 text-sm cursor-pointer"
            >
              Reset
            </p>
          )}

          {isOpen ? (
            <TiMinus className="font-bold text-blue-600 text-xl" />
          ) : (
            <TiPlus className="font-bold text-blue-600 text-xl" />
          )}
        </div>
      </button>
      <div className="px-4">
        <div className="flex items-center justify-center  mt-3">
          <InputNumber
            className="flex-grow h-12 text-xl mr-5"
            value={range[0]}
            onChange={onChangeMin}
          />
          <span className="block w-3 h-[2px] rounded-full bg-gray-400 "></span>
          <InputNumber
            className="flex-grow h-12 text-xl ml-5"
            value={range[1]}
            onChange={onChangeMax}
          />
        </div>
        <Slider
          range
          min={0}
          max={2500000}
          step={1000}
          value={range}
          onChange={onSliderChange}
        />

        <button className="border-2 py-2 text-center w-full mt-3 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 transition-color border-blue-600 font-bold">
          APPLY
        </button>
      </div>
    </div>
  );
};

export default OdometerForFilter;
