import { Clock, MapPin, Calendar } from "lucide-react"
import { Reveal } from "@/components/reveal"

const scheduleItems = [
  {
    time: "08:00 AM",
    title: "Student Reporting & Kit Distribution",
    description: "Reporting of registered students (08:00 AM) and kit distribution (08:00 AM – 08:40 AM) at Golden Jubilee Auditorium.",
    location: "Golden Jubilee Auditorium",
  },
  {
    time: "08:40 AM",
    title: "Breakfast for Students & Parents",
    description: "Morning refreshments for registered graduands and accompanying parents.",
    location: "Basketball Court",
  },
  {
    time: "09:00 AM",
    title: "Student Seating in Silveria Hall & Malyarpan",
    description: "Seating of registered students in Silveria Hall (Entry closes strictly at 09:40 AM). Statue Malyarpan by designated persons at Vivekanand, Ahilyabai Holkar, Eklavya & Hanuman Mandir.",
    location: "Silveria Hall & Designated Places",
  },
  {
    time: "09:00 AM – 09:30 AM",
    title: "Arrival of Hon’ble Chief Guest & Dignitaries",
    description: "Welcome of Chief Guest, Guests of Honour, and dignitaries at Director's Chamber with tea/breakfast and robing.",
    location: "Director’s Chamber",
  },
  {
    time: "09:40 AM",
    title: "Lamp Lighting & Code of Conduct",
    description: "Lamp lighting inside Silveria Hall by Prof. Smita Verma, Prof. Preeti Trivedi & Core Committee, followed by code of conduct briefing.",
    location: "Silveria Hall",
  },
  {
    time: "09:40 AM – 10:00 AM",
    title: "Academic Procession & Saraswati Malyarpan",
    description: "Assembly at ATC Front Gate (09:40 AM), Malyarpan of Maa Saraswati by Director (09:42 AM), and procession start to Silveria Hall (09:50 AM).",
    location: "Saraswati Temple to Silveria Hall",
  },
  {
    time: "10:00 AM",
    title: "Stage Entry & Amrit Mahotsav Inauguration",
    description: "Stage entry with Medha Suktam Mantra Chanting, Rashtra Geet (Vande Mataram), Guest Welcome, Amrit Mahotsav introduction, logo & booklet release (10:12 AM).",
    location: "Silveria Hall",
  },
  {
    time: "10:20 AM – 11:00 AM",
    title: "Dean's Report & Dignitaries Addresses",
    description: "Dean ARSD report, Alumni President address, Director's address, and addresses by Guests of Honour Prof. M. Dandekar, Prof. Rakesh Singhai, and Sh. Prafulla Jhalani ji.",
    location: "Silveria Hall",
  },
  {
    time: "11:00 AM",
    title: "Academic Excellence Awards Distribution",
    description: "Conferral of academic excellence gold medals and institutional honors followed by group photo with awardees.",
    location: "Silveria Hall",
  },
  {
    time: "11:15 AM – 01:18 PM",
    title: "Provisional Degree Certificate Distribution",
    description: "Distribution of provisional degree certificates to 2026 batch graduating scholars across all departments.",
    location: "Silveria Hall",
  },
  {
    time: "01:18 PM – 01:22 PM",
    title: "Oath Ceremony & Rashtra Gaan",
    description: "Solemn oath administration by Dean (IPFA), followed by Rashtra Gaan (Jan-Gan-Man).",
    location: "Silveria Hall",
  },
  {
    time: "01:30 PM Onwards",
    title: "Certificate Collection & Lunch",
    description: "Folder/Academic certificate collection at Golden Jubilee Auditorium (01:30 PM – 02:00 PM). Lunch for dignitaries at Conference Hall and graduates/parents at Basketball Ground.",
    location: "GJ Auditorium / Basketball Ground",
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
        <div className="bg-card dark:bg-[#0D1527] p-4 sm:p-6 border border-border dark:border-slate-800 rounded-2xl shadow-md grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6 mb-8 text-xs font-sans card-pop">
          <div className="flex items-center space-x-3">
            <Calendar className="h-4 w-4 text-accent shrink-0" />
            <div>
              <span className="text-muted-foreground block uppercase tracking-wider text-[10px]">Date</span>
              <span className="font-semibold text-foreground">Thursday, 27 August 2026</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="h-4 w-4 text-accent shrink-0" />
            <div>
              <span className="text-muted-foreground block uppercase tracking-wider text-[10px]">Timing</span>
              <span className="font-semibold text-foreground">08:00 AM – 02:00 PM IST</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-4 w-4 text-accent shrink-0" />
            <div>
              <span className="text-muted-foreground block uppercase tracking-wider text-[10px]">Venue</span>
              <span className="font-semibold text-foreground">Silveria Hall, SGSITS</span>
            </div>
          </div>
        </div>

        {/* Timeline Items Cards */}
        <div className="space-y-3.5 sm:space-y-4">
          {scheduleItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-card dark:bg-[#0D1527] p-4 sm:p-5 border border-border dark:border-slate-800 rounded-2xl shadow-sm flex flex-col sm:flex-row items-start gap-2.5 sm:gap-4 hover:border-accent/40 transition-all card-pop"
            >
              <div className="sm:w-28 md:w-32 shrink-0">
                <span className="font-serif text-sm sm:text-base text-accent font-semibold px-2 py-0.5 sm:p-0 bg-accent/10 sm:bg-transparent rounded-lg inline-block sm:block">{item.time}</span>
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
            href="/docs/UDAAN-Minute to minute.pdf"
            download="UDAAN_2026_Minute_To_Minute_Schedule.pdf"
            className="inline-block bg-primary hover:bg-primary-hover text-white px-6 py-3 text-xs font-sans tracking-[0.15em] uppercase border border-transparent transition-all shadow-md rounded-xl card-pop focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring font-semibold"
          >
            Download Schedule PDF
          </a>
        </div>
      </div>
    </section>
  )
}
