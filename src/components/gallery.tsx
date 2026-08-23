"use client"

import * as React from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Maximize2, Pause, Play } from "lucide-react"
import { Reveal } from "@/components/reveal"

interface GalleryImage {
  id: number
  src: string
  alt: string
  subtitle: string
  isStatic?: boolean
}

// Mix of real WhatsApp event photos + existing webp images
const images: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery/WhatsApp Image 2026-08-04 at 1.31.37 PM.jpeg",
    alt: "Academic Procession — Faculty & Dignitaries",
    subtitle: "Faculty march in ceremonial half-jackets at SGSITS Campus",
  },
  {
    id: 2,
    src: "/images/gallery/WhatsApp Image 2026-08-04 at 1.31.51 PM.jpeg",
    alt: "Guard of Honour — NCC Cadets",
    subtitle: "NCC Guard of Honour escorting the Chief Guest",
  },
  {
    id: 3,
    src: "/images/gallery/WhatsApp Image 2026-08-04 at 1.31.56 PM.jpeg",
    alt: "Ceremony Stage — Dignitaries Seated",
    subtitle: "Distinguished guests and faculty on the main stage",
  },
  {
    id: 4,
    src: "/images/gallery/WhatsApp Image 2026-08-04 at 1.32.23 PM.jpeg",
    alt: "Award Distribution — On Stage",
    subtitle: "Awardees receiving certificates from dignitaries",
  },
  {
    id: 5,
    src: "/images/gallery/WhatsApp Image 2026-08-04 at 1.32.28 PM.jpeg",
    alt: "उड़ान Ceremony Celebrations",
    subtitle: "Moments of pride and joy at Silveria Hall",
  },
  {
    id: 6,
    src: "/images/gallery/WhatsApp Image 2026-08-04 at 1.32.45 PM.jpeg",
    alt: "Awardees — Group Portrait",
    subtitle: "Graduating scholars celebrating their achievement",
  },
  {
    id: 7,
    src: "/images/gallery/WhatsApp Image 2026-08-04 at 1.33.00 PM.jpeg",
    alt: "Ceremony Highlights",
    subtitle: "Highlights from the previous उड़ान ceremony",
  },
  {
    id: 8,
    src: "/images/gallery/udaan1.jfif.jpeg",
    alt: "उड़ान Event Memories",
    subtitle: "Special moments from the Academic Award Ceremony",
  },
]

