"use client"

import { useState, useEffect, useRef } from "react"
import { UserPlus, CreditCard, Zap, ArrowRight, CheckCircle } from "lucide-react"

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Créez Votre Compte",
      description:
        "Inscrivez-vous avec votre numéro de téléphone et complétez notre processus de vérification sécurisé en moins de 2 minutes.",
      details: ["Vérification téléphonique", "Confirmation d'identité", "Configuration sécurité"],
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "02",
      icon: CreditCard,
      title: "Alimentez Votre Portefeuille",
      description:
        "Ajoutez de l'argent via mobile money, virement bancaire ou dépôt en espèces dans nos points partenaires.",
      details: ["Multiples options de financement", "Dépôts instantanés", "Transactions sécurisées"],
      color: "from-green-500 to-green-600",
    },
    {
      number: "03",
      icon: Zap,
      title: "Commencez à Transiger",
      description:
        "Envoyez de l'argent, payez des factures, achetez du crédit et gérez vos finances en quelques clics.",
      details: ["Transferts instantanés", "Paiement de factures", "Achats de crédit"],
      color: "from-[#FF6A00] to-[#FF8533]",
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
        setActiveStep((prev) => (prev + 1) % steps.length)
      }, 4000)

      return () => clearInterval(interval)
    }
  }, [isVisible, steps.length])

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#FF6A00]/10 to-[#FF8533]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Commencez en
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF8533]">
              trois étapes simples
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Rejoignez des milliers d'utilisateurs qui ont transformé leur expérience financière avec Tinda
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            const isActive = index === activeStep

            return (
              <div
                key={index}
                className={`relative group transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${isActive ? "scale-105" : "hover:scale-105"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-600 to-transparent z-0">
                    <div
                      className={`h-full bg-gradient-to-r from-[#FF6A00] to-[#FF8533] transition-all duration-1000 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </div>
                )}

                <div className="relative z-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#FF6A00] to-[#FF8533] rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mx-auto`}
                    >
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-6">
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>

                    {/* Details */}
                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center justify-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-400">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex justify-center">
                      <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-[#FF6A00] to-[#FF8533] transition-all duration-1000 ${
                            isActive ? "w-full" : "w-0"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <button className="group inline-flex items-center space-x-3 bg-gradient-to-r from-[#FF6A00] to-[#FF8533] hover:from-[#e55a00] hover:to-[#e55a00] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span>Commencez Votre Parcours Aujourd'hui</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
