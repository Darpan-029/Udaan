import { Dignitaries } from "@/components/dignitaries"
import { Hero } from "@/components/hero"
import { DocumentViewer } from "@/components/document-viewer"
import { About } from "@/components/about"
import { MedalistDirectory } from "@/components/medalist-directory"
import { Schedule } from "@/components/schedule"
import { Gallery } from "@/components/gallery"
import { FAQ } from "@/components/faq"
import { Registration } from "@/components/registration"

export function UdaanSections() {
  return (
    <>
      <Dignitaries />
      <Hero />
      <DocumentViewer />
      <About />
      <MedalistDirectory />
      <Schedule />
      <Gallery />
      <FAQ />
      <Registration />
    </>
  )
}
