"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Award, BookOpen, Calendar, MapPin, Trophy, Users, ShieldCheck, Download, ArrowRight, Sparkles, Building2, CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-primary/10 via-background to-background border-b">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex flex-col items-center justify-center"
            >
              <div className="p-3 bg-white dark:bg-card rounded-2xl shadow-lg border border-border mb-3 inline-block">
                <img
                  src="/images/sgsits_logo.png"
                  alt="SGSITS Indore Logo"
                  className="h-20 w-auto object-contain"
                />
              </div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
                <Sparkles className="h-4 w-4" />
                <span>Official Institutional Profile</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
            >
              About SGSITS &amp; UDAAN
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed mb-8"
            >
              Shri Govindram Seksaria Institute of Technology and Science (SGSITS), Indore — Celebrating 70+ years of academic pioneering, innovation, and institutional excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/#register"
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                <span>Register for Ceremony</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/docs/brochure.pdf"
                download
                className="inline-flex items-center space-x-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-secondary/80 transition-all"
              >
                <Download className="h-4 w-4" />
                <span>Download Brochure</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Section 1: SGSITS Heritage */}
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 text-primary font-bold text-sm uppercase tracking-wider">
                <Building2 className="h-4 w-4" />
                <span>Established 1952</span>
              </div>
              <h2 className="text-3xl font-bold">Shri Govindram Seksaria Institute of Technology and Science</h2>
              <p className="text-muted-foreground leading-relaxed">
                Shri Govindram Seksaria Institute of Technology and Science (SGSITS), Indore, is a premier autonomous institute affiliated to Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal, and approved by AICTE, New Delhi.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 1952, it is among Central India’s oldest and most renowned engineering institutions, famous for robust technical education, state-of-the-art research laboratories, and an extraordinary alumni global footprint.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-card border">
                  <div className="text-2xl font-bold text-primary">70+ Years</div>
                  <div className="text-xs text-muted-foreground">Legacy of Educational Excellence</div>
                </div>
                <div className="p-4 rounded-2xl bg-card border">
                  <div className="text-2xl font-bold text-amber-500">Tier-1</div>
                  <div className="text-xs text-muted-foreground">Autonomous Technical Status</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-gradient-to-br from-amber-500/10 to-primary/10 rounded-3xl p-8 border shadow-inner">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" /> Key Accreditation & Status
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Autonomous status granted by UGC & Govt. of Madhya Pradesh</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Approved by AICTE & NBA Accredited Engineering Programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Affiliated to Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Top Ranking Institution in NIRF & Central India Region</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2: What is UDAAN */}
          <div className="bg-card rounded-3xl p-8 md:p-12 border shadow-lg space-y-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 text-amber-500 font-bold text-sm uppercase tracking-wider mb-2">
                <Trophy className="h-4 w-4" />
                <span>The Flagship Ceremony</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">What is UDAAN?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                <strong>UDAAN</strong> is the flagship Annual Certificate and Gold Medal Distribution Ceremony of SGSITS Indore, honoring graduating students and outstanding academic achievers in the presence of eminent guests, faculty, and alumni.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The event celebrates student perseverance, research innovation, and academic distinction across B.Tech, M.Tech, MCA, B.Pharm, and M.Sc. programs. During Udaan, prestigious donor gold medals and merit certificates are awarded to top departmental rank holders.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-4 border-t">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base">50+ Gold Medals</h4>
                  <p className="text-xs text-muted-foreground">Endowed by alumni & industry leaders</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base">500+ Merit Awardees</h4>
                  <p className="text-xs text-muted-foreground">Certificates of distinction for graduates</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base">1000+ Dignitaries</h4>
                  <p className="text-xs text-muted-foreground">Eminent chief guests & family members</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Dress Code & Ceremony Protocol */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-3xl p-8 border shadow-sm space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" /> Venue & Ceremony Location
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The ceremony is conducted live at the grand <strong>SGSITS Golden Jubilee Auditorium</strong> inside the main institute campus, 23 Sir M. Visvesvaraya Marg, Indore, Madhya Pradesh.
              </p>
              <div className="bg-muted/40 p-4 rounded-2xl space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Auditorium Entry:</span>
                  <span className="font-semibold">Gate 1 &amp; Gate 2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reporting Time:</span>
                  <span className="font-semibold">09:00 AM Sharp</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pass Verification:</span>
                  <span className="font-semibold">Digital QR Entry Pass Required</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-8 border shadow-sm space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-amber-500" /> Mandatory Dress Code
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To maintain traditional decorum and institutional pride, all graduating awardees receiving certificates or gold medals must adhere strictly to the traditional attire protocol.
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <span className="font-bold text-amber-600 dark:text-amber-400 block mb-1">Male Candidates:</span>
                  White or Off-White Kurta Pyjama with ceremonial half-jacket provided at registration counter.
                </div>
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <span className="font-bold text-primary block mb-1">Female Candidates:</span>
                  White or Off-White Salwar Kurta or Saree with ceremonial half-jacket provided at registration counter.
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Footer Box */}
          <div className="text-center bg-gradient-to-r from-primary to-purple-600 text-white rounded-3xl p-10 shadow-xl space-y-4">
            <h3 className="text-3xl font-extrabold">Ready to Join UDAAN 2025?</h3>
            <p className="max-w-xl mx-auto text-white/90 text-sm">
              Generate your digital entry pass, view the complete awardee list, or download official circulars directly from our portal.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/#documents"
                className="bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-md"
              >
                View Documents Hub
              </Link>
              <Link
                href="/#medalists"
                className="bg-white/20 hover:bg-white/30 text-white border border-white/40 px-6 py-3 rounded-xl font-bold transition-all"
              >
                Explore Gold Medalists
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
