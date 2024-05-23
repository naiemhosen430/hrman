import Link from 'next/link'
import React from 'react'

export default function JobCard(data) {
  return (
    <>
        <div className="lg:p-4 p-2 rounded-md border border-red-500">
            <div className="flex justify-between">
                <div className="border inline-block">
                <img className="h-[50px] w-[50px] opacity-60" src={data?.companylogo} alt="" />
                </div>
                <div className="inline-block">
                <Link className="inline-block p-1 px-4 text-sm rounded-md bg-black text-white" href={`/jobs/${data?._id}`}>Apply</Link>
                </div>
            </div>

            <h1 className="lg:text-xl font-bold">{data?.heading}</h1>

            <div className="flex items-center text-xs">
                <span className="bg-rose-300 rounded-md text-white inline-block mr-2 p-1 px-2">{data?.workplace}</span>
                <span className="rounded-md inline-block mr-2 p-1 px-2">{data?.address}</span>
            </div>

            <span className="block rounded-md text-xs mr-2 py-1">Type: {data?.employmentstatus}</span>
            
            <span className="block rounded-md text-xs mr-2 py-1">Selary: {data?.salary}/=</span>


            <p className="block rounded-md text-xs mr-2 py-1">{data?.title}</p>
        </div>
    </>
  )
}
