import Link from "next/link";
import Header from "@/app/Components/Shared/Header";

export default function NotFound() {
  return (
    <>
<Header />
    <section className="text-center flex items-center justify-center h-screen w-full ">
      <div className="w-8/12 m-auto text-centerss">
        <h1 className="text-6xl font-bold py-4">404</h1>
        <h4>Sorry Page Not Found !</h4>

        <div className="py-4">
          <Link className="border bg-transparent hover:bg-white hover:text-blackss rounded-xl p-2 px-4" href="/">
            Back To Home
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}
