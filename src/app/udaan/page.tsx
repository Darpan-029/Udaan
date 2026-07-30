import type { Metadata } from "next"
import { UdaanSections } from "@/components/udaan-sections"

// This route renders the same ceremony content as the homepage under a
// second URL (kept for the existing /udaan nav link and any bookmarks).
// The canonical tag tells search engines "/" is the authoritative copy.
export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function UdaanPage() {
  return (
    <div className="min-h-screen pt-12">
      <UdaanSections />
    </div>
  )
}
