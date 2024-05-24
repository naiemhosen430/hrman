import React from 'react'
import { MdDoNotDisturbOnTotalSilence } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";

export default function EmployeeSection() {
  return (
    <>
        <div className="flex items-center py-10">

            <div className="rounded-l-5 border lg:w-2/12 p-4">
                <MdDoNotDisturbOnTotalSilence className="text-6xl font-bold" />

                <h1 classname="text-2xl py-5">New Employee</h1>

                <div className="items-center">
                  <h1 classname="text-5xl font-bol;d py-5">New Employee</h1>
                  <h1 classname="text-xl bg-[#D9D9D9] px-4 rounded-full font-bol;d py-5"><GrLinkNext /> 0.0%</h1>
                </div>

            </div>

        </div>
    </>
  )
}
