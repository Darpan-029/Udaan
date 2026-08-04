"use client"

import * as React from "react"
import { X, Clock, MapPin, Calendar } from "lucide-react"

interface TimelineModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TimelineModal({ isOpen, onClose }: TimelineModalProps) {
  React.useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = "hidden"
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-3xl max-h-[85vh] bg-background dark:bg-[#0D1527] border border-border dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border dark:border-slate-800 bg-card/60 dark:bg-slate-900/60">
          <div>
            <span className="text-[11px] font-sans tracking-[0.2em] text-accent uppercase block font-semibold">
              OFFICIAL CEREMONY SCHEDULE
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-normal mt-0.5">
              Program Timeline — उड़ान 2026
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50 transition-colors"
            aria-label="Close timeline modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Info Banner */}
          <div className="bg-card dark:bg-slate-900/80 border border-border dark:border-slate-800 rounded-xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <Calendar className="h-4 w-4" />
              </div>
              <div>
                <span className="text-muted-foreground block uppercase text-[9px] tracking-wider">Date</span>
                <span className="font-semibold text-foreground">Thursday, 27 August 2026</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <span className="text-muted-foreground block uppercase text-[9px] tracking-wider">Timing</span>
                <span className="font-semibold text-foreground">09:00 AM – 04:00 PM IST</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <span className="text-muted-foreground block uppercase text-[9px] tracking-wider">Venue</span>
                <span className="font-semibold text-foreground">SGSITS Main Auditorium</span>
              </div>
            </div>
          </div>

          {/* To be announced later notice banner */}
          <div className="py-12 px-6 text-center border border-border dark:border-slate-800/80 bg-card dark:bg-slate-900/40 rounded-2xl flex flex-col items-center justify-center gap-3">
            <div className="p-3.5 rounded-full bg-accent/10 border border-accent/20 text-accent">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground">
              To Be Announced Later
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground max-w-md mx-auto font-sans leading-relaxed">
              The detailed minute-by-minute event timeline and schedule for the उड़ान 2026 Academic Award Ceremony will be announced soon by the organizing committee.
            </p>
            <span className="mt-2 text-[10px] font-sans tracking-widest uppercase text-accent font-semibold px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
              Updates Will Be Posted Here
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-border dark:border-slate-800 bg-card/60 dark:bg-slate-900/60 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-muted-foreground">
            Check back closer to event date for finalized timeline details.
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-sans tracking-wider uppercase bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
