import Link from 'next/link'
import React from 'react'

export default function JobCard() {
  return (
    <>
        <div className="lg:p-4 p-2 rounded-md border border-red-500">
            <div className="flex justify-between">
                <div className="border inline-block">
                <img className="h-[50px] w-[50px] opacity-60" src={"jobData?.companylogo"} alt="" />
                </div>
                <div className="inline-block">
                <Link className="inline-block p-1 px-4 text-sm rounded-md bg-black text-white" href={`/jobs/${"item._id"}`}>Apply</Link>
                </div>
            </div>

            <h1 className="lg:text-xl font-bold">This will be heading</h1>

            <div className="flex items-center text-xs">
                <span className="bg-rose-300 rounded-md text-white inline-block mr-2 p-1 px-2">Remote</span>
                <span className="rounded-md inline-block mr-2 p-1 px-2">Dhaka, Bangladesh</span>
            </div>

            <span className="rounded-md inline-block mr-2 p-1 px-2">Type: Full time</span>
            
            <span className="rounded-md inline-block mr-2 p-1 px-2">Selary: 10000/=</span>
        </div>
    </>
  )
}
