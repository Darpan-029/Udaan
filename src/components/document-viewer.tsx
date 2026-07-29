"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FileText, Download, Eye, Calendar, Award, Shirt, Info, ExternalLink } from "lucide-react"

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
    title: "Official UDAAN 2025 Brochure",
    subtitle: "Complete event guide, Chief Guests & Institute profile",
    filename: "brochure.pdf",
    path: "/docs/brochure.pdf",
    type: "PDF Document",
    size: "2.8 MB",
    updated: "October 2025",
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
    updated: "October 2025",
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
    updated: "September 2025",
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
    updated: "September 2025",
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
    <section id="documents" className="py-20 bg-background border-t border-b" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <FileText className="h-4 w-4" />
            <span>Document Hub</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Brochure & Circular Downloads</h2>
          <p className="text-lg text-muted-foreground">
            Access official ceremony documentation, dress code specifications, minute-by-minute schedule, and guidelines issued by SGSITS Indore.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {documents.map((doc) => {
              const Icon = doc.icon
              const isSelected = doc.id === activeDocId
              return (
                <button
                  key={doc.id}
                  onClick={() => setActiveDocId(doc.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start space-x-4 ${
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary shadow-xl scale-[1.02]"
                      : "bg-card hover:bg-accent border-border hover:border-primary/40 text-foreground"
                  }`}
                >
                  <div className={`p-3 rounded-xl ${isSelected ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        isSelected ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                      }`}>
                        {doc.badge}
                      </span>
                      <span className={`text-xs ${isSelected ? "text-white/80" : "text-muted-foreground"}`}>
                        {doc.size}
                      </span>
                    </div>
                    <h3 className="font-bold text-base truncate">{doc.title}</h3>
                    <p className={`text-xs line-clamp-1 ${isSelected ? "text-white/90" : "text-muted-foreground"}`}>
                      {doc.subtitle}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active Document Reader Preview Box */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeDoc.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-3xl p-8 border shadow-lg h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b mb-6">
                  <div>
                    <div className="inline-flex items-center space-x-2 text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                      <span>{activeDoc.type}</span>
                      <span>•</span>
                      <span>Updated {activeDoc.updated}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{activeDoc.title}</h3>
                  </div>
                  <a
                    href={activeDoc.path}
                    download={activeDoc.filename}
                    className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md transition-all hover:scale-105"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </a>
                </div>

                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {activeDoc.description}
                </p>

                <div className="bg-muted/40 rounded-2xl p-6 mb-6">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-3 flex items-center gap-2">
                    <Info className="h-4 w-4 text-primary" /> Key Highlights & Contents
                  </h4>
                  <ul className="space-y-2">
                    {activeDoc.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t">
                <div className="text-xs text-muted-foreground flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>File name: {activeDoc.filename} ({activeDoc.size})</span>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href={activeDoc.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>Inline Preview</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
