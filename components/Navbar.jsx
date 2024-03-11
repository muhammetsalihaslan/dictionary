import Image from "next/image";
import React from "react";
import FontSelect from "./FontSelect";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <div className="mt-10 flex justify-between ">
      <Image src="../images/icon-book.svg" alt="Book" width={30} height={30} />
      <div className="flex gap-x-6  ">
        <FontSelect />
        <span className="border  flex items-stretch h-6/12"></span>
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
