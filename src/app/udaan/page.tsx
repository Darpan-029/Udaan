"use client"

import * as React from "react"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { DocumentViewer } from "@/components/document-viewer"
import { MedalistDirectory } from "@/components/medalist-directory"
import { Schedule } from "@/components/schedule"
import { Gallery } from "@/components/gallery"
import { FAQ } from "@/components/faq"
import { Registration } from "@/components/registration"

export default function UdaanPage() {
  return (
    <div className="min-h-screen pt-12">
      <Hero />
      <About />
      <DocumentViewer />
      <MedalistDirectory />
      <Schedule />
      <Gallery />
      <FAQ />
      <Registration />
    </div>
  )
}
