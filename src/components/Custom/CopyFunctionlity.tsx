"use client";
import { Tooltip } from "antd";
import React, { useRef, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";

const CopyFunctionality: React.FC<{
  content: number | string;
}> = ({ content }) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [copied, setCopied] = useState(false);

  //   handle Copy Loat Number
  const copyToClipboard = () => {
    if (textRef.current) {
      // Create a range to select the text
      const range = document.createRange();
      range.selectNode(textRef.current);

      // Select the text
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);

      // Copy text to clipboard
      document.execCommand("copy");

      // Deselect the text
      window.getSelection()?.removeAllRanges();

      // Set copied state to true to trigger the tooltip
      setCopied(true);

      // Reset copied state after some time
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <div className="flex items-center gap-1 ">
      {/* Showing Content */}
      <span className="font-semibold" ref={textRef}>
        {content}
      </span>
      {/* Tooltip  */}
      <Tooltip
        overlayStyle={{ backgroundColor: "white" }}
        title={copied ? "Copied!" : "Copy to Clipboard"}
      >
        <button className="text-gray-500" onClick={copyToClipboard}>
          <FaRegCopy />
        </button>
      </Tooltip>
    </div>
  );
};

export default CopyFunctionality;
