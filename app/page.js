"use client"
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }
      const data = await res.json();
      setTracks(data.data || []);
    } catch (e) {
      setError(e.message);
      setTracks([]);
    }
    setLoading(false);
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🎵 جستجوی آهنگ</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="نام خواننده یا آهنگ..."
        style={{ padding: "0.5rem", marginRight: "0.5rem", minWidth: "250px" }}
      />
      <button onClick={handleSearch} disabled={loading} style={{ padding: "0.5rem 1rem" }}>
        {loading ? "در حال جستجو..." : "جستجو"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && tracks.length === 0 && query && <p>هیچ نتیجه‌ای یافت نشد.</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tracks.map((track) => (
          <li
            key={track.id}
            style={{ marginTop: "1rem", borderBottom: "1px solid #ddd", paddingBottom: "1rem" }}
          >
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
