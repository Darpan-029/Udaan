"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon, ExternalLink, Radio } from "lucide-react"
import { useTheme } from "next-themes"
import logo from "../../public/docs/sgsits_logo.png"
import footerLogo from "../../public/docs/sgsits_logo.png"
import { TimelineModal } from "@/components/timeline-modal"

const LIVE_STREAM_URL = "https://www.youtube.com/live/KxwwqEIDZ_0?si=1aTwo1IjuQqUpzLm"

const navItems = [
  { name: "DIGNITARIES", href: "#dignitaries" },
  { name: "BANNER", href: "#banner" },
  { name: "BROCHURE", href: "#documents" },
  { name: "GALLERY", href: "#gallery" },
  { name: "REGISTRATION", href: "#register" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [condensed, setCondensed] = React.useState(false)
  const [isTimelineOpen, setIsTimelineOpen] = React.useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const sentinelRef = React.useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  React.useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    }
  }, [])

  React.useEffect(() => {
    const node = sentinelRef.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => setCondensed(!entry.isIntersecting))
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  React.useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = "hidden"
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.replace("#", "")
      const elem = document.getElementById(targetId)
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
    setIsOpen(false)
  }

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="h-px" />
      <header
        className="relative md:sticky top-0 z-50 w-full bg-[#0C1626] text-white shadow-md transform-gpu"
      >
        <div
          className={`container mx-auto px-4 text-center transition-[padding] duration-300 ${condensed ? "py-2" : "py-3.5 md:py-4.5"
            }`}
        >
          {condensed ? (
            <div className="flex items-center justify-between gap-2 sm:gap-4">
              {/* Left Brand block: Logo + उड़ान 2026 + Academic Award Ceremony */}
              <a
                href="#dignitaries"
                onClick={(e) => handleNavClick(e, "#dignitaries")}
                className="flex items-center gap-2 sm:gap-3 transition-transform hover:opacity-90 text-left shrink"
              >
                <Image src={footerLogo} alt="SGSITS Official Seal" className="h-8 sm:h-10 md:h-12 w-auto object-contain shrink-0 drop-shadow-md" />
                <div className="flex flex-col items-start justify-center min-w-0">
                  <div className="flex items-baseline gap-1.5 sm:gap-2 select-none">
                    <span className="udaan-brand font-serif text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow-md">उड़ान</span>
                    <span className="font-serif text-sm sm:text-base md:text-lg text-amber-200 font-extrabold tracking-widest drop-shadow-sm">2026</span>
                  </div>
                  <span className="font-serif text-[8px] xs:text-[9px] sm:text-[10px] md:text-[11px] text-slate-200 tracking-wider font-bold -mt-0.5 whitespace-nowrap uppercase">
                    Academic Award Ceremony
                  </span>
                </div>
              </a>

              {/* Desktop Nav Items with Pipe Separators & Gold Underline */}
              <nav className="hidden lg:flex items-center gap-4 text-xs font-sans tracking-[0.2em] uppercase">
                {navItems.map((item, idx) => (
                  <React.Fragment key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="hover:text-white text-amber-200/95 font-extrabold transition-colors py-1 px-1.5 relative group drop-shadow-sm"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200/80 transition-all duration-300 group-hover:w-full" />
                    </a>
                    {idx < navItems.length - 1 && (
                      <span className="text-amber-300/40 font-bold select-none">|</span>
                    )}
                  </React.Fragment>
                ))}
              </nav>

              {/* Right Action: Live Streaming Button & Mobile Menu Toggle */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <a
                  href={LIVE_STREAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-slate-950 font-sans text-[11px] sm:text-xs font-black tracking-wider uppercase transition-all shadow-md hover:scale-105 border border-amber-200/60 group"
                  title="Watch Live Streaming"
                  aria-label="Watch Live Streaming on YouTube"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                  </span>
                  <Radio className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Live Streaming</span>
                  <span className="sm:hidden">Live</span>
                </a>

                <div className="lg:hidden flex items-center ml-0.5">
                  <button
                    onClick={() => setIsOpen((v) => !v)}
                    className="p-1.5 text-amber-200 hover:text-white rounded-lg focus:outline-none"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-nav-drawer"
                  >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Expanded Header 3-Column Balanced Layout */}
              <div className="grid grid-cols-12 items-center gap-4 py-2">
                {/* Left Column: Symmetrical balance spacer */}
                <div className="hidden md:block md:col-span-3" />

                {/* Center Column: Udaan Brand Emblem & Title */}
                <div className="col-span-12 md:col-span-6 flex flex-col items-center justify-center text-center">
                  <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 select-none" aria-label="उड़ान 2026">
                    <Image
                      src={logo}
                      alt="SGSITS Official Seal"
                      width={120}
                      height={120}
                      className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain drop-shadow-[0_0_15px_rgba(247,212,99,0.35)]"
                      priority
                    />
                    <div className="flex items-baseline gap-2 sm:gap-2.5 md:gap-3.5">
                      <span className="udaan-brand font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.06em] font-extrabold">
                        उड़ान
                      </span>
                      <span className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-amber-200/90 tracking-widest drop-shadow-sm">
                        2026
                      </span>
                    </div>
                  </div>
                  <p className="font-serif text-[11px] sm:text-xs md:text-sm text-white tracking-[0.18em] sm:tracking-[0.22em] uppercase mt-2 font-bold drop-shadow-sm">
                    Academic Award Ceremony
                  </p>
                  <p className="font-serif text-[11px] sm:text-xs md:text-sm italic text-amber-200/85 mt-1 font-medium drop-shadow-sm px-2">
                    &quot;आज की सफलता, कल की प्रेरणा — Today&apos;s success, tomorrow&apos;s inspiration&quot;
                  </p>
                </div>

                {/* Right Column: Live Streaming Action */}
                <div className="hidden md:flex md:col-span-3 justify-end items-center gap-2.5">
                  <a
                    href={LIVE_STREAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-slate-950 font-sans text-xs font-black tracking-wider uppercase transition-all shadow-md hover:scale-105 border border-amber-200/60 group"
                    title="Watch Live Streaming"
                    aria-label="Watch Live Streaming on YouTube"
                  >
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                    </span>
                    <Radio className="h-4 w-4" />
                    <span>Live Streaming</span>
                  </a>
                </div>

                <span className="sr-only">उड़ान 2026 — Academic Award Ceremony</span>
              </div>

              {/* Refined Navigation Bar */}
              <div className="pt-3 mt-3 border-t border-amber-300/25 max-w-4xl mx-auto">
                <nav className="hidden md:flex items-center justify-center gap-2 text-xs font-sans tracking-[0.2em]">
                  {navItems.map((item, idx) => (
                    <React.Fragment key={item.name}>
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="hover:text-white text-amber-200/95 font-extrabold tracking-[0.2em] text-xs md:text-sm py-1.5 px-4 rounded-xl transition-all hover:bg-amber-300/15 border border-transparent hover:border-amber-300/30 drop-shadow-sm"
                      >
                        {item.name}
                      </a>
                      {idx < navItems.length - 1 && (
                        <span className="text-amber-300/40 font-bold select-none px-1">•</span>
                      )}
                    </React.Fragment>
                  ))}
                </nav>
              </div>

              {/* Mobile toggle row (expanded state) */}
              <div className="md:hidden flex items-center justify-between pt-2.5 mt-2 border-t border-amber-300/20">
                <a
                  href={LIVE_STREAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 text-slate-950 font-sans text-xs font-black uppercase tracking-wider shadow-sm"
                  title="Watch Live Streaming"
                  aria-label="Watch Live Streaming on YouTube"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                  </span>
                  <Radio className="h-3.5 w-3.5" />
                  <span>Live Streaming</span>
                </a>

                <button
                  onClick={() => setIsOpen((v) => !v)}
                  className="p-1.5 text-amber-200 hover:text-white rounded-lg"
                  aria-label="Toggle menu"
                  aria-expanded={isOpen}
                  aria-controls="mobile-nav-drawer"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Mobile drawer */}
        {isOpen && (
          <div
            id="mobile-nav-drawer"
            className="md:hidden py-2 px-4 space-y-1 text-center border-t border-amber-300/20 bg-[#0C1626] text-slate-100 backdrop-blur-md rounded-b-xl shadow-2xl animate-in slide-in-from-top-2 duration-200"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-xs font-sans tracking-[0.2em] font-bold uppercase text-amber-200 hover:text-white hover:bg-amber-300/15 rounded-xl transition-all active:scale-[0.98]"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Program Timeline Popup Modal */}
      <TimelineModal isOpen={isTimelineOpen} onClose={() => setIsTimelineOpen(false)} />
    </>
  )
}

function ThemeToggle({
  mounted,
  resolvedTheme,
  setTheme,
  className = "",
}: {
  mounted: boolean
  resolvedTheme: string | undefined
  setTheme: (t: string) => void
  className?: string
}) {
  const isDark = mounted && resolvedTheme === "dark"
  const [showTooltip, setShowTooltip] = React.useState(false)

  React.useEffect(() => {
    if (!mounted) return
    const show = setTimeout(() => setShowTooltip(true), 1000)
    const hide = setTimeout(() => setShowTooltip(false), 8000)
    return () => {
      clearTimeout(show)
      clearTimeout(hide)
    }
  }, [mounted])

  return (
    <div className="relative inline-block">
      <button
        onClick={() => {
          setShowTooltip(false)
          mounted && setTheme(isDark ? "light" : "dark")
        }}
        aria-label="Toggle theme"
        aria-hidden={!mounted}
        tabIndex={mounted ? 0 : -1}
        className={`hover:text-foreground transition-colors relative ${mounted ? "" : "invisible"
          } ${className}`}
      >
        {isDark ? <Sun className="h-3.5 w-3.5 text-accent" /> : <Moon className="h-3.5 w-3.5 text-slate-700 dark:text-slate-200" />}
      </button>

      {showTooltip && (
        <div className="absolute right-0 top-full mt-2.5 z-50 whitespace-nowrap bg-accent text-slate-950 text-[10px] font-sans font-bold tracking-wider uppercase px-2.5 py-1 rounded-lg shadow-xl border border-accent/40 animate-in fade-in zoom-in-90 duration-300 flex items-center gap-1.5 pointer-events-auto">
          <div className="absolute -top-1 right-2 w-2 h-2 bg-accent rotate-45" />
          <span>Switch themes</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-950/70 hover:text-slate-950 font-bold ml-1"
            aria-label="Close tooltip"
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}
