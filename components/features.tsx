"use client"

import { useState, useEffect, useRef } from "react"
import { Send, QrCode, Smartphone, Shield, Zap, BarChart3, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Features() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Update features to reflect mobile payment positioning and add Moziki feature
  const features = [
    {
      icon: Send,
      title: "Transferts Instantanés",
      description:
        "Envoyez de l'argent à n'importe qui en RD Congo instantanément avec des protocoles de sécurité avancés.",
      color: "from-blue-500 to-blue-600",
      stats: "< 3 secondes",
    },
    {
      icon: QrCode,
      title: "Paiements QR Intelligents",
      description:
        "Système QR révolutionnaire avec chiffrement dynamique pour des paiements sécurisés chez les commerçants.",
      color: "from-green-500 to-green-600",
      stats: "Zéro fraude",
    },
    {
      icon: Smartphone,
      title: "Recharge Mobile",
      description:
        "Rechargez facilement le crédit pour tous les grands réseaux avec des tarifs compétitifs et livraison instantanée.",
      color: "from-purple-500 to-purple-600",
      stats: "Tous réseaux",
    },
    {
      icon: Shield,
      title: "Sécurité Avancée",
      description:
        "Sécurité de niveau professionnel avec chiffrement multicouche, authentification biométrique et détection de fraude.",
      color: "from-[#FF6A00] to-[#FF8533]",
      stats: "ISO 27001",
    },
    {
      icon: Users,
      title: "Moziki (Tontines)",
      description:
        "Créez et gérez des groupes d'épargne traditionnels (Moziki) avec suivi automatique des contributions et distributions.",
      color: "from-indigo-500 to-indigo-600",
      stats: "Exclusif",
    },
    {
      icon: BarChart3,
      title: "Analyses Financières",
      description:
        "Analyses avancées et aperçus des dépenses pour vous aider à prendre des décisions financières éclairées.",
      color: "from-teal-500 to-teal-600",
      stats: "IA intégrée",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
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
      id="features"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-[#FF6A00]/5 to-[#FF8533]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FF6A00]/10 to-[#FF8533]/10 px-4 py-2 rounded-full mb-6 border border-[#FF6A00]/20">
            <Zap className="h-4 w-4 text-[#FF6A00]" />
            <span className="text-sm font-medium text-gray-700">Fonctionnalités Puissantes</span>
          </div>
          {/* Update the heading */}
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Tout ce dont vous avez besoin pour
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF8533]">
              les paiements modernes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez la plateforme de paiement mobile et transfert d'argent la plus avancée conçue spécialement pour le
            marché de la RD Congo
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            const isActive = index === activeFeature

            return (
              <Card
                key={index}
                className={`group relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden ${
                  isActive ? "scale-105 shadow-2xl" : "hover:scale-105"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveFeature(index)}
              >
                {/* Gradient Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <CardContent className="relative p-8">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                      <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {feature.stats}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${feature.color} transition-all duration-4000 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Feature Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeFeature
                  ? "bg-gradient-to-r from-[#FF6A00] to-[#FF8533] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
