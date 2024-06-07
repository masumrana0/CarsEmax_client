"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-100 overflow-hidden transition-max-height duration-300 ease-in">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-[5rem] w-full px-5 flex items-center justify-between"
      >
        <h2 className="font-bold text-md md:text-lg xl:text-xl">{title}</h2>
        <span>
          {isOpen ? (
            <FaMinus className="text-2xl" />
          ) : (
            <FaPlus className="text-2xl" />
          )}
        </span>
      </button>
      {isOpen && <div className="px-5">{content}</div>}
    </div>
  );
};

interface IAccordionProps {
  items: { title: string; content: React.ReactNode }[];
}

const Accordion: React.FC<IAccordionProps> = ({ items }) => {
  return (
    <div className="my-10 space-y-2">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
