"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Listen to window scroll with hysteresis thresholds to prevent glitching at the interface
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 80) {
        setIsScrolled(true)
      } else if (currentScrollY < 20) {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-close mobile menu on route changes
  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Handle Esc key to close mobile menu
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  // Body scroll lock when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const navItems = [
    { name: "ABOUT", href: "/about" },
    { name: "DOCUMENTS", href: "/#documents" },
    { name: "MEDALISTS", href: "/#medalists" },
    { name: "SCHEDULE", href: "/#schedule" },
    { name: "GALLERY", href: "/#gallery" },
    { name: "FAQ", href: "/#faq" },
    { name: "REGISTRATION", href: "/#register" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-secondary/95 dark:bg-[#12161E]/95 backdrop-blur-md border-b border-border/80 transition-all duration-300 ease-in-out shadow-sm ${
        isScrolled ? "py-2.5 shadow-md" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 relative">
        {/* Animated Header Layout */}
        <div
          className={`flex items-center justify-between transition-all duration-300 ease-in-out ${
            isScrolled ? "flex-row" : "flex-col justify-center text-center space-y-2"
          }`}
        >
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className={`flex items-center gap-3 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              isScrolled ? "flex-row" : "flex-col justify-center"
            }`}
          >
            <Image
              src="/images/sgsits_logo.png"
              alt="SGSITS Official Seal"
              width={256}
              height={256}
              quality={95}
              priority
              className={`object-contain drop-shadow-sm transition-all duration-300 ${
                isScrolled ? "h-9 w-auto" : "h-16 md:h-20 w-auto"
              }`}
            />
            <div className={`transition-all duration-300 ${isScrolled ? "text-left" : "text-center"}`}>
              <span
                className={`font-serif uppercase tracking-[0.2em] font-normal text-foreground block transition-all duration-300 ${
                  isScrolled ? "text-sm md:text-base tracking-[0.15em]" : "text-2xl md:text-3xl tracking-[0.25em]"
                }`}
              >
                GRADUATION 2026
              </span>
              <span
                className={`font-sans tracking-[0.15em] text-muted-foreground uppercase transition-all duration-300 ${
                  isScrolled ? "text-[9px] hidden sm:block" : "text-[11px] block mt-0.5"
                }`}
              >
                SGSITS INDORE • UDAAN CEREMONY
              </span>
            </div>
          </Link>

          {/* Udaan '26 Gold Accent Banner */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              isScrolled
                ? "max-h-0 opacity-0 py-0 hidden lg:block lg:max-h-8 lg:opacity-100"
                : "max-h-12 opacity-100 py-1"
            }`}
          >
            <span
              className={`font-serif text-accent tracking-[0.1em] font-normal inline-block select-none transition-all duration-300 ${
                isScrolled ? "text-lg" : "text-2xl md:text-3xl"
              }`}
            >
              Udaan &apos;26
            </span>
          </div>

          {/* Navigation Links in Scrolled State */}
          {isScrolled && (
            <nav className="hidden lg:flex items-center gap-1 text-xs font-sans tracking-[0.12em] text-foreground/80">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-primary transition-colors py-1 px-2.5 font-medium rounded hover:bg-black/5 dark:hover:bg-white/5"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}

          {/* Right Action Bar */}
          <div
            className={`flex items-center space-x-2 transition-all duration-300 ${
              isScrolled
                ? "relative right-0 top-0"
                : "absolute right-4 top-5 md:right-8 md:top-6"
            }`}
          >
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                aria-label="Toggle Theme"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-5 w-5 text-amber-400" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Full Desktop Navigation Links (Visible when at top) */}
        {!isScrolled && (
          <nav className="hidden md:flex items-center justify-center flex-wrap gap-y-2 text-xs font-sans tracking-[0.15em] text-foreground/80 pt-3 mt-3 border-t border-border/60 max-w-4xl mx-auto transition-all duration-300">
            {navItems.map((item, idx) => (
              <React.Fragment key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors py-1 px-3 font-medium rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {item.name}
                </Link>
                {idx < navItems.length - 1 && (
                  <span className="text-muted-foreground/40 select-none">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden pt-4 pb-4 space-y-3 text-center border-t border-border mt-3 bg-secondary/98 dark:bg-[#12161E]/98 backdrop-blur-md rounded-b-lg shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-xs tracking-widest text-foreground/90 hover:text-primary font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
