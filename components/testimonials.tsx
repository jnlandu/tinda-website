"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      name: "Marie Kabila",
      role: "Commerçante",
      company: "Marché Central de Kinshasa",
      content:
        "Tinda a complètement transformé la façon dont je gère les finances de mon commerce. Le système de paiement QR a augmenté mes ventes de 40% et mes clients adorent la commodité.",
      avatar: "👩🏾‍💼",
      rating: 5,
      location: "Kinshasa",
    },
    {
      name: "Jean-Baptiste Mukendi",
      role: "Étudiant Universitaire",
      company: "Université de Kinshasa",
      content:
        "En tant qu'étudiant, Tinda me facilite incroyablement la réception d'argent de ma famille et la gestion de mes dépenses. L'application est intuitive et les transferts sont instantanés.",
      avatar: "👨🏾‍🎓",
      rating: 5,
      location: "Kinshasa",
    },
    {
      name: "Grace Mbuyi",
      role: "Entrepreneure Tech",
      company: "InnovateCD",
      content:
        "Les fonctionnalités de sécurité me donnent une tranquillité d'esprit totale. En tant que personne dans la tech, j'apprécie le chiffrement avancé et l'authentification biométrique de Tinda.",
      avatar: "👩🏾‍💻",
      rating: 5,
      location: "Lubumbashi",
    },
    {
      name: "Patrick Tshisekedi",
      role: "Designer Freelance",
      company: "Solutions Créatives",
      content:
        "La fonction de recharge de crédit instantanée de Tinda change la donne. Plus d'attente dans les files ou de manquer de crédit pendant les appels clients importants.",
      avatar: "👨🏾‍💻",
      rating: 5,
      location: "Goma",
    },
    {
      name: "Esperance Kasongo",
      role: "Présidente de Moziki",
      company: "Association d'Épargne Locale",
      content:
        "Notre groupe Moziki utilise Tinda pour gérer nos contributions et distributions. C'est incroyable de voir notre tradition d'épargne collective transformée par la technologie tout en préservant nos valeurs.",
      avatar: "👩🏾‍🦱",
      rating: 5,
      location: "Mbuji-Mayi",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [testimonials.length, isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#FF6A00]/5 to-[#FF8533]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Approuvé par des milliers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF8533]">
              à travers la RD Congo
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez ce que nos utilisateurs disent de leur expérience avec Tinda
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <Card
              className={`border-0 shadow-2xl rounded-3xl overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-[#FF6A00] to-[#FF8533] p-8 text-white">
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="h-12 w-12 text-white/80" />
                    <div className="flex space-x-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-white fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-xl leading-relaxed mb-6">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                </div>

                <div className="bg-white p-8">
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl">{testimonials[currentIndex].avatar}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                      <p className="text-[#FF6A00] font-semibold">{testimonials[currentIndex].role}</p>
                      <p className="text-gray-600">{testimonials[currentIndex].company}</p>
                      <p className="text-sm text-gray-500 mt-1">📍 {testimonials[currentIndex].location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:scale-110"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:scale-110"
            >
              <ArrowRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Testimonial Thumbnails */}
          <div className="flex justify-center mt-12 space-x-4 overflow-x-auto pb-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`flex-shrink-0 p-4 rounded-2xl transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-[#FF6A00] to-[#FF8533] text-white scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-50 hover:scale-105"
                } shadow-lg`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">{testimonial.avatar}</div>
                  <div className="text-sm font-semibold">{testimonial.name.split(" ")[0]}</div>
                  <div className="text-xs opacity-80">{testimonial.location}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-[#FF6A00] to-[#FF8533] w-8"
                    : "bg-gray-300 hover:bg-gray-400 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
