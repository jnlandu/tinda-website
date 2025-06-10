"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Play, ArrowRight, Shield, Zap, Users } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#FF6A00]/10 to-[#FF8533]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#FF6A00]/5 to-[#FF8533]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#FF6A00]/3 to-[#FF8533]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FF6A00]/10 to-[#FF8533]/10 px-4 py-2 rounded-full mb-6 border border-[#FF6A00]/20">
              <Shield className="h-4 w-4 text-[#FF6A00]" />
              <span className="text-sm font-medium text-gray-700">Approuvé par 50 000+ utilisateurs</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Paiement Mobile
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF8533]">
                Redéfini
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Découvrez l'avenir du paiement mobile et transfert d'argent en RD Congo. Sécurisé, instantané et conçu
              pour votre succès, avec Moziki intégré.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
                <Zap className="h-4 w-4 text-[#FF6A00]" />
                <span className="text-sm font-medium text-gray-700">Transferts Instantanés</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
                <Shield className="h-4 w-4 text-[#FF6A00]" />
                <span className="text-sm font-medium text-gray-700">Sécurité Bancaire</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
                <Users className="h-4 w-4 text-[#FF6A00]" />
                <span className="text-sm font-medium text-gray-700">Support 24/7</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-[#FF6A00] to-[#FF8533] hover:from-[#e55a00] hover:to-[#e55a00] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Télécharger l'App
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-gray-300 text-gray-700 hover:border-[#FF6A00] hover:text-[#FF6A00] px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Voir la Démo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">50K+</p>
                <p className="text-sm text-gray-600">Utilisateurs Actifs</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">₣2.5Md</p>
                <p className="text-sm text-gray-600">Traités</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">99.9%</p>
                <p className="text-sm text-gray-600">Disponibilité</p>
              </div>
            </div>
          </div>

          {/* Right Content - Real App Screenshots */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-[#FF6A00] to-[#FF8533] rounded-2xl flex items-center justify-center shadow-xl animate-float">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-xl animate-float-delayed border border-gray-100">
                <Zap className="h-6 w-6 text-[#FF6A00]" />
              </div>

              {/* Real Phone with App Screenshot */}
              <div className="relative z-10">
                <div className="w-80 h-[600px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    <Image
                      src="/images/tinda-app-dashboard.jpg"
                      alt="Interface Tinda - Tableau de bord principal"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
