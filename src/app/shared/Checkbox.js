"use client";
import React, { useState } from "react";

const Checkbox = ({ checked: checkedProp, onChange, color }) => {
  const [checked, setChecked] = useState(checkedProp || false);

  const handleToggle = () => {
    setChecked(!checked);
    if (onChange) onChange(!checked);
  };

  // Set the background color based on the "color" prop
  const backgroundColor = color === "purple" ? "bg-purple-500 border-purple-500" : "bg-green-500 border-green-500";
  
  return (
    <div className="flex items-center cursor-pointer select-none" onClick={handleToggle}>
      <div
        className={`w-5 h-5 rounded-md flex items-center justify-center border border-gray-300 transition-colors ${
          checked ? `${backgroundColor}` : "bg-[#D5D7DA]"
        }`}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
