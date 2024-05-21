"use client";
import React, { useState } from "react";
import Link from "next/link";
import Spinner from "@/app/Components/Loaders/Spinner";
import UseAuthContext from "@/Hooks/User/UseAuthContext";
import { toast } from "react-toastify";
import Header from "@/app/Components/Shared/Header";

export default function Page() {
  const { handleAuth, loading } = UseAuthContext();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      toast.error(`All field are required!`);
    } else {
       handleAuth({name, email, password}, "signup");
    }
  };



  return (
    <>
      {loading && <Spinner />}

<Header />

      <div className="h-screen w-12/12 flex items-center justify-center">
        <div className="lg:w-4/12 w-10/12 lg:p-10 p-5 bg-slate-900">
          <h1 className="py-4 pt-0 text-2xl border-b-2 text-white font-bold text-center">
            CREATE ACCOUNT
          </h1>
          <form onSubmit={handleFormSubmit}>
            <div className="py-2">
              <label
                className="block text-2xl text-slate-400 p-2"
                htmlFor="name"
              >
                Enter Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="border border-slate-800 text-white focus: bg-black p-2 px-4 rounded-md w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="py-2">
              <label
                className="block text-2xl text-slate-400 p-2"
                htmlFor="email"
              >
                Enter Email
              </label>
              <input
                type="text"
                name="email"
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
                name="password"
                placeholder="Password"
                className="border border-slate-800 text-white focus:border-slate-700 focus:border bg-black p-2 px-4 rounded-md w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>


            <div className="py-2">
              <button
                className="border border-slate-800 focus:border-slate-700 focus:border bg-slate-600 text-white p-2 px-4 rounded-md w-full"
                type="submit"
              >
                {loading ? "Loading...." : "SIGN UP"}
              </button>

              <div className="text-center py-5">
                Already have account?
                <Link
                  className="text-center text-slate-400 px-2 inline-block"
                  href="/forgetpassword"
                >
                  login here.
                </Link>
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}
