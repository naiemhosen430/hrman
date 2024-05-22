'use client'
import Header from '@/app/Components/Shared/Header'
import React, {useContext} from 'react'
import { usePathname } from 'next/navigation'
import { JobContext } from '@/Contexts/JobContext'
import { toast } from "react-toastify";
import UseJobContext from "@/Hooks/UseJobContext";

export default function page() {
  const {state} = useContext(JobContext) 
  const alljobs = state.alljob
  const pathname = usePathname()
  const id = pathname.split("jobs/")[1]

  const {getAllJobs,loading} = UseJobContext()
  useEffect(()=>{
    getAllJobs()
  },[])

  const jobData = alljobs?.find((item)=>item._id === id)


  const showApplyNowPopup = () => {
    toast.success(`This feature is under contruction!`);
  }

  return (
    <>
      <Header />
      <div className=''>
        <div className='bg-black relative'>
          <img className="h-[450px] w-full opacity-60" src={"/images/system/jobbg.jpg"} alt="" />
          <div className='h-[450px] w-full absolute flex items-center justify-center top-0'>
            <div>
              <div className="flex items-center py-2">
                <img className="h-[50px] w-[50px] opacity-60" src={jobData?.companylogo} alt="" />
                <div className="px-4">
                  <h1 className="text-2xl font-bold text-white">{jobData?.companyname}</h1>
                  <h1 className="text-lg text-white">{jobData?.address}</h1>
                </div>
              </div>
              <h1 className="text-6xl font-bold text-white">{jobData?.heading}</h1>
            </div>
          </div>
        </div>


        <div className="lg:w-10/12 m-auto p-5">
        <h1 className="lg:text-4xl text-xl font-bold">{jobData?.title}</h1>

        <p className="py-1">
          <span className="text-xl inline-block pr-2 font-bold">Address:</span>
          <span className="text-sm">{jobData?.address}:</span>
        </p>

        <p className="py-1">
          <span className="text-xl inline-block pr-2 font-bold">Workplace:</span>
          <span className="text-sm">{jobData?.workplace}:</span>
        </p>

        <p className="py-1">
          <span className="text-xl inline-block pr-2 font-bold">Employment status:</span>
          <span className="text-sm">{jobData?.employmentstatus}:</span>
        </p>


        <p className="py-1">
          <span className="text-xl inline-block pr-2 font-bold">Salary:</span>
          <span className="text-sm">{jobData?.salary}:</span>
        </p>

        <p className="py-1">
          <span className="text-xl inline-block pr-2 font-bold">Deadline:</span>
          <span className="text-sm">{jobData?.deadline?.slice(0,10)}:</span>
        </p>



        <p className="py-1">
          <span className="text-xl inline-block pr-2 font-bold">Job description:</span>
          <span className="text-sm">{jobData?.description}</span>
        </p>

        <p className="py-1">
          <span className="text-xl inline-block pr-2 font-bold">Requirments:</span>
          <span className="text-sm">{jobData?.requirments}</span>
        </p>

        <p className="py-1">
          <span className="text-xl inline-block pr-2 font-bold">Skills:</span>
          <span className="text-sm">{jobData?.skills}</span>
        </p>


        <p className="py-1">
          <span className="text-xl inline-block pr-2 font-bold">Qualifications:</span>
          <span className="text-sm">{jobData?.qualifications}</span>
        </p>

        <p className="py-1">
          <span className="text-xl inline-block pr-2 font-bold">Aditional skill:</span>
          <span className="text-sm">{jobData?.aditionalskill}</span>
        </p>

        <p className="py-1">
          <span className="text-xl inline-block pr-2 font-bold">Company about:</span>
          <span className="text-sm">{jobData?.companyabout}</span>
        </p>

        <p className="py-1">
          <span className="text-xl inline-block pr-2 font-bold">Benefits:</span>
          <span className="text-sm">{jobData?.benefits}</span>
        </p>

        <p className="py-1">
          <span className="text-xl inline-block pr-2 font-bold">Salary review:</span>
          <span className="text-sm">{jobData?.salaryreview}</span>
        </p>

        <p className="py-1">
          <span className="text-xl inline-block pr-2 font-bold">Festival bonus:</span>
          <span className="text-sm">{jobData?.festivalbonus}</span>
        </p>


        <p className="py-1">
          <span className="text-xl inline-block pr-2 font-bold">How to apply:</span>
          <span className="text-sm">{jobData?.howtoapply}</span>
        </p>

        <div className="py-5">
        <button className="p-2 px-4 rounded-xl bg-black text-white font-bold text-xl" onClick={showApplyNowPopup} >Aooly now</button>

        </div>
        </div>

      </div>
    </>
  )
}
