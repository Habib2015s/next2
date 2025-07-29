import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faSpotify,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-10 px-6 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold  mb-2 tracking-wide">CONNECT WITH US</h3>
          <p className="text-gray-300">We'd love to stay in touch</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md text-white focus:outline-none shadow-md w-64"
          />
          <button className="bg-pink-600 hover:bg-pink-700 transition text-white px-5 py-2 rounded-md shadow-lg">
            Send
          </button>
        </div>

        <div className="flex gap-5 text-2xl mt-4 md:mt-0">
          <a href="#" className="hover:text-pink-400 transition">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="hover:text-green-400 transition">
            <FontAwesomeIcon icon={faSpotify} />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="hover:text-red-500 transition">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </footer>
  )
}
