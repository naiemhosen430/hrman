import React from 'react'
import { MdDoNotDisturbOnTotalSilence } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";

export default function EmployeeSection() {
  return (
    <>
        <div className="flex py-10">

            <div className="rounded-l-5 border lg:w-[20%] p-4">
                <MdDoNotDisturbOnTotalSilence className="text-6xl mb-5 font-bold" />

                <h1 className="text-xl py-5">New Employee</h1>

                <div className="flex items-center">
                  <h1 className="text-4xl  font-bold ">450</h1>
                  <h1 className="text-sm mx-2 text-[#09D070] bg-[#D9D9D9] px-4 py-1 rounded-full flex items-center font-bold "><GrLinkNext className="inline-block" /> <span className="inline-block">0.0%</span></h1>
                </div>

            </div>

            <div className="rounded-l-5 border lg:w-[20%] p-4">
                <MdDoNotDisturbOnTotalSilence className="text-6xl mb-5 font-bold" />

                <h1 className="text-xl py-5">New Employee</h1>

                <div className="flex items-center">
                  <h1 className="text-4xl  font-bold ">450</h1>
                  <h1 className="text-sm mx-2 text-[#09D070] bg-[#D9D9D9] px-4 py-1 rounded-full flex items-center font-bold "><GrLinkNext className="inline-block" /> <span className="inline-block">0.0%</span></h1>
                </div>

            </div>

            <div className="rounded-l-5 border lg:w-[20%] p-4">
                <MdDoNotDisturbOnTotalSilence className="text-6xl mb-5 font-bold" />

                <h1 className="text-xl py-5">Resigned Employee</h1>

                <div className="flex items-center">
                  <h1 className="text-4xl  font-bold ">450</h1>
                  <h1 className="text-sm mx-2 text-[#09D070] bg-[#D9D9D9] px-4 py-1 rounded-full flex items-center font-bold "><GrLinkNext className="inline-block" /> <span className="inline-block">0.0%</span></h1>
                </div>

            </div>

            <div className="rounded-l-5 border lg:w-[20%] p-0">
                  <h1 className="text-[17px] p-4 px-2 border-b py-5">Employee Demographics</h1>

                  <div className="flex items-center">
                    <h1 className="text-4xl  font-bold ">450</h1>
                    <h1 className="text-sm mx-2 text-[#09D070] bg-[#D9D9D9] px-4 py-1 rounded-full flex items-center font-bold "><GrLinkNext className="inline-block" /> <span className="inline-block">0.0%</span></h1>
                  </div>
            </div>

        </div>
    </>
  )
}
