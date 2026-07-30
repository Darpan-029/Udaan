"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

const udaanFrames = [
  "Udaan' 26",
  "Udaaan' 26",
  "Udaaaaaan' 26",
  "Udaaaaaaaaan' 26",
  "Udaaaaaan' 26",
  "Udaaan' 26",
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [frameIndex, setFrameIndex] = React.useState(0)

  React.useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % udaanFrames.length)
    }, 450)
    return () => clearInterval(interval)
  }, [])

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

  return (
    <header className="w-full bg-[#FAF8F5] dark:bg-[#12161E] border-b border-[#E4DFD7] dark:border-[#212B3B] transition-colors duration-300 relative">
      <div className="container mx-auto px-4 py-6 text-center relative">
        {/* Left Side: SGSITS Emblem Logo */}
        <div className="absolute left-4 md:left-8 top-5 flex items-center">
          <Link
            href="/"
            className="group flex items-center space-x-2.5 p-1 bg-white dark:bg-[#1C2430] border border-[#DCD5C9] dark:border-[#2A3649] rounded-sm shadow-sm transition-transform hover:scale-105"
          >
            <img
              src="/images/sgsits_logo.png"
              alt="SGSITS Emblem"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <span className="hidden lg:block text-left">
              <span className="block font-serif text-xs font-semibold text-[#142338] dark:text-white leading-tight">
                SGSITS
              </span>
              <span className="block font-sans text-[9px] text-[#64748B] dark:text-[#94A3B8] tracking-widest">
                INDORE
              </span>
            </span>
          </Link>
        </div>

        {/* Top Header Title */}
        <Link href="/" className="inline-block">
          <h1 className="font-serif text-2xl md:text-3xl tracking-[0.25em] font-normal text-[#142338] dark:text-[#FAF8F5] uppercase">
            GRADUATION 2026
          </h1>
          <p className="text-[11px] font-sans tracking-[0.2em] text-[#7A6B58] dark:text-[#A89882] uppercase mt-0.5">
            SGSITS INDORE • UDAAN CEREMONY
          </p>
        </Link>

        {/* Center Place: Smooth Continuous Text Transition without unmounting */}
        <div className="my-3 flex items-center justify-center min-h-[44px]">
          <span className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#C5A059] tracking-[0.1em] font-normal transition-all duration-300 ease-in-out inline-block select-none min-w-[280px] text-center">
            {udaanFrames[frameIndex]}
          </span>
        </div>

        {/* Desktop Navigation Links with Pipe Separators */}
        <nav className="hidden md:flex items-center justify-center flex-wrap gap-y-2 text-xs font-sans tracking-[0.15em] text-[#334155] dark:text-[#CBD5E1] pt-2 border-t border-[#EAE5DC] dark:border-[#212B3B] max-w-4xl mx-auto">
          {navItems.map((item, idx) => (
            <React.Fragment key={item.name}>
              <Link
                href={item.href}
                className="hover:text-[#142338] dark:hover:text-white transition-colors py-1 px-2.5 font-medium"
              >
                {item.name}
              </Link>
              {idx < navItems.length - 1 && (
                <span className="text-[#B0A798] dark:text-[#475569] select-none">|</span>
              )}
            </React.Fragment>
          ))}

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle Theme"
              className="ml-3 p-1 text-[#64748B] hover:text-[#142338] dark:hover:text-white transition-colors"
            >
              {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
            </button>
          )}
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center justify-between pt-2 border-t border-[#EAE5DC] dark:border-[#212B3B]">
          <span className="text-xs tracking-widest text-[#64748B]">MENU</span>
          <div className="flex items-center space-x-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle Theme"
                className="p-1.5 text-[#64748B]"
              >
                {theme === "dark" ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-[#142338] dark:text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2 text-center border-t border-[#EAE5DC] dark:border-[#212B3B] mt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-xs tracking-widest text-[#334155] dark:text-[#CBD5E1] hover:text-[#142338] font-medium"
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
