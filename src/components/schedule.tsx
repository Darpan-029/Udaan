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
      title: "Registration & Welcome",
      description: "Participant registration and welcome refreshments",
      location: "Main Auditorium Foyer",
    },
    {
      time: "10:00 AM",
      title: "Inaugural Ceremony",
      description: "Lighting of lamp and welcome address",
      location: "Main Auditorium",
    },
    {
      time: "10:30 AM",
      title: "Certificate Distribution",
      description: "Distribution of certificates to meritorious students",
      location: "Main Auditorium",
    },
    {
      time: "12:00 PM",
      title: "Gold Medal Ceremony",
      description: "Awarding gold medals to prestigious achievers",
      location: "Main Auditorium",
    },
    {
      time: "01:00 PM",
      title: "Lunch Break",
      description: "Networking lunch for all attendees",
      location: "Dining Hall",
    },
    {
      time: "02:30 PM",
      title: "Guest Speaker Session",
      description: "Inspiring talk by distinguished alumni",
      location: "Main Auditorium",
    },
    {
      time: "03:30 PM",
      title: "Vote of Thanks & Conclusion",
      description: "Closing remarks and group photograph",
      location: "Main Auditorium",
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="schedule" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Event Schedule</h2>
            <p className="text-lg text-muted-foreground">
              A day filled with celebration, recognition, and inspiration
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <Calendar className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-semibold">Date</div>
                  <div className="text-sm text-muted-foreground">March 15, 2025</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-semibold">Time</div>
                  <div className="text-sm text-muted-foreground">09:00 AM - 04:00 PM</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-semibold">Venue</div>
                  <div className="text-sm text-muted-foreground">SGSITS Main Auditorium</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-4">
            {scheduleItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card rounded-xl p-6 border hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-32 flex-shrink-0">
                    <div className="text-primary font-semibold">{item.time}</div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-2">{item.description}</p>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 text-center">
            <a
              href="/docs/schedule.pdf"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Download className="h-5 w-5" />
              <span>Download Detailed Schedule</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
