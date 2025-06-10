"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function StickyNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#features", label: "Solutions" },
    { href: "#moziki", label: "Moziki" },
    { href: "#how-it-works", label: "Plateforme" },
    { href: "#security", label: "Sécurité" },
    { href: "#pricing", label: "Tarifs" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/tinda-logo.png"
                alt="Tinda - Paiement Mobile"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="relative text-gray-700 hover:text-[#FF6A00] transition-all duration-300 font-medium py-2 px-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF6A00] to-[#FF8533] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}

            <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-gray-200">
              <Button variant="ghost" size="sm" onClick={() => setIsDarkMode(!isDarkMode)} className="p-2">
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Button className="bg-gradient-to-r from-[#FF6A00] to-[#FF8533] hover:from-[#e55a00] to-[#e55a00] text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Commencer
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#FF6A00] hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Button className="w-full bg-gradient-to-r from-[#FF6A00] to-[#FF8533] text-white py-3 rounded-xl font-semibold">
                  Commencer
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
