"use client"

import { useState, useEffect, useRef } from "react"
import { TrendingUp, Users, Shield, Zap } from "lucide-react"

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ users: 0, transactions: 0, uptime: 0, countries: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  const stats = [
    {
      icon: Users,
      label: "Utilisateurs Actifs",
      value: 50000,
      suffix: "+",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      label: "Transactions Mensuelles",
      value: 2500000,
      prefix: "₣",
      suffix: "M",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Shield,
      label: "Disponibilité Sécurité",
      value: 99.9,
      suffix: "%",
      color: "from-[#FF6A00] to-[#FF8533]",
    },
    {
      icon: Zap,
      label: "Vitesse Moy. Transaction",
      value: 3,
      suffix: "s",
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
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      stats.forEach((stat, index) => {
        let currentStep = 0
        const increment = stat.value / steps

        const timer = setInterval(() => {
          currentStep++
          const currentValue = Math.min(increment * currentStep, stat.value)

          setCounts((prev) => ({
            ...prev,
            [index === 0 ? "users" : index === 1 ? "transactions" : index === 2 ? "uptime" : "countries"]: currentValue,
          }))

          if (currentStep >= steps) {
            clearInterval(timer)
          }
        }, stepDuration)
      })
    }
  }, [isVisible])

  const formatValue = (value: number, stat: any) => {
    if (stat.suffix === "M") {
      return (value / 1000000).toFixed(1)
    }
    if (stat.suffix === "%") {
      return value.toFixed(1)
    }
    return Math.floor(value).toLocaleString()
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#FF6A00]/10 to-[#FF8533]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Approuvé par des Milliers</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Rejoignez la communauté grandissante d'utilisateurs qui font confiance à Tinda pour leurs besoins financiers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            const currentValue = Object.values(counts)[index]

            return (
              <div
                key={index}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}
                ></div>

                <div className="relative">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      {stat.prefix}
                      {formatValue(currentValue, stat)}
                      {stat.suffix}
                    </span>
                  </div>

                  <p className="text-gray-300 font-medium">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
