'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  const menuItems = ["HOME", "MUSIC", "TOUR", "ABOUT"]

  return (
    <div className="relative h-screen w-full overflow-hidden text-white font-sans">
      
      {/* 🔴 Background video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔵 Header content */}
      <div className="flex justify-center items-center px-10 pt-8">
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

          {/* 🔐 Login button */}
          <Link href="/login">
            <button className="relative group flex items-center gap-2 cursor-pointer transition-all duration-200 hover:scale-110 hover:text-pink-400">
              <FontAwesomeIcon icon={faCircleUser} />
              <p>Log In</p>
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full" />
            </button>
          </Link>
        </div>
      </div>

      {/* 🔷 Centered logo */}
      <div className="flex justify-center items-center h-full">
        <img
          src="https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/623852/5a306c1a3a97ec60574529e55ae12e655bc872e0/original/bs-logo-2022-flat-72.png/!!/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.png"
          alt="Logo"
          className="w-64 h-auto fade-in"
        />
      </div>
    </div>
  )
}
