// components/About.jsx
import React from 'react'

export default function About() {
  return (
    <div id="about" className="bg-pink-700 px-10 py-20 text-white">
      <p className='font-bold text-5xl text-[#0b1f2e] m-7'>ABOUT</p>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/623852/4259bfa634e4085f719314f7e9dfae64fcc08505/original/mailing-list-back.jpg/!!/b%3AW1sicmVzaXplIiwyMDAwXSxbIm1heCJdLFsid2UiXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg"
          alt="about-img"
          className="w-full md:w-1/2 object-cover rounded-lg"
        />

        <div className="bg-[#0b1f2e] p-8 rounded-md max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">DESTROY THE HUMANS</h2>
          <h3 className="text-lg font-semibold mb-2">BLACK SIGNAL</h3>
          <p className="text-sm leading-relaxed mb-4">
            Clad in leather and lights, Black Signal (2 time winner: Cincinnati Entertainment Award for Best Electronic Act) is a 2 piece, live cyberpunk/synth metal band. Synth and guitar mesh with digital drums as they navigate the stage of programmed lights and visual flair.
            Inspired by a love for retro video games and sci-fi movies, the live show is an interactive experience narrated through projected visuals with a HAL 9000 style sentient computer named Alice.
          </p>
          <p className="font-bold">THE DESTRUCTION | OUT NOW!!</p>
          <button className="mt-4 px-6 py-2 bg-pink-600 text-white font-semibold rounded hover:bg-pink-700 transition">
            MORE
          </button>
        </div>
      </div>
    </div>
  )
}
