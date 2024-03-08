"use client";
import { useTheme } from "@/context/ThemeContext";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Meaning from "./Meaning";
import Error from "./Error";

const SearchArea = () => {
  const [word, setWord] = useState("book");
  const [data, setData] = useState([]);
  const { isDarkMode } = useTheme();
  const [error, setError] = useState(false);

  const GetData = async () => {
    try {
      const responseData = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/" + `${word}`
      );

      setData(responseData.data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const handleClick = () => {
    GetData();
  };

  return (
    <div>
      <div className="mt-[4rem] flex">
        <input
          type="text"
          value={word}
          placeholder="Ara..."
          className={`w-full rounded-lg h-[60px] text-[20px] z-9  outline-none p-4 caret-[#A445ED] focus:border-2 focus:border-[#A445ED] ${
            isDarkMode
              ? "bg-[#1F1F1F] transition-colors duration-500"
              : "bg-[#F4F4F4] transition-colors duration-500"
          } `}
          onChange={handleChange}
        />
        <Image
          src="./images/icon-search.svg"
          width="30"
          height="30"
          className="-ms-10 cursor-pointer"
          onClick={handleClick}
          alt="image"
        />
      </div>
      {data.length > 0 && !error ? <Meaning data={data} /> : null}
      {error ? <Error /> : null}
    </div>
  );
};

export default SearchArea;
