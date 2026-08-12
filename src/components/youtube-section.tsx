"use client"

import { Play, ExternalLink } from "lucide-react"
import { Reveal } from "@/components/reveal"

const youtubeVideoId = "C08rfnVAXY0"
const youtubeUrl = "https://www.youtube.com/live/C08rfnVAXY0?si=6afenm0srB46vcGR"

export function YoutubeSection() {
  return (
    <section
      id="previous-event"
      className="py-6 md:py-8 border-t border-border-strong relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(215 52% 14%) 0%, hsl(215 48% 18%) 50%, hsl(215 44% 22%) 100%)",
      }}
    >
      {/* Decorative glow blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(39 58% 58%) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(39 65% 68%) 0%, transparent 70%)" }} />

      <div className="mx-auto px-4 max-w-3xl relative z-10">
        <Reveal className="text-center mb-4">
          <span className="text-[10px] font-sans tracking-[0.25em] text-amber-300 uppercase block mb-1 font-bold drop-shadow-sm">
            PREVIOUS YEAR
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-white font-normal">
            उड़ान — Ceremony Highlights
          </h2>
          <p className="text-xs text-white/60 max-w-lg mx-auto mt-1 font-sans">
            Relive the magic of last year&apos;s Academic Award Ceremony.
          </p>
        </Reveal>

        {/* YouTube Embed */}
        <Reveal>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            {/* Gradient border glow */}
            <div
              className="absolute -inset-px rounded-2xl opacity-60 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, hsl(39 58% 52% / 0.5), transparent 50%, hsl(39 65% 68% / 0.3))",
              }}
            />
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
        <Reveal className="mt-3 text-center">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="watch-youtube-link"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-amber-400/40 text-amber-300 hover:bg-amber-400/10 transition-all text-[11px] font-sans tracking-wider uppercase font-semibold group"
          >
            <Play className="h-3 w-3 fill-amber-300 group-hover:scale-110 transition-transform" />
            <span>Watch on YouTube</span>
            <ExternalLink className="h-3 w-3 opacity-60" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
