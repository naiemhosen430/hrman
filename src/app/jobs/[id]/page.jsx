import Header from '@/app/Components/Shared/Header'
import React from 'react'

export default function page() {
  return (
    <>
      <Header />
      <div className=''>
        <div className='bg-black relative'>
          <img className="h-[450px] w-full opacity-60" src={"/images/system/jobbg.jpg"} alt="" />
          <div className='h-[450px] w-full absolute flex items-center justify-center top-0'>
            <h1 className="text-6xl font-bold text-white">Senior web development (Intern)</h1>
          </div>
        </div>


        <div className="lg:w-10/12 m-auto p-5">
        <h1 className="lg:text-4xl text-xl font-bold">We are seeking a  Senior web development (Intern) to join our dynamic full.</h1>

        <p className="py-5">
          <span className="text-xl font-bold">Job description:</span>
          <span className="text-lg">Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:Job description:</span>
        </p>
        </div>
      </div>
    </>
  )
}
