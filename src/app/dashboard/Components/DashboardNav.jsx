"use client"

import Link from "next/link";
import { useState, useContext } from "react";
import { MdOpenInFull } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { menuItems } from "@/data";
import { AuthContex } from "@/Contexts/AuthContex";

export default function DashboardNav() {
  const [mobileNav, setMobileNav] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const {state} = useContext(AuthContex);
  const {user} = state

    if (!user) {
    return (
      <div className="h-screen hidden w-2/12 bg-slate-900 lg:inline-block p-5">
        <ul>
          <Link
            href={``}
            className="cursor-pointer loading my-2 block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-4 px-4 w-full"
          >{" "}</Link>
          {menuItems.map((item) => (
            <Link
              href={``}
              key={item}
              className="cursor-pointer loading my-2 block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-4 px-4 w-full"
            >{" "}</Link>
          ))}
          <button

            className="cursor-pointer my-5 bg-slate-800 loading block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-4 px-4 w-full"
          >{" "}</button>
        </ul>
      </div>
    );
  }

  const toggleNav = () => {
    setMobileNav((prevNav) => !prevNav);
  };

  const handleDropdownClick = (index) => {
    setOpenDropdown(index === openDropdown ? null : index);
  };

  const currecturl = (urltext) => {
    const formattedItem = urltext.replace(" ", "");
    return formattedItem.toString();
  };

  return (
    <>
      <div onClick={toggleNav} className="border-2 lg:hidden border-blue-950 absolute p-1 my-5 px-4">
        <MdOpenInFull className="text-xl text-white" />
      </div>
      <div className="h-screen hidden w-2/12 bg-[#111C43] lg:inline-block p-5">
        <ul>
        <Link
                  href={currecturl(`/dashboard`)}
                  className="cursor-pointer block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
                >
                  dashboard
                </Link>
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => handleDropdownClick(index)}
                    className="cursor-pointer flex items-center justify-between text-left text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
                  >
                    <span>{item.name}</span>
                    <FaPlus />
                  </button>
                  {openDropdown === index && (
                    <div className="ps-5">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          href={currecturl(`/dashboard/${subItem.toLowerCase()}`)}
                          key={subIndex}
                          className="cursor-pointer block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={currecturl(`/dashboard/${item.name.toLowerCase()}`)}
                  className="cursor-pointer block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </ul>
      </div>
      {mobileNav && (
        <div onClick={toggleNav} className=" w-12/12 h-screen z-20 fixed top-0 left-0 w-screen">
          <div className="h-screen absolute w-8/12 bg-slate-900 lg:inline-block p-5">
            <ul>
              {menuItems.map((item, index) => (
                <Link
                  href={`/dashboard/${item.toLowerCase()}`}
                  onClick={toggleNav}
                  key={index}
                  className="cursor-pointer block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
                >
                  {item}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
