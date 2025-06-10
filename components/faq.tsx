"use client"

import { useState, useEffect, useRef } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const faqs = [
    {
      question: "Quelle est la sécurité de Tinda par rapport aux autres services de paiement mobile ?",
      answer:
        "Tinda utilise les standards de sécurité les plus élevés, incluant la certification ISO 27001, le chiffrement AES-256 et l'authentification multi-facteurs. Notre infrastructure de sécurité est surveillée en continu 24/7 et nous maintenons une disponibilité de 99.99% avec zéro incident de sécurité ces 12 derniers mois.",
    },
    {
      question: "Comment fonctionne le système Moziki (tontines) sur Tinda ?",
      answer:
        "Le système Moziki de Tinda permet de créer des groupes d'épargne traditionnels digitalisés. Vous pouvez inviter des membres, définir les montants de contribution, établir un calendrier de distribution, et le système gère automatiquement les paiements, les notifications et le suivi. C'est notre façon de préserver la tradition congolaise des tontines tout en la rendant plus accessible et sécurisée.",
    },
    {
      question: "Quels sont les frais de transaction et les limites ?",
      answer:
        "Les comptes personnels bénéficient de tarifs compétitifs avec une tarification transparente : transferts domestiques (500-2 000 F), paiements QR (gratuits pour les montants sous 50 000 F), et recharges crédit (200 F forfaitaires). Les comptes entreprise obtiennent des tarifs réduits et des limites plus élevées. Les limites quotidiennes sont de 500 000 F pour Personnel et 2 000 000 F pour Entreprise.",
    },
    {
      question: "À quelle vitesse les transactions sont-elles traitées ?",
      answer:
        "La plupart des transactions sont traitées instantanément (moins de 3 secondes). Les virements vers des comptes bancaires peuvent prendre 1-2 jours ouvrables selon l'institution réceptrice. Notre infrastructure de traitement avancée garantit que 99.9% des transactions sont complétées dans nos délais promis.",
    },
    {
      question: "Puis-je lier mes comptes bancaires existants et mobile money ?",
      answer:
        "Oui, Tinda s'intègre parfaitement avec toutes les grandes banques en RD Congo et les fournisseurs de mobile money incluant Orange Money, Airtel Money, et Vodacom M-Pesa. Vous pouvez lier plusieurs comptes et choisir votre source de financement préférée pour chaque transaction.",
    },
    {
      question: "Que se passe-t-il si je perds mon téléphone ou oublie mon PIN ?",
      answer:
        "Votre compte reste sécurisé avec notre protection multicouche. Vous pouvez récupérer l'accès via notre processus de vérification sécurisé en utilisant votre numéro de téléphone enregistré, email, ou en visitant l'un de nos points partenaires avec une pièce d'identité valide. L'authentification biométrique ajoute une couche de sécurité supplémentaire.",
    },
    {
      question: "Y a-t-il un support client disponible en langues locales ?",
      answer:
        "Notre équipe de support client est disponible 24/7 en français, lingala, swahili et kikongo. Vous pouvez nous joindre via la fonction chat de l'application, téléphone, email, ou visiter nos centres de support dans les grandes villes à travers la RD Congo.",
    },
    {
      question: "Les entreprises peuvent-elles intégrer Tinda dans leurs systèmes existants ?",
      answer:
        "Oui, nous offrons des API et SDK complets pour que les entreprises intègrent les paiements Tinda dans leurs sites web, applications mobiles et systèmes de point de vente. Notre plan Entreprise inclut un support technique dédié et de la documentation pour assurer une intégration fluide.",
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

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#FF6A00]/10 to-[#FF8533]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FF6A00]/20 to-[#FF8533]/20 px-4 py-2 rounded-full mb-6 border border-[#FF6A00]/30">
            <HelpCircle className="h-4 w-4 text-[#FF6A00]" />
            <span className="text-sm font-medium text-[#FF6A00]">Questions Fréquemment Posées</span>
          </div>

          <h2 className="text-5xl font-bold text-white mb-6">
            Des questions ?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF8533]">
              Nous avons les réponses
            </span>
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed">
            Tout ce que vous devez savoir sur Tinda et comment ça fonctionne
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 hover:bg-white/10 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-white hover:text-[#FF6A00] transition-colors py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pt-2 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Support */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Vous avez encore des questions ?</h3>
            <p className="text-gray-300 mb-6">
              Notre équipe de support est disponible 24/7 pour vous aider avec toutes vos questions ou préoccupations
            </p>
            <button className="bg-gradient-to-r from-[#FF6A00] to-[#FF8533] hover:from-[#e55a00] hover:to-[#e55a00] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Contacter le Support
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
