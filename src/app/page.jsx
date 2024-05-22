"use client"
import Image from "next/image";
import Header from "@/app/Components/Shared/Header";
import UseJobContext from "@/Hooks/UseJobContext";

export default function Home() {
  const {getAllJobs,loading} = UseJobContext()
  useEffect(()=>{
    getAllJobs()
  },[])
  return (
    <>
              <Header />
    <div className="h-screen bg-[#1D202C] flex items-center justify-center">

      <h1 className="text-white text-6xl font-bold">Hello developer</h1>
    </div>
    </>
  );
}
