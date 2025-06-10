"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Crown } from "lucide-react"

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false)
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const sectionRef = useRef<HTMLDivElement>(null)

  const plans = [
    {
      name: "Personnel",
      price: { monthly: 0, yearly: 0 },
      originalPrice: { monthly: 0, yearly: 0 },
      description: "Parfait pour la gestion financière personnelle",
      icon: Star,
      features: [
        "Envoi et réception d'argent instantané",
        "Paiements par code QR",
        "Recharge crédit pour tous les réseaux",
        "Historique des transactions de base",
        "Support client",
        "Accès à l'application mobile",
        "Fonctionnalités de sécurité de base",
      ],
      isPopular: false,
      color: "from-blue-500 to-blue-600",
      buttonText: "Commencer Gratuitement",
    },
    {
      name: "Entreprise",
      price: { monthly: 9000, yearly: 90000 },
      originalPrice: { monthly: 12000, yearly: 120000 },
      description: "Fonctionnalités avancées pour les entreprises en croissance",
      icon: Crown,
      features: [
        "Tout dans Personnel",
        "Tableau de bord analytique avancé",
        "Limites de transaction plus élevées",
        "Support client prioritaire",
        "Comptes d'entreprise multi-utilisateurs",
        "Codes QR personnalisés avec branding",
        "Traitement de paiements en lot",
        "Accès API pour intégrations",
        "Rapports financiers mensuels",
        "Gestionnaire de compte dédié",
      ],
      isPopular: true,
      color: "from-[#FF6A00] to-[#FF8533]",
      buttonText: "Essai Entreprise Gratuit",
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

  const formatPrice = (price: number) => {
    return price.toLocaleString("fr-CD")
  }

  const getSavings = (plan: any) => {
    const monthlyCost = plan.price.monthly * 12
    const yearlyCost = plan.price.yearly
    const savings = monthlyCost - yearlyCost
    return savings > 0 ? savings : 0
  }

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-[#FF6A00]/5 to-[#FF8533]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Tarification simple et transparente
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF8533]">
              pour tous
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Choisissez le plan qui correspond à vos besoins. Changez de plan à tout moment.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-2xl p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                billingCycle === "monthly" ? "bg-white text-gray-900 shadow-md" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                billingCycle === "yearly" ? "bg-white text-gray-900 shadow-md" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Annuel
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-[#FF6A00] to-[#FF8533] text-white text-xs px-2 py-1 rounded-full">
                Économisez 25%
              </span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            const currentPrice = plan.price[billingCycle]
            const originalPrice = plan.originalPrice[billingCycle]
            const savings = billingCycle === "yearly" ? getSavings(plan) : 0

            return (
              <Card
                key={index}
                className={`relative border-2 shadow-xl rounded-3xl overflow-hidden transition-all duration-700 hover:scale-105 ${
                  plan.isPopular ? "border-[#FF6A00] shadow-2xl" : "border-gray-200 hover:border-gray-300"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-[#FF6A00] to-[#FF8533] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      <Zap className="inline h-4 w-4 mr-1" />
                      Plus Populaire
                    </div>
                  </div>
                )}

                {/* Header */}
                <CardHeader
                  className={`text-center pb-8 ${plan.isPopular ? "bg-gradient-to-r from-[#FF6A00]/5 to-[#FF8533]/5" : "bg-gray-50"}`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>

                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      {originalPrice > currentPrice && (
                        <span className="text-lg text-gray-400 line-through">{formatPrice(originalPrice)} F</span>
                      )}
                      <span className="text-4xl font-bold text-gray-900">{formatPrice(currentPrice)} F</span>
                    </div>
                    <span className="text-gray-600">/{billingCycle === "monthly" ? "mois" : "an"}</span>
                    {savings > 0 && (
                      <div className="text-sm text-green-600 font-semibold mt-1">
                        Économisez {formatPrice(savings)} F par an
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>

                <CardContent className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                      plan.isPopular
                        ? "bg-gradient-to-r from-[#FF6A00] to-[#FF8533] hover:from-[#e55a00] hover:to-[#e55a00] text-white"
                        : "bg-white border-2 border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00] hover:text-white"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>

                  {plan.isPopular && (
                    <p className="text-center text-sm text-gray-500 mt-4">
                      Essai gratuit de 14 jours • Aucune carte de crédit requise
                    </p>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Info */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Besoin d'une solution personnalisée ?</h3>
            <p className="text-gray-600 mb-6">
              Nous offrons des solutions d'entreprise pour les grandes organisations avec des fonctionnalités
              personnalisées, un support dédié et une tarification flexible.
            </p>
            <Button
              variant="outline"
              className="border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00] hover:text-white px-8 py-3 rounded-xl font-semibold"
            >
              Contacter l'Équipe Commerciale
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
