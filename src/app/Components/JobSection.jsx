'use client'
import React, { useContext, useEffect } from 'react'
import JobCard from './Cards/JobCard'
import { JobContext } from '@/Contexts/JobContext'
import UseJobContext from '@/Hooks/UseJobContext'

export default function JobSection() {
    const {getAllJobs,loading} = UseJobContext()
    const {state} = useContext(JobContext) 
    const alljobs = state.alljob

    
  useEffect(()=>{
    getAllJobs()
  },[])

  return (
    <>
        <div>
            <div>
                <h1 className="text-4xl font-bold text-center p-4 py-20">Our Open Position</h1>
            </div>

            <div className=''>
                {alljobs && alljobs.length > 0 ? (
                    alljobs.map((job, index) => (
                    <div key={index} className="lg:w-3/12 min-h-[300px] inline-block p-2 w-12/12">
                        <JobCard data={job} />
                    </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500 p-5">
                    No jobs found.
                    </div>
                )}
            </div>

        </div>
    </>
  )
}
