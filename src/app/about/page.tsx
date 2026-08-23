import Link from "next/link"
import { MapPin, Shirt } from "lucide-react"
import { Reveal } from "@/components/reveal"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-12 pb-16">
      {/* Header Banner */}
      <section className="py-12 border-b border-border-strong text-center">
        <div className="mx-auto px-4 max-w-4xl">
          <Reveal>
            <span className="text-[11px] font-sans tracking-[0.25em] text-accent uppercase block mb-1">
              INSTITUTIONAL PROFILE
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-4">
              About SGSITS &amp; UDAAN 2026
            </h1>
            <p className="font-sans text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Shri Govindram Seksaria Institute of Technology and Science (SGSITS), Indore — Celebrating over 70 years of academic leadership, technical innovation, and excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link
                href="/#register"
                className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-xs font-sans tracking-[0.15em] uppercase border border-transparent transition-colors"
              >
                Register for Ceremony
              </Link>
              <Link
                href="/docs/brochure.pdf"
                download="UDAAN_2026_Brochure.pdf"
                className="bg-transparent hover:bg-foreground/5 text-foreground px-6 py-2.5 text-xs font-sans tracking-[0.15em] uppercase border border-foreground transition-colors"
              >
                Download Brochure
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="mx-auto px-4 py-12 max-w-4xl space-y-12">

        {/* Section 1: SGSITS Heritage */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 space-y-4 bg-card p-8 border border-border">
            <span className="text-[10px] font-sans tracking-widest text-accent uppercase block">
              ESTABLISHED 1952
            </span>
            <h2 className="font-serif text-2xl text-foreground font-normal">
              Shri Govindram Seksaria Institute of Technology and Science
            </h2>
            <p className="font-sans text-xs text-body leading-relaxed">
              Shri Govindram Seksaria Institute of Technology and Science (SGSITS), Indore, is a premier autonomous institute affiliated to Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal, and approved by AICTE, New Delhi.
            </p>
            <p className="font-sans text-xs text-body leading-relaxed">
              Founded in 1952, it is among Central India’s oldest engineering institutions, renowned for technical education, research laboratories, and an extraordinary alumni global footprint.
            </p>
          </div>

          <div className="md:col-span-5 bg-card p-8 border border-border space-y-3">
            <h3 className="font-serif text-lg text-foreground font-normal pb-2 border-b border-border">
              Key Institutional Status
            </h3>
            <ul className="space-y-2.5 text-xs font-sans text-body">
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Autonomous status granted by UGC &amp; Govt. of M.P.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Approved by AICTE &amp; NBA Accredited Programs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Affiliated to RGPV Bhopal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Premier Technical Rank in Central India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: What is UDAAN */}
        <div className="bg-card p-8 border border-border space-y-6">
          <div>
            <span className="text-[10px] font-sans tracking-widest text-accent uppercase block mb-1">
              THE FLAGSHIP CEREMONY
            </span>
            <h2 className="font-serif text-2xl text-foreground font-normal mb-3">
              What is UDAAN?
            </h2>
            <p className="font-sans text-xs text-body leading-relaxed mb-3">
              <strong>UDAAN</strong> is the flagship Annual Certificate and Gold Medal Distribution Ceremony of SGSITS Indore, honoring graduating scholars and academic achievers in the presence of eminent dignitaries, faculty, and alumni.
            </p>
            <p className="font-sans text-xs text-body leading-relaxed">
              The ceremony recognizes student perseverance and academic distinction across B.Tech, M.Tech, MCA, B.Pharm, and M.Sc. programs by awarding prestigious donor gold medals and merit certificates.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-border">
            <div className="p-4 border border-border text-center">
              <span className="font-serif text-2xl text-foreground dark:text-accent block">50+</span>
              <span className="text-[10px] font-sans tracking-widest text-muted-foreground uppercase">Gold Medals</span>
            </div>
            <div className="p-4 border border-border text-center">
              <span className="font-serif text-2xl text-foreground dark:text-accent block">500+</span>
              <span className="text-[10px] font-sans tracking-widest text-muted-foreground uppercase">Merit Awardees</span>
            </div>
            <div className="p-4 border border-border text-center">
              <span className="font-serif text-2xl text-foreground dark:text-accent block">1000+</span>
              <span className="text-[10px] font-sans tracking-widest text-muted-foreground uppercase">Guests &amp; Faculty</span>
            </div>
          </div>
        </div>

        {/* Section 3: Protocol & Dress Code */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card p-6 border border-border">
            <h3 className="font-serif text-lg text-foreground font-normal mb-2 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" /> Venue &amp; Location
            </h3>
            <p className="font-sans text-xs text-body leading-relaxed mb-4">
              Silveria Hall, SGSITS Campus, 23 Sir M. Visvesvaraya Marg, Indore, Madhya Pradesh 452003.
            </p>
            <div className="space-y-1 text-xs font-sans text-muted-foreground">
              <p>• Entry Gates: Gate 1 &amp; Gate 2</p>
              <p>• Reporting: 08:00 AM IST</p>
            </div>
          </div>

          <div className="bg-card p-6 border border-border">
            <h3 className="font-serif text-lg text-foreground font-normal mb-2 flex items-center gap-2">
              <Shirt className="h-4 w-4 text-accent" /> Attire Protocol
            </h3>
            <p className="font-sans text-xs text-body leading-relaxed mb-4">
              Traditional Indian formal wear is mandatory for receiving certificates and gold medals on stage.
            </p>
            <div className="space-y-1 text-xs font-sans text-muted-foreground">
              <p>• Male: White / Off-white Kurta Pyjama</p>
              <p>• Female: White / Off-white Salwar-Kurta or Saree</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-primary text-white p-8 border border-accent/30 space-y-4">
          <h3 className="font-serif text-2xl font-normal">Ready to Join UDAAN 2026?</h3>
          <p className="font-sans text-xs text-white/80 max-w-md mx-auto">
            Complete your registration, view official documents, or check the gold medalists directory.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/#documents"
              className="bg-white text-primary px-5 py-2.5 text-xs font-sans tracking-widest uppercase font-semibold"
            >
              View Documents
            </Link>
            <Link
              href="/#medalists"
              className="bg-transparent text-primary-foreground border border-primary-foreground px-5 py-2.5 text-xs font-sans tracking-widest uppercase hover:bg-white/10"
            >
              Explore Medalists
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
