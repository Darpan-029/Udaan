"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronDown, HelpCircle } from "lucide-react"
import { useState } from "react"

export function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Who is eligible to attend UDAAN?",
      answer: "All students who have received certificates or medals, their parents, and faculty members are eligible to attend. Special invitations are sent to distinguished guests and alumni.",
    },
    {
      question: "How do I register for the event?",
      answer: "Registration can be done through the online registration form available on this website. You can also register by scanning the QR code provided in the brochure. Registration is mandatory for all attendees.",
    },
    {
      question: "Is there a dress code for the event?",
      answer: "Yes, the dress code is formal academic attire. For students receiving awards, it is recommended to wear formal academic gowns if available. Other attendees should dress in formal or semi-formal attire.",
    },
    {
      question: "Can I bring guests to the ceremony?",
      answer: "Each award recipient is allowed to bring up to 2 guests. Additional guests may be accommodated based on venue capacity. Please indicate the number of guests during registration.",
    },
    {
      question: "What documents do I need to bring?",
      answer: "Please bring a valid ID proof, your award letter (if received), and the registration confirmation email. Students receiving certificates should also carry their college ID card.",
    },
    {
      question: "Is parking available at the venue?",
      answer: "Yes, free parking is available at the SGSITS campus for all attendees. Volunteers will be available to guide you to the parking area.",
    },
    {
      question: "Will refreshments be provided?",
      answer: "Yes, light refreshments will be served during the registration period and a networking lunch will be provided after the main ceremony.",
    },
    {
      question: "What if I cannot attend in person?",
      answer: "The ceremony will be live-streamed on the official SGSITS YouTube channel. Certificates and medals can be collected from the college office after the event with proper authorization.",
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="faq" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about UDAAN
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card rounded-xl border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-accent transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4 text-muted-foreground"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
