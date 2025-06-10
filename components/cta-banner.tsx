"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, Phone, ArrowRight, Sparkles } from "lucide-react"

export default function CTABanner() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#FF6A00]/20 via-transparent to-[#FF8533]/20"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#FF6A00]/20 to-[#FF8533]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Sparkle Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#FF6A00] to-[#FF8533] rounded-2xl mb-8 shadow-lg">
            <Sparkles className="h-8 w-8 text-white" />
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Prêt à transformer votre
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF8533]">
              expérience de paiement ?
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Rejoignez plus de 50 000 utilisateurs qui ont déjà découvert la puissance des paiements mobiles et du Moziki
            avec Tinda. Commencez votre parcours aujourd'hui et découvrez la différence.
          </p>

          {/* Stats Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50 000+</div>
              <div className="text-gray-400">Utilisateurs Satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">₣2.5Md+</div>
              <div className="text-gray-400">Traités Mensuellement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Garantie de Disponibilité</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-[#FF6A00] to-[#FF8533] hover:from-[#e55a00] hover:to-[#e55a00] text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              Télécharger Tinda Maintenant
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-white/30 text-white hover:border-[#FF6A00] hover:bg-[#FF6A00] px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-sm"
            >
              <Phone className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Parler aux Ventes
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-gray-400 text-sm">Certifié ISO 27001</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-gray-400 text-sm">Conforme BCEAO</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-gray-400 text-sm">Sécurité Bancaire</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
