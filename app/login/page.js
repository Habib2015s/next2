"use client"
import React from 'react'
export default function page  ()  {
  return (
    <div className='flex'>
        <div className='bg-[url("/back.png")] w-5xl h-screen animate-fadeDown'>
        <p className='text-4xl font-bold m-40 w-fit absolute  animate-fadeDown '>LOGIN PAGE</p>
          <div className='bg-amber-50 w-1/2 h-3/4 rounded-4xl shadow-2xl mt-20 p-20  ml-[53rem] animate-fadeDown relative'>
           <form className="w-full flex flex-col gap-10">
          <div>
            <label className="text-[#392F54] block mb-1">Name</label>
            <input
              className="bg-white p-3 text-[#392F54] rounded-md w-full"
              type="text"
              placeholder="Enter your name"
            />
            <div className="w-full h-px bg-[#392F54] mt-2" />
          </div>

          <div>
            <label className="text-[#392F54] block mb-1">Password</label>
            <input
              type="password"
              className="bg-white p-3 text-[#392F54] rounded-md w-full"
              placeholder="Enter your password"
            />
            <div className="w-full h-px bg-[#392F54] mt-2" />
          </div>

          <div className="flex gap-4 items-center">
            <label className="text-[#392F54]">Date of Birth</label>
            <input className="bg-[#392F54] text-white rounded-md p-2" type="date" />
          </div>

            <div className="p-3 text-center bg-[#392F54] rounded-md text-white cursor-pointer hover:scale-105 transition">
              Sign Up
            </div>
        
        </form>
     </div>
        </div>
          
    </div>
  )
}
