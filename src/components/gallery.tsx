"use client"

import * as React from "react"
import Image, { type StaticImageData } from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
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
}

const images: GalleryImage[] = [
  { id: 1, src: stageImage, alt: "Graduates Celebration & Ribbon Toss" },
  { id: 2, src: groupImage, alt: "Gold Medal Awardees & Dignitaries Group" },
  { id: 3, src: gallery01, alt: "Convocation Address Session" },
  { id: 4, src: gallery02, alt: "Graduating Batch Group Photo" },
  { id: 5, src: gallery03, alt: "Degree Certificate Distribution" },
  { id: 6, src: gallery04, alt: "SGSITS Auditorium Ceremony" },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null)
  const closeButtonRef = React.useRef<HTMLButtonElement>(null)
  const triggerRef = React.useRef<HTMLElement | null>(null)

  const handleNext = React.useCallback(() => {
    setSelectedImage((current) => (current === null ? null : (current + 1) % images.length))
  }, [])

  const handlePrevious = React.useCallback(() => {
    setSelectedImage((current) => (current === null ? null : (current - 1 + images.length) % images.length))
  }, [])

  const closeLightbox = React.useCallback(() => {
    setSelectedImage(null)
    triggerRef.current?.focus()
  }, [])

  const openLightbox = (index: number, e: React.MouseEvent<HTMLElement>) => {
    triggerRef.current = e.currentTarget
    setSelectedImage(index)
  }

  React.useEffect(() => {
    if (selectedImage === null) return

    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "ArrowLeft") handlePrevious()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [selectedImage, closeLightbox, handleNext, handlePrevious])

  return (
    <section id="gallery" className="py-16 bg-background border-t border-border-strong">
      <div className="mx-auto px-4 max-w-5xl">
        <Reveal className="text-center mb-12">
          <span className="text-[11px] font-sans tracking-[0.2em] text-accent uppercase block mb-1">
            CEREMONY ARCHIVES
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-normal">
            Photo Gallery
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <button
              key={image.id}
              type="button"
              className="bg-card p-2 border border-border group cursor-pointer text-left"
              onClick={(e) => openLightbox(index, e)}
              aria-label={`View larger photo: ${image.alt}`}
            >
              <div className="overflow-hidden h-52 relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="font-serif text-xs text-center text-foreground py-2">
                {image.alt}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-[#0F1B2B]/90 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={images[selectedImage].alt}
          onClick={closeLightbox}
        >
          <button
            ref={closeButtonRef}
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-6 right-6 text-white/80 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              handlePrevious()
            }}
            aria-label="Previous photo"
            className="absolute left-6 text-white/80 hover:text-white"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            aria-label="Next photo"
            className="absolute right-6 text-white/80 hover:text-white"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <div
            className="max-w-4xl w-full bg-card p-2 border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <p className="font-serif text-sm text-center text-foreground pt-2">
              {images[selectedImage].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
