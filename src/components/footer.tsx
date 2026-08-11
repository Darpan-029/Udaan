"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/images/sgsits_logo.webp"
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
        <h3 className="font-serif text-xl md:text-2xl tracking-[0.2em] font-normal uppercase text-white">
          उड़ान • Academic Award Ceremony
        </h3>
        <p className="text-xs font-sans text-accent tracking-[0.15em] uppercase mt-1">
          SHRI GOVINDRAM SEKSARIA INSTITUTE OF TECHNOLOGY AND SCIENCE, INDORE
        </p>

        {/* Links bar with pipes & smooth scrolling */}
        <nav className="flex items-center justify-center flex-wrap gap-y-2 text-xs font-sans tracking-[0.15em] text-white/80 my-6">
          {footerNavItems.map((item, idx) => (
            <React.Fragment key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:text-accent transition-colors px-2 font-medium"
              >
                {item.name}
              </a>
              {idx < footerNavItems.length - 1 && <span className="text-white/30 select-none">|</span>}
            </React.Fragment>
          ))}
        </nav>

        <p className="font-serif italic text-xs text-accent/80 mb-6">
          &quot;आज की सफलता, कल की प्रेरणा — Today&apos;s success, tomorrow&apos;s inspiration&quot;
        </p>

        <div className="text-[11px] font-sans text-white/60 border-t border-white/10 pt-6">
          <p>© 2026 SGSITS Indore. All rights reserved. • 23 Sir M. Visvesvaraya Marg, Indore (M.P.) 452003</p>
        </div>
      </div>
    </footer>
  )
}
