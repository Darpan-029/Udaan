import { Dignitaries } from "@/components/dignitaries"
import { ActionButtons } from "@/components/action-buttons"
import { YoutubeSection } from "@/components/youtube-section"
import { DocumentViewer } from "@/components/document-viewer"
import { Gallery } from "@/components/gallery"
import { Registration } from "@/components/registration"

export function UdaanSections() {
  return (
    <>
      {/* 1. Quick Actions — prominent CTA buttons at the very top */}
      <ActionButtons />

      {/* 2. Distinguished Dignitary — Chief Guest section */}
      <Dignitaries />

      {/* 3. Previous Year YouTube Highlights */}
      <YoutubeSection />

      {/* 5. Brochure & Documents */}
      <DocumentViewer />

      {/* 7. Photo Gallery */}
      <Gallery />

      {/* 8. Registration */}
      <Registration />
    </>
  )
}
