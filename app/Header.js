'use client'

import { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const [menuHeight, setMenuHeight] = useState(0)

  const menuItems = [
    { label: "HOME", href: "#home" },
    { label: "MUSIC", href: "/music" },
    { label: "TOUR", href: "#tour" },
    { label: "ABOUT", href: "#about" },
  ]

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight)
    }
  }, [menuOpen])

  return (
    <div className="relative h-screen w-full overflow-visible text-white font-sans">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hidden sm:flex justify-center animate-fadeDown items-center px-10 pt-8 relative z-20">
        <h3 className="text-2xl mr-32 font-bold">T KAHN</h3>

        <div className="flex items-center gap-10 text-lg">
          {menuItems.map((item) =>
            item.label === "MUSIC" ? (
              <Link key={item.label} href={item.href}>
                <div className="relative group cursor-pointer transition-all duration-200 hover:scale-110">
                  <p className="transition-colors duration-200 group-hover:text-pink-400">
                    {item.label}
                  </p>
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full" />
                </div>
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="relative group cursor-pointer transition-all duration-200 hover:scale-110"
              >
                <p className="transition-colors duration-200 group-hover:text-pink-400">
                  {item.label}
                </p>
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full" />
              </a>
            )
          )}

          <Link href="/login">
            <button className="relative group flex items-center gap-2 cursor-pointer transition-all duration-200 hover:scale-110 hover:text-pink-400">
              <FontAwesomeIcon icon={faCircleUser} />
              <p>Log In</p>
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full" />
            </button>
          </Link>
        </div>
      </div>

      <div className="sm:hidden flex justify-between items-center px-6 pt-6 relative z-20">
        <h3 className="text-2xl font-bold">T KAHN</h3>
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl p-2 focus:outline-none"
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>

      <div
        ref={menuRef}
        className="sm:hidden bg-black/80 backdrop-blur-md w-full px-6 overflow-hidden transition-[max-height] duration-300 ease-in-out z-50"
        style={{ maxHeight: menuOpen ? menuHeight : 0 }}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-6 py-4">
          {menuItems.map((item) =>
            item.label === "MUSIC" ? (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-pink-400 font-semibold text-xl"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-xl"
              >
                {item.label}
              </a>
            )
          )}

          <Link href="/login" onClick={() => setMenuOpen(false)}>
            <button className="mt-2 px-4 py-2 bg-pink-500 rounded text-white font-semibold w-full">
              Log In
            </button>
          </Link>
        </nav>
      </div>

      <div className="flex flex-col justify-center items-start ml-96 h-full gap-8 px-4 relative z-20">
        <img
          src="https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/623852/5a306c1a3a97ec60574529e55ae12e655bc872e0/original/bs-logo-2022-flat-72.png/!!/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.png"
          alt="Logo"
          className="w-64 h-auto"
        />

        <div className="h-[3px] w-2xs bg-pink-500 rounded-full" />

        <p className="font-bold text-white text-lg">OUT SEP 7, 2035</p>
        <h1 className="font-bold text-4xl text-pink-500 leading-snug">
          NEW <br /> ALBUM
        </h1>
        <p className="text-pink-400 text-sm">
          Feat. tHE mAN, Downtown Alley
          <br />
          Hollers & Ms. Friez.
        </p>
      </div>
    </div>
  )
}
