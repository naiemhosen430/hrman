"use client";
import PageHeader from '../Components/PageHeader';
import AddUserBox from "../Components/AddUserBox";
import UseJobContext from '@/Hooks/UseJobContext';
import { useContext, useEffect, useState } from 'react';
import LilSpinner from '@/app/Components/Loaders/LilSpinner';
import { JobContext } from '@/Contexts/JobContext';
import { BsThreeDotsVertical } from "react-icons/bs";


export default function page() {
  const {getAllJobs,loading} = UseJobContext()
  const [createQuestionBox, setCreateQuestionBox] = useState(false);
  const {state} = useContext(JobContext) 
  const alljobs = state.alljob

  useEffect(()=>{
    getAllJobs()
  },[])



  if (!alljobs) {
    return (

        <div className="space-y-4 p-2 lg:p-10 lg:pt-5 text-center">
        <div className=" text-right">
          <button
            className="p-4 px-20 loading rounded-xl bg-slate-200 text-white"
          >
          </button>
        </div>

        <div className="p-4 lg:px-8 loadingbig bg-slate-200 text-slate-300 flex items-center">
        </div>

        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-200 text-white flex items-center">
        </div>
        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-200 text-white flex items-center">
        </div>
        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-200 text-white flex items-center">
        </div>
        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-200 text-white flex items-center">
        </div>
        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-200 text-white flex items-center">
        </div>
        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-200 text-white flex items-center">
        </div>
        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-200 text-white flex items-center">
        </div>
        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-200 text-white flex items-center">
        </div>
        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-200 text-white flex items-center">
        </div>
        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-200 text-white flex items-center">
        </div>
        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-200 text-white flex items-center">
        </div>
      </div>
    );
  }

  const openCreateBox = () => {
    if (createQuestionBox){
      setCreateQuestionBox(false);
    }else{
      setCreateQuestionBox(true);
    }
  };
  return (
<>
  <PageHeader />
  {createQuestionBox && 
    <AddUserBox
      openCreateBox={openCreateBox}
    />
  }
  <div className="p-4">
    <div className="lg:py-2 p-1 text-right">
      <button
        onClick={openCreateBox}
        className="py-2 px-4 text-[12px] rounded-xl bg-slate-800 text-white"
      >
        Add a new job
      </button>
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className='bg-slate-200 font-bold'>
          <tr className='py-2'>
            <th className="lg:text-[12px] text-[10px] w-3/12 px-2 py-2">Job Deating</th>
            <th className="lg:text-[12px] text-[10px] w-3/12 px-2 py-2">Posted Date</th>
            <th className="lg:text-[12px] text-[10px] w-2/12 px-2 py-2">Deadline</th>
            <th className="lg:text-[12px] text-[10px] w-2/12 px-2 py-2">Applied Candidate</th>
            <th className="lg:text-[12px] text-[10px] w-1/12 px-2 py-2">Short listed CV</th>
            <th className="lg:text-[12px] text-[10px] w-1/12 px-2 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan="5">
                <LilSpinner />
              </td>
            </tr>
          )}
          {alljobs.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center text-2xl text-slate-500 py-10">
                No Job Found!
              </td>
            </tr>
          ) : (
            alljobs?.map((job) => (
              <tr key={job?._id} className="hover:bg-slate-200 py-2 border">
                <td className="lg:text-[12px] text-[10px] w-3/12 p-2">{job?.heading}</td>
                <td className="lg:text-[12px] text-[10px] w-3/12 p-2">{job?.createdAt?.slice(0,10)}</td>
                <td className="lg:text-[12px] text-[10px] w-2/12 p-2">{job?.deadline?.slice(0,10)}</td>
                <td className="lg:text-[12px] text-[10px] w-2/12 p-2">{job?.apllicatorids?.length}</td>
                <td className="lg:text-[12px] text-[10px] w-2/12 p-2">{job?.shortlistedids?.length}</td>
                <td className="lg:text-[12px] text-[10px] w-1/12 p-2"><BsThreeDotsVertical /></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  </div>
</>

  );
}