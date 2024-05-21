"use client";
import { AuthContex } from "@/Contexts/AuthContex";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

import { MdReorder } from "react-icons/md";

export default function Header() {
  const {state} = useContext(AuthContex);
  const {user} = state
  const [menuBox, setMenuBox] = useState(false);


  // onclick hundler
  const toggleMenuBox = () => {
    if (menuBox === true) {
      setMenuBox(false);
    } else {
      setMenuBox(true);
    }
  };

  return (
    <>
      <div className="flex sticky text-slate-300 bg-[#5E1607] menu-item-color top-0 nav-bg z-10 justify-center items-center py-2 px-4">
        <div className="lg:w-3/12 w-10/12">
          <Link href={"/"} className="font-bold block text-xl">
            App Name
          </Link>
        </div>

        <div
          data-aos="fade-right"
          className="lg:w-3/12 w-10/12 hidden  z-20 lg:flex items-center shadow-md rounded-md justify-center"
        ></div>

        <div className="lg:w-6/12 hidden lg:block text-right">
          {user ? (
<>
<Link
              className="py-2 mx-4 hidden px-8 lg:inline-block rounded-md shadow-md hover:bg-slate-700 bg-transparent border hover:border-0 nav-booking-btn font-bold"
              href={"/dashboard"}
            >
              Dashboard
            </Link>

</>
          
          ):(
<>

<Link
            className="py-2 mx-4 hidden px-8 lg:inline-block rounded-md shadow-md hover:bg-slate-700 bg-transparent border hover:border-0 nav-booking-btn font-bold"
            href={"/signup"}
          >
            Join
          </Link>

          <Link
            className="py-2 mx-4 hidden px-8 lg:inline-block rounded-md shadow-md hover:bg-slate-700 bg-transparent border hover:border-0 nav-booking-btn font-bold"
            href={"/login"}
          >
            Login
          </Link>
</>

          )}

          <Link
            className="py-2 mx-4 mr-0 hidden px-8 lg:inline-block rounded-md shadow-md hover:bg-slate-700 bg-slate-500 nav-booking-btn font-bold"
            href={"/dashbord/help"}
          >
            Help?
          </Link>
        </div>

        <div
          onClick={toggleMenuBox}
          className="w-2/12 lg:hidden text-center font-bold text-black p-2 py-0 rounded-md hover:bg-slate-400"
        >
          <MdReorder className="text-4xl text-white inline-block" />
        </div>
      </div>

      {menuBox && (
        <div className="h-screen text-slate-400" data-aos="fade-right">
          <div className="shadow-md rounded-md"></div>

          <div className="space-x-4 text-center py-10">
          {user ? (
<>
<Link
              className="py-2 px-4 block w-full rounded-md shadow-md hover:bg-slate-700 bg-slate-500 nav-booking-btn font-bold"
              href={"/dashboard"}
              onClick={toggleMenuBox}
            >
              Dashboard
            </Link>


</>
          
          ):(
<>
<Link
              className="py-2 px-4 block w-full rounded-md shadow-md hover:bg-slate-700 bg-slate-500 nav-booking-btn font-bold"
              href={"/signup"}
              onClick={toggleMenuBox}
            >
              Join
            </Link>
            <Link
              className="py-2 px-4 block w-full rounded-md shadow-md hover:bg-slate-700 bg-slate-500 nav-booking-btn font-bold"
              href={"/login"}
              onClick={toggleMenuBox}
            >
              Login
            </Link>

</>

          )}


            <Link
              className="py-2 px-4 block w-full rounded-md shadow-md hover:bg-slate-700 bg-slate-500 nav-booking-btn font-bold"
              href={"/dashbord/help"}
              onClick={toggleMenuBox}
            >
              Help?
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
