"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Shirt, FileText, Download, CheckCircle2 } from "lucide-react"

export function Registration() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Official Google Form link extracted from official SGSITS Udaan site
  const registrationFormUrl = "https://forms.gle/xirfNSVTatEpGbf96"

  return (
    <section id="register" className="py-16 bg-[#FAF8F5] dark:bg-[#12161E] border-t border-[#E4DFD7] dark:border-[#212B3B]" ref={ref}>
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[11px] font-sans tracking-[0.2em] text-[#C5A059] uppercase block mb-1">
            GRADUATE REGISTRATION
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#142338] dark:text-[#FAF8F5] font-normal">
            Register for UDAAN 2026
          </h2>
          <div className="w-12 h-px bg-[#C5A059] mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          {/* Main Registration Card */}
          <div className="md:col-span-7 bg-white dark:bg-[#1C2430] p-8 border border-[#EAE5DC] dark:border-[#212B3B] flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] font-sans tracking-widest text-[#C5A059] uppercase block">
                OFFICIAL PORTAL
              </span>
              <h3 className="font-serif text-2xl text-[#142338] dark:text-[#FAF8F5] font-normal">
                Degree &amp; Medal Registration
              </h3>
              <p className="font-sans text-xs text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
                All graduating scholars receiving gold medals, merit certificates, or degree certificates must submit their attendance confirmation and guest details via the official Google Form portal.
              </p>

              <ul className="space-y-2 text-xs font-sans text-[#64748B] dark:text-[#94A3B8] pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Instant confirmation &amp; guest pass recording</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Seat assignment in main auditorium hall</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Ceremonial half-jacket token distribution</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href={registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#142338] hover:bg-[#0F1B2B] text-white py-3.5 px-4 text-xs font-sans tracking-[0.15em] uppercase border border-transparent transition-colors flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>OPEN REGISTRATION FORM</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Dress Code & Documents Side Column */}
          <div className="md:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Dress Code Policy Card */}
            <div className="bg-white dark:bg-[#1C2430] p-6 border border-[#EAE5DC] dark:border-[#212B3B]">
              <div className="flex items-center space-x-2 mb-3">
                <Shirt className="h-4 w-4 text-[#C5A059]" />
                <h3 className="font-serif text-base text-[#142338] dark:text-white font-normal">Dress Code Policy</h3>
              </div>
              <div className="text-xs font-sans text-[#475569] dark:text-[#CBD5E1] space-y-2 leading-relaxed">
                <p><strong className="text-[#142338] dark:text-white">Male Candidates:</strong> White / Off-white Kurta Pyjama.</p>
                <p><strong className="text-[#142338] dark:text-white">Female Candidates:</strong> White / Off-white Salwar-Kurta or Saree.</p>
                <p className="text-[#C5A059] italic pt-1 border-t border-[#EAE5DC] dark:border-[#212B3B]">
                  Half-jackets will be provided at reporting counter.
                </p>
              </div>
            </div>

            {/* Event Circular Quick Card */}
            <div className="bg-white dark:bg-[#1C2430] p-6 border border-[#EAE5DC] dark:border-[#212B3B]">
              <div className="flex items-center space-x-2 mb-3">
                <FileText className="h-4 w-4 text-[#C5A059]" />
                <h3 className="font-serif text-base text-[#142338] dark:text-white font-normal">Official Guidelines</h3>
              </div>
              <div className="space-y-2 text-xs font-sans">
                <a
                  href="/docs/brochure.pdf"
                  download
                  className="flex items-center justify-between p-2.5 bg-[#FAF8F5] dark:bg-[#12161E] border border-[#EAE5DC] dark:border-[#212B3B] hover:border-[#142338] transition-colors"
                >
                  <span className="text-[#142338] dark:text-white font-medium">Official Brochure (PDF)</span>
                  <Download className="h-3.5 w-3.5 text-[#C5A059]" />
                </a>
                <a
                  href="/docs/dresscode.docx"
                  download
                  className="flex items-center justify-between p-2.5 bg-[#FAF8F5] dark:bg-[#12161E] border border-[#EAE5DC] dark:border-[#212B3B] hover:border-[#142338] transition-colors"
                >
                  <span className="text-[#142338] dark:text-white font-medium">Dress Code Document</span>
                  <Download className="h-3.5 w-3.5 text-[#C5A059]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
