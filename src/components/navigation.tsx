"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Award, Moon, Sun, Download, Trophy, FileText, UserCheck } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Udaan", href: "/udaan" },
    { name: "About", href: "/about" },
    { name: "Documents", href: "/#documents" },
    { name: "Medalists", href: "/#medalists" },
    { name: "Schedule", href: "/#schedule" },
    { name: "Gallery", href: "/#gallery" },
    { name: "FAQ", href: "/#faq" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-md border-border/80"
          : "bg-background/60 backdrop-blur-md border-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-11 w-auto flex items-center justify-center p-1 bg-white dark:bg-card rounded-xl shadow-sm border border-border">
              <img
                src="/images/sgsits_logo.png"
                alt="SGSITS Indore Logo"
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
                UDAAN
              </span>
              <span className="text-[10px] font-semibold text-muted-foreground -mt-1 tracking-tight">
                SGSITS INDORE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-amber-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="https://forms.gle/xirfNSVTatEpGbf96"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md transition-all hover:scale-105"
            >
              Register
            </a>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="p-2 rounded-xl hover:bg-accent text-foreground transition-colors"
              >
                {theme === "dark" ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-slate-700" />}
              </button>
            )}
          </div>

          {/* Mobile Menu Actions */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href="https://forms.gle/xirfNSVTatEpGbf96"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold"
            >
              Register
            </a>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                {theme === "dark" ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 space-y-2 border-t mt-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2.5 px-4 rounded-xl hover:bg-accent font-medium text-sm transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
