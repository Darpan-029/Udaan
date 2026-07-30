"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    setMounted(true)
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
    <header className="sticky top-0 z-50 w-full bg-background/95 dark:bg-[#12161E]/95 backdrop-blur-md border-b border-border transition-colors duration-200">
      <div className="container mx-auto px-4 py-4">
        {/* Header Main Bar: Responsive Flex Layout */}
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Seal */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Image
              src="/images/sgsits_logo.png"
              alt="SGSITS Official Seal"
              width={64}
              height={64}
              priority
              className="h-12 md:h-14 lg:h-16 w-auto object-contain drop-shadow-sm"
            />
            <div className="hidden sm:block text-left">
              <span className="font-serif text-lg md:text-xl tracking-[0.2em] font-normal text-foreground uppercase block">
                GRADUATION 2026
              </span>
              <span className="text-[10px] font-sans tracking-[0.15em] text-muted-foreground uppercase block">
                SGSITS INDORE • UDAAN
              </span>
            </div>
          </Link>

          {/* Center Banner Text */}
          <div className="text-center">
            <span className="font-serif text-xl sm:text-2xl md:text-3xl text-accent tracking-[0.1em] font-normal inline-block select-none">
              Udaan &apos;26
            </span>
          </div>

          {/* Theme Toggle & Mobile Menu Control */}
          <div className="flex items-center space-x-2">
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
              className="md:hidden p-2 text-foreground rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center justify-center flex-wrap gap-y-2 text-xs font-sans tracking-[0.15em] text-foreground/80 pt-3 mt-3 border-t border-border/60 max-w-4xl mx-auto">
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

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-4 space-y-3 text-center border-t border-border mt-3 bg-background/95 backdrop-blur-md rounded-b-lg shadow-lg">
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
