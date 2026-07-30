"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Target, Users, Trophy } from "lucide-react"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Award,
      title: "Certificate Distribution",
      description: "Recognizing academic excellence with formal certificates for outstanding performers across all disciplines.",
    },
    {
      icon: Trophy,
      title: "Gold Medal Conferral",
      description: "Honoring top rankers with prestigious donor gold medals for exceptional scholarly achievements.",
    },
    {
      icon: Users,
      title: "Distinguished Dignitaries",
      description: "Celebrating in the presence of eminent personalities, industry leaders, faculty, and alumni.",
    },
    {
      icon: Target,
      title: "Academic Inspiration",
      description: "Motivating upcoming scholars to pursue higher standards of technical innovation and leadership.",
    },
  ]

  return (
    <section id="about" className="py-16 bg-[#FAF8F5] dark:bg-[#12161E] border-t border-[#E4DFD7] dark:border-[#212B3B]" ref={ref}>
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[11px] font-sans tracking-[0.2em] text-[#C5A059] uppercase block mb-1">
            INSTITUTIONAL HONORS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#142338] dark:text-[#FAF8F5] font-normal">
            About SGSITS &amp; UDAAN
          </h2>
          <div className="w-12 h-px bg-[#C5A059] mx-auto mt-4" />
        </motion.div>

        {/* Editorial Text Block */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch mb-12">
          <div className="md:col-span-7 bg-white dark:bg-[#1C2430] p-8 border border-[#EAE5DC] dark:border-[#212B3B]">
            <h3 className="font-serif text-2xl text-[#142338] dark:text-[#FAF8F5] mb-4 font-normal">
              Celebrating Academic Excellence
            </h3>
            <p className="font-sans text-sm text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
              UDAAN is the annual Certificate and Gold Medal Distribution Ceremony organized by Shri Govindram Seksaria Institute of Technology and Science (SGSITS), Indore — established in 1952.
            </p>
            <p className="font-sans text-sm text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
              This prestigious occasion recognizes the hard work, perseverance, and academic brilliance of graduating awardees across B.Tech, M.Tech, MCA, B.Pharm, and M.Sc. programs.
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-[#1C2430] p-6 border border-[#EAE5DC] dark:border-[#212B3B] text-center flex flex-col justify-center">
              <span className="font-serif text-3xl text-[#142338] dark:text-[#C5A059] block">70+</span>
              <span className="text-[10px] font-sans tracking-widest text-[#64748B] dark:text-[#94A3B8] uppercase mt-1">Years Legacy</span>
            </div>
            <div className="bg-white dark:bg-[#1C2430] p-6 border border-[#EAE5DC] dark:border-[#212B3B] text-center flex flex-col justify-center">
              <span className="font-serif text-3xl text-[#142338] dark:text-[#C5A059] block">500+</span>
              <span className="text-[10px] font-sans tracking-widest text-[#64748B] dark:text-[#94A3B8] uppercase mt-1">Awards Given</span>
            </div>
            <div className="bg-white dark:bg-[#1C2430] p-6 border border-[#EAE5DC] dark:border-[#212B3B] text-center flex flex-col justify-center">
              <span className="font-serif text-3xl text-[#142338] dark:text-[#C5A059] block">50+</span>
              <span className="text-[10px] font-sans tracking-widest text-[#64748B] dark:text-[#94A3B8] uppercase mt-1">Gold Medals</span>
            </div>
            <div className="bg-white dark:bg-[#1C2430] p-6 border border-[#EAE5DC] dark:border-[#212B3B] text-center flex flex-col justify-center">
              <span className="font-serif text-3xl text-[#142338] dark:text-[#C5A059] block">1000+</span>
              <span className="text-[10px] font-sans tracking-widest text-[#64748B] dark:text-[#94A3B8] uppercase mt-1">Attendees</span>
            </div>
          </div>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#1C2430] p-6 border border-[#EAE5DC] dark:border-[#212B3B]"
            >
              <feature.icon className="h-6 w-6 text-[#C5A059] mb-3" />
              <h4 className="font-serif text-base text-[#142338] dark:text-[#FAF8F5] mb-2">{feature.title}</h4>
              <p className="font-sans text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
