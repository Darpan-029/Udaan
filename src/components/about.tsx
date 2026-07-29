"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Target, Users, Trophy, BookOpen, Calendar } from "lucide-react"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Award,
      title: "Certificate Distribution",
      description: "Recognizing academic excellence with certificates for outstanding performers across all disciplines.",
    },
    {
      icon: Trophy,
      title: "Gold Medal Ceremony",
      description: "Honoring the brightest minds with prestigious gold medals for exceptional achievements.",
    },
    {
      icon: Users,
      title: "Distinguished Guests",
      description: "Presence of eminent personalities, industry leaders, and academic dignitaries.",
    },
    {
      icon: Target,
      title: "Inspiration for Future",
      description: "Motivating students to strive for excellence and achieve their goals.",
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
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About UDAAN</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A prestigious ceremony celebrating academic excellence and inspiring the next generation of achievers
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-card rounded-2xl p-8 md:p-12 shadow-lg mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Celebrating Excellence</h3>
                <p className="text-muted-foreground mb-4">
                  UDAAN is the annual Certificate and Gold Medal Distribution Ceremony organized by SGSITS Indore.
                  This prestigious event recognizes and honors the outstanding academic achievements of students
                  across various disciplines.
                </p>
                <p className="text-muted-foreground mb-4">
                  The ceremony serves as a platform to celebrate the hard work and dedication of students who have
                  excelled in their academic pursuits, inspiring others to strive for excellence.
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Annual Event</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4" />
                    <span>All Disciplines</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Years Legacy</div>
                </div>
                <div className="bg-primary/10 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Awards Given</div>
                </div>
                <div className="bg-primary/10 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Gold Medals</div>
                </div>
                <div className="bg-primary/10 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Attendees</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
