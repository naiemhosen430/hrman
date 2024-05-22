"use client";
import PageHeader from '../Components/PageHeader';
import AddUserBox from "../Components/AddUserBox";
import { MdErrorOutline } from "react-icons/md";
import UseJobContext from '@/Hooks/UseJobContext';
import { useContext, useEffect, useState } from 'react';
import LilSpinner from '@/app/Components/Loaders/LilSpinner';
import { JobContext } from '@/Contexts/JobContext';


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
    setCreateQuestionBox(true);
  };
  return (
<>
  <PageHeader />
  <AddUserBox
    createQuestionBox={createQuestionBox}
    setCreateQuestionBox={setCreateQuestionBox}
  />
  <div className="space-y-4 p-2 lg:p-10 lg:pt-5 text-center">
    <div className="lg:py-2 p-1 text-right">
      <button
        onClick={openCreateBox}
        className="py-2 px-4 rounded-xl bg-slate-800 text-white"
      >
        Add a new user
      </button>
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-full bg-slate-900 text-slate-300">
        <thead>
          <tr>
            <th className="lg:text-lg text-xs w-3/12 px-2 py-2">Job Deating</th>
            <th className="lg:text-lg text-xs w-3/12 px-2 py-2">Posted Date</th>
            <th className="lg:text-lg text-xs w-2/12 px-2 py-2">Deadline</th>
            <th className="lg:text-lg text-xs w-2/12 px-2 py-2">Applied Candidate</th>
            <th className="lg:text-lg text-xs w-2/12 px-2 py-2">Short listed CV</th>
          </tr>
        </thead>
        <tbody>
          {error && (
            error === "success" ? null : (
              <tr>
                <td colSpan="5" className="border flex items-center rounded-lg text-xs bg-red-950 text-black shadow-xl bg-transparent p-2 text-center">
                  <MdErrorOutline className="mx-2" /> {error}
                </td>
              </tr>
            )
          )}
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
                No Record Found!
              </td>
            </tr>
          ) : (
            alljobs?.map((user) => (
              <tr key={user?.email} className="hover:bg-slate-900 text-white">
                <td className="lg:text-lg text-xs w-3/12 px-2">{user?.name}</td>
                <td className="lg:text-lg text-xs w-3/12 px-2">{user?.email}</td>
                <td className="lg:text-lg text-xs w-2/12 px-2">{user?.role}</td>
                <td className="lg:text-lg text-xs w-2/12 px-2">{user?.country}</td>
                <td className="lg:text-lg text-xs w-2/12 px-2">{user?.status}</td>
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