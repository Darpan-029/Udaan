"use client"

import * as React from "react"
import { Users, Download, ExternalLink, X, MapPin, Layers, CheckCircle2 } from "lucide-react"

export interface SittingPlanItem {
  id: string
  title: string
  subtitle: string
  filename: string
  path: string
  badge: string
  description: string
  venue: string
}

export const sittingPlans: SittingPlanItem[] = [
  {
    id: "plan-1",
    title: "Sitting Plan — Section 1",
    subtitle: "Auditorium Main Hall & Dignitary Rows Arrangement",
    filename: "Sitting_Plan_1.pdf",
    path: "/docs/sitting_plan_1.pdf",
    badge: "Plan 1",
    description: "Official seating arrangement for awardees, gold medalists, faculty members, and dignitary dais in the Main Auditorium Hall.",
    venue: "Golden Jubilee Auditorium — Ground Floor"
  },
  {
    id: "plan-2",
    title: "Sitting Plan — Seating Layout",
    subtitle: "Detailed Batch-wise Seating Matrix & Hall Layout",
    filename: "Seating_layout_Udaan.pdf",
    path: "/docs/Seating_layout_Udaan.pdf",
    badge: "Layout Plan",
    description: "Comprehensive seating layout chart and student allocation matrix for the उड़ान 2026 Academic Award Ceremony.",
    venue: "Golden Jubilee Auditorium — All Blocks & Balcony"
  }
]

export function SittingPlanModal({
  isOpen,
  onClose,
  initialPlanId = "plan-1"
}: {
  isOpen: boolean
  onClose: () => void
  initialPlanId?: string
}) {
  const [activePlanId, setActivePlanId] = React.useState(initialPlanId)

  React.useEffect(() => {
    if (isOpen) {
      setActivePlanId(initialPlanId)
    }
  }, [isOpen, initialPlanId])

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

  const currentPlan = sittingPlans.find((p) => p.id === activePlanId) || sittingPlans[0]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-5xl h-[90vh] bg-background dark:bg-[#0D1527] border border-border dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-border dark:border-slate-800 bg-card/90 dark:bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-accent/15 border border-accent/30 text-accent shrink-0">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[10px] font-sans tracking-[0.2em] text-accent uppercase block font-bold">
                OFFICIAL SITTING PLAN
              </span>
              <h3 className="font-serif text-base sm:text-xl text-foreground font-normal leading-tight">
                उड़ान 2026 — Seating Arrangements
              </h3>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <a
              href={currentPlan.path}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-secondary hover:bg-secondary/80 text-foreground px-3 py-1.5 text-xs font-sans rounded-lg border border-border transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span className="hidden xs:inline">Open Tab</span>
            </a>
            <a
              href={currentPlan.path}
              download={currentPlan.filename}
              className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-hover text-white px-3 py-1.5 text-xs font-sans tracking-wider uppercase rounded-lg shadow-sm transition-all font-semibold"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50 transition-colors ml-1"
              aria-label="Close sitting plan modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Tab switcher row */}
        <div className="flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-muted/40 dark:bg-slate-950/70 border-b border-border dark:border-slate-800">
          <span className="text-[11px] font-sans text-muted-foreground font-medium mr-1 hidden sm:inline">
            Select Plan:
          </span>
          <div className="flex items-center gap-2 flex-1 overflow-x-auto no-scrollbar">
            {sittingPlans.map((plan) => {
              const isSelected = plan.id === activePlanId
              return (
                <button
                  key={plan.id}
                  onClick={() => setActivePlanId(plan.id)}
                  className={`px-3.5 py-1.5 text-xs font-sans font-bold tracking-wide rounded-xl transition-all flex items-center gap-2 shrink-0 ${
                    isSelected
                      ? "bg-accent text-slate-950 shadow-md font-extrabold border border-amber-300"
                      : "bg-background dark:bg-slate-900 text-muted-foreground hover:text-foreground border border-border dark:border-slate-800 hover:border-accent/40"
                  }`}
                >
                  <Layers className="h-3.5 w-3.5" />
                  <span>{plan.title}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Plan Venue Info subheader */}
        <div className="px-4 sm:px-6 py-2 bg-background dark:bg-slate-900/50 border-b border-border dark:border-slate-800/60 flex flex-col xs:flex-row xs:items-center justify-between gap-1 text-xs font-sans text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
            <span className="font-medium text-foreground">{currentPlan.venue}</span>
          </div>
          <span className="text-[11px] opacity-75">{currentPlan.subtitle}</span>
        </div>

        {/* PDF Frame */}
        <div className="flex-1 w-full bg-slate-900 relative">
          <iframe
            key={currentPlan.path}
            src={currentPlan.path}
            className="w-full h-full border-none"
            title={`UDAAN 2026 Sitting Plan - ${currentPlan.title}`}
          />
        </div>
      </div>
    </div>
  )
}
