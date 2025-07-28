'use client'
import React, { useEffect, useState } from 'react'

export default function DestroyHumans() {
  const [isVisible, setIsVisible] = useState(false)

  // فعال شدن انیمیشن وقتی کاربر اسکرول می‌کنه تا کامپوننت دیده بشه
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('destroy-section')
      if (!section) return

      const rect = section.getBoundingClientRect()
      if (rect.top <= window.innerHeight - 100) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // یک‌بار در ابتدا

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      id="destroy-section"
      className={`flex flex-col md:flex-row w-full min-h-screen bg-pink-600 p-4 md:p-10 text-white font-sans transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* تصویر سمت چپ */}
      <div className="md:w-1/2 w-full">
        <img
          src="/black-signal.webp"
          alt="Black Signal Poster"
          className="w-full h-full object-cover"
        />
      </div>

      {/* باکس متن سمت راست */}
      <div className="md:w-1/2 w-full bg-[#0D2A3D] p-6 md:p-10 flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">DESTROY THE HUMANS</h1>
        <h2 className="text-lg font-semibold mb-4">BLACK SIGNAL</h2>

        <p className="text-sm md:text-base mb-4 leading-relaxed">
          Clad in leather and lights, Black Signal (2 time winner: Cincinnati Entertainment Award for Best Electronic Act) is a 2 piece, live cyberpunk/synth metal band.
          Synth and guitar mesh with digital drums as they navigate the stage of programmed lights and visual flair.
          Inspired by a love for retro video games and sci-fi movies, the live show is an interactive experience narrated through projected visuals with a HAL 9000 style sentient computer named Alice.
        </p>

        <p className="text-sm md:text-base mb-6 font-bold">
          Black Signal challenges the humans for control of the planet earth!
          <br />THE DESTRUCTION | OUT NOW!!
        </p>

        <a href="#another-section" className="bg-pink-600 w-fit px-6 py-2 font-bold hover:bg-pink-700 transition">
          MORE
        </a>
      </div>
    </div>
  )
}
