"use client"
import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

let debounceTimeout;

export default function Page() {
  const [query, setQuery] = useState("")
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!query) {
      setTracks([])
      return
    }

    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(() => {
      fetchTracks(query)
    }, 600)

    return () => clearTimeout(debounceTimeout)
  }, [query])

  const fetchTracks = async (searchText) => {
    setLoading(true)
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(searchText)}`)
      const data = await res.json()
      setTracks(data.data || [])
    } catch (e) {
      console.error("Failed to fetch:", e)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#392F40]">
      <main className="bg-[#5C4D7B] flex flex-col justify-center items-center py-8 px-4 font-sans">
        <h1 className="text-pink-600 font-bold text-xl animate-fadeDown mb-4">
          🎵 Search Box
        </h1>

        <input
          className="bg-black text-white rounded-lg animate-fadeDown p-3 focus:outline-none mb-4 transition-shadow shadow-lg focus:shadow-2xl"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Singer Or Music..."
          style={{
            minWidth: "250px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.7)",
          }}
        />

        {loading && <p className="text-white">در حال جستجو...</p>}

        {/* لیست نتایج با انیمیشن Framer Motion */}
        <ul className="w-full max-w-xl mt-4 space-y-4">
          <AnimatePresence>
            {tracks.map((track) => (
              <motion.li
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/10 p-4 rounded-md backdrop-blur-md text-white"
              >
                <strong>{track.title}</strong> - {track.artist?.name}
                <div className="mt-2">
                  <audio controls src={track.preview} className="w-full" />
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </main>
    </div>
  )
}
