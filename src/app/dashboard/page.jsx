"use client"
import React, { useContext } from "react";
import AdminDashboard from "./Components/AdminDashboard";
import { AuthContex } from "@/Contexts/AuthContex";
import UserDashboard from "./Components/UserDashboard";

export default function page() {
  const { state } = useContext(AuthContex);
  const { user } = state;

  if (!user){
    <h1 className="flex items-center justify-center h-screen">Loading....</h1>
  }

  if (user?.role === "admin"){
    return <AdminDashboard />
  }else{
    return <UserDashboard />
  }
  return <>

  </>;
}
