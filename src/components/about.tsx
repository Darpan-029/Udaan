import * as React from "react"
import { Award, Target, Users, Trophy } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Award,
      title: "Certificate Distribution",
      description: "Recognizing academic excellence with formal certificates for outstanding performers across all disciplines.",
    },
    {
      icon: Trophy,
      title: "Gold Medal Conferral",
      description: "Honoring top rankers with prestigious donor gold medals for exceptional scholarly achievements.",
    },
    {
      icon: Users,
      title: "Distinguished Dignitaries",
      description: "Celebrating in the presence of eminent personalities, industry leaders, faculty, and alumni.",
    },
    {
      icon: Target,
      title: "Academic Inspiration",
      description: "Motivating upcoming scholars to pursue higher standards of technical innovation and leadership.",
    },
  ]

  return (
    <section id="about" className="py-16 bg-background text-foreground border-t border-border scroll-mt-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-[11px] font-sans tracking-[0.2em] text-accent uppercase block mb-1">
            INSTITUTIONAL HONORS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-normal">
            About SGSITS &amp; UDAAN
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </div>

        {/* Editorial Text Block */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch mb-12">
          <div className="md:col-span-7 bg-card p-8 border border-border">
            <h3 className="font-serif text-2xl text-foreground mb-4 font-normal">
              Celebrating Academic Excellence
            </h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
              UDAAN is the annual Certificate and Gold Medal Distribution Ceremony organized by Shri Govindram Seksaria Institute of Technology and Science (SGSITS), Indore — established in 1952.
            </p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              This prestigious occasion recognizes the hard work, perseverance, and academic brilliance of graduating awardees across B.Tech, M.Tech, MCA, B.Pharm, and M.Sc. programs.
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-card p-6 border border-border text-center flex flex-col justify-center">
              <span className="font-serif text-3xl text-foreground dark:text-accent block">70+</span>
              <span className="text-[10px] font-sans tracking-widest text-muted-foreground uppercase mt-1">Years Legacy</span>
            </div>
            <div className="bg-card p-6 border border-border text-center flex flex-col justify-center">
              <span className="font-serif text-3xl text-foreground dark:text-accent block">500+</span>
              <span className="text-[10px] font-sans tracking-widest text-muted-foreground uppercase mt-1">Awards Given</span>
            </div>
            <div className="bg-card p-6 border border-border text-center flex flex-col justify-center">
              <span className="font-serif text-3xl text-foreground dark:text-accent block">50+</span>
              <span className="text-[10px] font-sans tracking-widest text-muted-foreground uppercase mt-1">Gold Medals</span>
            </div>
            <div className="bg-card p-6 border border-border text-center flex flex-col justify-center">
              <span className="font-serif text-3xl text-foreground dark:text-accent block">1000+</span>
              <span className="text-[10px] font-sans tracking-widest text-muted-foreground uppercase mt-1">Attendees</span>
            </div>
          </div>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-card p-6 border border-border"
            >
              <feature.icon className="h-6 w-6 text-accent mb-3" />
              <h3 className="font-serif text-base text-foreground mb-2">{feature.title}</h3>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
