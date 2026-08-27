"use client"

import * as React from "react"
import { Download, Maximize2, ExternalLink, X, Sparkles, Calendar, MapPin, Award, FileText } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { PdfViewerFrame } from "@/components/pdf-viewer-frame"

const bannerPdfPath = "/docs/banner with images.pdf"
const bannerFileName = "banner with images.pdf"

function BannerModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <span className="text-[10px] font-sans tracking-[0.2em] text-accent uppercase block font-semibold">
                FULLSCREEN PREVIEW
              </span>
              <h3 className="font-serif text-sm sm:text-lg text-foreground font-normal leading-tight">
                उड़ान 2026 — Official Event Banner
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={bannerPdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xs:inline-flex items-center gap-1.5 bg-secondary hover:bg-secondary/80 text-foreground px-3 py-1.5 text-xs font-sans rounded-lg border border-border transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Open Tab</span>
            </a>
            <a
              href={bannerPdfPath}
              download={bannerFileName}
              className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-hover text-white px-3 py-1.5 text-xs font-sans tracking-wider uppercase rounded-lg shadow-sm transition-all font-semibold"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50 transition-colors ml-1"
              aria-label="Close fullscreen banner modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* PDF Frame */}
        <div className="flex-1 w-full bg-slate-900/90 relative">
          <PdfViewerFrame
            src={bannerPdfPath}
            title="Official UDAAN 2026 Event Banner PDF"
            filename={bannerFileName}
          />
        </div>
      </div>
    </div>
  )
}

export function BannerSection() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <section id="banner" className="py-16 md:py-20 bg-background border-t border-border-strong relative overflow-hidden">
      {/* Background radial glow effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(247, 212, 99, 0.1) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto px-4 max-w-6xl relative z-10">
        <Reveal className="text-center mb-10 md:mb-14">
          <span className="text-[11px] font-sans tracking-[0.25em] text-accent uppercase block mb-2 font-semibold">
            VISUAL PRESENTATION &amp; POSTER
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground font-normal">
            Official Event Banner
          </h2>
          <p className="font-sans text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto mt-3 leading-relaxed">
            Explore the official promotional banner for <strong className="text-foreground">उड़ान 2026</strong> — Annual Certificate &amp; Gold Medal Distribution Ceremony at SGSITS Indore.
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
                    <FileText className="h-4 w-4 text-accent" />
                    <span className="font-sans text-xs font-semibold text-foreground truncate max-w-[200px] sm:max-w-xs">
                      banner with images.pdf
                    </span>
                    <span className="text-[10px] font-sans px-2 py-0.5 rounded-full bg-accent/15 text-accent font-bold uppercase tracking-wider hidden sm:inline-block">
                      Official Flyer
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="p-1.5 text-xs font-sans text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded-lg transition-colors flex items-center gap-1"
                      title="View Fullscreen"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Expand</span>
                    </button>
                    <a
                      href={bannerPdfPath}
                      download={bannerFileName}
                      className="p-1.5 text-xs font-sans text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-colors flex items-center gap-1"
                      title="Download PDF"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Download</span>
                    </a>
                  </div>
                </div>

                {/* PDF Container Frame */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                  <PdfViewerFrame
                    src={bannerPdfPath}
                    title="UDAAN 2026 Banner PDF Preview"
                    filename={bannerFileName}
                  />

                  {/* Quick Expand Floating Button Overlay */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="absolute bottom-4 right-4 bg-slate-950/95 hover:bg-slate-900 text-amber-200 border border-amber-300/40 hover:border-amber-300 px-4 py-2 rounded-xl text-xs font-sans font-bold uppercase tracking-wider shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 backdrop-blur-md"
                  >
                    <Maximize2 className="h-4 w-4" />
                    <span>Full Screen Banner View</span>
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Banner Info & Action Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="bg-card dark:bg-[#0D1527] p-6 sm:p-7 border border-border dark:border-slate-800 rounded-2xl shadow-lg space-y-5">
                <div className="flex items-center gap-3 pb-4 border-b border-border dark:border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground font-normal">
                      UDAAN 2026 Banner
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground">
                      Annual Certificate &amp; Gold Medal Distribution
                    </p>
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  The official visual banner highlights the ceremony theme, distinguished guest speaker details, venue location, schedule breakdown, and attire requirements.
                </p>

                {/* Key Highlights Cards */}
                <div className="grid grid-cols-1 gap-2.5 pt-1 font-sans text-xs">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-background dark:bg-slate-900/70 border border-border dark:border-slate-800">
                    <Calendar className="h-4 w-4 text-accent shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground block">Event Date &amp; Time</span>
                      <span className="text-muted-foreground text-[11px]">Thursday, 27 August 2026 • 09:00 AM IST</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-background dark:bg-slate-900/70 border border-border dark:border-slate-800">
                    <MapPin className="h-4 w-4 text-accent shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground block">Venue Location</span>
                      <span className="text-muted-foreground text-[11px]">Silveria Hall &amp; Main Auditorium, SGSITS Indore</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-background dark:bg-slate-900/70 border border-border dark:border-slate-800">
                    <Award className="h-4 w-4 text-accent shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground block">Ceremony Focus</span>
                      <span className="text-muted-foreground text-[11px]">50+ Gold Medals &amp; Merit Degree Certificates</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex-1 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 text-slate-950 font-sans text-xs font-black tracking-wider uppercase py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 border border-amber-200/60"
                  >
                    <Maximize2 className="h-4 w-4" />
                    <span>View Banner Fullscreen</span>
                  </button>

                  <a
                    href={bannerPdfPath}
                    download={bannerFileName}
                    className="bg-secondary hover:bg-secondary/80 text-foreground border border-border font-sans text-xs font-bold tracking-wider uppercase py-3 px-4 rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4 text-accent" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <BannerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
