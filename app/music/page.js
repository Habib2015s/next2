"use client"
import React, { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Page() {
  const [query, setQuery] = useState("")
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(false)
  const debounceTimeout = useRef(null)

  useEffect(() => {
    if (!query) {
      setTracks([])
      return
    }

    if (debounceTimeout.current) clearTimeout(debounceTimeout.current)

    debounceTimeout.current = setTimeout(() => {
      fetchTracks(query)
    }, 600)

    return () => clearTimeout(debounceTimeout.current)
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
    <div
      className="min-h-screen bg-[url('https://static.wixstatic.com/media/88aac0_de4f12732aa1493bbbc08836c2fb188d~mv2.png')] bg-no-repeat bg-cover bg-center bg-fixed"
    >
      <main className="flex flex-col justify-start items-center py-8 px-4 sm:px-6 md:px-8 font-sans backdrop-blur-sm bg-black/60 min-h-screen">
        <h1 className="text-pink-600 font-bold text-2xl sm:text-3xl animate-fadeDown mb-6">
          🎵 Search Box
        </h1>

        <input
          className="bg-black text-[#EB2188] rounded-lg animate-fadeDown p-3 focus:outline-none mb-6 transition-shadow shadow-lg focus:shadow-2xl w-full max-w-md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Singer Or Music..."
          style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.7)" }}
          type="search"
          spellCheck="false"
          autoComplete="off"
        />

        <AnimatePresence>
          {!query && (
            <motion.div
              key="empty-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center h-40 sm:h-48 text-gray-400 text-center text-lg sm:text-xl max-w-md"
            >
              List Is Empty
            </motion.div>
          )}
        </AnimatePresence>

        {loading && (
          <p className="text-white text-center mt-2">Searching...</p>
        )}

        {/* لیست آهنگ‌ها با اسکرول محدود */}
        <div className="w-full max-w-md mt-4 space-y-4 h-[400px] sm:h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-black rounded-md">
          <AnimatePresence>
            {tracks.map((track) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/10 p-4 rounded-md backdrop-blur-md text-white flex flex-col sm:flex-row items-start gap-4"
              >
                <img
                  src={track.album?.cover || track.artist?.picture}
                  alt={track.title}
                  className="w-20 h-20 rounded-md object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <strong className="block text-lg sm:text-xl">{track.title}</strong>
                  <span className="block text-sm sm:text-base text-gray-300 mb-2">{track.artist?.name}</span>
                  <audio controls src={track.preview} className="w-full rounded-md" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
