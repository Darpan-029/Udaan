"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Who is eligible to attend UDAAN 2026?",
      answer: "All graduating scholars receiving certificates or donor gold medals, their parents, and faculty members are eligible to attend. Special invitations are issued to distinguished alumni and chief guests.",
    },
    {
      question: "How do I complete registration for the ceremony?",
      answer: "Registration is mandatory for all awardees and must be completed using the official Google Form portal on this website prior to the announced deadline.",
    },
    {
      question: "What is the mandatory dress code?",
      answer: "Traditional Indian formal wear is required. Male candidates should wear white/off-white Kurta Pyjama. Female candidates should wear white/off-white Salwar-Kurta or Saree. Ceremonial half-jackets are provided at the venue registration counter.",
    },
    {
      question: "Can I bring guest family members?",
      answer: "Each award recipient is permitted up to 2 family guests inside the main auditorium. Guest details must be recorded during digital registration.",
    },
    {
      question: "What documents must I present at entry?",
      answer: "Please present your institute photo ID card / Aadhaar card alongside your digital QR pass confirmation at Gate 1 or Gate 2.",
    },
    {
      question: "Is parking available on campus?",
      answer: "Designated complimentary parking is available on the SGSITS campus. Student volunteers will assist with vehicle directions.",
    },
    {
      question: "Will refreshments be served?",
      answer: "Welcome tea is provided during morning registration, followed by a networking high tea session after the main ceremony on the Golden Jubilee Lawn.",
    },
    {
      question: "What if I am unable to attend in person?",
      answer: "The ceremony will be live-streamed on the official SGSITS YouTube channel. Degree certificates and medals can subsequently be collected from the Academic Registrar's office with prior authorization.",
    },
  ]

  return (
    <section id="faq" className="py-16 bg-[#FAF8F5] dark:bg-[#12161E] border-t border-[#E4DFD7] dark:border-[#212B3B]" ref={ref}>
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[11px] font-sans tracking-[0.2em] text-[#C5A059] uppercase block mb-1">
            INFORMATION &amp; INQUIRIES
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#142338] dark:text-[#FAF8F5] font-normal">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-px bg-[#C5A059] mx-auto mt-4" />
        </motion.div>

        <div className="bg-white dark:bg-[#1C2430] border border-[#EAE5DC] dark:border-[#212B3B] divide-y divide-[#EAE5DC] dark:divide-[#212B3B]">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 flex items-center justify-between text-left hover:bg-[#FAF8F5] dark:hover:bg-[#12161E] transition-colors"
              >
                <span className="font-serif text-base text-[#142338] dark:text-white font-normal pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 text-[#C5A059] flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 font-sans text-xs text-[#64748B] dark:text-[#CBD5E1] leading-relaxed border-t border-dashed border-[#EAE5DC] dark:border-[#212B3B] pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
