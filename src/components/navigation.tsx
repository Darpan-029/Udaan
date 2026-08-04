"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import logo from "../../public/images/sgsits_logo.webp"
import { TimelineModal } from "@/components/timeline-modal"

const navItems = [
  { name: "DIGNITARIES", href: "#dignitaries" },
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
        className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${
          condensed
            ? "bg-[#0F1B2B]/[0.97] dark:bg-[#06090F]/[0.97] text-slate-100 dark:text-slate-100 border-b border-slate-700/60 dark:border-slate-900/80 shadow-xl shadow-black/20 dark:shadow-black/50 backdrop-blur-md"
            : "bg-white/90 dark:bg-[#0A0F1A]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/60"
        }`}
      >
        <div
          className={`container mx-auto px-4 text-center transition-all duration-500 ease-in-out ${
            condensed ? "py-2.5" : "py-4 md:py-5"
          }`}
        >
          {condensed ? (
            <div className="flex items-center justify-between gap-4">
              <a
                href="#dignitaries"
                onClick={(e) => handleNavClick(e, "#dignitaries")}
                className="flex items-center gap-2.5 transition-transform hover:opacity-90"
              >
                <Image src={logo} alt="SGSITS Official Seal" className="h-8 md:h-9 w-auto object-contain shrink-0" />
                <span className="font-serif text-sm md:text-base tracking-[0.15em] font-medium text-white uppercase whitespace-nowrap flex items-center gap-1.5">
                  <span className="udaan-brand font-bold">उड़ान</span>
                  <span className="text-accent/80 font-light text-xs tracking-widest">2026</span>
                  <span className="text-white/50 text-xs ml-1 hidden md:inline">Academic Award Ceremony</span>
                </span>
              </a>

              {/* Desktop nav (condensed state) */}
              <nav className="hidden md:flex items-center gap-1 text-xs font-sans tracking-[0.15em] text-slate-200">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-accent transition-colors py-1 px-2 font-medium text-slate-200"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* Mobile menu button (condensed state) */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen((v) => !v)}
                  className="p-1.5 text-white"
                  aria-label="Toggle menu"
                  aria-expanded={isOpen}
                  aria-controls="mobile-nav-drawer"
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="relative">
              {/* SGSITS Logo — far left of navbar */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }) }}
                  className="transition-transform hover:scale-105 inline-block"
                  aria-label="SGSITS Indore"
                >
                  <Image
                    src={logo}
                    alt="SGSITS Official Seal"
                    width={110}
                    height={110}
                    className="h-18 md:h-22 lg:h-28 w-auto object-contain drop-shadow-md"
                    priority
                  />
                </a>
              </div>

              {/* उड़ान brand — centered */}
              <div className="flex flex-col items-center justify-center gap-0.5 mb-3">
                <div className="flex items-baseline gap-3 select-none" aria-label="उड़ान 2026">
                  <span className="udaan-brand font-serif text-4xl md:text-5xl lg:text-6xl tracking-[0.08em] font-bold">
                    उड़ान
                  </span>
                  <span className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-accent/70 tracking-widest">
                    2026
                  </span>
                </div>
                <p className="font-serif text-sm md:text-base lg:text-lg text-foreground tracking-[0.12em] mt-0.5 font-normal">
                  Academic Award Ceremony
                </p>
                <p className="font-serif text-[11px] md:text-xs italic text-accent/75 mt-0.5">
                  &quot;आज की सफलता, कल की प्रेरणा — Today&apos;s success, tomorrow&apos;s inspiration&quot;
                </p>
              </div>

              <span className="sr-only">उड़ान 2026 — Academic Award Ceremony</span>
            </div>

              {/* Desktop nav (expanded state) */}
              <nav className="hidden md:flex items-center justify-center flex-wrap gap-y-2 text-xs font-sans tracking-[0.15em] text-body pt-2 border-t border-border/80 max-w-4xl mx-auto">
                {navItems.map((item, idx) => (
                  <React.Fragment key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="hover:text-foreground transition-colors py-1 px-2.5 font-medium"
                    >
                      {item.name}
                    </a>
                    {idx < navItems.length - 1 && <span className="text-border select-none">|</span>}
                  </React.Fragment>
                ))}
              </nav>

              {/* Mobile toggle row (expanded state) */}
              <div className="md:hidden flex items-center justify-end pt-2 border-t border-border">
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
            className={`md:hidden pb-3 space-y-1 text-center border-t ${
              condensed
                ? "border-slate-800 bg-[#0B132B] text-slate-100"
                : "border-border bg-background/98"
            } backdrop-blur-md rounded-b-lg shadow-lg`}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block py-2.5 text-xs tracking-widest ${
                  condensed ? "text-slate-200 hover:text-accent" : "text-body hover:text-foreground"
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
        className={`hover:text-foreground transition-colors relative ${
          mounted ? "" : "invisible"
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
