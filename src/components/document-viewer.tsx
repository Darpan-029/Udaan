"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FileText, Download, Calendar, Award, Shirt, Info, ExternalLink } from "lucide-react"

interface DocumentItem {
  id: string
  title: string
  subtitle: string
  filename: string
  path: string
  type: string
  size: string
  updated: string
  icon: React.ElementType
  badge: string
  description: string
  highlights: string[]
}

const documents: DocumentItem[] = [
  {
    id: "brochure",
    title: "Official UDAAN 2026 Brochure",
    subtitle: "Complete event guide, Chief Guests & Institute profile",
    filename: "brochure.pdf",
    path: "/docs/brochure.pdf",
    type: "PDF Document",
    size: "2.8 MB",
    updated: "October 2026",
    icon: Award,
    badge: "Official Brochure",
    description: "The official event brochure contains the Director's message, details of gold medal awards, institutional legacy of SGSITS Indore since 1952, and profiles of key dignitaries.",
    highlights: [
      "Director's address and ceremony objective",
      "List of Gold Medal donors and award criteria",
      "Department-wise rank holders and merit lists",
      "Campus layout map and Auditorium entry points"
    ]
  },
  {
    id: "schedule",
    title: "Detailed Ceremony Schedule",
    subtitle: "Minute-by-minute order of events & track breakdown",
    filename: "schedule.pdf",
    path: "/docs/schedule.pdf",
    type: "PDF Document",
    size: "1.4 MB",
    updated: "October 2026",
    icon: Calendar,
    badge: "Event Timeline",
    description: "Comprehensive timeline of the ceremony starting from morning registration and half-jacket distribution to gold medal conferral and high tea.",
    highlights: [
      "09:00 AM - Registration & Jacket Counter Open",
      "10:30 AM - Academic Procession & Chief Guest Arrival",
      "11:15 AM - Gold Medal Distribution Ceremony",
      "01:30 PM - High Tea & Networking at Golden Jubilee Lawn"
    ]
  },
  {
    id: "circular",
    title: "Official Circular & Guidelines",
    subtitle: "Mandatory instructions for awardees & guests",
    filename: "circular.pdf",
    path: "/docs/circular.pdf",
    type: "PDF Document",
    size: "950 KB",
    updated: "September 2026",
    icon: Info,
    badge: "Official Notice",
    description: "Official notification issued by the SGSITS Academic Registrar regarding mandatory pass generation, seating assignments, and entry verification procedures.",
    highlights: [
      "Mandatory digital QR pass verification at main gate",
      "Guest limits: Maximum 2 family members per awardee",
      "Photo ID requirement (Aadhaar / Institute ID)",
      "Late arrival policy and stage entry protocols"
    ]
  },
  {
    id: "dresscode",
    title: "Dress Code & Attire Policy",
    subtitle: "Traditional formal attire requirements for degree conferral",
    filename: "dresscode.docx",
    path: "/docs/dresscode.docx",
    type: "DOCX File",
    size: "520 KB",
    updated: "September 2026",
    icon: Shirt,
    badge: "Attire Guidelines",
    description: "Detailed specification of approved traditional Indian formal wear required for receiving gold medals and merit certificates on stage.",
    highlights: [
      "Male Candidates: White / Off-White Kurta Pyjama",
      "Female Candidates: White / Off-White Salwar Suits or Sarees",
      "Ceremonial Half-Jackets provided at counter upon pass validation",
      "Strict prohibition of casual denim, sneakers, or informal footwear on stage"
    ]
  }
]

export function DocumentViewer() {
  const [activeDocId, setActiveDocId] = React.useState("brochure")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const activeDoc = documents.find((doc) => doc.id === activeDocId) || documents[0]

  return (
    <section id="documents" className="py-16 bg-[#FAF8F5] dark:bg-[#12161E] border-t border-[#E4DFD7] dark:border-[#212B3B]" ref={ref}>
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[11px] font-sans tracking-[0.2em] text-[#C5A059] uppercase block mb-1">
            OFFICIAL PUBLICATIONS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#142338] dark:text-[#FAF8F5] font-normal">
            Brochure &amp; Circular Downloads
          </h2>
          <div className="w-12 h-px bg-[#C5A059] mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Item List */}
          <div className="lg:col-span-5 space-y-2">
            {documents.map((doc) => {
              const isSelected = doc.id === activeDocId
              return (
                <button
                  key={doc.id}
                  onClick={() => setActiveDocId(doc.id)}
                  className={`w-full text-left p-4 border transition-all text-xs font-sans ${
                    isSelected
                      ? "bg-[#142338] text-white border-[#142338] dark:bg-[#1C2430] dark:border-[#C5A059]"
                      : "bg-white dark:bg-[#1C2430] text-[#334155] dark:text-[#CBD5E1] border-[#EAE5DC] dark:border-[#212B3B] hover:border-[#142338]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="uppercase tracking-widest font-semibold text-[10px] opacity-80">
                      {doc.badge}
                    </span>
                    <span className="opacity-60">{doc.size}</span>
                  </div>
                  <h3 className="font-serif text-base font-normal truncate mt-1">{doc.title}</h3>
                  <p className="opacity-75 truncate mt-0.5">{doc.subtitle}</p>
                </button>
              )
            })}
          </div>

          {/* Active Document Details */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeDoc.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-[#1C2430] p-8 border border-[#EAE5DC] dark:border-[#212B3B]"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#EAE5DC] dark:border-[#212B3B] mb-6">
                <div>
                  <span className="text-[10px] font-sans tracking-widest text-[#C5A059] uppercase block">
                    {activeDoc.type} • {activeDoc.updated}
                  </span>
                  <h3 className="font-serif text-2xl text-[#142338] dark:text-[#FAF8F5] mt-1 font-normal">
                    {activeDoc.title}
                  </h3>
                </div>
                <a
                  href={activeDoc.path}
                  download={activeDoc.filename}
                  className="bg-[#142338] hover:bg-[#0F1B2B] text-white px-5 py-2.5 text-xs font-sans tracking-[0.15em] uppercase border border-transparent transition-colors flex items-center space-x-2"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>

              <p className="font-sans text-sm text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
                {activeDoc.description}
              </p>

              <div className="bg-[#FAF8F5] dark:bg-[#12161E] p-5 border border-[#EAE5DC] dark:border-[#212B3B] mb-6">
                <h4 className="font-sans text-xs uppercase tracking-widest text-[#142338] dark:text-[#FAF8F5] font-semibold mb-3 flex items-center gap-2">
                  <Info className="h-3.5 w-3.5 text-[#C5A059]" /> Key Contents
                </h4>
                <ul className="space-y-2 text-xs font-sans text-[#475569] dark:text-[#CBD5E1]">
                  {activeDoc.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#C5A059] mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#EAE5DC] dark:border-[#212B3B] text-xs font-sans text-[#64748B]">
                <span>File: {activeDoc.filename} ({activeDoc.size})</span>
                <a
                  href={activeDoc.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#142338] dark:text-[#C5A059] hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Open Preview</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
