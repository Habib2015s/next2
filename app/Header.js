'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  const menuItems = ["HOME", "MUSIC", "TOUR", "ABOUT"]

  return (
    <div className="relative h-screen w-full overflow-hidden text-white font-sans">
      
      {/* بک‌گراند ویدیو */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* منو بالا */}
      <div className="flex justify-center animate-fadeDown items-center px-10 pt-8">
        <h3 className="text-2xl mr-32 font-bold">T KAHN</h3>

        <div className="flex items-center gap-10 text-lg">
          {menuItems.map((item) => (
            <div
              key={item}
              className="relative group cursor-pointer transition-all duration-200 hover:scale-110"
            >
              <p className="transition-colors duration-200 group-hover:text-pink-400">
                {item}
              </p>
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}

          <Link href="/login">
            <button className="relative group flex items-center gap-2 cursor-pointer transition-all duration-200 hover:scale-110 hover:text-pink-400">
              <FontAwesomeIcon icon={faCircleUser} />
              <p>Log In</p>
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full" />
            </button>
          </Link>
        </div>
      </div>

      {/* محتوا وسط صفحه (لوگو + متن) */}
      <div className="flex flex-col justify-center items-start ml-96 h-full gap-8 animate-fadeDown  px-4">
        {/* لوگو */}
        <img
          src="https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/623852/5a306c1a3a97ec60574529e55ae12e655bc872e0/original/bs-logo-2022-flat-72.png/!!/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.png"
          alt="Logo"
          className="w-64 h-auto"
        />

        {/* خط صورتی بالای متن */}
        <div className="h-[3px] w-2xs bg-pink-500 rounded-full" />

        {/* متن‌ها */}
        <p className="font-bold text-white text-lg">OUT SEP 7, 2035</p>
        <h1 className="font-bold text-4xl text-pink-500 leading-snug">
          NEW <br /> ALBUM
        </h1>
        <p className="text-pink-400 text-sm">
          Feat. tHE mAN, Downtown Alley<br />
          Hollers & Ms. Friez.
        </p>
      </div>
    </div>
  )
}
