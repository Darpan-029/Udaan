"use client"

import Image from "next/image"
import { Award, UserCheck, Calendar, MapPin, Sparkles, Building2, Quote } from "lucide-react"
import { Reveal } from "@/components/reveal"

interface Dignitary {
  id: string
  name: string
  role: "Chief Guest" | "Guest of Honour" | "Patron"
  title: string
  organization: string
  bio: string
  topic: string
  badge: string
  image: string
}

const chiefGuest: Dignitary = {
  id: "chief-guest-1",
  name: "Dr. S. Somanath",
  role: "Chief Guest",
  title: "Eminent Scientist & Former Chairman",
  organization: "Indian Space Research Organisation (ISRO)",
  bio: "Distinguished aerospace engineer and visionary scientific leader who steered India's historical Chandrayaan-3 and Aditya-L1 missions to monumental success.",
  topic: "Keynote Address: Pioneering Innovation & Engineering Excellence for Viksit Bharat",
  badge: "Convocation Keynote Speaker",
  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
}

const guestsOfHonour: Dignitary[] = [
  {
    id: "goh-1",
    name: "Smt. Anandiben Patel",
    role: "Guest of Honour",
    title: "Hon'ble Governor of Madhya Pradesh",
    organization: "Raj Bhavan, Bhopal",
    bio: "Hon'ble Chancellor of State Universities, champion of academic reforms, technical education, and women empowerment initiatives across MP.",
    topic: "Presiding Address & Gold Medal Conferral",
    badge: "Hon'ble Chancellor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "goh-2",
    name: "Prof. T. G. Sitharam",
    role: "Guest of Honour",
    title: "Chairman",
    organization: "All India Council for Technical Education (AICTE)",
    bio: "Renowned academic leader and geotechnical researcher driving national initiatives in digital education and engineering accreditation.",
    topic: "Guest Address: Future of Technical Education & AI Integration",
    badge: "AICTE Chairman",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "goh-3",
    name: "Shri Rajesh Toshniwal",
    role: "Guest of Honour",
    title: "Distinguished Alumnus & Industrialist",
    organization: "Toshniwal Industries Ltd. (1984 CSE Batch)",
    bio: "Pioneer industrialist, philanthropist, and major donor behind institutional research chairs and student gold medal endowments.",
    topic: "Alumni Address: Industry Leadership & Global Ethics",
    badge: "Distinguished Alumnus",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
  }
]

export function Dignitaries() {
  return (
    <section id="dignitaries" className="pt-8 pb-16 bg-background">
      <div className="mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <Reveal className="text-center mb-12">
          <span className="text-[11px] font-sans tracking-[0.2em] text-accent uppercase block mb-1">
            DISTINGUISHED DIGNITARIES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground font-normal">
            Chief Guest &amp; Guests of Honour
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto mt-2 font-sans">
            Honoring eminent leaders, scientific visionaries, and academic patrons gracing the उड़ान 2026 Convocation &amp; Medal Distribution Ceremony.
          </p>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </Reveal>

        {/* Featured Chief Guest Hero Card */}
        <Reveal className="mb-10">
          <div className="relative bg-card dark:bg-[#0D1527] border border-border dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl overflow-hidden card-pop">
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-[10px] font-sans font-bold tracking-widest uppercase px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5 shadow-sm">
              <Sparkles className="h-3 w-3" />
              <span>{chiefGuest.badge}</span>
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
                  {chiefGuest.role}
                </span>
              </div>

              {/* Chief Guest Info */}
              <div className="md:col-span-8 space-y-3 text-left">
                <div>
                  <h3 className="font-serif text-2xl md:text-4xl text-foreground font-normal">
                    {chiefGuest.name}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-accent font-medium mt-1">
                    {chiefGuest.title} — <span className="text-foreground font-semibold">{chiefGuest.organization}</span>
                  </p>
                </div>

                <p className="font-sans text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {chiefGuest.bio}
                </p>

                <div className="bg-background dark:bg-slate-900/90 border border-border dark:border-slate-800/80 p-4 rounded-xl flex items-start space-x-3 text-xs font-sans">
                  <Quote className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-accent font-bold block">Keynote Topic</span>
                    <span className="text-foreground font-medium italic">{chiefGuest.topic}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Guests of Honour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guestsOfHonour.map((goh) => (
            <Reveal key={goh.id}>
              <div className="bg-card dark:bg-[#0D1527] border border-border dark:border-slate-800 rounded-2xl p-6 shadow-md flex flex-col justify-between h-full card-pop">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-sans uppercase tracking-widest text-accent font-semibold px-2.5 py-1 bg-accent/10 rounded-md border border-accent/20">
                      {goh.role}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-sans truncate">{goh.badge}</span>
                  </div>

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border-2 border-accent/30 text-accent">
                      <Building2 className="h-7 w-7 text-accent/80" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-foreground font-normal leading-snug">
                        {goh.name}
                      </h4>
                      <p className="text-[11px] text-accent font-medium mt-0.5 line-clamp-1">
                        {goh.title}
                      </p>
                      <p className="text-[10px] text-muted-foreground line-clamp-1">
                        {goh.organization}
                      </p>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-4">
                    {goh.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-border dark:border-slate-800 text-[11px] font-sans text-foreground/90">
                  <span className="text-accent font-semibold block text-[10px] uppercase tracking-wider mb-0.5">Session</span>
                  <span className="italic">{goh.topic}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Event Quick Details Ribbon */}
        <Reveal className="mt-10">
          <div className="bg-card dark:bg-[#0D1527] border border-border dark:border-slate-800 rounded-2xl p-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs font-sans card-pop">
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
            <div className="p-3">
              <Award className="h-5 w-5 text-accent mx-auto mb-1.5" />
              <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Ceremony</span>
              <span className="font-semibold text-foreground">50+ Donor Gold Medals</span>
            </div>
            <div className="p-3">
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
