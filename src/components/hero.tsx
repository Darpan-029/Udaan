import Image from "next/image"
import { CountdownTimer } from "@/components/countdown-timer"
import { Reveal } from "@/components/reveal"
import heroImage from "../../public/images/udaan_stage.webp"

export function Hero() {
  return (
    <section className="w-full bg-background text-foreground border-t border-border-strong pt-4">
      <div className="relative w-[90%] max-w-6xl mx-auto my-6 px-4">
        <div className="relative h-[420px] md:h-[500px] w-full overflow-hidden border border-border shadow-md rounded-2xl card-pop">
          <Image
            src={heroImage}
            alt="SGSITS Udaan Graduation & Gold Medal Ceremony"
            fill
            priority
            sizes="90vw"
            className="object-cover object-center brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-[#0F1B2B]/45 flex flex-col items-center justify-center text-center p-6">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-normal tracking-[0.12em] uppercase leading-tight max-w-3xl drop-shadow-md">
                CELEBRATING THE CLASS OF 2026
              </h2>
            </Reveal>

            <Reveal className="mt-4 mb-8">
              <p className="font-sans text-xs md:text-sm text-white/90 uppercase tracking-[0.2em]">
                Annual Certificate &amp; Gold Medal Distribution Ceremony
              </p>
            </Reveal>

            <Reveal>
              <a
                href="#schedule"
                className="inline-block bg-[#1B2A4A] hover:bg-primary text-white px-7 py-3 text-xs md:text-sm font-sans tracking-[0.18em] uppercase border border-white/20 transition-all shadow-md hover:border-white/40 rounded-xl"
              >
                VIEW CEREMONY DETAILS
              </a>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Sub-Hero Text & Event Details Header */}
      <div className="max-w-4xl mx-auto text-center px-4 py-8">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground font-normal tracking-wide">
          Congratulations to our graduates.
        </h2>
        <p className="font-sans text-sm md:text-base text-muted-foreground mt-2 tracking-wide">
          Thursday, 27 August 2026 | SGSITS Auditorium, Indore | Livestream available
        </p>
        <p className="font-serif text-sm italic text-accent mt-2">
          &quot;आज की सफलता, कल की प्रेरणा — Today&apos;s success, tomorrow&apos;s inspiration&quot;
        </p>

        {/* Countdown Timer Component */}
        <div className="my-8 py-4 border-y border-border">
          <CountdownTimer />
        </div>

        {/* Minimalist Stats Summary Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-center">
          <div className="p-5 border border-border bg-card rounded-2xl card-pop">
            <span className="block font-serif text-3xl text-foreground dark:text-accent">500+</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground mt-1 block">Graduating Awardees</span>
          </div>
          <div className="p-5 border border-border bg-card rounded-2xl card-pop">
            <span className="block font-serif text-3xl text-foreground dark:text-accent">50+</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground mt-1 block">Gold Medals Awarded</span>
          </div>
          <div className="p-5 border border-border bg-card rounded-2xl card-pop">
            <span className="block font-serif text-3xl text-foreground dark:text-accent">70+</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground mt-1 block">Years of Legacy</span>
          </div>
        </div>
      </div>
    </section>
  )
}
