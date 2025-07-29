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
        {/* بخش متن */}
        <div className="text-center md:text-left flex-1">
          <h3 className="text-3xl font-bold mb-2 tracking-wide">CONNECT WITH US</h3>
          <p className="text-gray-300">We'd love to stay in touch</p>
        </div>

        {/* فرم ایمیل */}
        <div className="flex flex-col sm:flex-row items-center gap-3 flex-1 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md text-white bg-[#1e1b3a] focus:outline-none shadow-md w-full sm:w-64"
          />
          <button className="bg-pink-600 hover:bg-pink-700 transition text-white px-5 py-2 rounded-md shadow-lg w-full sm:w-auto">
            Send
          </button>
        </div>

        {/* آیکون‌ها */}
        <div className="flex gap-5 text-3xl mt-6 md:mt-0 flex-1 justify-center md:justify-end">
          <a href="#" className="hover:text-pink-400 transition" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="hover:text-green-400 transition" aria-label="Spotify">
            <FontAwesomeIcon icon={faSpotify} />
          </a>
          <a href="#" className="hover:text-blue-400 transition" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="hover:text-red-500 transition" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </footer>
  )
}