export function Gallery() {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0)
  const [isLightboxOpen, setIsLightboxOpen] = React.useState<boolean>(false)
  const [isPlaying, setIsPlaying] = React.useState<boolean>(true)
  const thumbnailContainerRef = React.useRef<HTMLDivElement>(null)

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [])

  const handlePrevious = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [])

  // Auto-play timer
  React.useEffect(() => {
    if (!isPlaying || isLightboxOpen) return
    const timer = setInterval(() => { handleNext() }, 4500)
    return () => clearInterval(timer)
  }, [isPlaying, isLightboxOpen, handleNext])

  // Scroll active thumbnail into view
  React.useEffect(() => {
    const container = thumbnailContainerRef.current
    if (!container) return
    const activeThumb = container.children[currentIndex] as HTMLElement
    if (activeThumb) {
      const targetLeft = activeThumb.offsetLeft - container.clientWidth / 2 + activeThumb.clientWidth / 2
      container.scrollTo({ left: targetLeft, behavior: "smooth" })
    }
  }, [currentIndex])

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    if (!isLightboxOpen) return
    document.body.style.overflow = "hidden"
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLightboxOpen(false)
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "ArrowLeft") handlePrevious()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isLightboxOpen, handleNext, handlePrevious])

  const activePhoto = images[currentIndex]

  return (
    <section id="gallery" className="py-16 bg-background border-t border-border-strong">
      <div className="mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <Reveal className="text-center mb-10">
          <span className="text-[11px] font-sans tracking-[0.2em] text-accent uppercase block mb-1">
            CEREMONY ARCHIVES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground font-normal">
            Photo Gallery
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground max-w-xl mx-auto mt-2 font-sans">
            Glimpses of academic excellence, award conferrals, and joyful moments from the उड़ान Ceremony.
          </p>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </Reveal>

        {/* Featured Slider */}
        <Reveal>
          <div className="relative group/slider max-w-4xl mx-auto mb-6">
            <div className="relative h-[380px] md:h-[500px] lg:h-[540px] w-full rounded-2xl overflow-hidden border border-border dark:border-slate-800 shadow-2xl bg-card dark:bg-[#0D1527] card-pop">
              <Image
                key={activePhoto.id}
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                priority
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-cover object-center transition-all duration-700 ease-out"
                unoptimized
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent flex flex-col justify-end p-6 md:p-8">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div className="space-y-1 max-w-2xl">
                    <span
                      className="text-[10px] md:text-xs font-sans tracking-widest uppercase font-bold px-2.5 py-1 rounded-full inline-block backdrop-blur-md"
                      style={{
                        color: "hsl(39 65% 68%)",
                        background: "hsl(39 55% 52% / 0.2)",
                        border: "1px solid hsl(39 55% 52% / 0.4)",
                      }}
                    >
                      Photo {currentIndex + 1} of {images.length}
                    </span>
                    <h3 className="font-serif text-xl md:text-3xl text-white font-medium drop-shadow-md">
                      {activePhoto.alt}
                    </h3>
                    <p className="text-xs md:text-sm text-white/75 font-sans tracking-wide">
                      {activePhoto.subtitle}
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlaying((p) => !p)}
                      className="p-2.5 rounded-xl bg-slate-900/70 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md transition-all shadow-md"
                      title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
                      aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </button>
                    <button
                      onClick={() => setIsLightboxOpen(true)}
                      className="p-2.5 rounded-xl bg-slate-900/70 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md transition-all shadow-md"
                      title="View Fullscreen"
                      aria-label="View Fullscreen"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Nav Arrows */}
              <button
                onClick={handlePrevious}
                aria-label="Previous photo"
                className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/70 hover:bg-accent hover:text-slate-950 text-white border border-white/20 transition-all shadow-xl backdrop-blur-md group-hover/slider:scale-105"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next photo"
                className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/70 hover:bg-accent hover:text-slate-950 text-white border border-white/20 transition-all shadow-xl backdrop-blur-md group-hover/slider:scale-105"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to photo ${idx + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-6 h-2 bg-accent"
                      : "w-2 h-2 bg-border hover:bg-accent/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Thumbnail Strip */}
        <Reveal>
          <div className="relative max-w-4xl mx-auto px-2">
            <div
              ref={thumbnailContainerRef}
              className="flex items-center gap-3 overflow-x-auto py-3 px-1 scrollbar-none snap-x"
            >
              {images.map((img, idx) => {
                const isActive = idx === currentIndex
                return (
                  <button
                    key={img.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative shrink-0 h-20 w-28 md:h-24 md:w-36 rounded-xl overflow-hidden border-2 transition-all duration-300 snap-center ${
                      isActive
                        ? "border-accent ring-2 ring-accent/40 scale-105 shadow-lg"
                        : "border-border dark:border-slate-800 opacity-55 hover:opacity-90 hover:border-accent/40"
                    }`}
                    aria-label={`Switch to photo ${idx + 1}: ${img.alt}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="150px"
                      className="object-cover"
                      unoptimized
                    />
                    <div
                      className={`absolute inset-0 transition-colors ${
                        isActive ? "bg-accent/10" : "bg-slate-950/25"
                      }`}
                    />
                    <span className="absolute bottom-1 right-1 px-1.5 py-0.5 text-[9px] font-sans font-bold bg-slate-950/80 text-white rounded">
                      {idx + 1}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Fullscreen Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-slate-950/96 z-50 flex items-center justify-center p-4 md:p-8 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close modal"
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrevious() }}
            aria-label="Previous photo"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 text-white hover:bg-accent hover:text-slate-950 transition-all z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handleNext() }}
            aria-label="Next photo"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 text-white hover:bg-accent hover:text-slate-950 transition-all z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Content */}
          <div
            className="max-w-5xl w-full bg-card dark:bg-[#0D1527] border border-border dark:border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[58vh] md:h-[68vh]">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                sizes="95vw"
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="text-center pt-4 border-t border-border dark:border-slate-800 mt-3">
              <span className="text-[10px] text-accent uppercase font-sans font-bold tracking-widest block">
                Photo {currentIndex + 1} of {images.length}
              </span>
              <h3 className="font-serif text-lg md:text-xl text-foreground font-normal mt-0.5">
                {activePhoto.alt}
              </h3>
              <p className="text-xs text-muted-foreground font-sans mt-0.5">
                {activePhoto.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
