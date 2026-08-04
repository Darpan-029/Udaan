"use client"

import * as React from "react"
import { FileText, Download, Shirt, Info, ExternalLink } from "lucide-react"
import { Reveal } from "@/components/reveal"

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
    id: "circular",
    title: "Official Circular & Guidelines",
    subtitle: "Mandatory instructions for awardees & guests — 2026 Batch",
    filename: "Circular For 2026 Batch.pdf",
    path: "/docs/Circular For 2026 Batch.pdf",
    type: "PDF Document",
    size: "175 KB",
    updated: "August 2026",
    icon: Info,
    badge: "Official Circular",
    description: "Official notification issued by the SGSITS Dean (Academic & Research) regarding mandatory registration for the उड़ान 2026 Academic Award Ceremony. All students of the 2026 batch are required to complete registration by 10:00 PM, 15th August 2026.",
    highlights: [
      "Registration deadline: 10:00 PM, 15th August 2026",
      "Registration link provided via QR code",
      "Issued by DEAN (ARS) — SGSITS, Indore",
      "Mandatory for all 2026 batch awardees"
    ]
  },
  {
    id: "dresscode",
    title: "Dress Code & Attire Policy",
    subtitle: "Traditional formal attire requirements for degree conferral",
    filename: "dresscode.docx",
    path: "/docs/dresscode.docx",
    type: "DOCX File",
    size: "1 KB",
    updated: "August 2026",
    icon: Shirt,
    badge: "Attire Guidelines",
    description: "Detailed specification of approved traditional Indian formal wear required for receiving certificates and awards on stage at the उड़ान 2026 Academic Award Ceremony.",
    highlights: [
      "Male Candidates: White / Off-White Kurta Pyjama",
      "Female Candidates: White / Off-White Salwar Suits or Sarees",
      "Ceremonial Half-Jackets provided at counter upon pass validation",
      "Strict prohibition of casual denim, sneakers, or informal footwear on stage"
    ]
  }
]

export function DocumentViewer() {
  const [activeDocId, setActiveDocId] = React.useState("circular")

  const activeDoc = documents.find((doc) => doc.id === activeDocId) || documents[0]

  return (
    <section id="documents" className="py-16 bg-background border-t border-border-strong">
      <div className="mx-auto px-4 max-w-5xl">
        <Reveal className="text-center mb-12">
          <span className="text-[11px] font-sans tracking-[0.2em] text-accent uppercase block mb-1">
            OFFICIAL PUBLICATIONS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-normal">
            Brochure &amp; Circular Downloads
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Item List */}
          <div className="lg:col-span-5 space-y-3">
            {documents.map((doc) => {
              const isSelected = doc.id === activeDocId
              return (
                <button
                  key={doc.id}
                  onClick={() => setActiveDocId(doc.id)}
                  aria-pressed={isSelected}
                  className={`w-full text-left p-4 border transition-all text-xs font-sans rounded-xl card-pop focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    isSelected
                      ? "bg-primary text-white border-primary shadow-md dark:bg-[#0D1527] dark:border-accent"
                      : "bg-card text-body border-border hover:border-accent/60"
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
            <div key={activeDoc.id} className="bg-card dark:bg-[#0D1527] p-5 md:p-6 border border-border dark:border-slate-800 rounded-2xl shadow-lg card-pop">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border dark:border-slate-800 mb-4">
                <div>
                  <span className="text-[10px] font-sans tracking-widest text-accent uppercase block font-semibold">
                    {activeDoc.type} • {activeDoc.updated}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mt-0.5 font-normal">
                    {activeDoc.title}
                  </h3>
                </div>
                <a
                  href={activeDoc.path}
                  download={activeDoc.filename}
                  className="bg-primary hover:bg-primary-hover text-white px-4 py-2 text-xs font-sans tracking-[0.12em] uppercase transition-all rounded-xl flex items-center space-x-2 shadow-sm font-semibold hover:scale-105"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download {activeDoc.type.includes("PDF") ? "PDF" : "DOCX"}</span>
                </a>
              </div>

              <p className="font-sans text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
                {activeDoc.description}
              </p>

              <div className="bg-background dark:bg-slate-900/80 p-3.5 border border-border dark:border-slate-800 rounded-xl mb-4">
                <h4 className="font-sans text-[11px] uppercase tracking-widest text-foreground font-semibold mb-2 flex items-center gap-1.5">
                  <Info className="h-3.5 w-3.5 text-accent" /> Key Contents
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2 text-xs font-sans text-muted-foreground">
                  {activeDoc.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-accent font-bold">•</span>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border dark:border-slate-800 text-[11px] font-sans text-muted-foreground">
                <span>File: {activeDoc.filename} ({activeDoc.size})</span>
                <a
                  href={activeDoc.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground dark:text-accent hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Open Preview</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
