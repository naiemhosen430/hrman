import React from 'react'
import JobCard from './Cards/JobCard'

export default function JobSection() {
  return (
    <>
        <div>
            <div>
                <h1 className="text-4xl font-bold text-center p-4">Our Open Position</h1>
            </div>

            <div>
                <div className="lg:w-3/12 p-2 w-12/12">
                    <JobCard />
                </div>
            </div>
        </div>
    </>
  )
}
