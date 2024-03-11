"use client";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import React from "react";

const DarkModeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="flex items-center ">
      <div
        className={`rounded-full w-[50px] h-[23px]  flex items-center p-1 cursor-pointer ${
          isDarkMode
            ? "bg-[#A445ED]"
            : "bg-[rgb(117,117,117)]  hover:bg-[#A445ED]"
        }`}
        onClick={toggleTheme}
      >
        <div
          className={`rounded-full w-[15px] h-[15px] bg-white ${
            isDarkMode ? "translate-x-6" : ""
          } `}
        ></div>
      </div>
      {isDarkMode ? (
        <Image
          src="../images/icon-darkmoon.svg"
          width={20}
          height={20}
          className="ms-2"
          alt="fi"
        />
      ) : (
        <Image
          src="../images/icon-moon.svg"
          width={20}
          height={20}
          className="ms-2"
          alt="si"
        />
      )}
    </div>
  );
};

export default DarkModeToggle;
