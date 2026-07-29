"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, UserCheck, Shirt, QrCode, FileText, Download, Sparkles, CheckCircle2 } from "lucide-react"

export function Registration() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Official Google Form link extracted from official SGSITS Udaan site
  const registrationFormUrl = "https://forms.gle/xirfNSVTatEpGbf96"

  return (
    <section id="register" className="py-20 bg-muted/30 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <UserCheck className="h-4 w-4" />
              <span>Official Student Registration</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Register for UDAAN 2025</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Click below to complete your registration on the official form portal for degree &amp; medal conferral.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-stretch">
            {/* Direct Link Banner Card */}
            <div className="md:col-span-7 bg-card rounded-3xl p-8 border shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-amber-500 text-white shadow-md">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Official Registration Form</h3>
                    <p className="text-xs text-muted-foreground">Managed by SGSITS Udaan Organizing Committee</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  All graduating students receiving gold medals, merit certificates, or degree certificates must register through the official Google Form link to confirm attendance, guest passes, and seat allocation at the SGSITS Auditorium.
                </p>

                <ul className="space-y-2.5 text-xs text-muted-foreground pt-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-500 flex-shrink-0" />
                    <span>Instant confirmation &amp; guest pass recording</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-500 flex-shrink-0" />
                    <span>Seat assignment in main auditorium hall</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-500 flex-shrink-0" />
                    <span>Ceremonial half-jacket token distribution</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={registrationFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-2xl font-bold text-base transition-all shadow-lg hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <span>Open Registration Form</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
                <p className="text-[11px] text-center text-muted-foreground mt-2">
                  Opens official Google Form portal in a new tab
                </p>
              </div>
            </div>

            {/* Dress Code & Guidelines Column */}
            <div className="md:col-span-5 space-y-6 flex flex-col justify-between">
              {/* Dress Code Box */}
              <div className="bg-card rounded-3xl p-6 border shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500">
                    <Shirt className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Dress Code Policy</h3>
                    <p className="text-xs text-muted-foreground">Mandatory Traditional Wear</p>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground space-y-2">
                  <p><strong>Male Candidates:</strong> White / Off-white Kurta Pyjama.</p>
                  <p><strong>Female Candidates:</strong> White / Off-white Salwar-Kurta or Saree.</p>
                  <p className="text-amber-600 dark:text-amber-400 font-semibold pt-1">
                    Ceremonial half-jackets will be provided at the reporting counter on event morning.
                  </p>
                </div>
              </div>

              {/* Resource Download Quick Box */}
              <div className="bg-gradient-to-br from-amber-500/10 to-purple-500/10 rounded-3xl p-6 border shadow-sm">
                <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-amber-500" /> Event Circular &amp; Guide
                </h3>
                <div className="space-y-2 text-xs">
                  <a
                    href="/docs/brochure.pdf"
                    download
                    className="flex items-center justify-between p-3 rounded-xl bg-card border hover:border-amber-500/50 transition-colors"
                  >
                    <span className="font-medium text-foreground">Official Brochure (PDF)</span>
                    <Download className="h-4 w-4 text-amber-500" />
                  </a>
                  <a
                    href="/docs/dresscode.docx"
                    download
                    className="flex items-center justify-between p-3 rounded-xl bg-card border hover:border-amber-500/50 transition-colors"
                  >
                    <span className="font-medium text-foreground">Dress Code Guidelines</span>
                    <Download className="h-4 w-4 text-amber-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
