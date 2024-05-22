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
    description: null,
    role: "",
  });

  const workplacesitems = ["onsite", "remote", "hybride", "negotiable"]
  const employeementstatusitems = ["fulltime", "parttime", "negotiable"]
  const festivalbonus = ["yearly", "monthly", "weekly", "negotiable", "never"]
  const salaryreviewitems = ["yearly", "monthly", "weekly", "negotiable", "never"]

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
              Add a new Job
            </h1>
            <button
              className="bg-none text-2xl text-white"
              onClick={openCreateBox}
            >
             <IoClose />
            </button>
          </div>

          <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
            <div className="lg:w-6/12 w-12/12 mx-1">
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

              <div className="lg:w-6/12 w-12/12 mx-1">
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

          
          <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
            <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="description">
                  Enter your Job description
                </label>
                <input
                  className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
                  type="text"
                  placeholder="Write"
                  name="description"
                  value={jobInfo.description}
                  onChange={handleUseronChange}
                />
              </div>

              <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="requirments">
                  Enter your Job requirments
                </label>
                <input
                  className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
                  type="text"
                  placeholder="Write"
                  name="requirments"
                  value={jobInfo.requirments}
                  onChange={handleUseronChange}
                />
              </div>
          </div>

          <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
            <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="howtoapply">
                  Enter your Job howtoapply
                </label>
                <input
                  className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
                  type="text"
                  placeholder="Write"
                  name="howtoapply"
                  value={jobInfo.howtoapply}
                  onChange={handleUseronChange}
                />
              </div>

              <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="qualifications">
                  Enter your Job qualifications
                </label>
                <input
                  className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
                  type="text"
                  placeholder="Write"
                  name="qualifications"
                  value={jobInfo.qualifications}
                  onChange={handleUseronChange}
                />
              </div>
          </div>

          <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
            <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="festivalbonus">
                  Enter your Job festival bonus
                </label>
                <select
              className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
              name="festivalbonus"
              id="festivalbonus"
              value={jobInfo.festivalbonus}
              onChange={handleUseronChange}
            >
              <option value="">Select festival bonus</option>
              {festivalbonus.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
              </div>

              <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="salaryreview">
                  Enter your Job salary review
                </label>
                <select
              className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
              name="salaryreview"
              id="salaryreview"
              value={jobInfo.salaryreview}
              onChange={handleUseronChange}
            >
              <option value="">Select salary review</option>
              {salaryreviewitems.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
              </div>
          </div>


          <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
            <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="Workplace">
                  Enter your Job Workplace
                </label>
                <select
              className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
              name="Workplace"
              id="Workplace"
              value={jobInfo.Workplace}
              onChange={handleUseronChange}
            >
              <option value="">Select Workplace</option>
              {workplacesitems.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
              </div>

              <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="salaryreview">
                  Enter your Job salary review
                </label>
                <select
              className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
              name="salaryreview"
              id="salaryreview"
              value={jobInfo.salaryreview}
              onChange={handleUseronChange}
            >
              <option value="">Select salary review</option>
              {salaryreviewitems.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
              </div>
          </div>

          <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
                <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="Salary">
                  Enter your Job Salary
                </label>
                <input
                  className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
                  type="number"
                  placeholder="Write"
                  name="Salary"
                  value={jobInfo.Salary}
                  onChange={handleUseronChange}
                />
              </div>

              <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="Deadline">
                  Enter your Job Deadline
                </label>
                <input
                  className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
                  type="date"
                  placeholder="Write"
                  name="Deadline"
                  value={jobInfo.Deadline}
                  onChange={handleUseronChange}
                />
              </div>
          </div>


          <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
                <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="address">
                  Enter your Job address
                </label>
                <input
                  className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
                  type="text"
                  placeholder="Write"
                  name="address"
                  value={jobInfo.address}
                  onChange={handleUseronChange}
                />
              </div>

              <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="companyname">
                  Enter your Job company name
                </label>
                <input
                  className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
                  type="text"
                  placeholder="Write"
                  name="companyname"
                  value={jobInfo.companyname}
                  onChange={handleUseronChange}
                />
              </div>
          </div>

          <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
                <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="companynabout">
                  Enter your Job companynabout
                </label>
                <input
                  className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
                  type="text"
                  placeholder="Write"
                  name="companynabout"
                  value={jobInfo.companynabout}
                  onChange={handleUseronChange}
                />
              </div>

              <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="companylogo">
                  Enter your Job company name
                </label>
                <input
                  className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
                  type="image"
                  placeholder="Write"
                  name="companylogo"
                  value={jobInfo.companylogo}
                  onChange={handleUseronChange}
                />
              </div>
          </div>

          <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
                <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="companylinkedin">
                  Enter your Job company linkedin
                </label>
                <input
                  className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
                  type="text"
                  placeholder="Write"
                  name="companylinkedin"
                  value={jobInfo.companylinkedin}
                  onChange={handleUseronChange}
                />
              </div>

              <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="companyemail">
                  Enter your Job company email
                </label>
                <input
                  className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
                  type="text"
                  placeholder="Write"
                  name="companyemail"
                  value={jobInfo.companyemail}
                  onChange={handleUseronChange}
                />
              </div>
          </div>

          <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
                <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="azpectedareafrom">
                  Enter your Job azpected area from
                </label>
                <input
                  className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
                  type="text"
                  placeholder="Write"
                  name="azpectedareafrom"
                  value={jobInfo.azpectedareafrom}
                  onChange={handleUseronChange}
                />
              </div>

              <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="aditionalskill">
                  Enter your Job aditional skill
                </label>
                <input
                  className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
                  type="text"
                  placeholder="Write"
                  name="aditionalskill"
                  value={jobInfo.aditionalskill}
                  onChange={handleUseronChange}
                />
              </div>
          </div>

          <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
                <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="benefits">
                  Enter your Job benefits
                </label>
                <input
                  className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
                  type="text"
                  placeholder="Write"
                  name="benefits"
                  value={jobInfo.benefits}
                  onChange={handleUseronChange}
                />
              </div>

              <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="employmentstatus">
                  Enter your Job employment status
                </label>
                <select
              className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
              name="employmentstatus"
              id="employmentstatus"
              value={jobInfo.employmentstatus}
              onChange={handleUseronChange}
            >
              <option value="">Select employment status</option>
              {employeementstatusitems.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
              </div>
          </div>

          <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
                <div className="lg:w-6/12 w-12/12 mx-1">
                <label className="py-2 block text-lg text-yellow-200" htmlFor="skills">
                  Enter your Job skills
                </label>
                <input
                  className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
                  type="text"
                  placeholder="Write"
                  name="skills"
                  value={jobInfo.skills}
                  onChange={handleUseronChange}
                />
              </div>


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