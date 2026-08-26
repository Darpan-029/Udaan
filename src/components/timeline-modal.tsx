import * as React from "react"
import { X, Clock, MapPin, Calendar, Download, AlertCircle, FileText } from "lucide-react"

interface TimelineModalProps {
  isOpen: boolean
  onClose: () => void
}

const timelineSections = [
  {
    phase: "Phase 1: Student Reporting, Seating & Morning Refreshment",
    badge: "08:00 AM – 09:40 AM",
    items: [
      { time: "08:00 AM", activity: "Reporting of all registered students", location: "Golden Jubilee Auditorium" },
      { time: "08:00 AM – 08:40 AM", activity: "Kit distribution to the registered students", location: "Golden Jubilee Auditorium" },
      { time: "08:40 AM – 09:00 AM", activity: "Breakfast for the registered students & parents", location: "Basketball Court" },
      { time: "09:00 AM – 09:30 AM", activity: "Seating of reg. students in the Silveria Hall", location: "Silveria Hall" },
      { time: "09:40 AM", activity: "ENTRY AND EXIT CLOSED FOR STUDENTS", location: "Silveria Hall", isImportant: true },
      { time: "09:40 AM", activity: "Lamp Lightening inside Silveria Hall by Prof. Smita Verma, Prof. Preeti Trivedi & Core Committee, followed by Code of Conduct info", location: "Silveria Hall" },
    ],
  },
  {
    phase: "Phase 2: Dignitaries Arrival, Statue Malyarpan & Academic Procession",
    badge: "09:00 AM – 10:00 AM",
    items: [
      { time: "09:00 AM", activity: "Malyarpan at Swami Vivekanand Statue, Lokmata Ahilyabai Holkar Statue, Eklavya Statue, and Campus Hanuman Mandir", location: "At Designated Places" },
      { time: "09:00 AM – 09:30 AM", activity: "Arrival of Hon’ble Chief Guest / Guests of Honour / Dignitaries (Welcome, Tea/Breakfast & Robing)", location: "Director’s Chamber" },
      { time: "09:40 AM", activity: "Assembly of Academic Procession", location: "ATC Front Gate" },
      { time: "09:42 AM – 09:50 AM", activity: "Malyarpan of Maa Saraswati By Director of the Institute", location: "Saraswati Temple" },
      { time: "09:50 AM – 10:00 AM", activity: "Start of Academic Procession", location: "Saraswati Temple to Silveria" },
    ],
  },
  {
    phase: "Phase 3: Formal Inauguration, Reports & Dignitaries Addresses",
    badge: "10:00 AM – 11:00 AM",
    items: [
      { time: "10:00 AM – 10:09 AM", activity: "Entry and Positioning of Procession on stage with Medha Suktam Mantra Chanting, followed by Rasthra Geet (Vande Matram)", location: "Silveria Hall" },
      { time: "10:09 AM – 10:12 AM", activity: "Guest(s) Welcome", location: "Silveria Hall" },
      { time: "10:12 AM – 10:20 AM", activity: "Amrit Mahotsav Introduction, releasing of Logo and launch booklet", location: "Silveria Hall" },
      { time: "10:20 AM – 10:23 AM", activity: "Deans Report presentation by Dean ARSD", location: "Silveria Hall" },
      { time: "10:23 AM – 10:28 AM", activity: "Address by President SGSITS Alumni Association (SAA)", location: "Silveria Hall" },
      { time: "10:28 AM – 10:36 AM", activity: "Address by the Director (Ex-officio member secretary of GB and SGST Society)", location: "Silveria Hall" },
      { time: "10:36 AM – 10:44 AM", activity: "Address by Guest of Honour Prof. M Dandekar", location: "Silveria Hall" },
      { time: "10:44 AM – 10:52 AM", activity: "Address by Guest of Honour Prof. Rakesh Singhai", location: "Silveria Hall" },
      { time: "10:52 AM – 11:00 AM", activity: "Address by Guest of Honour Sh. Prafulla Jhalani ji", location: "Silveria Hall" },
    ],
  },
  {
    phase: "Phase 4: Award Ceremony, Degree Distribution & Formal Closing",
    badge: "11:00 AM – 01:22 PM",
    items: [
      { time: "11:00 AM – 11:15 AM", activity: "Academic Excellence Awards Distribution followed by group photo with Awardees", location: "Silveria Hall" },
      { time: "11:15 AM – 01:18 PM", activity: "Distribution of Provisional Degree Certificate", location: "Silveria Hall" },
      { time: "01:18 PM – 01:20 PM", activity: "Oath ceremony by Dean (IPFA)", location: "Silveria Hall" },
      { time: "01:20 PM – 01:22 PM", activity: "Rashtra Gaan (Jan-Gan-Man)", location: "Silveria Hall" },
    ],
  },
  {
    phase: "Phase 5: Return Procession, Certificate Collection & Lunch",
    badge: "01:22 PM Onwards",
    items: [
      { time: "01:22 PM – 01:30 PM", activity: "Return of Academic Procession", location: "Silveria Hall to Director's Chamber" },
      { time: "01:30 PM – 02:00 PM", activity: "Folder / Academic certificate collection", location: "Golden Jubilee Auditorium" },
      { time: "01:30 PM onwards", activity: "Lunch for Academic procession participants, HODs and other invited dignitaries", location: "Conference Hall" },
      { time: "01:30 PM onwards", activity: "Lunch for registered graduates / parents and other authorized persons", location: "Basketball Ground" },
    ],
  },
]

