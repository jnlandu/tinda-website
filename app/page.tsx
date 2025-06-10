import type { Metadata } from "next"
import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import TrustSecurity from "@/components/trust-security"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import CTABanner from "@/components/cta-banner"
import StickyNav from "@/components/sticky-nav"
import Footer from "@/components/footer"
import Stats from "@/components/stats"
import LoadingScreen from "@/components/loading-screen"
import AppShowcase from "@/components/app-showcase"
import Moziki from "@/components/moziki"

export const metadata: Metadata = {
  title: "Tinda | Paiement Mobile et Transfert d'Argent en RD Congo",
  description:
    "Solution de paiement mobile et transfert d'argent pour la RD Congo. Sécurisée, rapide et fiable, avec fonctionnalité Moziki intégrée.",
  keywords: "paiement mobile, transfert d'argent, RD Congo, fintech, Moziki, Tontines, portefeuille mobile",
  openGraph: {
    title: "Tinda | Paiement Mobile et Transfert d'Argent en RD Congo",
    description:
      "Solution de paiement mobile et transfert d'argent pour la RD Congo. Sécurisée, rapide et fiable, avec fonctionnalité Moziki intégrée.",
    type: "website",
    locale: "fr_CD",
  },
}

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen overflow-hidden">
        <StickyNav />
        <Hero />
        <Stats />
        <AppShowcase />
        <Features />
        <Moziki />
        <HowItWorks />
        <TrustSecurity />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTABanner />
        <Footer />
      </main>
    </>
  )
}
