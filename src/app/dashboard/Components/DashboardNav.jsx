"use client";

import Link from "next/link";
import { useState, useContext } from "react";
import { MdOpenInFull } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { menuItems } from "@/data";
import { AuthContex } from "@/Contexts/AuthContex";

export default function DashboardNav() {
  const [mobileNav, setMobileNav] = useState(false);
  const [openDropdown, setOpenDropdown] = useState({});
  const { state } = useContext(AuthContex);
  const { user } = state;

  const toggleNav = () => {
    setMobileNav((prevNav) => !prevNav);
  };

  const handleDropdownClick = (index) => {
    setOpenDropdown((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const currecturl = (urltext) => {
    const formattedItem = urltext.replace(" ", "");
    return formattedItem.toString();
  };

  const renderMenuItems = (items, parentIndex = '') => {
    return items.map((item, index) => {
      const currentIndex = parentIndex ? `${parentIndex}-${index}` : `${index}`;
      if (item.dropdown) {
        return (
          <div key={currentIndex}>
            <button
              onClick={() => handleDropdownClick(currentIndex)}
              className="cursor-pointer flex items-center justify-between text-left text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
            >
              <span>{item.name}</span>
              <FaPlus />
            </button>
            {openDropdown[currentIndex] && (
              <div className="ps-5">
                {renderMenuItems(item.items, currentIndex)}
              </div>
            )}
          </div>
        );
      } else {
        return (
          <Link
            href={currecturl(`/dashboard/${item.name.toLowerCase()}`)}
            key={currentIndex}
            className="cursor-pointer block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
          >
            {item.name}
          </Link>
        );
      }
    });
  };

  return (
    <>
      <div className="h-screen overflow-y-auto custom-scrollbar-hidden hidden w-2/12 bg-[#111C43] lg:inline-block p-5">
        <ul>
          <Link
            href={currecturl(`/dashboard`)}
            className="cursor-pointer block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
          >
            dashboard
          </Link>
          {renderMenuItems(menuItems)}
        </ul>
      </div>
      {mobileNav && (
        <div onClick={toggleNav} className="w-12/12 h-screen z-20 fixed top-0 left-0 w-screen">
          <div className="h-screen absolute w-8/12 bg-slate-900 lg:inline-block p-5">
            <ul>
              {renderMenuItems(menuItems)}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
