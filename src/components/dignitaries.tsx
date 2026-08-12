"use client"

import Image from "next/image"
import { Award, UserCheck, Calendar, MapPin, Quote, Building2, Landmark, GraduationCap, Globe, ExternalLink } from "lucide-react"
import { Reveal } from "@/components/reveal"

const guestsOfHonour = [
  {
    id: "prafull-jhalani",
    name: "Shri Prafull Jhalani",
    image: "/docs/Mr. Prafull Jhalani.png",
    designation: "Eminent Industrialist, Director & Philanthropist",
    badge: "Guest of Honour",
    isAlumni: true,
    university: "SGSITS Indore",
    location: "Indore, Madhya Pradesh",
    appointed: "Corporate Pioneer",
    tenure: "SGSITS Alumnus",
    details: [
      "Distinguished Alumnus of SGSITS Indore with 35+ years of industrial leadership.",
      "Director at Devanshi Electronics Pvt. Ltd., Sant Sundardas Foundation, & KPA Welfare Foundation.",
      "Actively supports student scholarships, academic honors, & institutional development at SGSITS.",
      "Prominent philanthropist committed to social welfare, technical innovation, and mentoring young engineers.",
    ],
    addressTitle: "Special Address",
    quote: "Inspiring innovation, entrepreneurial spirit, and ethical leadership among future technological leaders.",
    website: "https://devanshielectronics.com",
    websiteLabel: "Devanshi Electronics Profile",
  },
  {
    id: "alok-sharma",
    name: "Prof. Alok Sharma",
    image: "/docs/prof-alok_sharma.png",
    designation: "Vice Chancellor, RGPV Bhopal",
    badge: "Guest of Honour",
    isAlumni: false,
    university: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    location: "Bhopal, Madhya Pradesh",
    appointed: "May 2026",
    tenure: "4-Year Tenure",
    details: [
      "Current Vice Chancellor of Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal.",
      "Appointed in May 2026 for a 4-year tenure to steer technical higher education across M.P.",
      "Previously served as Director of the Indian Institute of Tourism and Travel Management (IITTM), Gwalior.",
    ],
    addressTitle: "Guest Address",
    quote: "Advancing technical education standards, interdisciplinary research, and academic excellence in MP.",
    website: "https://www.rgpv.ac.in",
    websiteLabel: "RGPV Official Site",
  },
  {
    id: "rakesh-singhai",
    name: "Prof. Dr. Rakesh Singhai",
    image: "/docs/prof dr rakesh_Singhal.png",
    designation: "Vice Chancellor, DAVV Indore",
    badge: "Guest of Honour",
    isAlumni: false,
    university: "Devi Ahilya Vishwavidyalaya",
    location: "Indore, Madhya Pradesh",
    appointed: "September 2024",
    tenure: "4-Year Tenure",
    details: [
      "Current Vice Chancellor of Devi Ahilya Vishwavidyalaya (DAVV), Indore.",
      "Holds M.Tech and Ph.D. degrees from IIT Delhi.",
      "Appointed Sept 2024 for a 4-year tenure; former Founding Director of SIT Shivpuri.",
    ],
    addressTitle: "Academic Address",
    quote: "Fostering research culture, institutional autonomy, and holistic student development.",
    website: "https://www.dauniv.ac.in",
    websiteLabel: "DAVV Official Site",
  },
  {
    id: "milind-dandekar",
    name: "Dr. Milind Dattatray Dandekar",
    image: "/docs/dr_milind_dandekar.png",
    designation: "Vice Chancellor, MPBOU Bhopal",
    badge: "Guest of Honour",
    isAlumni: false,
    university: "Madhya Pradesh Bhoj (Open) University",
    location: "Bhopal, Madhya Pradesh",
    details: [
      "Current Vice Chancellor of Madhya Pradesh Bhoj (Open) University, Bhopal.",
      "Leading open learning and accessible higher education initiatives across Madhya Pradesh.",
      "Dedicated to expanding distance learning reach and technical skill development.",
    ],
    addressTitle: "Honour Address",
    quote: "Promoting inclusive higher education, skill enrichment, and life-long learning opportunities.",
    website: "https://mpbou.edu.in",
    websiteLabel: "MPBOU Official Site",
  },
]

