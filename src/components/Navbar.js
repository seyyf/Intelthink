import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import personImage from "../assets/person.png";
function Navbar() {
  return (
    <div className="flex justify-between items-center p-3 h-20 w-full">
      <div className="relative ml-4">
        <CiSearch className="absolute top-2.5 left-0.5 text-darkGrey text-[20px]" />
        <input
          type="text"
          placeholder="Search or type"
          className="rounded-md p-2 outline-none indent-4 bg-grey placeholder:text-darkGrey"
        />
      </div>
      <div className="flex items-center gap-4">
        <IoIosNotificationsOutline className="text-darkGrey text-[25px]" />
        <img src={personImage} alt="" className="rounded-full" />
      </div>
    </div>
  );
}

export default Navbar;
