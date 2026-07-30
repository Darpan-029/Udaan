"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Clock, MapPin, Calendar, Download } from "lucide-react"

export function Schedule() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scheduleItems = [
    {
      time: "09:00 AM",
      title: "Registration & Half-Jacket Counter",
      description: "Verification of entry passes, guest registration, and ceremonial half-jacket distribution.",
      location: "Main Auditorium Foyer",
    },
    {
      time: "10:00 AM",
      title: "Inaugural Ceremony & Lamp Lighting",
      description: "Academic procession entry, Saraswati Vandana, and welcome address by Director SGSITS.",
      location: "Main Auditorium",
    },
    {
      time: "10:30 AM",
      title: "Degree Certificate Conferral",
      description: "Conferring degree certificates to meritorious graduating scholars across departments.",
      location: "Main Auditorium",
    },
    {
      time: "12:00 PM",
      title: "Donor Gold Medal Distribution",
      description: "Awarding institutional donor gold medals to overall rank holders by Dignitaries.",
      location: "Main Auditorium",
    },
    {
      time: "01:00 PM",
      title: "Networking High Tea",
      description: "High tea and interaction session for awardees, faculty, and family guests.",
      location: "Golden Jubilee Lawn",
    },
    {
      time: "02:30 PM",
      title: "Keynote Address by Chief Guest",
      description: "Inspiring convocation address by eminent chief guest and distinguished alumni.",
      location: "Main Auditorium",
    },
    {
      time: "03:30 PM",
      title: "National Anthem & Group Photograph",
      description: "Formal conclusion of ceremony followed by department group photo sessions.",
      location: "Main Auditorium Steps",
    },
  ]

  return (
    <section id="schedule" className="py-16 bg-[#FAF8F5] dark:bg-[#12161E] border-t border-[#E4DFD7] dark:border-[#212B3B]" ref={ref}>
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[11px] font-sans tracking-[0.2em] text-[#C5A059] uppercase block mb-1">
            PROGRAM TIMELINE
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#142338] dark:text-[#FAF8F5] font-normal">
            Order of Events
          </h2>
          <div className="w-12 h-px bg-[#C5A059] mx-auto mt-4" />
        </motion.div>

        {/* Schedule Info Ribbon */}
        <div className="bg-white dark:bg-[#1C2430] p-6 border border-[#EAE5DC] dark:border-[#212B3B] grid md:grid-cols-3 gap-6 mb-8 text-xs font-sans">
          <div className="flex items-center space-x-3">
            <Calendar className="h-4 w-4 text-[#C5A059]" />
            <div>
              <span className="text-[#64748B] block uppercase tracking-wider text-[10px]">Date</span>
              <span className="font-semibold text-[#142338] dark:text-white">Thursday, 27 August 2026</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="h-4 w-4 text-[#C5A059]" />
            <div>
              <span className="text-[#64748B] block uppercase tracking-wider text-[10px]">Timing</span>
              <span className="font-semibold text-[#142338] dark:text-white">09:00 AM – 04:00 PM IST</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-4 w-4 text-[#C5A059]" />
            <div>
              <span className="text-[#64748B] block uppercase tracking-wider text-[10px]">Venue</span>
              <span className="font-semibold text-[#142338] dark:text-white">SGSITS Main Auditorium</span>
            </div>
          </div>
        </div>

        {/* Minimalist Editorial Timeline Table */}
        <div className="bg-white dark:bg-[#1C2430] border border-[#EAE5DC] dark:border-[#212B3B] divide-y divide-[#EAE5DC] dark:divide-[#212B3B]">
          {scheduleItems.map((item, idx) => (
            <div key={idx} className="p-5 flex flex-col md:flex-row items-start gap-4 hover:bg-[#FAF8F5] dark:hover:bg-[#12161E] transition-colors">
              <div className="md:w-32 flex-shrink-0">
                <span className="font-serif text-base text-[#142338] dark:text-[#C5A059] font-normal">{item.time}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-base text-[#142338] dark:text-white font-normal mb-1">{item.title}</h3>
                <p className="font-sans text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed mb-2">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-[11px] font-sans text-[#C5A059]">
                  <MapPin className="h-3 w-3" /> {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/docs/schedule.pdf"
            className="inline-block bg-[#142338] hover:bg-[#0F1B2B] text-white px-6 py-3 text-xs font-sans tracking-[0.15em] uppercase border border-transparent transition-colors shadow-sm"
          >
            Download Schedule PDF
          </a>
        </div>
      </div>
    </section>
  )
}
