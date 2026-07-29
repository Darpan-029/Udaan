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

  // Placeholder images - in production, these would be actual event photos
  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800", alt: "Award Ceremony 2024" },
    { id: 2, src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800", alt: "Gold Medal Winners" },
    { id: 3, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800", alt: "Guest Speaker Session" },
    { id: 4, src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800", alt: "Group Photograph" },
    { id: 5, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800", alt: "Certificate Distribution" },
    { id: 6, src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800", alt: "Auditorium View" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

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
    <section id="gallery" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h2>
            <p className="text-lg text-muted-foreground">
              Moments of pride and celebration from previous years
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold">{image.alt}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={handlePrevious}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-[90vh] rounded-lg"
          />
        </div>
      )}
    </section>
  )
}
