"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Award, Trophy, Users, ShieldCheck, Download, ArrowRight, Building2, MapPin, Shirt } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#12161E] text-[#1C2430] dark:text-[#FAF8F5] pt-12 pb-16">
      {/* Header Banner */}
      <section className="py-12 border-b border-[#E4DFD7] dark:border-[#212B3B] text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
              INSTITUTIONAL PROFILE
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-normal text-[#142338] dark:text-[#FAF8F5] mb-4">
              About SGSITS &amp; UDAAN 2026
            </h1>
            <p className="font-sans text-sm md:text-base text-[#64748B] dark:text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
              Shri Govindram Seksaria Institute of Technology and Science (SGSITS), Indore — Celebrating over 70 years of academic leadership, technical innovation, and excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link
                href="/#register"
                className="bg-[#142338] hover:bg-[#0F1B2B] text-white px-6 py-2.5 text-xs font-sans tracking-[0.15em] uppercase border border-transparent transition-colors"
              >
                Register for Ceremony
              </Link>
              <Link
                href="/docs/brochure.pdf"
                download
                className="bg-transparent hover:bg-black/5 text-[#142338] dark:text-white px-6 py-2.5 text-xs font-sans tracking-[0.15em] uppercase border border-[#142338] dark:border-white transition-colors"
              >
                Download Brochure
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="container mx-auto px-4 py-12 max-w-4xl space-y-12">

        {/* Section 1: SGSITS Heritage */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 space-y-4 bg-white dark:bg-[#1C2430] p-8 border border-[#EAE5DC] dark:border-[#212B3B]">
            <span className="text-[10px] font-sans tracking-widest text-[#C5A059] uppercase block">
              ESTABLISHED 1952
            </span>
            <h2 className="font-serif text-2xl text-[#142338] dark:text-white font-normal">
              Shri Govindram Seksaria Institute of Technology and Science
            </h2>
            <p className="font-sans text-xs text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
              Shri Govindram Seksaria Institute of Technology and Science (SGSITS), Indore, is a premier autonomous institute affiliated to Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal, and approved by AICTE, New Delhi.
            </p>
            <p className="font-sans text-xs text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
              Founded in 1952, it is among Central India’s oldest engineering institutions, renowned for technical education, research laboratories, and an extraordinary alumni global footprint.
            </p>
          </div>

          <div className="md:col-span-5 bg-white dark:bg-[#1C2430] p-8 border border-[#EAE5DC] dark:border-[#212B3B] space-y-3">
            <h3 className="font-serif text-lg text-[#142338] dark:text-white font-normal pb-2 border-b border-[#EAE5DC] dark:border-[#212B3B]">
              Key Institutional Status
            </h3>
            <ul className="space-y-2.5 text-xs font-sans text-[#475569] dark:text-[#CBD5E1]">
              <li className="flex items-start gap-2">
                <span className="text-[#C5A059]">•</span>
                <span>Autonomous status granted by UGC &amp; Govt. of M.P.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C5A059]">•</span>
                <span>Approved by AICTE &amp; NBA Accredited Programs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C5A059]">•</span>
                <span>Affiliated to RGPV Bhopal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C5A059]">•</span>
                <span>Premier Technical Rank in Central India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: What is UDAAN */}
        <div className="bg-white dark:bg-[#1C2430] p-8 border border-[#EAE5DC] dark:border-[#212B3B] space-y-6">
          <div>
            <span className="text-[10px] font-sans tracking-widest text-[#C5A059] uppercase block mb-1">
              THE FLAGSHIP CEREMONY
            </span>
            <h2 className="font-serif text-2xl text-[#142338] dark:text-white font-normal mb-3">
              What is UDAAN?
            </h2>
            <p className="font-sans text-xs text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-3">
              <strong>UDAAN</strong> is the flagship Annual Certificate and Gold Medal Distribution Ceremony of SGSITS Indore, honoring graduating scholars and academic achievers in the presence of eminent dignitaries, faculty, and alumni.
            </p>
            <p className="font-sans text-xs text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
              The ceremony recognizes student perseverance and academic distinction across B.Tech, M.Tech, MCA, B.Pharm, and M.Sc. programs by awarding prestigious donor gold medals and merit certificates.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-[#EAE5DC] dark:border-[#212B3B]">
            <div className="p-4 border border-[#EAE5DC] dark:border-[#212B3B] text-center">
              <span className="font-serif text-2xl text-[#142338] dark:text-[#C5A059] block">50+</span>
              <span className="text-[10px] font-sans tracking-widest text-[#64748B] uppercase">Gold Medals</span>
            </div>
            <div className="p-4 border border-[#EAE5DC] dark:border-[#212B3B] text-center">
              <span className="font-serif text-2xl text-[#142338] dark:text-[#C5A059] block">500+</span>
              <span className="text-[10px] font-sans tracking-widest text-[#64748B] uppercase">Merit Awardees</span>
            </div>
            <div className="p-4 border border-[#EAE5DC] dark:border-[#212B3B] text-center">
              <span className="font-serif text-2xl text-[#142338] dark:text-[#C5A059] block">1000+</span>
              <span className="text-[10px] font-sans tracking-widest text-[#64748B] uppercase">Guests &amp; Faculty</span>
            </div>
          </div>
        </div>

        {/* Section 3: Protocol & Dress Code */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-[#1C2430] p-6 border border-[#EAE5DC] dark:border-[#212B3B]">
            <h3 className="font-serif text-lg text-[#142338] dark:text-white font-normal mb-2 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#C5A059]" /> Venue &amp; Location
            </h3>
            <p className="font-sans text-xs text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
              SGSITS Golden Jubilee Auditorium, 23 Sir M. Visvesvaraya Marg, Indore, Madhya Pradesh 452003.
            </p>
            <div className="space-y-1 text-xs font-sans text-[#64748B]">
              <p>• Entry Gates: Gate 1 &amp; Gate 2</p>
              <p>• Reporting: 09:00 AM IST</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1C2430] p-6 border border-[#EAE5DC] dark:border-[#212B3B]">
            <h3 className="font-serif text-lg text-[#142338] dark:text-white font-normal mb-2 flex items-center gap-2">
              <Shirt className="h-4 w-4 text-[#C5A059]" /> Attire Protocol
            </h3>
            <p className="font-sans text-xs text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
              Traditional Indian formal wear is mandatory for receiving certificates and gold medals on stage.
            </p>
            <div className="space-y-1 text-xs font-sans text-[#64748B]">
              <p>• Male: White / Off-white Kurta Pyjama</p>
              <p>• Female: White / Off-white Salwar-Kurta or Saree</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-[#142338] text-white p-8 border border-[#C5A059]/30 space-y-4">
          <h3 className="font-serif text-2xl font-normal">Ready to Join UDAAN 2026?</h3>
          <p className="font-sans text-xs text-[#CBD5E1] max-w-md mx-auto">
            Complete your registration, view official documents, or check the gold medalists directory.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/#documents"
              className="bg-white text-[#142338] px-5 py-2.5 text-xs font-sans tracking-widest uppercase font-semibold"
            >
              View Documents
            </Link>
            <Link
              href="/#medalists"
              className="bg-transparent text-white border border-white px-5 py-2.5 text-xs font-sans tracking-widest uppercase hover:bg-white/10"
            >
              Explore Medalists
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
