"use client";
import React, { useState } from "react";

import Link from "next/link";
import Spinner from "@/app/Components/Loaders/Spinner";
import UseAuthContext from "@/Hooks/UseAuthContext";
import { toast } from "react-toastify";
import Header from "@/app/Components/Shared/Header";


export default function Page() {
  const { handleAuth, loading } = UseAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if ( email === "" || password === "") {
      toast.error(`All field are required!`);
    } else {
       handleAuth({email, password}, "login");
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <Header />

      <div className="h-screen w-12/12 flex items-center justify-center">

        <div className="lg:w-4/12 w-10/12 lg:p-10 p-5 bg-slate-900">
          <h1 className="py-4 pt-0 text-2xl border-b-2 text-white font-bold text-center">
            LOGIN
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
              name="email"
                type="text"
                placeholder="Email"
                className="border border-slate-800 text-white focus: bg-black p-2 px-4 rounded-md w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="py-2">
              <label
                className="block text-2xl text-slate-400 p-2"
                htmlFor="password"
              >
                Enter Password
              </label>
              <input
                type="password"
                password="password"
                placeholder="Password"
                className="border border-slate-800 text-white focus:border-slate-700 focus:border bg-black p-2 px-4 rounded-md w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="text-right">
                <Link
                  className="text-center text-slate-400 inline-block"
                  href="/forgetpassword"
                >
                  Forgotten password?
                </Link>
              </div>
            </div>


            <div className="py-2">
              <button
                className="border border-slate-800 focus:border-slate-700 focus:border bg-slate-600 text-white p-2 px-4 rounded-md w-full"
                type="submit"
              >
                {loading ? "Loading...." : "LOGIN"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
