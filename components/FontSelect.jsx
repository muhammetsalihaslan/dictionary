"use client";
import { useFont } from "@/context/FontContext";
import { useTheme } from "@/context/ThemeContext";
import React from "react";

const FontSelect = () => {
  const { isOpen, toggleFont, selectedFont, setSelectedFont } = useFont();
  const { isDarkMode } = useTheme();

  const handleChange = (e) => {
    setSelectedFont(e.target.value);
    toggleFont();
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className=" cursor-pointer mt-1  flex justify-end"
        onClick={toggleFont}
      >
        {selectedFont}
      </div>
      {isOpen && (
        <div
          className={`flex flex-col justify-center absolute mt-10  w-[176px] h-[164px] me-[125px] rounded-md gap-y-2  text-[18px] shadow-[0px_5px_40px_5px] ${
            isDarkMode ? "shadow-[#A445ED] bg-[#1F1F1F] " : "bg-white"
          }`}
        >
          <label>
            <input
              type="radio"
              value="Sans"
              checked={selectedFont === "Sans"}
              onChange={handleChange}
              className="appearance-none ms-5 font-sans"
            />
            Sans
          </label>
          <label>
            <input
              type="radio"
              value="Sans Serif"
              checked={selectedFont === "Sans Serif"}
              onChange={handleChange}
              className="appearance-none ms-5 font-serif"
            />
            Sans Serif
          </label>
          <label>
            <input
              type="radio"
              value="Mono"
              checked={selectedFont === "Mono"}
              onChange={handleChange}
              className="appearance-none ms-5 font-mono"
            />
            Mono
          </label>
        </div>
      )}
    </div>
  );
};

export default FontSelect;
