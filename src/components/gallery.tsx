"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { id: 1, src: "/images/udaan_stage.png", alt: "Graduates Celebration & Ribbon Toss" },
    { id: 2, src: "/images/udaan_group.png", alt: "Gold Medal Awardees & Dignitaries Group" },
    { id: 3, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800", alt: "Convocation Address Session" },
    { id: 4, src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800", alt: "Graduating Batch Group Photo" },
    { id: 5, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800", alt: "Degree Certificate Distribution" },
    { id: 6, src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800", alt: "SGSITS Auditorium Ceremony" },
  ]

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  return (
    <section id="gallery" className="py-16 bg-[#FAF8F5] dark:bg-[#12161E] border-t border-[#E4DFD7] dark:border-[#212B3B]" ref={ref}>
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[11px] font-sans tracking-[0.2em] text-[#C5A059] uppercase block mb-1">
            CEREMONY ARCHIVES
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#142338] dark:text-[#FAF8F5] font-normal">
            Photo Gallery
          </h2>
          <div className="w-12 h-px bg-[#C5A059] mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="bg-white dark:bg-[#1C2430] p-2 border border-[#EAE5DC] dark:border-[#212B3B] group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="overflow-hidden h-52 relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="font-serif text-xs text-center text-[#142338] dark:text-[#CBD5E1] py-2">
                {image.alt}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-[#0F1B2B]/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={handlePrevious}
            className="absolute left-6 text-white/80 hover:text-white"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-6 text-white/80 hover:text-white"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="max-w-4xl bg-white dark:bg-[#1C2430] p-2 border border-white/20">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="font-serif text-sm text-center text-[#142338] dark:text-white pt-2">
              {images[selectedImage].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
