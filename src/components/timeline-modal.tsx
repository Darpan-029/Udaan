"use client"

import * as React from "react"
import { X, Clock, MapPin, Calendar, Download, ChevronRight } from "lucide-react"

interface TimelineModalProps {
  isOpen: boolean
  onClose: () => void
}

const scheduleItems = [
  {
    time: "09:00 AM",
    title: "Registration & Half-Jacket Counter",
    description: "Verification of entry passes, guest registration, and ceremonial half-jacket distribution.",
    location: "Main Auditorium Foyer",
  },
  {
    time: "10:00 AM",
    title: "Inaugural Ceremony & Lamp Lighting",
    description: "Academic procession entry, Saraswati Vandana, and welcome address by Director SGSITS.",
    location: "Main Auditorium",
  },
  {
    time: "10:30 AM",
    title: "Degree Certificate Conferral",
    description: "Conferring degree certificates to meritorious graduating scholars across departments.",
    location: "Main Auditorium",
  },
  {
    time: "12:00 PM",
    title: "Donor Gold Medal Distribution",
    description: "Awarding institutional donor gold medals to overall rank holders by Dignitaries.",
    location: "Main Auditorium",
  },
  {
    time: "01:00 PM",
    title: "Networking High Tea",
    description: "High tea and interaction session for awardees, faculty, and family guests.",
    location: "Golden Jubilee Lawn",
  },
  {
    time: "02:30 PM",
    title: "Keynote Address by Chief Guest",
    description: "Inspiring convocation address by eminent chief guest and distinguished alumni.",
    location: "Main Auditorium",
  },
  {
    time: "03:30 PM",
    title: "National Anthem & Group Photograph",
    description: "Formal conclusion of ceremony followed by department group photo sessions.",
    location: "Main Auditorium Steps",
  },
]

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

          {/* Timeline Table / Cards */}
          <div className="space-y-3">
            {scheduleItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 border border-border dark:border-slate-800/80 bg-card dark:bg-slate-900/40 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-3 hover:border-accent/50 transition-all card-pop"
              >
                <div className="flex items-start gap-4">
                  <div className="px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-lg text-center min-w-[95px] shrink-0">
                    <span className="font-serif text-sm font-semibold text-accent block">{item.time}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-medium text-foreground flex items-center gap-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="text-xs font-sans text-accent flex items-center gap-1 shrink-0 self-end md:self-center bg-background dark:bg-slate-800/50 px-2.5 py-1 rounded-md border border-border/50">
                  <MapPin className="h-3 w-3" />
                  <span>{item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-border dark:border-slate-800 bg-card/60 dark:bg-slate-900/60 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-muted-foreground">
            Please report at least 30 minutes prior to scheduled events.
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-sans tracking-wider uppercase border border-border rounded-lg hover:bg-muted transition-colors"
            >
              Close
            </button>
            <a
              href="/docs/schedule.pdf"
              download="UDAAN_2026_Schedule.pdf"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 text-xs font-sans tracking-wider uppercase rounded-lg shadow-sm transition-all"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
