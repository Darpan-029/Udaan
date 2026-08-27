"use client"

import * as React from "react"
import { BookOpen, Download, ExternalLink, X, Sparkles, Award, BarChart3, CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

import { PdfViewerFrame } from "@/components/pdf-viewer-frame"

// Change this path to your uploaded event magazine PDF in public/docs/
const magazinePdfPath = "/docs/magazine.pdf"
const magazineFileName = "UDAAN_2026_Event_Magazine.pdf"

function MagazineModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-5xl h-[88vh] bg-background dark:bg-[#0D1527] border border-border dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-border dark:border-slate-800 bg-card/80 dark:bg-slate-900/80">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-accent/15 border border-accent/30 text-accent">
              <BookOpen className="h-4 w-4" />
            </div>
            <div>
              <span className="text-[10px] font-sans tracking-[0.2em] text-accent uppercase block font-semibold">
                FULLSCREEN MAGAZINE
              </span>
              <h3 className="font-serif text-sm sm:text-lg text-foreground font-normal leading-tight">
                उड़ान 2026 — Official Event Magazine
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={magazinePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xs:inline-flex items-center gap-1.5 bg-secondary hover:bg-secondary/80 text-foreground px-3 py-1.5 text-xs font-sans rounded-lg border border-border transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Open Tab</span>
            </a>
            <a
              href={magazinePdfPath}
              download={magazineFileName}
              className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-hover text-white px-3 py-1.5 text-xs font-sans tracking-wider uppercase rounded-lg shadow-sm transition-all font-semibold"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50 transition-colors ml-1"
              aria-label="Close fullscreen magazine modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* PDF Frame */}
        <div className="flex-1 w-full bg-slate-900/90 relative">
          <PdfViewerFrame
            src={magazinePdfPath}
            title="Official UDAAN 2026 Event Magazine PDF"
            filename={magazineFileName}
          />
        </div>
      </div>
    </div>
  )
}

export function MagazineSection() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <section id="magazine" className="py-16 md:py-20 bg-background border-t border-border-strong relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(247, 212, 99, 0.08) 0%, transparent 65%)",
        }}
      />

      <div className="mx-auto px-4 max-w-6xl relative z-10">
        <Reveal className="text-center mb-10 md:mb-12">
          <span className="text-[11px] font-sans tracking-[0.25em] text-accent uppercase block mb-2 font-semibold">
            COMMEMORATIVE PUBLICATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground font-normal">
            Event Magazine
          </h2>
          <p className="font-sans text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto mt-3 leading-relaxed">
            Read and download the official <strong className="text-foreground">उड़ान 2026 Commemorative Souvenir &amp; Magazine</strong>, chronicling academic milestones, leadership messages, department achievements, and student honors.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-4" />
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Interactive PDF Viewer Card */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative bg-card dark:bg-[#0D1527] border border-border dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden card-pop group">
                {/* Top Control Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-border dark:border-slate-800 bg-muted/40 dark:bg-slate-900/50">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-accent" />
                    <span className="font-sans text-xs font-semibold text-foreground truncate max-w-[200px] sm:max-w-xs">
                      {magazineFileName}
                    </span>
                  </div>
                  <span className="text-[10px] font-sans px-2 py-0.5 rounded-full bg-accent/15 text-accent font-bold uppercase tracking-wider">
                    Official Edition
                  </span>
                </div>

                {/* PDF Container Frame */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                  <PdfViewerFrame
                    src={magazinePdfPath}
                    title="UDAAN 2026 Event Magazine PDF Preview"
                    filename={magazineFileName}
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Magazine Info & Action Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="bg-card dark:bg-[#0D1527] p-6 sm:p-7 border border-border dark:border-slate-800 rounded-2xl shadow-lg space-y-5">
                <div className="flex items-center gap-3 pb-4 border-b border-border dark:border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground font-normal">
                      उड़ान Special Edition
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground">
                      Annual Academic Ceremony Magazine &amp; Souvenir
                    </p>
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  A tribute to academic brilliance and institutional growth at SGSITS Indore, featuring inspirational articles, patron addresses, gold medalist rolls, and unforgettable glimpses of student life.
                </p>

                {/* Highlights list */}
                <div className="space-y-2.5 pt-1 font-sans text-xs">
                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-background dark:bg-slate-900/70 border border-border dark:border-slate-800">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Dignitary Addresses:</strong> Keynotes by GB Chairman (p. 13), Director SGSITS (p. 16) &amp; Chief Guests (p. 19).
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-background dark:bg-slate-900/70 border border-border dark:border-slate-800">
                    <Award className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Gold Medalists Roll of Honor:</strong> Special spotlight and citations for top-ranking academic achievers.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-background dark:bg-slate-900/70 border border-border dark:border-slate-800">
                    <BarChart3 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Graduation Statistics 2026 (p. 40):</strong> Comprehensive academic and graduation performance metrics.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-background dark:bg-slate-900/70 border border-border dark:border-slate-800">
                    <Sparkles className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Amrit Kaal (p. 41):</strong> Special commemorative feature celebrating institutional growth and national vision.
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex-1 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 text-slate-950 font-sans text-xs font-black tracking-wider uppercase py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 border border-amber-200/60"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Read Fullscreen</span>
                  </button>

                  <a
                    href={magazinePdfPath}
                    download={magazineFileName}
                    className="bg-secondary hover:bg-secondary/80 text-foreground border border-border font-sans text-xs font-bold tracking-wider uppercase py-3 px-4 rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4 text-accent" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <MagazineModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
