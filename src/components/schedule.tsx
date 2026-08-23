import { Clock, MapPin, Calendar } from "lucide-react"
import { Reveal } from "@/components/reveal"

const scheduleItems = [
  {
    time: "08:00 AM",
    title: "Student Reporting & Kit Distribution",
    description: "Reporting of all registered students, entry verification, and distribution of event kits.",
    location: "Golden Jubilee Auditorium",
  },
  {
    time: "09:00 AM",
    title: "Student Seating in Silveria Hall",
    description: "Registered students assemble and take designated seats in Silveria Hall. Entry closes strictly at 09:45 AM.",
    location: "Silveria Hall",
  },
  {
    time: "09:00 AM",
    title: "Arrival of Hon’ble Minister & Dignitaries",
    description: "Welcome of Chief Guest Hon'ble Technical Education Minister Shri Inder Singh Ji Parmar and distinguished guests.",
    location: "VIP Gate / Director’s Chamber",
  },
  {
    time: "09:50 AM",
    title: "Start of Academic Procession",
    description: "Robing of dignitaries at Administrative Lounge, Saraswati Malyarpan, and formal procession to Silveria Hall.",
    location: "Saraswati Temple to Silveria Hall",
  },
  {
    time: "10:00 AM",
    title: "Inaugural Ceremony & Dignitaries Address",
    description: "Saraswati Vandana, Lamp Lighting, Vande Mataram, Director's address, and Keynote Address by Hon'ble Minister.",
    location: "Silveria Hall",
  },
  {
    time: "10:40 AM",
    title: "Academic Excellence Awards Distribution",
    description: "Conferral of academic excellence gold medals and institutional honors to top rank holders by dignitaries.",
    location: "Silveria Hall",
  },
  {
    time: "11:00 AM",
    title: "Provisional Degree Certificate Distribution",
    description: "Distribution of provisional degree certificates to 2026 batch graduating scholars across all departments.",
    location: "Silveria Hall",
  },
  {
    time: "01:15 PM",
    title: "Oath Ceremony & Photo Session",
    description: "Solemn oath administration by Dean (IPFA), group photo session with awardees, and Rashtra Gaan.",
    location: "Silveria Hall",
  },
  {
    time: "01:30 PM",
    title: "Certificate Collection & Lunch",
    description: "Folder/Academic certificate collection for graduands and lunch for registered awardees, parents, and authorized guests.",
    location: "GJ Auditorium & Basketball Ground",
  },
]

export function Schedule() {
  return (
    <section id="schedule" className="py-16 bg-background border-t border-border-strong">
      <div className="mx-auto px-4 max-w-4xl">
        <Reveal className="text-center mb-12">
          <span className="text-[11px] font-sans tracking-[0.2em] text-accent uppercase block mb-1">
            PROGRAM TIMELINE
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-normal">
            Order of Events
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </Reveal>

        {/* Schedule Info Ribbon */}
        <div className="bg-card dark:bg-[#0D1527] p-6 border border-border dark:border-slate-800 rounded-2xl shadow-md grid md:grid-cols-3 gap-6 mb-8 text-xs font-sans card-pop">
          <div className="flex items-center space-x-3">
            <Calendar className="h-4 w-4 text-accent" />
            <div>
              <span className="text-muted-foreground block uppercase tracking-wider text-[10px]">Date</span>
              <span className="font-semibold text-foreground">Thursday, 27 August 2026</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="h-4 w-4 text-accent" />
            <div>
              <span className="text-muted-foreground block uppercase tracking-wider text-[10px]">Timing</span>
              <span className="font-semibold text-foreground">08:00 AM – 02:00 PM IST</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-4 w-4 text-accent" />
            <div>
              <span className="text-muted-foreground block uppercase tracking-wider text-[10px]">Venue</span>
              <span className="font-semibold text-foreground">Silveria Hall, SGSITS</span>
            </div>
          </div>
        </div>

        {/* Timeline Items Cards */}
        <div className="space-y-4">
          {scheduleItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-card dark:bg-[#0D1527] p-5 border border-border dark:border-slate-800 rounded-2xl shadow-sm flex flex-col md:flex-row items-start gap-4 hover:border-accent/40 transition-all card-pop"
            >
              <div className="md:w-32 flex-shrink-0">
                <span className="font-serif text-base text-accent font-semibold">{item.time}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-base text-foreground font-normal mb-1">{item.title}</h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-2">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-[11px] font-sans text-accent font-medium">
                  <MapPin className="h-3 w-3" /> {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/docs/UDAAN-Tentative Minute to minute shedule.pdf"
            download="UDAAN_2026_Minute_To_Minute_Schedule.pdf"
            className="inline-block bg-primary hover:bg-primary-hover text-white px-6 py-3 text-xs font-sans tracking-[0.15em] uppercase border border-transparent transition-all shadow-md rounded-xl card-pop focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Download Schedule PDF
          </a>
        </div>
      </div>
    </section>
  )
}
