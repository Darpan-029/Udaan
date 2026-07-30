"use client"

import * as React from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export function Gallery() {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null)
  const backdropRef = React.useRef<HTMLDivElement>(null)

  const images = [
    { id: 1, src: "/images/udaan_stage.png", alt: "Graduates Celebration & Ribbon Toss" },
    { id: 2, src: "/images/udaan_group.png", alt: "Gold Medal Awardees & Dignitaries Group" },
    { id: 3, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800", alt: "Convocation Address Session" },
    { id: 4, src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800", alt: "Graduating Batch Group Photo" },
    { id: 5, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800", alt: "Degree Certificate Distribution" },
    { id: 6, src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800", alt: "SGSITS Auditorium Ceremony" },
  ]

  const handleNext = React.useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev !== null ? (prev + 1) % images.length : null))
    }
  }, [selectedImage, images.length])

  const handlePrevious = React.useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null))
    }
  }, [selectedImage, images.length])

  // Body scroll lock and Keyboard event handlers for Lightbox
  React.useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedImage])

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return
      if (e.key === "Escape") {
        setSelectedImage(null)
      } else if (e.key === "ArrowRight") {
        handleNext()
      } else if (e.key === "ArrowLeft") {
        handlePrevious()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, handleNext, handlePrevious])

  return (
    <section id="gallery" className="py-16 bg-background text-foreground border-t border-border scroll-mt-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-[11px] font-sans tracking-[0.2em] text-accent uppercase block mb-1">
            CEREMONY ARCHIVES
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-normal">
            Photo Gallery
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="bg-card p-2 border border-border group cursor-pointer hover:border-foreground transition-all"
              onClick={() => setSelectedImage(index)}
            >
              <div className="overflow-hidden h-52 relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="font-serif text-xs text-center text-foreground/90 py-2 truncate">
                {image.alt}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {selectedImage !== null && (
        <div
          ref={backdropRef}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          className="fixed inset-0 bg-[#0F1B2B]/90 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === backdropRef.current) {
              setSelectedImage(null)
            }
          }}
        >
          <button
            onClick={() => setSelectedImage(null)}
            aria-label="Close image lightbox"
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={handlePrevious}
            aria-label="Previous image"
            className="absolute left-4 md:left-6 text-white/80 hover:text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-4 md:right-6 text-white/80 hover:text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="max-w-4xl bg-card p-3 border border-white/20 shadow-2xl">
            <div className="relative w-full max-h-[75vh] h-[500px]">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <p className="font-serif text-sm text-center text-foreground pt-3">
              {images[selectedImage].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
