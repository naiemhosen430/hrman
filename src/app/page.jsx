import Image from "next/image";
import Header from "@/app/Components/Shared/Header";

export default function Home() {
  return (
    <>
              <Header />
    <div className="h-screen bg-[#1D202C] flex items-center justify-center">

      <h1 className="text-white text-6xl font-bold">Hello developer</h1>
    </div>
    </>
  );
}
