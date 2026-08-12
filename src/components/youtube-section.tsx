"use client"

import { Play, ExternalLink } from "lucide-react"
import { Reveal } from "@/components/reveal"

const youtubeVideoId = "C08rfnVAXY0"
const youtubeUrl = "https://www.youtube.com/live/C08rfnVAXY0?si=6afenm0srB46vcGR"

export function YoutubeSection() {
  return (
    <section
      id="previous-event"
      className="py-10 md:py-14 bg-background border-t border-border relative overflow-hidden"
    >
      <div className="mx-auto px-4 max-w-4xl relative z-10">
        <Reveal className="text-center mb-6">
          <span className="text-[11px] font-sans tracking-[0.2em] text-accent uppercase block mb-1 font-bold">
            PREVIOUS YEAR
          </span>
          <h2 className="font-serif text-2xl md:text-4xl text-foreground font-normal">
            उड़ान — Ceremony Highlights
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground max-w-lg mx-auto mt-1.5 font-sans">
            Relive the magic of last year&apos;s Academic Award Ceremony.
          </p>
          <div className="w-14 h-0.5 bg-accent mx-auto mt-3 rounded-full" />
        </Reveal>

        {/* YouTube Embed */}
        <Reveal>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border dark:border-slate-800 bg-card card-pop">
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`}
                title="उड़ान Previous Year Ceremony Highlights"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full absolute inset-0 rounded-2xl"
              />
            </div>
          </div>
        </Reveal>

        {/* Watch on YouTube CTA */}
        <Reveal className="mt-5 text-center">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="watch-youtube-link"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card hover:bg-card-subtle border border-accent/40 text-foreground font-sans text-xs font-bold tracking-wider uppercase transition-all shadow-sm hover:scale-105 group"
          >
            <Play className="h-3.5 w-3.5 fill-accent text-accent group-hover:scale-110 transition-transform" />
            <span>Watch Full Event on YouTube</span>
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
