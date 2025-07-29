import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Single({ tracks = [] }) {
  const topTracks = tracks.slice(0, 4)
  const [selectedTrack, setSelectedTrack] = useState(null)

  if (topTracks.length === 0) return null

  return (
    <div >
        <p className="text-center m-14 font-bold text-[#EB2188] text-4xl">
            BEST TRACKS
        </p>

    <div className="w-full max-w-6xl mt-6 mx-auto text-white flex gap-6 px-4">
      <div className="grid grid-cols-2 gap-4 flex-shrink-0 w-1/2">
        {topTracks.map((track) => (
            <div
            key={track.id}
            className={`rounded-md p-2 cursor-pointer hover:bg-white/20 transition ${
                selectedTrack?.id === track.id ? "bg-white/20" : "bg-white/10"
            }`}
            onClick={() => setSelectedTrack(track)}
            >
            <img
              src={track.album?.cover_medium || track.artist?.picture_medium}
              alt={track.title}
              className="w-full h-40 object-cover rounded-md"
              />
            <div className="mt-2 text-center">
              <h4 className="text-md font-semibold">{track.title}</h4>
              <p className="text-sm text-gray-300">{track.artist?.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 bg-white/10 p-6 rounded-lg backdrop-blur-md min-h-[400px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {selectedTrack ? (
              <motion.div
              key={selectedTrack.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center w-full"
              >
              <img
                src={
                    selectedTrack.album?.cover_big ||
                    selectedTrack.artist?.picture_big ||
                    selectedTrack.album?.cover_medium
                }
                alt={selectedTrack.title}
                className="w-64 h-64 object-cover rounded-lg mb-6 shadow-lg"
                />
              <h3 className="text-2xl font-bold mb-2 text-center">{selectedTrack.title}</h3>
              <p className="text-md text-gray-300 mb-6 text-center">{selectedTrack.artist?.name}</p>
              {selectedTrack.preview ? (
                  <audio
                  controls
                  src={selectedTrack.preview}
                  className="w-full rounded-md shadow-lg"
                  />
                ) : (
                    <p className="text-sm text-red-400">🎧 </p>
                )}
            </motion.div>
          ) : (
              <motion.p
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 text-center text-lg"
              >
              Click a track to see details & play
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
          </div>
  )
}
