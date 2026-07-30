import * as React from "react"
import { ExternalLink, Shirt, FileText, Download, CheckCircle2 } from "lucide-react"

export function Registration() {
  const registrationFormUrl = "https://forms.gle/xirfNSVTatEpGbf96"

  return (
    <section id="register" className="py-16 bg-background text-foreground border-t border-border scroll-mt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-[11px] font-sans tracking-[0.2em] text-accent uppercase block mb-1">
            GRADUATE REGISTRATION
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-normal">
            Register for UDAAN 2026
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          {/* Main Registration Card */}
          <div className="md:col-span-7 bg-card p-8 border border-border flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] font-sans tracking-widest text-accent uppercase block">
                OFFICIAL PORTAL
              </span>
              <h3 className="font-serif text-2xl text-foreground font-normal">
                Degree &amp; Medal Registration
              </h3>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                All graduating scholars receiving gold medals, merit certificates, or degree certificates must submit their attendance confirmation and guest details via the official Google Form portal.
              </p>

              <ul className="space-y-2 text-xs font-sans text-muted-foreground pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                  <span>Instant confirmation &amp; guest pass recording</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                  <span>Seat assignment in main auditorium hall</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                  <span>Ceremonial half-jacket token distribution</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href={registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3.5 px-4 rounded-xl text-xs font-sans tracking-[0.15em] uppercase border border-transparent transition-colors flex items-center justify-center space-x-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>OPEN REGISTRATION FORM</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Dress Code & Documents Side Column */}
          <div className="md:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Dress Code Policy Card */}
            <div className="bg-card p-6 border border-border">
              <div className="flex items-center space-x-2 mb-3">
                <Shirt className="h-4 w-4 text-accent" />
                <h3 className="font-serif text-base text-foreground font-normal">Dress Code Policy</h3>
              </div>
              <div className="text-xs font-sans text-muted-foreground space-y-2 leading-relaxed">
                <p><strong className="text-foreground">Male Candidates:</strong> White / Off-white Kurta Pyjama.</p>
                <p><strong className="text-foreground">Female Candidates:</strong> White / Off-white Salwar-Kurta or Saree.</p>
                <p className="text-accent italic pt-1 border-t border-border">
                  Half-jackets will be provided at reporting counter.
                </p>
              </div>
            </div>

            {/* Event Circular Quick Card */}
            <div className="bg-card p-6 border border-border">
              <div className="flex items-center space-x-2 mb-3">
                <FileText className="h-4 w-4 text-accent" />
                <h3 className="font-serif text-base text-foreground font-normal">Official Guidelines</h3>
              </div>
              <div className="space-y-2 text-xs font-sans">
                <a
                  href="/docs/brochure.pdf"
                  download="UDAAN_2026_Brochure.pdf"
                  className="flex items-center justify-between p-2.5 bg-muted/30 border border-border hover:border-foreground transition-colors"
                >
                  <span className="text-foreground font-medium">Official Brochure (PDF)</span>
                  <Download className="h-3.5 w-3.5 text-accent" />
                </a>
                <a
                  href="/docs/dresscode.docx"
                  download="UDAAN_2026_DressCode.docx"
                  className="flex items-center justify-between p-2.5 bg-muted/30 border border-border hover:border-foreground transition-colors"
                >
                  <span className="text-foreground font-medium">Dress Code Document</span>
                  <Download className="h-3.5 w-3.5 text-accent" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
