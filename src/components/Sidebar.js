import React from "react";
import { FiSettings } from "react-icons/fi";
import { IoCarSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { SlLogout } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Navbar from "./Navbar";
const FIRST_MENU = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    path: "/cars",
    name: "Cars",
    icon: <IoCarSharp />,
  },
];

const SECOND_MENU = [
  {
    path: "",
    name: "Settings",
    icon: <FiSettings />,
  },
  {
    path: "",
    name: "Logout",
    icon: <SlLogout />,
  },
];

function SideBar({ children }) {
  return (
    <div className="flex">
      <div className="justify-between flex flex-col h-[100vh] p-6">
        <div>
          <div className="flex items-end gap-2">
            <img src={logo} alt="" />
            <p className="font-bold text-[17px]">Motiv.</p>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            {FIRST_MENU.map((item, index) => {
              return (
                <NavLink to={item.path} key={index} activeclassname="active">
                  <div className="flex items-center gap-2 hover:bg-grey p-2 rounded-lg">
                    <div className="text-[20px] text-darkGrey">{item.icon}</div>
                    <div className="font-medium text-[14px] text-[#5F6165]">
                      {item.name}
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {SECOND_MENU.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex items-center gap-2 hover:bg-grey p-2 rounded-lg cursor-pointer">
                  <div className="text-[20px] text-darkGrey">{item.icon}</div>
                  <div className="font-medium text-[14px] text-[#5F6165]">
                    {item.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col w-[calc(100vw-10.2rem)]">
        <Navbar />
        <main className="h-[calc(100vh-5rem)] bg-grey">{children}</main>
      </div>
    </div>
  );
}

export default SideBar;
