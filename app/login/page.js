"use client"
import React from "react"

export default function page() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* سمت چپ با بک‌گراند */}
      <div
        className="relative bg-[url('/back.png')] bg-cover bg-center w-full md:w-5/12 h-64 md:h-auto flex items-center justify-center animate-fadeDown"
      >
        <p className="text-3xl md:text-4xl font-bold text-white absolute md:static m-8 md:m-0">
          LOGIN PAGE
        </p>
      </div>

      {/* فرم سمت راست */}
      <div className="bg-amber-50 w-full md:w-7/12 rounded-t-3xl md:rounded-l-4xl md:rounded-tr-none shadow-2xl p-8 md:p-20 flex items-center justify-center animate-fadeDown">
        <form className="w-full max-w-md flex flex-col gap-8">
          <div>
            <label className="text-[#392F54] block mb-2 font-semibold">Name</label>
            <input
              className="bg-white p-3 text-[#392F54] rounded-md w-full border border-gray-300 focus:border-pink-500 outline-none transition"
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-[#392F54] block mb-2 font-semibold">Password</label>
            <input
              type="password"
              className="bg-white p-3 text-[#392F54] rounded-md w-full border border-gray-300 focus:border-pink-500 outline-none transition"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <label className="text-[#392F54] font-semibold min-w-[100px]">Date of Birth</label>
            <input
              className="bg-[#392F54] text-white rounded-md p-2 w-full sm:w-auto"
              type="date"
            />
          </div>

          <button
            type="submit"
            className="p-3 bg-[#392F54] rounded-md text-white font-semibold cursor-pointer hover:scale-105 transition transform"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
