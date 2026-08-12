"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/docs/sgsits_logo.png"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

const footerNavItems = [
  { name: "DIGNITARIES", href: "#dignitaries" },
  { name: "DOCUMENTS", href: "#documents" },
  { name: "GALLERY", href: "#gallery" },
  { name: "REGISTRATION", href: "#register" },
]

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.replace("#", "")
      const elem = document.getElementById(targetId)
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <footer className="w-full bg-primary text-white border-t border-accent/30 py-12">
      <div className="mx-auto px-4 max-w-4xl text-center">
        {/* Emblem - Matching top navbar logo */}
        <div className="flex justify-center mb-5">
          <Link
            href="#dignitaries"
            onClick={(e) => handleNavClick(e, "#dignitaries")}
            className="inline-block transition-transform hover:scale-105"
          >
            <Image
              src={logo}
              alt="SGSITS Indore Official Seal"
              className="h-16 md:h-20 w-auto object-contain drop-shadow-md"
            />
          </Link>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl md:text-2xl tracking-[0.2em] font-medium uppercase text-white drop-shadow-sm">
          उड़ान • ACADEMIC AWARD CEREMONY
        </h3>
        <p className="text-xs font-sans text-amber-300 font-extrabold tracking-[0.18em] uppercase mt-1.5 drop-shadow-sm">
          SHRI GOVINDRAM SEKSARIA INSTITUTE OF TECHNOLOGY AND SCIENCE, INDORE
        </p>

        {/* Links bar with pipes & smooth scrolling */}
        <nav className="flex items-center justify-center flex-wrap gap-y-2 text-xs font-sans tracking-[0.18em] text-slate-100 my-6">
          {footerNavItems.map((item, idx) => (
            <React.Fragment key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:text-amber-300 transition-colors px-2.5 font-bold"
              >
                {item.name}
              </a>
              {idx < footerNavItems.length - 1 && <span className="text-amber-400/50 select-none">|</span>}
            </React.Fragment>
          ))}
        </nav>

        <p className="font-serif italic text-xs text-amber-300/90 font-semibold mb-6 drop-shadow-sm">
          &quot;आज की सफलता, कल की प्रेरणा — Today&apos;s success, tomorrow&apos;s inspiration&quot;
        </p>

        <div className="text-[11px] font-sans text-slate-300 font-medium border-t border-white/15 pt-6">
          <p>© 2026 SGSITS Indore. All rights reserved. • 23 Sir M. Visvesvaraya Marg, Indore (M.P.) 452003</p>
        </div>
      </div>
    </footer>
  )
}
