"use client"
import { useState, useEffect } from "react";

let debounceTimeout;

export default function Home() {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setTracks([]);
      return;
    }

    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      fetchTracks(query);
    }, 600); // صبر می‌کنیم تا کاربر تایپش تموم بشه

    return () => clearTimeout(debounceTimeout);
  }, [query]);

  const fetchTracks = async (searchText) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(searchText)}`);
      const data = await res.json();
      setTracks(data.data || []);
    } catch (e) {
      console.error("Failed to fetch:", e);
    }
    setLoading(false);
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🎵 جستجوی آهنگ</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="نام خواننده یا آهنگ..."
        style={{ padding: "0.5rem", marginRight: "0.5rem", minWidth: "250px" }}
      />
      {loading && <p>در حال جستجو...</p>}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tracks.map((track) => (
          <li key={track.id} style={{ marginTop: "1rem", borderBottom: "1px solid #ddd", paddingBottom: "1rem" }}>
            <strong>{track.title}</strong> - {track.artist?.name}
            <div>
              <audio controls src={track.preview}></audio>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
