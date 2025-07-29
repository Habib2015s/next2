import React, { useState } from "react"

export default function Single({ tracks = [] }) {
  const topTracks = tracks.slice(0, 4)
  const [selectedTrack, setSelectedTrack] = useState(null)

  if (topTracks.length === 0) return null

  return (
<div>

        <p className="text-4xl text-[#EB2188] text-center m-10 font-bold"> Best Tracks</p>
    <div className="w-full max-w-4xl mt-6 mx-auto text-white flex gap-6">
      {/* لیست کاورها - سمت چپ */}
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
              alt={`${track.title} by ${track.artist?.name}`}
              className="w-full h-40 object-cover rounded-md"
              />
          </div>
        ))}
      </div>

      {/* باکس جزئیات ترک انتخاب‌شده - سمت راست */}
      <div className="flex-1 bg-white/10 p-6 rounded-lg backdrop-blur-md flex flex-col items-center min-h-[350px]">
        {selectedTrack ? (
            <>
            <img
              src={selectedTrack.album?.cover_big || selectedTrack.artist?.picture_big || selectedTrack.album?.cover_medium || selectedTrack.artist?.picture_medium}
              alt={selectedTrack.title}
              className="w-64 h-64 object-cover rounded-md mb-6"
              />
            <h3 className="text-2xl font-bold mb-2 text-center">{selectedTrack.title}</h3>
            <p className="text-md text-gray-300 mb-6 text-center">{selectedTrack.artist?.name}</p>
            {selectedTrack.preview ? (
                <audio controls src={selectedTrack.preview} className="w-full rounded-md shadow-lg" />
            ) : (
                <p className="text-sm text-red-400">🎧 پیش‌نمایشی برای این آهنگ موجود نیست</p>
            )}
          </>
        ) : (
            <p className="text-gray-400 text-center text-lg self-center flex-grow flex items-center justify-center">
        Click Track To Play
          </p>
        )}
      </div>
    </div>
        </div>
  )
}
