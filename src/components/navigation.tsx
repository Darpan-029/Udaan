"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon, QrCode, ExternalLink } from "lucide-react"
import { useTheme } from "next-themes"
import logo from "../../public/docs/sgsits_logo.jpeg"
import footerLogo from "../../public/images/sgsits_logo.webp"
import { TimelineModal } from "@/components/timeline-modal"

const navItems = [
  { name: "DIGNITARIES", href: "#dignitaries" },
  { name: "BROCHURE", href: "#documents" },
  { name: "GALLERY", href: "#gallery" },
  { name: "REGISTRATION", href: "#register" },
]

function QrModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  React.useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = "hidden"
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-md bg-background dark:bg-[#0D1527] border border-border dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center p-6 text-center animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50 transition-colors"
          aria-label="Close QR Modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent mb-3">
          <QrCode className="h-6 w-6" />
        </div>

        <h3 className="font-serif text-xl md:text-2xl text-foreground font-normal mb-1">
          Scan &amp; Register Directly
        </h3>
        <p className="font-sans text-xs text-muted-foreground mb-4 max-w-xs leading-relaxed">
          Scan this official QR code to open and submit your student registration for उड़ान 2026.
        </p>

        <div className="relative p-3 bg-white rounded-xl shadow-lg border border-slate-200 mb-5">
          <Image
            src="/docs/QR_code.png"
            alt="UDAAN 2026 Registration QR Code"
            width={220}
            height={220}
            className="w-52 h-52 object-contain rounded-lg"
            priority
          />
        </div>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe8TeeVoAveBtiZdZLuZ6Ep6YqbmiQltxQUBG0eAK1yqaF7jQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-slate-950 px-4 py-2.5 text-xs font-sans font-bold tracking-wider uppercase rounded-xl shadow-md transition-all hover:scale-[1.02]"
        >
          <ExternalLink className="h-4 w-4" />
          <span>Open Direct Registration Form</span>
        </a>
      </div>
    </div>
  )
}

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [condensed, setCondensed] = React.useState(false)
  const [isTimelineOpen, setIsTimelineOpen] = React.useState(false)
  const [isQrOpen, setIsQrOpen] = React.useState(false)
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
        className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${condensed
            ? "bg-[#0A1628] text-slate-100 border-y border-[#D4AF37]/50 shadow-2xl backdrop-blur-md"
            : "bg-white/90 dark:bg-[#0A0F1A]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/60"
          }`}
      >
        <div
          className={`container mx-auto px-4 text-center transition-all duration-500 ease-in-out ${condensed ? "py-2" : "py-4 md:py-5"
            }`}
        >
          {condensed ? (
            <div className="flex items-center justify-between gap-4">
              {/* Left Brand block: Logo + उड़ान 2026 + Academic Award Ceremony */}
              <a
                href="#dignitaries"
                onClick={(e) => handleNavClick(e, "#dignitaries")}
                className="flex items-center gap-3 transition-transform hover:opacity-90 text-left shrink-0"
              >
                <Image src={footerLogo} alt="SGSITS Official Seal" className="h-9 md:h-11 w-auto object-contain shrink-0" />
                <div className="flex flex-col items-start justify-center">
                  <div className="flex items-baseline gap-2 select-none">
                    <span className="font-serif text-xl md:text-2xl font-bold text-[#E6CA65] tracking-wide">उड़ान</span>
                    <span className="font-serif text-sm md:text-base text-[#D4AF37] font-light tracking-widest">2026</span>
                  </div>
                  <span className="font-serif text-[10px] md:text-[11px] text-[#D4AF37]/80 tracking-wider font-normal -mt-0.5 whitespace-nowrap">
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
                      className="hover:text-amber-200 text-[#D4AF37] font-semibold transition-colors py-1 px-1 relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E6CA65] transition-all duration-300 group-hover:w-full" />
                    </a>
                    {idx < navItems.length - 1 && (
                      <span className="text-[#C59B27]/40 font-light select-none">|</span>
                    )}
                  </React.Fragment>
                ))}
              </nav>

              {/* Right Action: Gold Pill SCAN QR & Mobile Menu Toggle */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setIsQrOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5E096] to-[#C59B27] text-slate-950 font-sans text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:scale-105 border border-[#FFE89C]/50"
                  title="Scan QR Code to Register"
                  aria-label="Open QR Code Modal"
                >
                  <QrCode className="h-3.5 w-3.5" />
                  <span>Scan QR</span>
                </button>

                <div className="lg:hidden flex items-center">
                  <button
                    onClick={() => setIsOpen((v) => !v)}
                    className="p-1.5 text-[#E6CA65]"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-nav-drawer"
                  >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Expanded Header 3-Column Balanced Layout */}
              <div className="grid grid-cols-12 items-center gap-4 py-1">
                {/* Left Column: Symmetrical balance spacer */}
                <div className="hidden md:block md:col-span-3" />

                {/* Center Column: Udaan Brand Emblem & Title */}
                <div className="col-span-12 md:col-span-6 flex flex-col items-center justify-center text-center">
                  <div className="flex items-center justify-center gap-3.5 md:gap-4 select-none" aria-label="उड़ान 2026">
                    <Image
                      src={logo}
                      alt="SGSITS Official Seal"
                      width={100}
                      height={100}
                      className="h-18 md:h-22 lg:h-26 w-auto object-contain"
                      priority
                    />
                    <div className="flex items-baseline gap-2 md:gap-3">
                      <span className="udaan-brand font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.06em] font-bold">
                        उड़ान
                      </span>
                      <span className="font-serif text-xl md:text-2xl lg:text-3xl font-light text-accent/80 tracking-widest">
                        2026
                      </span>
                    </div>
                  </div>
                  <p className="font-serif text-xs md:text-sm text-foreground tracking-[0.18em] uppercase mt-1.5 font-medium">
                    Academic Award Ceremony
                  </p>
                  <p className="font-serif text-[11px] md:text-xs italic text-accent/80 mt-0.5">
                    &quot;आज की सफलता, कल की प्रेरणा — Today&apos;s success, tomorrow&apos;s inspiration&quot;
                  </p>
                </div>

                {/* Right Column: Scan QR Action */}
                <div className="hidden md:flex md:col-span-3 justify-end items-center">
                  <button
                    onClick={() => setIsQrOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent hover:bg-accent/90 text-slate-950 font-sans text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:scale-105 border border-accent/40"
                    title="Scan QR Code to Register"
                    aria-label="Open QR Code Modal"
                  >
                    <QrCode className="h-4 w-4" />
                    <span>Scan QR</span>
                  </button>
                </div>

                <span className="sr-only">उड़ान 2026 — Academic Award Ceremony</span>
              </div>

              {/* Refined Navigation Bar */}
              <div className="pt-2.5 mt-2.5 border-t border-accent/20 max-w-3xl mx-auto">
                <nav className="hidden md:flex items-center justify-center gap-1 text-xs font-sans tracking-[0.18em] text-body">
                  {navItems.map((item, idx) => (
                    <React.Fragment key={item.name}>
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="hover:text-accent font-semibold tracking-[0.18em] py-1.5 px-4 rounded-lg transition-all hover:bg-accent/10"
                      >
                        {item.name}
                      </a>
                      {idx < navItems.length - 1 && (
                        <span className="text-accent/30 font-light select-none px-1">•</span>
                      )}
                    </React.Fragment>
                  ))}
                </nav>
              </div>

              {/* Mobile toggle row (expanded state) */}
              <div className="md:hidden flex items-center justify-between pt-2 mt-2 border-t border-border">
                <button
                  onClick={() => setIsQrOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-slate-950 font-sans text-xs font-bold uppercase"
                >
                  <QrCode className="h-3.5 w-3.5" />
                  <span>Scan QR</span>
                </button>
                <button
                  onClick={() => setIsOpen((v) => !v)}
                  className="p-1.5 text-foreground"
                  aria-label="Toggle menu"
                  aria-expanded={isOpen}
                  aria-controls="mobile-nav-drawer"
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Mobile drawer */}
        {isOpen && (
          <div
            id="mobile-nav-drawer"
            className={`md:hidden pb-3 space-y-1 text-center border-t ${condensed
                ? "border-slate-800 bg-[#0B132B] text-slate-100"
                : "border-border bg-background/98"
              } backdrop-blur-md rounded-b-lg shadow-lg`}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block py-2.5 text-xs tracking-widest ${condensed ? "text-slate-200 hover:text-accent" : "text-body hover:text-foreground"
                  } font-medium`}
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
      {/* Scan & Register QR Modal */}
      <QrModal isOpen={isQrOpen} onClose={() => setIsQrOpen(false)} />
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
