'use client'
import { AuthContex } from '@/Contexts/AuthContex';
import Link from 'next/link';
import React, { useContext } from 'react'
import { IoSearch, IoNotifications } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";

export default function PageHeader() {
    const {state} = useContext(AuthContex);
    const {user} = state
  return (
    <>
        <div className="flex items-center border-b p-4 justify-between">
            <h1 className="font-bold">Hi, {user?.name}, Welcome!</h1>
            <div className="flex justify-end">
                <div className="flex items-center justify-end">
                    <input className="p-2 px-4 text-xl rounded-l-full border focus:border-0 border-r-0" type="text" placeholder='Search something...' />
                    <Link className="p-3 px-4 text-xl rounded-r-full border border-l-0" href={''}><IoSearch /></Link>
                </div>
                <button className="p-3 px-4 text-2xl"><IoNotifications /></button>
                <button className="p-3 px-4 text-2xl rounded-full border"><HiMenuAlt3 /></button>
            </div>
        </div>
    </>
  )
}
