"use client"
import React, { useEffect, useState } from 'react'
import Header from './Header'
import About from './About'
import Single from './Single'
import Footer from './Footer'

export default function Page() {
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/search?q=eminem')
      const data = await res.json()
      setTracks(data.data || [])
    }
    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <About />
      <Single tracks={tracks} />
      <Footer/>
    </div>
  )
}
