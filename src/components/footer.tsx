import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full bg-[#142338] text-white border-t border-[#C5A059]/30 py-12">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* Emblem */}
        <div className="flex justify-center mb-4">
          <div className="p-1 bg-white border border-[#DCD5C9] rounded-full shadow-sm">
            <img
              src="/images/sgsits_logo.png"
              alt="SGSITS Indore Official Seal"
              className="h-12 w-auto object-contain rounded-full"
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl md:text-2xl tracking-[0.2em] font-normal uppercase text-white">
          GRADUATION 2026 • UDAAN
        </h3>
        <p className="text-xs font-sans text-[#C5A059] tracking-[0.15em] uppercase mt-1">
          SHRI GOVINDRAM SEKSARIA INSTITUTE OF TECHNOLOGY AND SCIENCE, INDORE
        </p>

        {/* Links bar with pipes */}
        <nav className="flex items-center justify-center flex-wrap gap-y-2 text-xs font-sans tracking-[0.15em] text-[#CBD5E1] my-6">
          <Link href="/about" className="hover:text-white transition-colors px-2">ABOUT</Link>
          <span className="text-[#475569]">|</span>
          <Link href="/udaan" className="hover:text-white transition-colors px-2">UDAAN</Link>
          <span className="text-[#475569]">|</span>
          <Link href="/#documents" className="hover:text-white transition-colors px-2">DOCUMENTS</Link>
          <span className="text-[#475569]">|</span>
          <Link href="/#medalists" className="hover:text-white transition-colors px-2">MEDALISTS</Link>
          <span className="text-[#475569]">|</span>
          <Link href="/#schedule" className="hover:text-white transition-colors px-2">SCHEDULE</Link>
          <span className="text-[#475569]">|</span>
          <Link href="/#register" className="hover:text-white transition-colors px-2">REGISTRATION</Link>
        </nav>

        <p className="font-serif italic text-xs text-[#A89882] mb-6">
          &quot;आज की सफलता, कल की प्रेरणा — Today&apos;s success, tomorrow&apos;s inspiration&quot;
        </p>

        <div className="text-[11px] font-sans text-[#94A3B8] border-t border-white/10 pt-6">
          <p>© 2026 SGSITS Indore. All rights reserved. • 23 Sir M. Visvesvaraya Marg, Indore (M.P.) 452003</p>
        </div>
      </div>
    </footer>
  )
}
