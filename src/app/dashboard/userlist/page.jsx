"use client";
import React, { useContext, useEffect, useState } from "react";
import AddUserBox from "../Components/AddUserBox";
import { MdErrorOutline } from "react-icons/md";


export default function page() {

  const allusers = null


  if (!allusers) {
    return (
        <div className="space-y-4 p-2 lg:p-10 lg:pt-5 text-center">
        <div className=" text-right">
          <button
            className="p-4 px-20 loading rounded-xl bg-slate-800 text-white"
          >
          </button>
        </div>

        <div className="p-4 lg:px-8 loadingbig bg-slate-900 text-slate-300 flex items-center">
        </div>

        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-900 text-white flex items-center">
        </div>
        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-900 text-white flex items-center">
        </div>
        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-900 text-white flex items-center">
        </div>
        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-900 text-white flex items-center">
        </div>
        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-900 text-white flex items-center">
        </div>
        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-900 text-white flex items-center">
        </div>
        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-900 text-white flex items-center">
        </div>
        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-900 text-white flex items-center">
        </div>
        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-900 text-white flex items-center">
        </div>
        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-900 text-white flex items-center">
        </div>
        <div className="p-4 lg:px-8 loadingbig hover:bg-slate-900 text-white flex items-center">
        </div>
      </div>
    );
  }

  const openCreateBox = () => {
    setCreateQuestionBox(true);
  };
  return (
    <>
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

        <div className="lg:py-2 p-1 lg:px-8 bg-slate-900 text-slate-300 flex items-center">
          <h1 className="lg:text-lg text-xs w-3/12 px-2">Name</h1>
          <h1 className="lg:text-lg text-xs w-3/12 px-2">Email</h1>
          <h1 className="lg:text-lg text-xs w-2/12 px-2">User type</h1>
          <h1 className="lg:text-lg text-xs w-2/12 px-2">Country</h1>
          <h1 className="lg:text-lg text-xs w-2/12 px-2">Status</h1>
        </div>
        {error &&
            (error === "success" ? (
              ""
            ) : (
              <h1 className="border flex items-center rounded-lg text-xs bg-red-950 text-black shadow-xl bg-transparent p-2 text-center">
                <MdErrorOutline className="mx-2" /> {error}
              </h1>
            ))}

{loading && <LilSpinner />}

        {allusers || allusers.length === 0 ?  (
              <h1 className="text-center text-2xl text-slate-500 py-10">
                No Record Found!
              </h1>
            ) : allusers?.map((user)=>(
        <div className="p-4 lg:px-8 hover:bg-slate-900 text-white flex items-center">
          <h1 className="lg:text-lg text-xs w-3/12 px-2">{user?.name}</h1>
          <h1 className="lg:text-lg text-xs w-3/12 px-2">{user?.email}</h1>
          <h1 className="lg:text-lg text-xs w-2/12 px-2">{user?.role}</h1>
          <h1 className="lg:text-lg text-xs w-2/12 px-2">{user?.country}</h1>
          <h1 className="lg:text-lg text-xs w-2/12 px-2">{user?.status}</h1>
        </div>
        ))}

      </div>
    </>
  );
}