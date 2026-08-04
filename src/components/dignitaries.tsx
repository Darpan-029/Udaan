"use client"

import Image from "next/image"
import { Award, UserCheck, Calendar, MapPin, Quote, Building2, Landmark } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function Dignitaries() {
  return (
    <section id="dignitaries" className="pt-8 pb-16 bg-background">
      <div className="mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <Reveal className="text-center mb-12">
          <span className="text-[11px] font-sans tracking-[0.2em] text-accent uppercase block mb-1 font-semibold">
            DISTINGUISHED DIGNITARIES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground font-normal">
            Chief Guest &amp; Guest of Honour
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto mt-2 font-sans">
            Honoring eminent leaders gracing the उड़ान 2026 Academic Award Ceremony.
          </p>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </Reveal>

        {/* 1. Chief Guest Card */}
        <Reveal className="mb-10 max-w-4xl mx-auto">
          <div className="relative bg-card dark:bg-[#0D1527] border border-border dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl overflow-hidden card-pop">
            <div className="absolute top-0 right-0 bg-accent text-slate-950 text-[10px] font-sans font-bold tracking-widest uppercase px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5 shadow-sm">
              <Award className="h-3.5 w-3.5" />
              <span>Chief Guest</span>
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Profile Image */}
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-accent/40 shadow-xl mb-4 bg-slate-900 shrink-0">
                  <Image
                    src="/docs/Mr. Inder Singh Parmar.png"
                    alt="Shri Inder Singh Parmar"
                    width={220}
                    height={220}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                <span className="inline-block px-3 py-1 bg-accent/15 border border-accent/30 text-accent font-serif text-xs font-semibold rounded-full uppercase tracking-wider">
                  Chief Guest
                </span>
              </div>

              {/* Chief Guest Info */}
              <div className="md:col-span-8 space-y-3.5 text-left">
                <div>
                  <h3 className="font-serif text-2xl md:text-4xl text-foreground font-normal">
                    Shri Inder Singh Parmar
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-accent font-semibold mt-1 flex items-center gap-1.5">
                    <Landmark className="h-4 w-4 shrink-0 text-accent" />
                    <span>Cabinet Minister, Higher Education, Technical Education &amp; AYUSH, Govt. of M.P.</span>
                  </p>
                </div>

                <div className="space-y-2 font-sans text-xs md:text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground font-semibold">Shri Inder Singh Parmar</strong> is an Indian politician and Cabinet Minister in Madhya Pradesh, representing the Bharatiya Janata Party (BJP).
                  </p>
                  <p>
                    <strong className="text-foreground font-semibold">Political Career:</strong> Serves as the Cabinet Minister for Higher Education, Technical Education, and AYUSH in the Government of Madhya Pradesh. Elected as a Member of the Legislative Assembly (MLA) for a third term from the Shujalpur constituency. Previously served as the Minister of State for School Education in Madhya Pradesh.
                  </p>
                </div>

                <div className="bg-background dark:bg-slate-900/90 border border-border dark:border-slate-800/80 p-4 rounded-xl flex items-start space-x-3 text-xs font-sans">
                  <Quote className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-accent font-bold block">Keynote Address</span>
                    <span className="text-foreground font-medium italic">Empowering India&apos;s youth through quality technical &amp; higher education for a self-reliant future.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 2. Guest of Honour Card */}
        <Reveal className="mb-10 max-w-4xl mx-auto">
          <div className="relative bg-card dark:bg-[#0D1527] border border-border dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl overflow-hidden card-pop">
            <div className="absolute top-0 right-0 bg-slate-800 text-accent text-[10px] font-sans font-bold tracking-widest uppercase px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5 shadow-sm border-b border-l border-accent/30">
              <Award className="h-3.5 w-3.5 text-accent" />
              <span>Guest of Honour</span>
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Profile Image */}
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-accent/40 shadow-xl mb-4 bg-slate-900 shrink-0">
                  <Image
                    src="/docs/Mr. Prafull Jhalani.png"
                    alt="Mr. Prafull Jhalani"
                    width={220}
                    height={220}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                <span className="inline-block px-3 py-1 bg-accent/15 border border-accent/30 text-accent font-serif text-xs font-semibold rounded-full uppercase tracking-wider">
                  Guest of Honour
                </span>
              </div>

              {/* Guest of Honour Info */}
              <div className="md:col-span-8 space-y-3.5 text-left">
                <div>
                  <h3 className="font-serif text-2xl md:text-4xl text-foreground font-normal">
                    Mr. Prafull Jhalani
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-accent font-semibold mt-1 flex items-center gap-1.5">
                    <Building2 className="h-4 w-4 shrink-0 text-accent" />
                    <span>Eminent Industrialist, Director &amp; Philanthropist</span>
                  </p>
                </div>

                <div className="space-y-2 font-sans text-xs md:text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground font-semibold">Mr. Prafull Jhalani</strong> is a prominent industrialist and leader in corporate governance. He serves as Director at Devanshi Electronics Private Limited, Sant Sundardas Foundation, and KPA Welfare Foundation.
                  </p>
                  <p>
                    A distinguished personality committed to social progress and educational encouragement, he graces the उड़ान 2026 Academic Award Ceremony as Guest of Honour to inspire and mentor the graduating awardees.
                  </p>
                </div>

                <div className="bg-background dark:bg-slate-900/90 border border-border dark:border-slate-800/80 p-4 rounded-xl flex items-start space-x-3 text-xs font-sans">
                  <Quote className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-accent font-bold block">Special Address</span>
                    <span className="text-foreground font-medium italic">Inspiring innovation, entrepreneurial spirit, and ethical leadership among future technological leaders.</span>
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

