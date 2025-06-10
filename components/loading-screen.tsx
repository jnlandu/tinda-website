"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-2xl p-4">
            <Image src="/images/icon.png" alt="Tinda" width={120} height={40} className="w-auto h-12" priority />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00] to-[#FF8533] rounded-3xl blur-xl opacity-50 animate-pulse"></div>
        </div>

        <p className="text-[#FF6A00] text-lg font-medium mb-8">QR na yo, nguya nayo.</p>

        <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#FF6A00] to-[#FF8533] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-gray-400 text-sm mt-4">{progress}%</p>
      </div>
    </div>
  )
}
