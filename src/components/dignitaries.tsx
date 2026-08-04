"use client"

import Image from "next/image"
import { Award, UserCheck, Calendar, MapPin, Quote } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function Dignitaries() {
  return (
    <section id="dignitaries" className="pt-8 pb-16 bg-background">
      <div className="mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <Reveal className="text-center mb-12">
          <span className="text-[11px] font-sans tracking-[0.2em] text-accent uppercase block mb-1">
            DISTINGUISHED DIGNITARY
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground font-normal">
            Chief Guest
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto mt-2 font-sans">
            Honoring an eminent leader gracing the उड़ान 2026 Academic Award Ceremony.
          </p>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </Reveal>

        {/* Featured Chief Guest Hero Card */}
        <Reveal className="mb-10 max-w-4xl mx-auto">
          <div className="relative bg-card dark:bg-[#0D1527] border border-border dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl overflow-hidden card-pop">
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-[10px] font-sans font-bold tracking-widest uppercase px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5 shadow-sm">
              <Award className="h-3 w-3" />
              <span>Convocation Keynote Speaker</span>
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Profile Image & Avatar Accent */}
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-accent/40 shadow-lg mb-4">
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center text-accent">
                    <UserCheck className="h-20 w-20 text-accent/70" />
                  </div>
                </div>
                <span className="inline-block px-3 py-1 bg-accent/15 border border-accent/30 text-accent font-serif text-xs font-semibold rounded-full uppercase tracking-wider">
                  Chief Guest
                </span>
              </div>

              {/* Chief Guest Info */}
              <div className="md:col-span-8 space-y-3 text-left">
                <div>
                  <h3 className="font-serif text-2xl md:text-4xl text-foreground font-normal">
                    Will be updated soon
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-accent font-medium mt-1">
                    Details to be announced
                  </p>
                </div>

                <p className="font-sans text-xs md:text-sm text-muted-foreground leading-relaxed italic">
                  The Chief Guest details for उड़ान 2026 Academic Award Ceremony will be announced soon. Please check back for updates.
                </p>

                <div className="bg-background dark:bg-slate-900/90 border border-border dark:border-slate-800/80 p-4 rounded-xl flex items-start space-x-3 text-xs font-sans">
                  <Quote className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-accent font-bold block">Keynote Topic</span>
                    <span className="text-foreground font-medium italic">Will be updated soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Event Quick Details Ribbon */}
        <Reveal className="mt-10">
          <div className="bg-card dark:bg-[#0D1527] border border-border dark:border-slate-800 rounded-2xl p-5 grid grid-cols-2 md:grid-cols-3 gap-4 text-center text-xs font-sans card-pop max-w-4xl mx-auto">
            <div className="p-3">
              <Calendar className="h-5 w-5 text-accent mx-auto mb-1.5" />
              <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Date</span>
              <span className="font-semibold text-foreground">Thursday, 27 August 2026</span>
            </div>
            <div className="p-3">
              <MapPin className="h-5 w-5 text-accent mx-auto mb-1.5" />
              <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Venue</span>
              <span className="font-semibold text-foreground">SGSITS Main Auditorium</span>
            </div>
            <div className="p-3 col-span-2 md:col-span-1">
              <UserCheck className="h-5 w-5 text-accent mx-auto mb-1.5" />
              <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Reporting</span>
              <span className="font-semibold text-foreground">09:00 AM sharply</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