export function TimelineModal({ isOpen, onClose }: TimelineModalProps) {
  React.useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = "hidden"
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-background dark:bg-[#0D1527] border border-border dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border dark:border-slate-800 bg-card/80 dark:bg-slate-900/80">
          <div>
            <span className="text-[10px] md:text-[11px] font-sans tracking-[0.2em] text-accent uppercase block font-semibold">
              MINUTE TO MINUTE SCHEDULE
            </span>
            <h2 className="font-serif text-xl md:text-2xl text-foreground font-normal mt-0.5">
              Program Timeline — उड़ान 2026
            </h2>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="/docs/UDAAN-Minute to minute.pdf"
              download="UDAAN_2026_Minute_To_Minute_Schedule.pdf"
              className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-hover text-white px-3.5 py-1.5 text-xs font-sans tracking-wider uppercase rounded-xl shadow-sm transition-all font-semibold"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50 transition-colors"
              aria-label="Close timeline modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-5 md:p-6 overflow-y-auto space-y-6 flex-1">
          {/* Info Ribbon */}
          <div className="bg-card dark:bg-slate-900/80 border border-border dark:border-slate-800 rounded-xl p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs font-sans">
            <div className="flex items-center space-x-3">
              <div className="p-1.5 sm:p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                <Calendar className="h-4 w-4" />
              </div>
              <div>
                <span className="text-muted-foreground block uppercase text-[9px] tracking-wider">Date</span>
                <span className="font-semibold text-foreground">Thursday, 27 August 2026</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-1.5 sm:p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <span className="text-muted-foreground block uppercase text-[9px] tracking-wider">Timing</span>
                <span className="font-semibold text-foreground">08:00 AM – 02:00 PM IST</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-1.5 sm:p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <span className="text-muted-foreground block uppercase text-[9px] tracking-wider">Venue</span>
                <span className="font-semibold text-foreground">Silveria Hall, SGSITS</span>
              </div>
            </div>
          </div>

          {/* Minute-by-Minute Schedule Phases */}
          <div className="space-y-5 sm:space-y-6">
            {timelineSections.map((sec, secIdx) => (
              <div key={secIdx} className="space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-1.5 border-b border-border dark:border-slate-800">
                  <h3 className="font-serif text-sm sm:text-base md:text-lg text-foreground font-normal">
                    {sec.phase}
                  </h3>
                  <span className="text-[9px] sm:text-[10px] font-sans font-bold tracking-wider uppercase px-2 sm:px-2.5 py-0.5 bg-accent/15 border border-accent/30 text-accent rounded-full">
                    {sec.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  {sec.items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-3 md:p-3.5 border rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-all ${
                        item.isImportant
                          ? "bg-rose-500/10 border-rose-500/30 dark:bg-rose-950/30 text-rose-800 dark:text-rose-300"
                          : "bg-card dark:bg-[#0D1527] border-border dark:border-slate-800/80 hover:border-accent/40"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <span className="font-serif text-xs md:text-sm font-semibold text-accent min-w-[110px] sm:min-w-[130px] shrink-0">
                          {item.time}
                        </span>
                        <div className="flex items-start sm:items-center gap-1.5">
                          {item.isImportant && (
                            <AlertCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5 sm:mt-0" />
                          )}
                          <span className={`font-sans text-xs ${item.isImportant ? "font-bold text-rose-600 dark:text-rose-300 uppercase tracking-wide" : "text-foreground"}`}>
                            {item.activity}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-[11px] font-sans text-muted-foreground shrink-0 sm:ml-4">
                        <MapPin className="h-3 w-3 text-accent shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Rain Contingency Note */}
          <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-start gap-2.5 text-xs font-sans text-amber-800 dark:text-amber-300">
            <AlertCircle className="h-4 w-4 shrink-0 text-amber-500 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Note:</strong> In case of rain, Procession will start from <strong>IPE Seminar Hall</strong> and reach <strong>Silveria Hall</strong> via the Mechanical Engg. Dept. lobby.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-border dark:border-slate-800 bg-card/80 dark:bg-slate-900/80 flex flex-wrap items-center justify-between gap-3 text-xs font-sans">
          <span className="text-muted-foreground flex items-center gap-1.5">
            <FileText className="h-3.5 w-3.5 text-accent" />
            Source: Official Minute-to-Minute Schedule PDF (SGSITS Indore)
          </span>
          <div className="flex items-center gap-3">
            <a
              href="/docs/UDAAN-Minute to minute.pdf"
              download="UDAAN_2026_Minute_To_Minute_Schedule.pdf"
              className="px-4 py-2 text-xs font-sans tracking-wider uppercase bg-primary hover:bg-primary-hover text-white rounded-xl transition-colors font-semibold flex items-center gap-1.5"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-sans tracking-wider uppercase border border-border dark:border-slate-700 text-foreground rounded-xl hover:bg-muted/50 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
