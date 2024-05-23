'use client'
import { useContext } from "react";
import DashboardNav from "./Components/DashboardNav";
import { AuthContex } from "@/Contexts/AuthContex";

const metadata = {
  title: "Dashboard",
  description: "",
};

export default function DashboardLayout({ children }) {
  const userState = useContext(AuthContex);
  console.log({userState})
  const { user } = userState.state;
  console.log(user)

  if (!user){
    return <h1 className="h-screen w-full flex items-center justify-center text-2xl font-bold">Loading....</h1>
  }
  return (
    <>
    <div className="flex justify-center">

    <DashboardNav />
    <div className="lg:w-10/12 h-screen overflow-y-auto overflow-hidden w-full">

        {children}
    </div>
    </div>
    </>
  );
}
