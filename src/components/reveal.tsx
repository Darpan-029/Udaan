"use client"

import * as React from "react"
import { useReveal } from "@/lib/reveal"

/**
 * Thin client-component boundary so server-rendered sections can opt a
 * block into the scroll-reveal fade without becoming client components
 * themselves. Renders visible immediately; see globals.css / lib/reveal.ts
 * for why this can never get stuck at opacity:0.
 */
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} data-reveal className={className}>
      {children}
    </div>
  )
}
