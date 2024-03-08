"use client";
import React, { createContext, useContext, useState } from "react";

export const FontContext = createContext();

export const useFont = () => {
  return useContext(FontContext);
};

export const FontProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Mono");

  const toggleFont = () => {
    setIsOpen(!isOpen);
  };
  return (
    <FontContext.Provider
      value={{ isOpen, toggleFont, selectedFont, setSelectedFont }}
    >
      {children}
    </FontContext.Provider>
  );
};
