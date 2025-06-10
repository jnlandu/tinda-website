"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { QrCode, Send, CreditCard, Smartphone, ArrowRight } from "lucide-react"

export default function AppShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      icon: QrCode,
      title: "Scanner QR",
      description: "Payez instantanément en scannant le code QR du commerçant",
      image: "/images/tinda-app-qr.jpg",
      color: "from-[#FF6A00] to-[#FF8533]",
    },
    {
      icon: Send,
      title: "Envoi d'Argent",
      description: "Transférez de l'argent à vos proches en quelques secondes",
      image: "/images/tinda-app-dashboard.jpg",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: CreditCard,
      title: "Paiement de Factures",
      description: "Payez vos factures d'électricité, d'eau et autres services",
      image: "/images/tinda-app-dashboard.jpg",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Smartphone,
      title: "Recharge Crédit",
      description: "Rechargez votre crédit téléphonique pour tous les réseaux",
      image: "/images/tinda-app-dashboard.jpg",
      color: "from-purple-500 to-purple-600",
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
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [features.length])

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#FF6A00]/10 to-[#FF8533]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Découvrez l'application
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF8533]">
              Tinda en action
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Une interface intuitive conçue spécialement pour les utilisateurs congolais
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone Mockup with Real Screenshots */}
          <div
            className={`flex justify-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative">
              <div className="w-80 h-[600px] bg-gradient-to-b from-gray-800 to-black rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  <Image
                    src={features[activeFeature].image || "/placeholder.svg"}
                    alt={`Interface Tinda - ${features[activeFeature].title}`}
                    fill
                    className="object-cover transition-all duration-500"
                  />
                </div>
              </div>

              {/* Floating Action Indicators */}
              <div className="absolute -right-8 top-1/4 bg-white rounded-2xl p-4 shadow-xl animate-float">
                <QrCode className="h-8 w-8 text-[#FF6A00]" />
              </div>
              <div className="absolute -left-8 bottom-1/4 bg-gradient-to-r from-[#FF6A00] to-[#FF8533] rounded-2xl p-4 shadow-xl animate-float-delayed">
                <Send className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          {/* Features List */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              const isActive = index === activeFeature

              return (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 ${
                    isActive ? "scale-105" : "hover:scale-102"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div
                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 ${
                      isActive ? "bg-white/10 border-[#FF6A00]/50" : "hover:bg-white/8"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                          isActive ? "shadow-xl scale-110" : "group-hover:shadow-xl"
                        }`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                      </div>

                      <ArrowRight
                        className={`h-6 w-6 text-gray-400 transition-all duration-300 ${
                          isActive ? "text-[#FF6A00] translate-x-2" : "group-hover:translate-x-1"
                        }`}
                      />
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${feature.color} transition-all duration-4000 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* People Using App Section */}
        <div
          className={`mt-20 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Utilisé partout en RD Congo</h3>
            <p className="text-gray-300">Des marchés de Kinshasa aux universités de Lubumbashi</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Market Vendor */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                👩🏾‍🦱
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Commerçantes</h4>
              <p className="text-gray-300 text-sm">
                "Mes clients paient avec Tinda. Plus besoin de chercher la monnaie !"
              </p>
            </div>

            {/* Student */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                👨🏾‍🎓
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Étudiants</h4>
              <p className="text-gray-300 text-sm">
                "Je reçois l'argent de mes parents instantanément, même à distance."
              </p>
            </div>

            {/* Business Owner */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#FF6A00] to-[#FF8533] rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                👨🏾‍💼
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Entrepreneurs</h4>
              <p className="text-gray-300 text-sm">
                "Tinda m'aide à gérer les paiements de mon entreprise facilement."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
