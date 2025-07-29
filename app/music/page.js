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
  <main className="flex flex-col justify-start items-center py-8 px-4 font-sans backdrop-blur-sm bg-black/50 min-h-screen">
    <h1 className="text-pink-600 font-bold text-xl animate-fadeDown mb-4">
      🎵 Search Box
    </h1>

    <input
      className="bg-black text-[#EB2188] rounded-lg animate-fadeDown p-3 focus:outline-none mb-4 transition-shadow shadow-lg focus:shadow-2xl"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search Singer Or Music..."
      style={{
        minWidth: "250px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.7)",
      }}
    />

    <AnimatePresence>
      {!query && (
        <motion.div
          key="empty-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center h-64 text-gray-400 text-lg"
        >
          List Is Empty
        </motion.div>
      )}
    </AnimatePresence>

    {loading && <p className="text-white">Searching...</p>}

    {/* ✅ لیست آهنگ‌ها فقط اینجا اسکرول می‌شود */}
    <div className="w-full max-w-xl mt-4 space-y-4 h-[500px] overflow-y-auto pr-2">
      <AnimatePresence>
        {tracks.map((track) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white/10 p-4 rounded-md backdrop-blur-md text-white flex items-start gap-4"
          >
            <img
              src={track.album?.cover || track.artist?.picture}
              alt={track.title}
              className="w-16 h-16 rounded-md object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <strong>{track.title}</strong> - {track.artist?.name}
              <div className="mt-2">
                <audio controls src={track.preview} className="w-full" />
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  </main>
</div>

  )
}
