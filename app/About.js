// components/About.jsx
import React from 'react'

export default function About() {
  return (
    <div id="about" className="bg-pink-700 px-6 sm:px-10 py-16 sm:py-20 text-white">
      <p className="font-bold text-4xl sm:text-5xl text-[#0b1f2e] m-5 sm:m-7 text-center sm:text-left">
        ABOUT
      </p>

      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 max-w-7xl mx-auto">
        <img
          src="https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/623852/4259bfa634e4085f719314f7e9dfae64fcc08505/original/mailing-list-back.jpg/!!/b%3AW1sicmVzaXplIiwyMDAwXSxbIm1heCJdLFsid2UiXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg"
          alt="about-img"
          className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg"
          loading="lazy"
        />

        <div className="bg-[#0b1f2e] p-6 sm:p-8 rounded-md max-w-xl text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">DESTROY THE HUMANS</h2>
          <h3 className="text-lg font-semibold mb-3">BLACK SIGNAL</h3>
          <p className="text-sm leading-relaxed mb-5">
            Clad in leather and lights, Black Signal (2 time winner: Cincinnati Entertainment Award for Best Electronic Act) is a 2 piece, live cyberpunk/synth metal band. Synth and guitar mesh with digital drums as they navigate the stage of programmed lights and visual flair.
            Inspired by a love for retro video games and sci-fi movies, the live show is an interactive experience narrated through projected visuals with a HAL 9000 style sentient computer named Alice.
          </p>
          <p className="font-bold mb-4">THE DESTRUCTION | OUT NOW!!</p>
          <button className="px-6 py-2 bg-pink-600 text-white font-semibold rounded hover:bg-pink-700 transition duration-300">
            MORE
          </button>
        </div>
      </div>
    </div>
  )
}
