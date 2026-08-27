"use client"

import * as React from "react"
import { Users, Download, ExternalLink, MapPin, Layers, Sparkles, CheckCircle2, FileText } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SittingPlanModal, sittingPlans } from "@/components/sitting-plan-modal"

export function SittingPlanSection() {
  const [selectedPlanId, setSelectedPlanId] = React.useState<string>("plan-1")
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const handleOpenPlan = (planId: string) => {
    setSelectedPlanId(planId)
    setIsModalOpen(true)
  }

  return (
    <section id="sitting-plan" className="py-16 md:py-20 bg-background border-t border-border-strong relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle at 50% 20%, rgba(247, 212, 99, 0.07) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto px-4 max-w-6xl relative z-10">
        <Reveal className="text-center mb-10 md:mb-12">
          <span className="text-[11px] font-sans tracking-[0.25em] text-accent uppercase block mb-2 font-semibold">
            SEATING ARRANGEMENT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground font-normal">
            Official Sitting Plan
          </h2>
          <p className="font-sans text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto mt-3 leading-relaxed">
            View and download the designated seating layout for award recipients, degree candidates, esteemed dignitaries, faculty, and visiting parents for <strong className="text-foreground">उड़ान 2026</strong>.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-4" />
        </Reveal>

        {/* 2 Sitting Plan Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {sittingPlans.map((plan, idx) => (
            <Reveal key={plan.id}>
              <div className="bg-card dark:bg-[#0D1527] border border-border dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden card-pop flex flex-col h-full group hover:border-accent/60 transition-all duration-300">
                {/* Card Header Bar */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-border dark:border-slate-800 bg-muted/40 dark:bg-slate-900/60">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-accent/15 border border-accent/30 text-accent">
                      <Users className="h-4 w-4" />
                    </div>
                    <span className="font-sans text-xs font-bold text-foreground">
                      {plan.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-sans px-2.5 py-0.5 rounded-full bg-accent/15 text-accent font-bold uppercase tracking-wider">
                    {plan.badge}
                  </span>
                </div>

                {/* PDF Live Mini-Frame */}
                <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden border-b border-border dark:border-slate-800">
                  <iframe
                    src={`${plan.path}#toolbar=0&navpanes=0`}
                    className="w-full h-full border-none pointer-events-auto"
                    title={`UDAAN 2026 - ${plan.title}`}
                  />
                </div>

                {/* Card Body Details */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-sans text-accent font-medium">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span>{plan.venue}</span>
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl text-foreground font-normal">
                      {plan.subtitle}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <button
                      onClick={() => handleOpenPlan(plan.id)}
                      className="flex-1 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 text-slate-950 font-sans text-xs font-black tracking-wider uppercase py-2.5 px-4 rounded-xl shadow-md transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 border border-amber-200/60"
                    >
                      <Layers className="h-3.5 w-3.5" />
                      <span>View Fullscreen</span>
                    </button>

                    <a
                      href={plan.path}
                      download={plan.filename}
                      className="bg-secondary hover:bg-secondary/80 text-foreground border border-border font-sans text-xs font-bold tracking-wider uppercase py-2.5 px-4 rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      <Download className="h-3.5 w-3.5 text-accent" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <SittingPlanModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPlanId={selectedPlanId}
      />
    </section>
  )
}
