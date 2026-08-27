"use client"

import * as React from "react"
import { ExternalLink, Download, Smartphone, Eye } from "lucide-react"

interface PdfViewerFrameProps {
  src: string
  title: string
  filename?: string
  className?: string
}

export function PdfViewerFrame({
  src,
  title,
  filename,
  className = "w-full h-full"
}: PdfViewerFrameProps) {
  const [forceInlineOnMobile, setForceInlineOnMobile] = React.useState(false)
  const downloadName = filename || src.split("/").pop() || "document.pdf"

  return (
    <div className={`relative w-full h-full bg-slate-950 overflow-hidden ${className}`}>
      {/* Mobile-Friendly View (visible on small screens < 768px unless user forced inline) */}
      {!forceInlineOnMobile ? (
        <div className="md:hidden w-full h-full min-h-[300px] flex flex-col items-center justify-center p-5 text-center bg-gradient-to-b from-slate-900 to-[#0A1220] border border-amber-300/20 rounded-xl">
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-amber-400/15 border border-amber-300/30 flex items-center justify-center text-amber-300 mb-3 shadow-lg">
            <Smartphone className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>

          <span className="text-[10px] font-sans tracking-[0.2em] text-amber-300 uppercase font-bold mb-1">
            Mobile PDF Reader
          </span>
          <h4 className="font-serif text-sm sm:text-base text-white font-normal mb-1.5 max-w-xs truncate">
            {title}
          </h4>
          <p className="font-sans text-[11px] sm:text-xs text-slate-300/80 max-w-xs mb-4 leading-relaxed">
            Tap below to view this document in high quality with pinch-to-zoom and multi-page scroll.
          </p>

          <div className="flex flex-col xs:flex-row gap-2.5 w-full max-w-xs">
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 text-slate-950 font-sans text-xs font-black tracking-wider uppercase py-2.5 px-4 rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 border border-amber-200/60"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Open PDF</span>
            </a>

            <a
              href={src}
              download={downloadName}
              className="bg-slate-800 hover:bg-slate-700 text-amber-200 border border-amber-300/30 font-sans text-xs font-bold tracking-wider uppercase py-2.5 px-4 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setForceInlineOnMobile(true)}
            className="mt-3.5 text-[11px] font-sans text-slate-400 hover:text-amber-200 underline flex items-center gap-1 transition-colors"
          >
            <Eye className="h-3 w-3" />
            <span>Try inline browser frame</span>
          </button>
        </div>
      ) : null}

      {/* Desktop / Inline Iframe View */}
      <div className={`w-full h-full ${forceInlineOnMobile ? "block" : "hidden md:block"}`}>
        <iframe
          src={`${src}#toolbar=0&navpanes=0`}
          className="w-full h-full border-none"
          title={title}
        />
      </div>
    </div>
  )
}
