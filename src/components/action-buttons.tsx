"use client"

import * as React from "react"
import { Clock, UserCheck, FileText, X, ExternalLink } from "lucide-react"
import { TimelineModal } from "@/components/timeline-modal"
import { Reveal } from "@/components/reveal"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

const registrationFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSe8TeeVoAveBtiZdZLuZ6Ep6YqbmiQltxQUBG0eAK1yqaF7jQ/viewform"
const whatsappGroupUrl = "https://chat.whatsapp.com/HWvvBf4oraHDfnleGcEe86"
const circularPath = "/docs/Circular For 2026 Batch.pdf"

import { PdfViewerFrame } from "@/components/pdf-viewer-frame"

// Brochure / circular modal
function BrochureModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  React.useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = "hidden"
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-background dark:bg-[#0D1527] border border-border dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border dark:border-slate-800 bg-card/60 dark:bg-slate-900/60">
          <div>
            <span className="text-[11px] font-sans tracking-[0.2em] text-accent uppercase block font-semibold">
              OFFICIAL CIRCULAR
            </span>
            <h2 className="font-serif text-xl md:text-2xl text-foreground font-normal mt-0.5">
              उड़ान 2026 — Circular &amp; Guidelines
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={circularPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 text-xs font-sans tracking-wider uppercase rounded-lg shadow-sm transition-all font-semibold"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Open PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50 transition-colors"
              aria-label="Close brochure modal"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden min-h-[60vh]">
          <PdfViewerFrame
            src={circularPath}
            title="UDAAN 2026 Official Circular"
            filename="Circular For 2026 Batch.pdf"
          />
        </div>
      </div>
    </div>
  )
}

export function ActionButtons() {
  const [isTimelineOpen, setIsTimelineOpen] = React.useState(false)
  const [isBrochureOpen, setIsBrochureOpen] = React.useState(false)

  return (
    <section
      id="actions"
      className="relative pt-6 pb-14 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0F1C30 0%, #122137 35%, #162842 65%, hsl(36 30% 96%) 100%)",
      }}
    >
      {/* Decorative golden ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 35%, rgba(255, 215, 0, 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto px-4 max-w-4xl relative z-10">
        <Reveal className="text-center mb-4">
          <span
            className="text-[10px] font-sans tracking-[0.3em] uppercase block mb-1 font-semibold"
            style={{ color: "hsl(39 65% 68%)" }}
          >
            QUICK ACTIONS
          </span>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5">

            {/* ── Program Timeline ── */}
            <button
              id="action-program-timeline"
              onClick={() => setIsTimelineOpen(true)}
              className="group relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border transition-all duration-300 text-left overflow-hidden"
              style={{
                background: "hsl(39 55% 52% / 0.08)",
                borderColor: "hsl(39 55% 52% / 0.35)",
              }}
            >
              {/* Hover fill */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(39 58% 52%) 0%, hsl(39 65% 60%) 100%)",
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div
                  className="p-2 rounded-xl transition-colors duration-300"
                  style={{ background: "hsl(39 55% 52% / 0.15)" }}
                >
                  <Clock
                    className="h-5 w-5 transition-transform group-hover:scale-110 duration-300"
                    style={{ color: "hsl(39 65% 68%)" }}
                  />
                </div>
                <div className="text-center">
                  <span
                    className="block font-sans font-bold text-xs tracking-wider uppercase group-hover:text-slate-950 transition-colors"
                    style={{ color: "hsl(39 65% 72%)" }}
                  >
                    Program Timeline
                  </span>
                  <span className="block text-[10px] font-sans text-white/50 group-hover:text-slate-950/70 transition-colors">
                    Minute-to-Minute Schedule
                  </span>
                </div>
              </div>
            </button>

            {/* ── Register Now ── */}
            <a
              id="action-register"
              href={registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border transition-all duration-300 overflow-hidden"
              style={{
                background: "rgba(247, 212, 99, 0.12)",
                borderColor: "rgba(247, 212, 99, 0.5)",
                boxShadow: "0 0 20px rgba(247, 212, 99, 0.15)",
              }}
            >
              {/* Hover fill */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, #F5CE56 0%, #E5BA38 100%)",
                }}
              />
              {/* OPEN badge */}
              <div
                className="absolute top-3 right-3 text-[9px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded-full border border-amber-300/40 bg-amber-400/20 text-amber-200 group-hover:bg-slate-950 group-hover:text-amber-300 transition-colors"
              >
                OPEN
              </div>
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div
                  className="p-2 rounded-xl transition-colors duration-300 bg-amber-400/20 group-hover:bg-slate-950/20"
                >
                  <UserCheck className="h-5 w-5 text-amber-300 group-hover:text-slate-950 transition-colors duration-300" />
                </div>
                <div className="text-center">
                  <span className="block font-sans font-extrabold text-xs tracking-wider uppercase text-amber-200 group-hover:text-slate-950 transition-colors">
                    Register Now
                  </span>
                  <span className="block text-[10px] font-sans text-white/70 group-hover:text-slate-950/80 transition-colors">
                    Complete your registration
                  </span>
                </div>
              </div>
            </a>

            {/* ── Official Circular ── */}
            <button
              id="action-brochure"
              onClick={() => setIsBrochureOpen(true)}
              className="group relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border transition-all duration-300 overflow-hidden"
              style={{
                background: "hsl(39 55% 52% / 0.08)",
                borderColor: "hsl(39 55% 52% / 0.35)",
              }}
            >
              {/* Hover fill — consistent beige/gold theme */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(39 58% 52%) 0%, hsl(39 65% 60%) 100%)",
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div
                  className="p-2 rounded-xl transition-colors duration-300"
                  style={{ background: "hsl(39 55% 52% / 0.15)" }}
                >
                  <FileText
                    className="h-5 w-5 transition-transform group-hover:scale-110 duration-300 group-hover:text-slate-950"
                    style={{ color: "hsl(39 65% 68%)" }}
                  />
                </div>
                <div className="text-center">
                  <span
                    className="block font-sans font-bold text-xs tracking-wider uppercase group-hover:text-slate-950 transition-colors"
                    style={{ color: "hsl(39 65% 72%)" }}
                  >
                    Official Circular
                  </span>
                  <span className="block text-[10px] font-sans text-white/50 group-hover:text-slate-950/70 transition-colors">
                    View &amp; download guidelines
                  </span>
                </div>
              </div>
            </button>

          </div>
        </Reveal>

        {/* Deadline reminder */}
        <Reveal className="mt-3 text-center">
          <p className="text-[11px] font-sans text-white/40 tracking-wider">
            Registration deadline:{" "}
            <span style={{ color: "hsl(39 65% 68%)" }} className="font-semibold">
              15th August 2026, 10:00 PM
            </span>
          </p>
        </Reveal>
      </div>

      {/* Modals */}
      <TimelineModal isOpen={isTimelineOpen} onClose={() => setIsTimelineOpen(false)} />
      <BrochureModal isOpen={isBrochureOpen} onClose={() => setIsBrochureOpen(false)} />
    </section>
  )
}
