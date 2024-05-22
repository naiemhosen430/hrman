"use client";
import UseJobContext from "@/Hooks/UseJobContext";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
const JoditEditor = dynamic(() => import('jodit-react'), {
  ssr: false,
});

export default function AddUserBox({ openCreateBox }) {
  const { loading, addNewJob } = UseJobContext();
  const [jobInfo, setJobInfo] = useState({
    heading: "",
    title: "",
    description: "",
    requirments: "",
    howtoapply: "",
    qualifications: "",
    festivalbonus: "",
    salaryreview: "",
    Workplace: "",
    Salary: "",
    Deadline: "",
    address: "",
    companyname: "",
    companyabout: "",
    companylogo: "",
    companylinkedin: "",
    companyemail: "",
    azpectedareafrom: "",
    aditionalskill: "",
    benefits: "",
    employmentstatus: "",
    skills: "",
  });

  const workplacesitems = ["onsite", "remote", "hybride", "negotiable"];
  const employeementstatusitems = ["fulltime", "parttime", "negotiable"];
  const festivalbonus = ["yearly", "monthly", "weekly", "negotiable", "never"];
  const salaryreviewitems = ["yearly", "monthly", "weekly", "negotiable", "never"];

  const handleUseronChange = (e) => {
    const { name, value } = e.target;
    setJobInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditorChange = (content, name) => {
    setJobInfo((prevState) => ({
      ...prevState,
      [name]: content,
    }));
  };

  const handleAddUser = async () => {
    addNewJob(jobInfo);
  };

  const renderTextInput = (label, name, type = "text") => (
    <div className="lg:w-6/12 w-12/12 mx-1">
      <label className="py-2 block text-lg text-yellow-200" htmlFor={name}>
        {label}
      </label>
      <input
        className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
        type={type}
        placeholder="Write"
        name={name}
        value={jobInfo[name]}
        onChange={handleUseronChange}
      />
    </div>
  );

  const renderSelectInput = (label, name, options) => (
    <div className="lg:w-6/12 w-12/12 mx-1">
      <label className="py-2 block text-lg text-yellow-200" htmlFor={name}>
        {label}
      </label>
      <select
        className="text-sm p-2 px-4 rounded-md block w-full border-0 bg-slate-950 text-white"
        name={name}
        value={jobInfo[name]}
        onChange={handleUseronChange}
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
  const renderJoditEditor = (label, name) => (
    <div className="w-12/12 mx-1">
      <label className="py-2 block text-lg text-yellow-200" htmlFor={name}>
        {label}
      </label>
      <JoditEditor
        value={jobInfo[name]}
        onChange={(content) => handleEditorChange(content, name)}
        tabIndex={1}
        config={{
          readonly: false,
          style: {
            minHeight: '200px',
            width: '100%',
            backgroundColor: '#333', 
            color: '#ddd', 
          },
        }}
      />
    </div>
  );
  

  return (
    <div className="fixed top-0 lg:p-10 left-0 w-full h-screen overflow-y-auto bg-gradient-to-b from-slate-800">
      <div className="p-5 lg:w-10/12 m-auto rounded-md bg-black">
        <div className="flex lg:w-10/12 m-auto items-center justify-between">
          <h1 className="text-4xl text-white py-5 text-center font-bold">Add a new Job</h1>
          <button className="bg-none text-2xl text-white" onClick={openCreateBox}>
            <IoClose />
          </button>
        </div>

        <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
          {renderTextInput("Enter your Job heading", "heading")}
          {renderTextInput("Enter your Job title", "title")}
        </div>


        <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
          {renderJoditEditor("Enter your Job requirements", "requirments")}
        </div>
        <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
          {renderTextInput("Enter your Job description", "description")}
          {renderTextInput("Enter your Job Deadline", "Deadline", "date")}
        </div>


        <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
          {renderJoditEditor("Enter your Job how to apply", "howtoapply")}
        </div>
        <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
          {renderJoditEditor("Enter your Job qualifications", "qualifications")}
        </div>
        <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
          {renderSelectInput("Enter your Job festival bonus", "festivalbonus", festivalbonus)}
          {renderSelectInput("Enter your Job salary review", "salaryreview", salaryreviewitems)}
        </div>
        <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
          {renderSelectInput("Enter your Job Workplace", "Workplace", workplacesitems)}
          {renderTextInput("Enter your Job Salary", "Salary", "number")}
        </div>
        <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
          {renderJoditEditor("Enter your Job address", "address")}
        </div>
        <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
          {renderJoditEditor("Enter your company name", "companyname")}
        </div>
        <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
          {renderJoditEditor("Enter your company about", "companyabout")}
        </div>
        <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
          {renderTextInput("Enter your company logo", "companylogo")}
          {renderTextInput("Enter your company LinkedIn", "companylinkedin")}
        </div>
        <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
          {renderJoditEditor("Enter your expected area from", "azpectedareafrom")}
        </div>
        <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
          {renderJoditEditor("Enter your Job benefits", "benefits")}
        </div>
        <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
          {renderJoditEditor("Enter your Job additional skill", "aditionalskill")}
        </div>
        <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
          {renderSelectInput("Enter your employment status", "employmentstatus", employeementstatusitems)}
          {renderTextInput("Enter your skills", "skills")}
        </div>
        <div className="lg:w-10/12 w-12/12 lg:flex items-center m-auto py-2">
          {renderTextInput("Enter your company email", "companyemail", "email")}
        </div>

        <div className="lg:w-10/12 m-auto py-3 text-center">
          <button
            onClick={handleAddUser}
            className="text-center w-6/12 mx-1 hover:bg-yellow-200 p-3 px-6 rounded-full bg-yellow-300 font-bold text-black"
          >
            {loading ? "Loading..." : "Create Job"}
          </button>
        </div>
      </div>
    </div>
  );
}
