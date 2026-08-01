"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon, Clock, UserCheck } from "lucide-react"
import { useTheme } from "next-themes"
import logo from "../../public/images/sgsits_logo.webp"
import { TimelineModal } from "@/components/timeline-modal"

const navItems = [
  { name: "DIGNITARIES", href: "#dignitaries" },
  { name: "BROCHURE", href: "#documents" },
  { name: "ABOUT", href: "#about" },
  { name: "MEDALISTS", href: "#medalists" },
  { name: "SCHEDULE", href: "#schedule" },
  { name: "GALLERY", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
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
    // Prevent initial scroll jump to anchor if no hash was specified
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    }
  }, [])

  // Observer for top scroll sentinel
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
          <div className={`flex items-center gap-4 ${condensed ? "justify-between" : "justify-center relative"}`}>
            {condensed && (
              <a
                href="#dignitaries"
                onClick={(e) => handleNavClick(e, "#dignitaries")}
                className="flex items-center gap-2.5 transition-transform hover:opacity-90"
              >
                <Image src={logo} alt="SGSITS Official Seal" className="h-8 md:h-9 w-auto object-contain shrink-0" />
                <span className="font-serif text-sm md:text-base tracking-[0.15em] font-medium text-white uppercase whitespace-nowrap">
                  Graduation <span className="text-accent font-sans font-bold">उड़ान 2026</span>
                </span>
              </a>
            )}

            {!condensed && (
              <div className="flex items-center justify-center">
                <a
                  href="#dignitaries"
                  onClick={(e) => handleNavClick(e, "#dignitaries")}
                  className="inline-flex items-center gap-3 md:gap-4 transition-transform hover:scale-[1.01]"
                >
                  <Image
                    src={logo}
                    alt="SGSITS Official Seal"
                    className="h-11 md:h-14 lg:h-16 w-auto object-contain drop-shadow-sm shrink-0"
                    priority
                  />
                  <div className="text-left">
                    <h1 className="font-serif text-xl md:text-2xl lg:text-3xl tracking-[0.2em] font-normal text-foreground uppercase leading-tight">
                      GRADUATION 2026
                    </h1>
                    <p className="text-[10px] md:text-[11px] font-sans tracking-[0.2em] text-muted-foreground uppercase mt-0.5">
                      SGSITS INDORE • उड़ान CEREMONY
                    </p>
                  </div>
                </a>
              </div>
            )}

            {/* Top Side Action Buttons: Program Timeline & Register */}
            {!condensed && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-2.5">
                <button
                  onClick={() => setIsTimelineOpen(true)}
                  className="inline-flex items-center gap-2 bg-accent/15 hover:bg-accent hover:text-slate-950 text-accent font-sans text-xs tracking-wider uppercase px-3.5 py-2 rounded-xl border border-accent/40 transition-all font-semibold shadow-sm card-pop"
                >
                  <Clock className="h-3.5 w-3.5" />
                  <span>Program Timeline</span>
                </button>
                <a
                  href="#register"
                  onClick={(e) => handleNavClick(e, "#register")}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-sans text-xs tracking-wider uppercase px-4 py-2 rounded-xl border border-transparent transition-all font-semibold shadow-sm card-pop"
                >
                  <UserCheck className="h-3.5 w-3.5" />
                  <span>Register</span>
                </a>
              </div>
            )}

            {/* Desktop nav (condensed state) */}
            {condensed && (
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
                
                {/* Timeline Popup trigger in condensed top bar */}
                <button
                  onClick={() => setIsTimelineOpen(true)}
                  className="ml-1.5 inline-flex items-center gap-1 bg-accent/20 hover:bg-accent hover:text-slate-950 text-accent font-sans text-[11px] tracking-wider uppercase px-2.5 py-1.5 rounded-lg border border-accent/40 transition-all font-semibold"
                >
                  <Clock className="h-3 w-3" />
                  <span>Timeline</span>
                </button>

                <a
                  href="#register"
                  onClick={(e) => handleNavClick(e, "#register")}
                  className="ml-1 inline-flex items-center gap-1 bg-accent hover:bg-accent-hover text-slate-950 font-sans text-[11px] tracking-wider uppercase px-2.5 py-1.5 rounded-lg border border-accent transition-all font-bold"
                >
                  <UserCheck className="h-3 w-3" />
                  <span>Register</span>
                </a>

                <ThemeToggle mounted={mounted} resolvedTheme={resolvedTheme} setTheme={setTheme} className="ml-2 p-1 text-slate-300 hover:text-white" />
              </nav>
            )}

            {/* Mobile toggle (condensed state) */}
            {condensed && (
              <div className="md:hidden flex items-center gap-1.5">
                <button
                  onClick={() => setIsTimelineOpen(true)}
                  className="p-1.5 text-accent border border-accent/30 rounded-lg bg-accent/10 text-xs font-sans font-semibold flex items-center gap-1"
                >
                  <Clock className="h-3.5 w-3.5" />
                  <span>Timeline</span>
                </button>
                <a
                  href="#register"
                  onClick={(e) => handleNavClick(e, "#register")}
                  className="p-1.5 bg-accent text-slate-950 font-bold rounded-lg text-xs font-sans flex items-center gap-1"
                >
                  <UserCheck className="h-3.5 w-3.5" />
                  <span>Register</span>
                </a>
                <ThemeToggle mounted={mounted} resolvedTheme={resolvedTheme} setTheme={setTheme} className="p-1.5 text-slate-300" />
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
            )}
          </div>

          {!condensed && (
            <>
              {/* Animated center wordmark - Hindi उड़ान 2026 */}
              <div className="my-2.5 flex items-center justify-center min-h-[40px]" aria-hidden="true">
                <span className="udaan-typing font-serif text-2xl md:text-3xl lg:text-4xl text-accent tracking-[0.1em] font-semibold select-none">
                  उड़ान 2026
                </span>
              </div>
              <span className="sr-only">उड़ान 2026</span>

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
                <ThemeToggle mounted={mounted} resolvedTheme={resolvedTheme} setTheme={setTheme} className="ml-3 p-1" />
              </nav>

              {/* Mobile toggle row (expanded state) */}
              <div className="md:hidden flex items-center justify-between pt-2 border-t border-border">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsTimelineOpen(true)}
                    className="text-xs tracking-wider text-accent font-semibold flex items-center gap-1 bg-accent/10 px-2.5 py-1 rounded-md border border-accent/20"
                  >
                    <Clock className="h-3.5 w-3.5" />
                    <span>Timeline</span>
                  </button>
                  <a
                    href="#register"
                    onClick={(e) => handleNavClick(e, "#register")}
                    className="text-xs tracking-wider text-white bg-primary font-semibold flex items-center gap-1 px-2.5 py-1 rounded-md border border-primary"
                  >
                    <UserCheck className="h-3.5 w-3.5" />
                    <span>Register</span>
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <ThemeToggle mounted={mounted} resolvedTheme={resolvedTheme} setTheme={setTheme} className="p-1.5" />
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
            <div className="p-2 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setIsOpen(false)
                  setIsTimelineOpen(true)
                }}
                className="w-full py-2 bg-accent text-slate-950 font-sans text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5"
              >
                <Clock className="h-3.5 w-3.5" />
                <span>Timeline</span>
              </button>
              <a
                href="#register"
                onClick={(e) => handleNavClick(e, "#register")}
                className="w-full py-2 bg-primary text-white font-sans text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5"
              >
                <UserCheck className="h-3.5 w-3.5" />
                <span>Register</span>
              </a>
            </div>
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
  // Always show the tooltip on every page load; auto-dismiss after 7 seconds
  const [showTooltip, setShowTooltip] = React.useState(false)

  React.useEffect(() => {
    if (!mounted) return
    // Small delay so it appears after the page has settled
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

      {/* Switch Themes Pop-up Tooltip Badge */}
      {showTooltip && (
        <div className="absolute right-0 top-full mt-2.5 z-50 whitespace-nowrap bg-accent text-slate-950 text-[10px] font-sans font-bold tracking-wider uppercase px-2.5 py-1 rounded-lg shadow-xl border border-accent/40 animate-in fade-in zoom-in-90 duration-300 flex items-center gap-1.5 pointer-events-auto">
          {/* Arrow pointer pointing up to theme icon */}
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
