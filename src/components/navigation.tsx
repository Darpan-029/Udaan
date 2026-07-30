"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import logo from "../../public/images/sgsits_logo.webp"

const navItems = [
  { name: "ABOUT", href: "/about" },
  { name: "UDAAN", href: "/udaan" },
  { name: "DOCUMENTS", href: "/#documents" },
  { name: "MEDALISTS", href: "/#medalists" },
  { name: "SCHEDULE", href: "/#schedule" },
  { name: "GALLERY", href: "/#gallery" },
  { name: "FAQ", href: "/#faq" },
  { name: "REGISTRATION", href: "/#register" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [condensed, setCondensed] = React.useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const sentinelRef = React.useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  React.useEffect(() => setMounted(true), [])

  // Fires the moment the page scrolls even 1px -- a sentinel placed at the
  // very top of the document, observed via IntersectionObserver rather than
  // a scroll listener, so there is no scroll-jank.
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

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="h-px" />
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border transition-shadow duration-300">
        <div
          className={`container mx-auto px-4 text-center transition-[padding] duration-300 ${
            condensed ? "py-2" : "py-6"
          }`}
        >
          <div className={`flex items-center gap-4 ${condensed ? "justify-between" : "justify-center relative"}`}>
            {!condensed && (
              <div className="absolute left-0 top-0 hidden sm:flex items-center">
                <Link href="/" className="inline-block transition-transform hover:scale-105">
                  <Image
                    src={logo}
                    alt="SGSITS Official Seal"
                    className="h-16 md:h-20 lg:h-24 w-auto object-contain drop-shadow-sm"
                    priority
                  />
                </Link>
              </div>
            )}

            {condensed && (
              <Link href="/" className="flex items-center gap-3">
                <Image src={logo} alt="SGSITS Official Seal" className="h-9 w-auto object-contain" />
                <span className="font-serif text-sm md:text-base tracking-[0.15em] font-normal text-foreground uppercase whitespace-nowrap">
                  Graduation 2026
                </span>
              </Link>
            )}

            {!condensed && (
              <Link href="/" className="inline-block">
                <h1 className="font-serif text-2xl md:text-3xl tracking-[0.25em] font-normal text-foreground uppercase">
                  GRADUATION 2026
                </h1>
                <p className="text-[11px] font-sans tracking-[0.2em] text-muted-foreground uppercase mt-0.5">
                  SGSITS INDORE • UDAAN CEREMONY
                </p>
              </Link>
            )}

            {/* Desktop nav (condensed state) */}
            {condensed && (
              <nav className="hidden md:flex items-center gap-1 text-xs font-sans tracking-[0.15em] text-body">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="hover:text-foreground transition-colors py-1 px-2.5 font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
                <ThemeToggle mounted={mounted} resolvedTheme={resolvedTheme} setTheme={setTheme} className="ml-2 p-1" />
              </nav>
            )}

            {/* Mobile toggle (condensed state) */}
            {condensed && (
              <div className="md:hidden flex items-center gap-2">
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
            )}
          </div>

          {!condensed && (
            <>
              {/* Animated center wordmark */}
              <div className="my-3 flex items-center justify-center min-h-[44px]" aria-hidden="true">
                <span className="udaan-typing font-serif text-2xl md:text-3xl lg:text-4xl text-accent tracking-[0.1em] font-normal select-none">
                  Udaan&apos; 26
                </span>
              </div>
              <span className="sr-only">Udaan &apos;26</span>

              {/* Desktop nav (expanded state) */}
              <nav className="hidden md:flex items-center justify-center flex-wrap gap-y-2 text-xs font-sans tracking-[0.15em] text-body pt-2 border-t border-border max-w-4xl mx-auto">
                {navItems.map((item, idx) => (
                  <React.Fragment key={item.name}>
                    <Link href={item.href} className="hover:text-foreground transition-colors py-1 px-2.5 font-medium">
                      {item.name}
                    </Link>
                    {idx < navItems.length - 1 && <span className="text-border select-none">|</span>}
                  </React.Fragment>
                ))}
                <ThemeToggle mounted={mounted} resolvedTheme={resolvedTheme} setTheme={setTheme} className="ml-3 p-1" />
              </nav>

              {/* Mobile toggle row (expanded state) */}
              <div className="md:hidden flex items-center justify-between pt-2 border-t border-border">
                <span className="text-xs tracking-widest text-muted-foreground">MENU</span>
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
            className="md:hidden pb-2 space-y-1 text-center border-t border-border bg-background"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2.5 text-xs tracking-widest text-body hover:text-foreground font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>
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
  // Always renders the same button at the same size -- pre-mount the icon
  // is just invisible, rather than the button being absent, so there is no
  // layout shift once the client knows the real theme.
  return (
    <button
      onClick={() => mounted && setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      aria-hidden={!mounted}
      tabIndex={mounted ? 0 : -1}
      className={`text-muted-foreground hover:text-foreground transition-colors ${
        mounted ? "" : "invisible"
      } ${className}`}
    >
      {resolvedTheme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
    </button>
  )
}
