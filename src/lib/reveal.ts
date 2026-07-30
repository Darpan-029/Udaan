"use client"

import * as React from "react"

let sharedObserver: IntersectionObserver | null = null

function getObserver() {
  if (sharedObserver) return sharedObserver
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible")
          sharedObserver?.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.1 }
  )
  return sharedObserver
}

/**
 * Content is visible by default (see the [data-reveal] CSS rules in
 * globals.css). This hook only "arms" the fade-in once it has confirmed
 * IntersectionObserver is running, so a slow or failed hydration never
 * leaves a section stuck invisible.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = React.useRef<T>(null)

  React.useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === "undefined") return

    node.classList.add("reveal-armed")
    const observer = getObserver()
    observer.observe(node)
    return () => observer.unobserve(node)
  }, [])

  return ref
}
