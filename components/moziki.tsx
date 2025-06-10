"use client"

import React from "react"
import { useState, useEffect, useRef } from "react"
import { Users, PiggyBank, Calendar, ArrowRight, Plus, CheckCircle, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Moziki() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const mozikiTabs = [
    {
      title: "Créer un Moziki",
      icon: Users,
      content:
        "Créez facilement un groupe Moziki et invitez vos amis, famille ou collègues à rejoindre votre cercle d'épargne.",
      features: [
        "Invitation par numéro de téléphone",
        "Paramètres personnalisables",
        "Jusqu'à 50 membres par groupe",
        "Règles de contribution flexibles",
      ],
    },
    {
      title: "Gérer les Contributions",
      icon: PiggyBank,
      content:
        "Définissez le montant et la fréquence des contributions. Chaque membre reçoit une notification quand c'est son tour de recevoir les fonds.",
      features: [
        "Contributions automatiques",
        "Rappels programmés",
        "Suivi des paiements en temps réel",
        "Historique complet des transactions",
      ],
    },
    {
      title: "Planifier les Tours",
      icon: Calendar,
      content:
        "Organisez facilement l'ordre de distribution des fonds. Le système gère automatiquement les rotations et les notifications.",
      features: [
        "Calendrier de distribution",
        "Rotation automatique",
        "Notifications de paiement",
        "Ajustements flexibles",
      ],
    },
    {
      title: "Suivre la Croissance",
      icon: TrendingUp,
      content:
        "Visualisez la croissance de votre épargne et l'impact du Moziki sur vos finances personnelles au fil du temps.",
      features: [
        "Tableaux de progression",
        "Statistiques d'épargne",
        "Projections financières",
        "Rapports téléchargeables",
      ],
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
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % mozikiTabs.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isVisible, mozikiTabs.length])

  return (
    <section
      id="moziki"
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
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FF6A00]/10 to-[#FF8533]/10 px-4 py-2 rounded-full mb-6 border border-[#FF6A00]/20">
            <Users className="h-4 w-4 text-[#FF6A00]" />
            <span className="text-sm font-medium text-gray-700">Fonctionnalité Exclusive</span>
          </div>

          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Moziki
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF8533]">
              Tontines Digitales
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre système de tontines digitales (Moziki) qui vous permet d'épargner collectivement avec vos
            proches, tout en respectant les traditions congolaises.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Tabs */}
          <div
            className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {mozikiTabs.map((tab, index) => {
              const IconComponent = tab.icon
              const isActive = index === activeTab

              return (
                <div
                  key={index}
                  className={`cursor-pointer transition-all duration-500 ${isActive ? "scale-105" : "hover:scale-102"}`}
                  onClick={() => setActiveTab(index)}
                >
                  <Card
                    className={`border ${isActive ? "border-[#FF6A00] shadow-lg" : "border-gray-200"} hover:border-[#FF6A00]/50 transition-all duration-300`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isActive ? "bg-gradient-to-r from-[#FF6A00] to-[#FF8533]" : "bg-gray-100"
                          }`}
                        >
                          <IconComponent className={`h-6 w-6 ${isActive ? "text-white" : "text-gray-600"}`} />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900">{tab.title}</h3>
                          <p className="text-gray-600 line-clamp-1">{tab.content}</p>
                        </div>

                        <ArrowRight
                          className={`h-5 w-5 transition-all duration-300 ${
                            isActive ? "text-[#FF6A00] translate-x-1" : "text-gray-400"
                          }`}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}

            <div className="pt-6">
              <Button className="group bg-gradient-to-r from-[#FF6A00] to-[#FF8533] hover:from-[#e55a00] hover:to-[#e55a00] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Plus className="mr-2 h-5 w-5" />
                Créer Votre Moziki
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF6A00] to-[#FF8533] rounded-2xl flex items-center justify-center shadow-lg">
                  {React.createElement(mozikiTabs[activeTab].icon, { className: "h-8 w-8 text-white" })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{mozikiTabs[activeTab].title}</h3>
              </div>

              <p className="text-gray-600 mb-8 text-lg leading-relaxed">{mozikiTabs[activeTab].content}</p>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Fonctionnalités:</h4>
                <ul className="space-y-3">
                  {mozikiTabs[activeTab].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Tradition congolaise, expérience moderne</p>
                  </div>
                  <div className="flex space-x-2">
                    {mozikiTabs.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === activeTab ? "bg-[#FF6A00] w-6" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Illustration */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 flex justify-center items-center">
              <div className="relative">
                <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-48 h-48 bg-gradient-to-r from-[#FF6A00]/10 to-[#FF8533]/10 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-[#FF6A00] to-[#FF8533] rounded-full flex items-center justify-center text-white text-4xl font-bold">
                        Moziki
                      </div>
                    </div>

                    {/* Orbiting Members */}
                    <div className="absolute w-full h-full animate-spin" style={{ animationDuration: "15s" }}>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                          👨🏾
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute w-full h-full animate-spin"
                      style={{ animationDuration: "20s", animationDirection: "reverse" }}
                    >
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                          👩🏾
                        </div>
                      </div>
                    </div>

                    <div className="absolute w-full h-full animate-spin" style={{ animationDuration: "18s" }}>
                      <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">
                          👨🏾‍🦱
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute w-full h-full animate-spin"
                      style={{ animationDuration: "25s", animationDirection: "reverse" }}
                    >
                      <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs">
                          👩🏾‍🦱
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div
          className={`mt-20 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gradient-to-r from-[#FF6A00]/5 to-[#FF8533]/5 rounded-3xl p-8 border border-[#FF6A00]/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-gradient-to-r from-[#FF6A00] to-[#FF8533] rounded-full flex items-center justify-center text-4xl">
                👩🏾‍🦱
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-lg italic mb-4">
                  "Grâce au Moziki de Tinda, notre association de femmes commerçantes a pu économiser collectivement et
                  financer nos projets. C'est notre tradition de tontine, mais avec la sécurité et la simplicité de la
                  technologie moderne!"
                </p>
                <p className="font-semibold text-gray-900">Maman Jeannette</p>
                <p className="text-sm text-gray-500">
                  Présidente de l'Association des Commerçantes, Marché Central de Kinshasa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
