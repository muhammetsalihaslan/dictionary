"use client";
import Navbar from "@/components/Navbar";
import SearchArea from "@/components/SearchArea";
import { useFont } from "@/context/FontContext";
import { useTheme } from "@/context/ThemeContext";

import React from "react";

const Hero = () => {
  const { selectedFont } = useFont();
  const { isDarkMode } = useTheme();

  const formattedFont =
    selectedFont == "Sans Serif" ? "serif" : selectedFont.toLowerCase();

  return (
    <div
      className={` flex justify-center  font-${formattedFont} ${
        isDarkMode
          ? "bg-black text-white transition-colors duration-500"
          : "bg-white text-black transition-colors duration-500"
      } `}
    >
      <div className="lg:w-2/4 p-10 lg:p-0 ">
        <Navbar />
        <SearchArea />
      </div>
    </div>
  );
};

export default Hero;
