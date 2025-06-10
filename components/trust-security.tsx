"use client"

import { useState, useEffect, useRef } from "react"
import { Shield, Lock, Eye, CheckCircle, Award, Globe } from "lucide-react"

export default function TrustSecurity() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const securityFeatures = [
    {
      icon: Shield,
      title: "Certifié ISO 27001",
      description: "Standard international pour les systèmes de gestion de la sécurité de l'information",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Eye,
      title: "Authentification Biométrique",
      description: "Face ID, empreinte digitale et authentification multi-facteurs basée sur PIN",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Lock,
      title: "Chiffrement de Bout en Bout",
      description: "Chiffrement AES-256 de niveau militaire pour toutes les transactions et données",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: CheckCircle,
      title: "Conformité BCEAO",
      description: "Entièrement conforme aux réglementations bancaires d'Afrique Centrale",
      color: "from-[#FF6A00] to-[#FF8533]",
    },
    {
      icon: Award,
      title: "PCI DSS Niveau 1",
      description: "Plus haut niveau des standards de sécurité de l'industrie des cartes de paiement",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Globe,
      title: "Surveillance 24/7",
      description: "Systèmes de détection de fraude et de surveillance sécuritaire en temps réel",
      color: "from-teal-500 to-teal-600",
    },
  ]

  const trustMetrics = [
    { label: "Incidents de Sécurité", value: "0", period: "12 derniers mois" },
    { label: "Disponibilité", value: "99.99%", period: "Disponibilité système" },
    { label: "Score de Conformité", value: "100%", period: "Standards réglementaires" },
    { label: "Confiance Utilisateurs", value: "4.9/5", period: "Note moyenne" },
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

  return (
    <section
      ref={sectionRef}
      id="security"
      className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-[#FF6A00]/10 to-[#FF8533]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FF6A00]/20 to-[#FF8533]/20 px-4 py-2 rounded-full mb-6 border border-[#FF6A00]/30">
            <Shield className="h-4 w-4 text-[#FF6A00]" />
            <span className="text-sm font-medium text-[#FF6A00]">Sécurité Entreprise</span>
          </div>

          <h2 className="text-5xl font-bold text-white mb-6">
            Votre sécurité est notre
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF8533]">
              priorité absolue
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Construit avec des mesures de sécurité avancées et des standards de conformité pour protéger vos
            transactions et données financières
          </p>
        </div>

        {/* Trust Metrics */}
        <div
          className={`grid md:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {trustMetrics.map((metric, index) => (
            <div
              key={index}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-[#FF6A00] font-semibold mb-1">{metric.label}</div>
              <div className="text-sm text-gray-400">{metric.period}</div>
            </div>
          ))}
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon

            return (
              <div
                key={index}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}
                ></div>

                <div className="relative">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Prêt à découvrir la banque sécurisée ?</h3>
            <p className="text-gray-300 mb-6">
              Rejoignez des milliers d'utilisateurs qui font confiance à Tinda pour leur sécurité financière
            </p>
            <button className="bg-gradient-to-r from-[#FF6A00] to-[#FF8533] hover:from-[#e55a00] hover:to-[#e55a00] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              En Savoir Plus Sur Notre Sécurité
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
