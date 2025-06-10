"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Footer() {
  const [email, setEmail] = useState("")

  const quickLinks = [
    { href: "#features", label: "Fonctionnalités" },
    { href: "#how-it-works", label: "Comment ça marche" },
    { href: "#security", label: "Sécurité" },
    { href: "#pricing", label: "Tarifs" },
  ]

  const legalLinks = [
    { href: "/privacy", label: "Politique de Confidentialité" },
    { href: "/terms", label: "Conditions d'Utilisation" },
    { href: "/security", label: "Politique de Sécurité" },
    { href: "/compliance", label: "Conformité" },
  ]

  const supportLinks = [
    { href: "/help", label: "Centre d'Aide" },
    { href: "/contact", label: "Contacter le Support" },
    { href: "/status", label: "État du Système" },
    { href: "/developers", label: "API Développeurs" },
  ]

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF6A00] to-[#FF8533]"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-[#FF6A00]/5 to-[#FF8533]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Restez informé avec Tinda</h3>
              <p className="text-gray-300">
                Recevez les dernières mises à jour sur les nouvelles fonctionnalités, améliorations de sécurité et
                conseils financiers directement dans votre boîte mail.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Entrez votre adresse email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent"
                required
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#FF6A00] to-[#FF8533] hover:from-[#e55a00] hover:to-[#e55a00] px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/tinda-logo.png"
                alt="Tinda - Paiement Mobile"
                width={150}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              La solution de paiement mobile et transfert d'argent leader en RD Congo. Rendant les transactions
              financières simples, rapides et sécurisées pour tous, avec la fonctionnalité Moziki intégrée.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[#FF6A00] flex-shrink-0" />
                <span className="text-sm text-gray-400">Kinshasa, RD Congo</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#FF6A00] flex-shrink-0" />
                <span className="text-sm text-gray-400">+243 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#FF6A00] flex-shrink-0" />
                <a
                  href="mailto:bonjour@tinda.cd"
                  className="text-sm text-gray-400 hover:text-[#FF6A00] transition-colors"
                >
                  bonjour@tinda.cd
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#FF6A00] transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#FF6A00] transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6">Légal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#FF6A00] transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Press Contact */}
            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <h4 className="font-semibold mb-2">Demandes Presse</h4>
              <a
                href="mailto:presse@tinda.cd"
                className="text-[#FF6A00] hover:text-[#FF8533] transition-colors text-sm"
              >
                presse@tinda.cd
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Tinda. Tous droits réservés.</p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Licencié par BCC</span>
              <span>•</span>
              <span>Certifié ISO 27001</span>
              <span>•</span>
              <span>Conforme BCEAO</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-[#FF6A00] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
              <Twitter className="h-5 w-5 text-gray-400 group-hover:text-white" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-[#FF6A00] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-[#FF6A00] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
              <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
