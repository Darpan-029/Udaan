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
            alt="SGSITS उड़ान Academic Award Ceremony"
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
                Academic Award Ceremony — SGSITS Indore
              </p>
            </Reveal>

            <Reveal>
              <a
                href="#dignitaries"
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
          Thursday, 27 August 2026 | SGSITS Auditorium, Indore
        </p>
        <p className="font-serif text-sm md:text-base italic text-accent mt-2 font-semibold drop-shadow-sm">
          &quot;आज की सफलता, कल की प्रेरणा — Today&apos;s success, tomorrow&apos;s inspiration&quot;
        </p>

        {/* Countdown Timer Component */}
        <div className="my-8 py-4 border-y border-border">
          <CountdownTimer />
        </div>

        {/* Stats row with gradient accent cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 text-center">
          <div
            className="p-6 rounded-2xl card-pop relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(215 52% 14%) 0%, hsl(215 48% 20%) 100%)",
              border: "1px solid hsl(39 55% 52% / 0.25)",
            }}
          >
            <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 30% 50%, hsl(39 58% 52%) 0%, transparent 65%)" }} />
            <span className="block font-serif text-4xl font-light relative z-10" style={{ color: "hsl(39 65% 68%)" }}>500+</span>
            <span className="text-xs uppercase tracking-widest text-white/60 mt-1 block relative z-10">Graduating Awardees</span>
          </div>
          <div
            className="p-6 rounded-2xl card-pop relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(215 48% 20%) 0%, hsl(215 44% 26%) 100%)",
              border: "1px solid hsl(39 55% 52% / 0.18)",
            }}
          >
            <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 70% 50%, hsl(39 58% 52%) 0%, transparent 65%)" }} />
            <span className="block font-serif text-4xl font-light relative z-10" style={{ color: "hsl(39 65% 68%)" }}>70+</span>
            <span className="text-xs uppercase tracking-widest text-white/60 mt-1 block relative z-10">Years of Legacy</span>
          </div>
        </div>
      </div>
    </section>
  )
}