export function Dignitaries() {
  return (
    <section id="dignitaries" className="pt-6 pb-14 bg-background">
      <div className="mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <Reveal className="text-center mb-8">
          <span className="text-[10px] md:text-[11px] font-sans tracking-[0.2em] text-accent uppercase block mb-1 font-bold drop-shadow-sm">
            DISTINGUISHED DIGNITARIES
          </span>
          <h2 className="font-serif text-2xl md:text-4xl text-foreground font-normal">
            Chief Guest &amp; Guests of Honour
          </h2>
          <p className="text-xs text-muted-foreground max-w-xl mx-auto mt-1.5 font-sans leading-relaxed">
            Honoring eminent academic visionaries and industrial stalwarts gracing the उड़ान 2026 Academic Award Ceremony.
          </p>
          <div className="w-14 h-0.5 bg-accent mx-auto mt-3 rounded-full" />
        </Reveal>

        {/* 1. Chief Guest Card (Featured Compact Card) */}
        <Reveal className="mb-10 max-w-4xl mx-auto">
          <div className="relative bg-card dark:bg-[#0D1527] border border-accent/30 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-lg overflow-hidden card-pop">
            <div className="absolute top-0 right-0 bg-accent text-slate-950 text-[10px] font-sans font-bold tracking-widest uppercase px-3.5 py-1 rounded-bl-xl flex items-center gap-1.5 shadow-sm">
              <Award className="h-3 w-3" />
              <span>Chief Guest</span>
            </div>

            <div className="grid md:grid-cols-12 gap-6 items-center">
              {/* Profile Image */}
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-3 border-accent shadow-md mb-3 bg-slate-900 shrink-0">
                  <Image
                    src="/docs/Mr. Inder Singh Parmar.png"
                    alt="Shri Inder Singh Parmar"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                <span className="inline-block px-3 py-0.5 bg-accent/20 border border-accent/40 text-accent font-serif text-[11px] font-bold rounded-full uppercase tracking-wider">
                  Chief Guest
                </span>
              </div>

              {/* Chief Guest Info */}
              <div className="md:col-span-8 space-y-2.5 text-left">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground font-normal">
                    Shri Inder Singh Parmar
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-accent font-bold mt-0.5 flex items-center gap-1.5">
                    <Landmark className="h-4 w-4 shrink-0 text-accent" />
                    <span>Cabinet Minister, Higher Education, Technical Education &amp; AYUSH, Govt. of M.P.</span>
                  </p>
                </div>

                <div className="space-y-1.5 font-sans text-xs text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground font-semibold">Shri Inder Singh Parmar</strong> is Cabinet Minister in Madhya Pradesh, representing the BJP.
                  </p>
                  <p>
                    <strong className="text-foreground font-semibold">Political Career:</strong> Serves as Cabinet Minister for Higher Education, Technical Education, and AYUSH in M.P. Elected 3-term MLA from Shujalpur constituency; previously Minister of State for School Education.
                  </p>
                </div>

                <div className="bg-background dark:bg-slate-900/90 border border-accent/20 dark:border-slate-800/80 p-3 rounded-xl flex items-start space-x-2.5 text-xs font-sans">
                  <Quote className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-accent font-bold block">Keynote Address</span>
                    <span className="text-foreground font-medium italic text-[11px]">Empowering India&apos;s youth through quality technical &amp; higher education for a self-reliant future.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Guest of Honour Section Title */}
        <Reveal className="text-center mb-6">
          <h3 className="font-serif text-xl md:text-2xl text-foreground font-normal tracking-wide">
            Guests of Honour
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Eminent leaders in industry, higher education, and university administration
          </p>
        </Reveal>

        {/* 2 Cards per Row Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-6xl mx-auto">
          {guestsOfHonour.map((guest) => (
            <Reveal key={guest.id} className="h-full">
              <div className="relative bg-card dark:bg-[#0D1527] border border-border dark:border-slate-800 rounded-2xl p-5 shadow-lg overflow-hidden card-pop flex flex-col justify-between h-full">
                {/* Top Badge */}
                <div className="absolute top-0 right-0 bg-slate-900 dark:bg-slate-800 text-amber-300 text-[9px] font-sans font-extrabold tracking-widest uppercase px-3 py-1 rounded-bl-xl flex items-center gap-1 shadow-sm border-b border-l border-amber-400/40">
                  <Award className="h-3 w-3 text-amber-300" />
                  <span>{guest.badge}</span>
                </div>

                <div>
                  {/* Avatar & Header */}
                  <div className="flex flex-col items-center text-center mt-2 mb-3">
                    <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-3 border-accent/40 shadow-md mb-2 bg-slate-900 shrink-0">
                      <Image
                        src={guest.image}
                        alt={guest.name}
                        width={160}
                        height={160}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex flex-wrap justify-center gap-1 mb-2">
                      <span className="inline-block px-2.5 py-0.5 bg-accent/15 border border-accent/30 text-accent font-serif text-[10px] font-bold rounded-full uppercase tracking-wider">
                        Guest of Honour
                      </span>
                      {guest.isAlumni && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-amber-500/20 border border-amber-500/40 text-amber-800 dark:text-amber-300 font-sans text-[10px] font-extrabold rounded-full uppercase tracking-wider">
                          <GraduationCap className="h-3 w-3" /> SGSITS Alumnus
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-xl md:text-2xl text-foreground font-normal leading-tight">
                      {guest.name}
                    </h3>

                    <p className="font-sans text-xs text-accent font-bold mt-1 leading-snug flex items-center justify-center gap-1 text-center">
                      <Building2 className="h-3.5 w-3.5 shrink-0 text-accent" />
                      <span>{guest.designation}</span>
                    </p>

                    {guest.location && (
                      <p className="font-sans text-[11px] text-muted-foreground flex items-center justify-center gap-1 mt-1 font-medium">
                        <MapPin className="h-3 w-3 text-accent shrink-0" />
                        <span>Location: {guest.location}</span>
                      </p>
                    )}
                  </div>

                  {/* Metadata tags (Appointed / Tenure) */}
                  {(guest.appointed || guest.tenure) && (
                    <div className="flex flex-wrap justify-center gap-1.5 text-[10px] font-sans mb-3">
                      {guest.appointed && (
                        <span className="px-2 py-0.5 rounded-md bg-muted/60 dark:bg-slate-800 border border-border dark:border-slate-700 text-foreground font-semibold">
                          Appointed: {guest.appointed}
                        </span>
                      )}
                      {guest.tenure && (
                        <span className="px-2 py-0.5 rounded-md bg-accent/10 border border-accent/20 text-accent font-bold">
                          {guest.tenure}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Details List */}
                  <div className="space-y-1 font-sans text-xs text-muted-foreground leading-relaxed mb-3 text-left border-t border-border/40 dark:border-slate-800/80 pt-2.5">
                    {guest.details.map((detail, idx) => (
                      <p key={idx} className="flex items-start gap-1.5">
                        <span className="text-accent font-bold shrink-0">•</span>
                        <span>{detail}</span>
                      </p>
                    ))}
                  </div>
                </div>

                {/* Footer Section: Quote box & Website Link */}
                <div className="space-y-2.5 pt-2 border-t border-border/40 dark:border-slate-800/80 mt-auto">
                  <div className="bg-background dark:bg-slate-900/90 border border-border dark:border-slate-800/80 p-2.5 rounded-xl flex items-start space-x-2 text-xs font-sans">
                    <Quote className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-accent font-bold block">{guest.addressTitle}</span>
                      <span className="text-foreground font-medium italic text-[11px] leading-tight block">{guest.quote}</span>
                    </div>
                  </div>

                  {guest.website && (
                    <div className="text-center pt-0.5">
                      <a
                        href={guest.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-sans font-bold text-accent hover:text-accent-light underline underline-offset-4 transition-colors"
                      >
                        <Globe className="h-3.5 w-3.5" />
                        <span>{guest.websiteLabel}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Event Quick Details Ribbon */}
        <Reveal className="mt-10">
          <div className="bg-card dark:bg-[#0D1527] border border-border dark:border-slate-800 rounded-2xl p-4 grid grid-cols-2 md:grid-cols-3 gap-3 text-center text-xs font-sans card-pop max-w-4xl mx-auto">
            <div className="p-2.5">
              <Calendar className="h-4 w-4 text-accent mx-auto mb-1" />
              <span className="text-muted-foreground block text-[9px] uppercase tracking-wider font-semibold">Date</span>
              <span className="font-semibold text-foreground text-xs">Thursday, 27 August 2026</span>
            </div>
            <div className="p-2.5">
              <MapPin className="h-4 w-4 text-accent mx-auto mb-1" />
              <span className="text-muted-foreground block text-[9px] uppercase tracking-wider font-semibold">Venue</span>
              <span className="font-semibold text-foreground text-xs">SGSITS Main Auditorium</span>
            </div>
            <div className="p-2.5 col-span-2 md:col-span-1">
              <UserCheck className="h-4 w-4 text-accent mx-auto mb-1" />
              <span className="text-muted-foreground block text-[9px] uppercase tracking-wider font-semibold">Reporting</span>
              <span className="font-semibold text-foreground text-xs">09:00 AM sharply</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
