"use client";
import React, { useContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Spinner from "../Components/Loaders/Spinner";

export default function Page() {
  const [spinnerBox, setSpinnerBox] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Server error!");
  const [errorBox, setErrorBox] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      setErrorMessage("Every fields are required");
      setErrorBox(true);
    } else {
        try {
            setSpinnerBox(true);
          const response = await axios.post("/api/user/login", {
            email,
          });
    
          if (response?.data?.status === 200) {
            router.push("/login", { scroll: true });
            setSpinnerBox(false);
          }
        } catch (error) {
          setSpinnerBox(false);
          setErrorMessage("Server Error!");
          setErrorBox(true);
        }
    }

  };

  const closeErrorBox = () => {
    setErrorBox(false);
  };

  return (
    <>
      {spinnerBox && <Spinner />}
      {errorBox && (
        <div className="fixed justify-center align-center top-0 left-0 bg-gradient-to-r from-blue-500 to-transparent h-screen w-screen">
          <div className="lg:w-5/12 mt-60 w-10/12 text-center m-auto bg-white p-10 rounded-2xl shadow-2xl">
            <h1 className="text-black text-2xl p-10 px-4">{errorMessage}</h1>
            <button
              onClick={closeErrorBox}
              className="p-2 px-20 bg-slate-900 text-white inline-block font-bold rounded-md shadow-lg"
            >
              Ok
            </button>
          </div>
        </div>
      )}

      <div className="h-screen w-12/12 flex items-center justify-center">
        <div className="lg:w-4/12 w-10/12 lg:p-10 p-5 bg-slate-900">
          <h1 className="py-4 pt-0 text-3xl text-white font-bold text-center">
            RECOVER PASSWORD
          </h1>
          <form onSubmit={handleFormSubmit}>
            <div className="py-2">
              <label
                className="block text-2xl text-slate-400 p-2"
                htmlFor="email"
              >
                Enter Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="border border-slate-800 text-white focus: bg-black p-2 px-4 rounded-md w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="py-2 text-center">
              <button
                className="border border-slate-800 focus:border-slate-700 focus:border bg-slate-600 text-white p-2 px-4 rounded-md w-full"
                type="submit"
              >
                SEND CODE TO EMAIL
              </button>
              <Link className="mt-4 text-center text-slate-400 inline-block" href="/login">Back to login</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}