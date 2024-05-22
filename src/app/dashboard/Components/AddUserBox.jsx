"use client";
import UseJobContext from "@/Hooks/UseJobContext";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function AddUserBox({
  openCreateBox
}) {
  const {loading,addNewJob} = UseJobContext()
  const [jobInfo, setJobInfo] = useState({
    heading: null,
    title: null,
    role: "",
    role: "",
  });

  const roleArray = ["user", "admin"];

  const handleUseronChange = (e) => {
    const { name, value } = e.target;
    setJobInfo((prevState) => ({
        ...prevState,
        [name]: value,
    }));
};





  const handleAddUser = async () => {
    addNewJob(jobInfo)
  };






  return (
    <>
      <div className="fixed top-0 lg:p-10 left-0 w-full h-screen overflow-y-auto bg-gradient-to-b from-slate-800">
        <div className="p-5 lg:w-10/12 m-auto rounded-md bg-black">
          <div className="flex lg:w-10/12 m-auto items-center justify-between">
            <h1 className="text-4xl text-white py-5 text-center font-bold">
              Add a new user
            </h1>
            <button
              className="bg-none text-2xl text-white"
              onClick={openCreateBox}
            >
             <IoClose />
            </button>
          </div>

          <div className="lg:w-10/12 flex items-center m-auto py-2">
            <div className="w-6/12">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="heading">
                  Enter your Job heading
                </label>
                <input
                  className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
                  type="text"
                  placeholder="Write"
                  name="heading"
                  value={jobInfo.heading}
                  onChange={handleUseronChange}
                />
              </div>

              <div className="w-6/12">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="title">
                  Enter your Job title
                </label>
                <input
                  className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
                  type="text"
                  placeholder="Write"
                  name="title"
                  value={jobInfo.title}
                  onChange={handleUseronChange}
                />
              </div>
            </div>

          <div className="lg:w-10/12 m-auto py-2">
            <label className="py-2 block text-lg text-yellow-200" htmlFor="name">
              Enter your email
            </label>
            <input
              className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
              type="email"
              placeholder="Write"
              name="email"
              value={jobInfo.email}
              onChange={handleUseronChange}
            />
          </div>

          <div className="lg:w-10/12 m-auto py-2">
            <label className="py-2 block text-lg text-yellow-200" htmlFor="role">
              Select user role
            </label>
            <select
              className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
              name="role"
              id="role"
              value={jobInfo.role}
              onChange={handleUseronChange}
            >
              <option value="">Select role</option>
              {roleArray.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="lg:w-10/12 m-auto py-2">
        </div>



          <div className="lg:w-6/12 m-auto py-10">
            <button
              className="text-lg p-2 px-4 rounded-md block text-white w-full border-0 bg-slate-800"
              onClick={handleAddUser}
            >
              {loading ? "Loading...." : "Add User"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}