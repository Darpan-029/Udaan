"use client"

import * as React from "react"
import Image, { type StaticImageData } from "next/image"
import { X, ChevronLeft, ChevronRight, Maximize2, Pause, Play } from "lucide-react"
import { Reveal } from "@/components/reveal"
import stageImage from "../../public/images/udaan_stage.webp"
import groupImage from "../../public/images/udaan_group.webp"
import gallery01 from "../../public/images/gallery/gallery-01.webp"
import gallery02 from "../../public/images/gallery/gallery-02.webp"
import gallery03 from "../../public/images/gallery/gallery-03.webp"
import gallery04 from "../../public/images/gallery/gallery-04.webp"

interface GalleryImage {
  id: number
  src: StaticImageData
  alt: string
  subtitle: string
}

const images: GalleryImage[] = [
  { id: 1, src: stageImage, alt: "Graduates Celebration & Ribbon Toss", subtitle: "Grand Finale Celebrations at Main Stage" },
  { id: 2, src: groupImage, alt: "Gold Medal Awardees & Dignitaries Group", subtitle: "Meritorious Scholars & Chief Guests Group Photo" },
  { id: 3, src: gallery01, alt: "Convocation Address Session", subtitle: "Eminent Keynote Speakers & Audience" },
  { id: 4, src: gallery02, alt: "Graduating Batch Group Photo", subtitle: "Class of 2026 Scholars on Auditorium Steps" },
  { id: 5, src: gallery03, alt: "Degree Certificate Distribution", subtitle: "Conferral of Honors by Director & Dignitaries" },
  { id: 6, src: gallery04, alt: "SGSITS Auditorium Ceremony", subtitle: "Traditional Ceremonial Ambience & Lamp Lighting" },
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
    const timer = setInterval(() => {
      handleNext()
    }, 4500)
    return () => clearInterval(timer)
  }, [isPlaying, isLightboxOpen, handleNext])

  // Safely center active thumbnail horizontally without scrolling the window/viewport
  React.useEffect(() => {
    const container = thumbnailContainerRef.current
    if (!container) return
    const activeThumb = container.children[currentIndex] as HTMLElement
    if (activeThumb) {
      const targetLeft = activeThumb.offsetLeft - container.clientWidth / 2 + activeThumb.clientWidth / 2
      container.scrollTo({ left: targetLeft, behavior: "smooth" })
    }
  }, [currentIndex])

  // Keyboard navigation for Lightbox
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
            Glimpses of academic excellence, award conferrals, and joyful moments from the UDAAN Graduation Ceremony.
          </p>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </Reveal>

        {/* Featured 1-Photo Slider Container */}
        <Reveal>
          <div className="relative group/slider max-w-4xl mx-auto mb-6">
            {/* Main Featured Big Card */}
            <div className="relative h-[380px] md:h-[480px] lg:h-[520px] w-full rounded-2xl overflow-hidden border border-border dark:border-slate-800 shadow-2xl bg-card dark:bg-[#0D1527] card-pop">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                priority
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-cover object-center transition-all duration-700 ease-out"
              />

              {/* Dark Gradient Overlay for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div className="space-y-1 max-w-2xl">
                    <span className="text-[10px] md:text-xs font-sans tracking-widest text-accent uppercase font-bold px-2.5 py-1 bg-accent/20 border border-accent/40 rounded-full inline-block backdrop-blur-md">
                      Photo {currentIndex + 1} of {images.length}
                    </span>
                    <h3 className="font-serif text-xl md:text-3xl text-white font-medium drop-shadow-md">
                      {activePhoto.alt}
                    </h3>
                    <p className="text-xs md:text-sm text-white/80 font-sans tracking-wide">
                      {activePhoto.subtitle}
                    </p>
                  </div>

                  {/* Expand / Pause controls */}
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

              {/* Side Moving Arrows */}
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
          </div>
        </Reveal>

        {/* Front Thumbnail Strip with Navigation */}
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
                    className={`relative shrink-0 h-20 w-32 md:h-24 md:w-36 rounded-xl overflow-hidden border-2 transition-all duration-300 snap-center ${
                      isActive
                        ? "border-accent ring-2 ring-accent/50 scale-105 shadow-lg"
                        : "border-border dark:border-slate-800 opacity-65 hover:opacity-100 hover:scale-100"
                    }`}
                    aria-label={`Switch to photo ${idx + 1}: ${img.alt}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="150px"
                      className="object-cover"
                    />
                    <div
                      className={`absolute inset-0 transition-colors ${
                        isActive ? "bg-accent/10" : "bg-slate-950/30"
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

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-slate-950/95 z-50 flex items-center justify-center p-4 md:p-8 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close modal"
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Left / Right Nav Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              handlePrevious()
            }}
            aria-label="Previous photo"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 text-white hover:bg-accent hover:text-slate-950 transition-all z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            aria-label="Next photo"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 text-white hover:bg-accent hover:text-slate-950 transition-all z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Lightbox Content */}
          <div
            className="max-w-5xl w-full bg-card dark:bg-[#0D1527] border border-border dark:border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] md:h-[70vh]">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                sizes="95vw"
                className="object-contain"
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
