"use client";
import React, { useContext, useEffect, useState } from "react";
import { MdErrorOutline } from "react-icons/md";

export default function AddUserBox({
  openCreateBox
}) {
  const [countries, setCountries] = useState([]);
  const [userInfo, setuserInfo] = useState({
    name: "",
    email: "",
    role: "",
    role: "",
  });

  const roleArray = ["user", "admin"];

  const handleUseronChange = (e) => {
    const { name, value } = e.target;
    setuserInfo((prevState) => ({
        ...prevState,
        [name]: value,
    }));
};





  const handleAddUser = async () => {
    openCreateBox()
  };






  return (
    <>
      {createQuestionBox && (
        <div className="fixed top-0 lg:p-10 left-0 w-full h-screen overflow-y-auto bg-gradient-to-b from-slate-800">
          <div className="p-10 lg:w-6/12 m-auto rounded-md bg-black">
            <div className="flex lg:w-10/12 m-auto items-center justify-between">
              <h1 className="text-4xl text-white py-5 text-center font-bold">
                Add a new user
              </h1>
              <button
                className="bg-none text-2xl text-white"
                onClick={openCreateBox}
              >
                Cancel
              </button>
            </div>

            <div className="lg:w-10/12 m-auto py-2">
              <label className="py-2 block text-lg text-yellow-200" htmlFor="name">
                Enter your name
              </label>
              <input
                className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
                type="text"
                placeholder="Write"
                name="name"
                value={userInfo.name}
                onChange={handleUseronChange}
              />
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
                value={userInfo.email}
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
                value={userInfo.role}
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
            <label
              htmlFor="role"
              className="py-2 block text-lg text-yellow-200"
            >
              role
            </label>
            <select
                name="role"
                id="role"
                value={userInfo.role}
                onChange={handleUseronChange} className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white">
              <option
                value={"all"}
                selected
                className="p-4 block px-8 bg-black hover:bg-slate-600"
              >
                World Wide
              </option>
              {sortedCountries.map((role) => (
                <option
                  className="p-4 block px-8 bg-black hover:bg-slate-600"
                  key={role.cca2}
                  value={role.name.common}
                >
                  {role.name.common}
                </option>
              ))}
            </select>
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
      )}
    </>
  );
}