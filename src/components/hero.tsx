"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CountdownTimer } from "@/components/countdown-timer"

export function Hero() {
  return (
    <section className="w-full bg-[#FAF8F5] dark:bg-[#12161E] text-[#1C2430] dark:text-[#FAF8F5]">
      {/* Main Graduation Banner Container - Styled exactly like reference image */}
      <div className="relative w-full max-w-6xl mx-auto my-6 px-4">
        <div className="relative h-[420px] md:h-[500px] w-full overflow-hidden border border-[#DCD5C9] dark:border-[#2A3649] shadow-sm">
          {/* Background Photo */}
          <img
            src="/images/udaan_stage.png"
            alt="SGSITS Udaan Graduation & Gold Medal Ceremony"
            className="w-full h-full object-cover object-center filter brightness-[0.85]"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#0F1B2B]/45 flex flex-col items-center justify-center text-center p-6">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-normal tracking-[0.12em] uppercase leading-tight max-w-3xl drop-shadow-md"
            >
              CELEBRATING THE CLASS OF 2026
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-xs md:text-sm text-white/90 uppercase tracking-[0.2em] mt-4 mb-8"
            >
              Annual Certificate &amp; Gold Medal Distribution Ceremony
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="#udaan"
                className="inline-block bg-[#1B2A4A] hover:bg-[#142338] text-white px-7 py-3 text-xs md:text-sm font-sans tracking-[0.18em] uppercase border border-white/20 transition-all shadow-md hover:border-white/40"
              >
                VIEW CEREMONY DETAILS
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sub-Hero Text & Event Details Header */}
      <div className="max-w-4xl mx-auto text-center px-4 py-8">
        <h2 className="font-serif text-3xl md:text-4xl text-[#142338] dark:text-[#FAF8F5] font-normal tracking-wide">
          Congratulations to our graduates.
        </h2>
        <p className="font-sans text-sm md:text-base text-[#64748B] dark:text-[#94A3B8] mt-2 tracking-wide">
          Thursday, 27 August 2026 | SGSITS Auditorium, Indore | Livestream available
        </p>
        <p className="font-serif text-sm italic text-[#C5A059] mt-2">
          &quot;आज की सफलता, कल की प्रेरणा — Today&apos;s success, tomorrow&apos;s inspiration&quot;
        </p>

        {/* Countdown Timer Component */}
        <div className="my-8 py-4 border-y border-[#EAE5DC] dark:border-[#212B3B]">
          <CountdownTimer />
        </div>

        {/* Minimalist Stats Summary Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-center">
          <div className="p-4 border border-[#EAE5DC] dark:border-[#212B3B] bg-white dark:bg-[#1C2430]">
            <span className="block font-serif text-3xl text-[#142338] dark:text-[#C5A059]">500+</span>
            <span className="text-xs uppercase tracking-widest text-[#64748B] dark:text-[#94A3B8] mt-1 block">Graduating Awardees</span>
          </div>
          <div className="p-4 border border-[#EAE5DC] dark:border-[#212B3B] bg-white dark:bg-[#1C2430]">
            <span className="block font-serif text-3xl text-[#142338] dark:text-[#C5A059]">50+</span>
            <span className="text-xs uppercase tracking-widest text-[#64748B] dark:text-[#94A3B8] mt-1 block">Gold Medals Awarded</span>
          </div>
          <div className="p-4 border border-[#EAE5DC] dark:border-[#212B3B] bg-white dark:bg-[#1C2430]">
            <span className="block font-serif text-3xl text-[#142338] dark:text-[#C5A059]">70+</span>
            <span className="text-xs uppercase tracking-widest text-[#64748B] dark:text-[#94A3B8] mt-1 block">Years of Legacy</span>
          </div>
        </div>
      </div>
    </section>
  )
}
